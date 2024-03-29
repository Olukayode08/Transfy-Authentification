import React, { useState, createContext, useEffect } from 'react'
import { firebaseAuth } from '../utils/Firebase'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
const RegisterForm = createContext()

const FormContext = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  const toggleVisibilityConfirm = () => {
    setConfirmVisible(!confirmVisible)
  }
  const navigate = useNavigate()

  const handleClick = () => {
    setFormData({
      username: '',
      email: '',
      country: '',
      phone: '',
      password: '',
      confirmPassword: '',
    })
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const notify = (error) => {
    toast(error)
    setError(error)
  }
  useEffect(() => {
    setError('')
  }, [formData.email, formData.password])

  function signUp(e) {
    e.preventDefault()
    if (!validatePassword(formData.password)) {
      return notify(
        'Password must contain at least 8 characters with uppercase, lowercase, numbers, and symbols.'
      )
    } else if (formData.password !== formData.confirmPassword) {
      return notify('Passwords do not match!')
    }
    setError('')
    createUserWithEmailAndPassword(
      firebaseAuth,
      formData.email,
      formData.password
    )
      .then((userCredential) => {
        const user = userCredential.user
        setIsAuthenticated(true)
        setCurrentUser(user)
        setFormData({
          username: '',
          email: '',
          country: '',
          phone: '',
          password: '',
          confirmPassword: '',
        })
    setError('')

        navigate('/dashboard')
      })
      .catch((error) => {
        notify('Failed to create account!')
      })
  }

  function signIn(e) {
    e.preventDefault()
    setError('')
    signInWithEmailAndPassword(firebaseAuth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user
        setIsAuthenticated(true)
        setCurrentUser(user)
            setFormData({
              username: '',
              email: '',
              country: '',
              phone: '',
              password: '',
              confirmPassword: '',
            })
    setError('')

        navigate('/dashboard')
      })
      .catch(() => {
        notify('Failed to Login! Invalid email or password')
      })
  }

  function handleLogout(e) {
    setError('')
    signOut(firebaseAuth)
    setIsAuthenticated(false)
    navigate('/')
  }

  function resetPassword(e) {
    e.preventDefault()
    setError('')
    sendPasswordResetEmail(firebaseAuth, formData.email)
      .then((userCredential) => {
        // const user = userCredential.user
        notify('Check your mail to reset password')
        setFormData('')
      })
      .catch(() => {
        notify('Failed to Reset Password. Invalid Email')
      })
  }

  return (
    <>
      <RegisterForm.Provider
        value={{
          toggleVisibilityConfirm,
          toggleVisibility,
          visible,
          confirmVisible,
          handleChange,
          signUp,
          formData,
          signIn,
          error,
          handleLogout,
          currentUser,
          isAuthenticated,
          resetPassword,
          handleClick,
        }}
      >
        {children}
      </RegisterForm.Provider>
    </>
  )
}

export { FormContext, RegisterForm }
