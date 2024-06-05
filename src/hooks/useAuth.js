import { useUserContext } from '../contexts/UserContext'
import { tokenPost, tokenValidatePost, userGet } from '../services/api'
import { useMutation } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom/dist'
import { checkIsPublicRoute } from '../utils/utils'

const useAuth = () => {
  const { setData } = useUserContext()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const mutationTokenPost = useMutation({
    mutationFn: ({ username, password }) => tokenPost({ username, password }),
    onSuccess: ({ token }) => {
      window.localStorage.setItem('token', token)
    }
  })

  const mutationUserGet = useMutation({
    mutationFn: (token) => userGet(token),
    onSuccess: (data) => {
      setData(data)
    }
  })

  const mutationUserLogin = useMutation({
    mutationFn: async ({ username, password }) => {
      const { token } = await mutationTokenPost.mutateAsync({
        username,
        password
      })
      await mutationUserGet.mutateAsync(token)
    },
    onSuccess: () => {
      navigate('/conta')
    }
  })

  const mutationTokenValidatePost = useMutation({
    mutationFn: (token) => tokenValidatePost(token)
  })

  const redirectAuth = (tokenValid) => {
    if (tokenValid && checkIsPublicRoute(pathname)) {
      navigate('/conta')
    }
    if (!tokenValid && !checkIsPublicRoute(pathname)) {
      navigate('/login')
    }
  }

  const mutationUserLogout = useMutation({
    mutationFn: async () => {
      setData(null)
      window.localStorage.removeItem('token')
    }
  })

  return {
    mutationUserLogin,
    mutationUserLogout,
    mutationTokenValidatePost,
    redirectAuth
  }
}

export default useAuth
