import React, { useContext } from 'react'
import { tokenPost, tokenValidatePost, userGet } from '../services/api'
import useApi from '../hooks/useApi'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const { request, data, error, loading, setLoading, setData, setError } =
    useApi()

  const isTokenValid = React.useCallback(async () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return false
    }
    const { data } = await tokenValidatePost(token)
    return data.status === 200
  }, [])

  const userLogout = React.useCallback(async () => {
    setLoading(false)
    setData(null)
    setError(null)
    window.localStorage.removeItem('token')
  }, [setData, setError, setLoading])

  const autoLogin = React.useCallback(async () => {
    const token = window.localStorage.getItem('token')
    if (await isTokenValid()) {
      await request(() => userGet(token))
      return true
    }
    return false
  }, [isTokenValid, request])

  const userLogin = React.useCallback(
    async ({ username, password }) => {
      setLoading(true)
      const { token } = await tokenPost({
        username,
        password
      })

      window.localStorage.setItem('token', token)
      const user = await userGet(token)
      setData(user)
      setLoading(false)
    },
    [setData, setLoading]
  )

  return (
    <UserContext.Provider
      value={{
        data,
        login: !!data,
        loading,
        error,
        setError,
        userLogout,
        userLogin,
        autoLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUserContext() {
  const context = useContext(UserContext)
  return context
}
export { useUserContext }
