import React, { useContext } from 'react'
import { tokenPost, tokenValidatePost, userGet } from '../services/api'
import useApi from '../hooks/useApi'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const { request, data, setData } = useApi()

  const isTokenValid = React.useCallback(async () => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return false
    }

    try {
      const { data } = await tokenValidatePost(token)
      return data?.status === 200
    } catch (error) {
      return false
    }
  }, [])

  const userLogout = React.useCallback(async () => {
    setData(null)
    window.localStorage.removeItem('token')
  }, [setData])

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
      const { token } = await tokenPost({
        username,
        password
      })

      window.localStorage.setItem('token', token)
      const user = await request(() => userGet(token))
      setData(user)
    },
    [request, setData]
  )

  return (
    <UserContext.Provider
      value={{
        data,
        login: !!data,
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
