import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/Login/LoginPage'
import { LoginPasswordLostPage } from '../pages/LoginPasswordLost/LoginPasswordLostPage'
import { SignUpPage } from '../pages/SignUp/SignUpPage'
import { PublicRouter } from '../components/PublicRouter'
import { PrivateRouter } from '../components/PrivateRouter'
import { AccountProfilePage } from '../pages/Account/AccountProfilePage'
import { AccountFeedPage } from '../pages/Account/subpages/AccountFeed/AccountFeedPage'
import { AccountPostPage } from '../pages/Account/subpages/AccountPost/AccountPostPage'
import { AccountEstatisticasPage } from '../pages/Account/subpages/AccountEstatisticas/AccountEstatisticasPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route path="/" element={<LoginPage />} />
        <Route index path="login" element={<LoginPage />} />
        <Route path="login/criar" element={<SignUpPage />} />
        <Route path="login/perdeu" element={<LoginPasswordLostPage />} />
      </Route>
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
