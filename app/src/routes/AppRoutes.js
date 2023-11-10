import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'
import { HomePage } from '../pages/Home/Home'
import { LoginPage } from '../pages/Login/LoginPage'
import { LoginPasswordLostPage } from '../pages/LoginPasswordLost/LoginPasswordLostPage'
import { SignUpPage } from '../pages/SignUp/SignUpPage'

export const AppRoutes = () => {
  const { login } = useUserContext()

  if (login === true) return <Navigate to="/conta" />
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/criar" element={<SignUpPage />} />
      <Route path="/login/perdeu" element={<LoginPasswordLostPage />} />
    </Routes>
  )
}
