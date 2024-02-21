import React from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({ children }) => {
  const { login } = useUserContext()

  return login ? children : <Navigate to="/login" />
}
