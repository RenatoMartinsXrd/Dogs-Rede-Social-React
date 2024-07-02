import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

export const PrivateRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const { mutationTokenValidatePost, mutationUserLogout } = useAuth()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    mutationTokenValidatePost
      .mutateAsync(token)
      .then(({ data }) => {
        if (data?.status === 200) {
          setIsAuthenticated(true)
        } else {
          navigate('/login')
        }
      })
      .catch(() => {
        navigate('/login')
        mutationUserLogout.mutate()
      })
  }, [])

  return isAuthenticated && <Outlet />
}
