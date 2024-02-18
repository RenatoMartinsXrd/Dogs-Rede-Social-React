import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccountProfilePage } from '../pages/Account/AccountProfilePage'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/conta" element={<AccountProfilePage />} />
    </Routes>
  )
}
