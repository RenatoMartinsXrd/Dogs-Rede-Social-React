import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Generic/Header'
import { Footer } from './components/Generic/Footer'
import { AppRoutes } from './routes/AppRoutes'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from './contexts/UserContext'
import { AuthRoutes } from './routes/AuthRoutes'
import { checkIsPublicRoute } from './utils/utils'
import { SpinnerDog } from './components/SpinnerDog'

function App() {
  const { login, autoLogin, userLogout, data } = useUserContext()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [isAutoLoggingIn, setIsAutoLoggingIn] = useState(false)

  React.useEffect(() => {
    const executeRoute = async () => {
      if (!login) {
        setIsAutoLoggingIn(true)
        const loginSuccess = await autoLogin()
        setIsAutoLoggingIn(false)

        if (loginSuccess) {
          navigate('/conta')
        } else if (!checkIsPublicRoute(pathname)) {
          navigate('/login')
        }
      } else if (checkIsPublicRoute(pathname) && login) {
        navigate('/conta')
      }
    }
    executeRoute()
  }, [autoLogin, login, navigate, pathname, userLogout, data])

  if (isAutoLoggingIn) {
    return (
      <div className="containerSpinnerDogApp">
        <SpinnerDog />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      {login ? <AuthRoutes /> : <AppRoutes />}
      <Footer />
    </div>
  )
}

export default App
