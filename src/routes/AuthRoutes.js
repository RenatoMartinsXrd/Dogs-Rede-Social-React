import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccountProfilePage } from '../pages/Account/AccountProfilePage'
import { AccountEstatisticasPage } from '../pages/Account/AccountEstatisticas/AccountEstatisticasPage'
import { AccountFeedPage } from './../pages/Account/AccountFeed/AccountFeedPage'
import { AccountPostPage } from './../pages/Account/AccountPost/AccountPostPage'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="conta" element={<AccountProfilePage />}>
        <Route element={<AccountFeedPage />} />
        <Route path="postar" element={<AccountPostPage />} />
        <Route path="estatisticas" element={<AccountEstatisticasPage />} />
      </Route>
    </Routes>
  )
}
