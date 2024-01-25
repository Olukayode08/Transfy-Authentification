import React, { useState, createContext } from 'react'
import { firebaseAuth } from '../utils/Firebase'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
const RegisterForm = createContext()

const FormContext = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [message, setMessage] = useState('')

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  const toggleVisibilityConfirm = () => {
    setConfirmVisible(!confirmVisible)
  }
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function signUp(e) {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match')
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
        navigate('/dashboard')
      })
      .catch((error) => {
        setError('Failed to create account')
      })
  }

  function signIn(e) {
    e.preventDefault()
      setError('')
      signInWithEmailAndPassword(
        firebaseAuth,
        formData.email,
        formData.password
      ).then((userCredential) => {
        const user = userCredential.user
        setIsAuthenticated(true)
        setCurrentUser(user)
        navigate('/dashboard')
      })
      .catch(()=>{
        setError('Failed to Login')
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
      setMessage('')
      setError('')
      sendPasswordResetEmail(firebaseAuth, formData.email)
        .then((userCredential) => {
          // const user = userCredential.user
          setMessage('Check your mail to reset password')
        })
        .catch(() => {
          setError('Failed to Reset Password')
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
          message,
        }}
      >
        {children}
      </RegisterForm.Provider>
    </>
  )
}

export { FormContext, RegisterForm }
