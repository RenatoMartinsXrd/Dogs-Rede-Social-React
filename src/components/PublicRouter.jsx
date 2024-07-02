import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth.js'
import { Outlet, useNavigate } from 'react-router-dom'

export const PublicRouter = () => {
  const navigate = useNavigate()
  const { mutationTokenValidatePost } = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) setIsAuthenticated(false)
    else {
      mutationTokenValidatePost
        .mutateAsync(token)
        .then(({ data }) => {
          if (data?.status !== 200) {
            setIsAuthenticated(false)
          } else {
            navigate('/conta')
          }
        })
        .catch(() => {
          setIsAuthenticated(false)
        })
    }
  }, [])

  return !isAuthenticated && <Outlet />
}
