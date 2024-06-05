import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccountProfilePage } from '../pages/Account/AccountProfilePage'
import { AccountEstatisticasPage } from '../pages/Account/subpages/AccountEstatisticas/AccountEstatisticasPage'
import { AccountFeedPage } from '../pages/Account/subpages/AccountFeed/AccountFeedPage'
import { AccountPostPage } from '../pages/Account/subpages/AccountPost/AccountPostPage'
import { PrivateRouter } from './../components/PrivateRouter'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="conta" element={<AccountProfilePage />}>
          <Route index element={<AccountFeedPage />} />
          <Route path="postar" element={<AccountPostPage />} />
          <Route path="estatisticas" element={<AccountEstatisticasPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
