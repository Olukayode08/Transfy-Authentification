import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/DarkModeContext'
import DarkMode from './utils/DarkMode'
import ProtectedRoute from './utils/ProtectedRoute'
import Login from './pages/Login'
import Error from './pages/Error'

import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className='app' id={theme}>
        <DarkMode />
        <Routes>
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
