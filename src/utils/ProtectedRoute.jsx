import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { RegisterForm } from '../context/FormContext'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(RegisterForm)

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute
