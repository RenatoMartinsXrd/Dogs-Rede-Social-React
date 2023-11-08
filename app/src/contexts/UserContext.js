import React, { useContext } from 'react'
import { tokenPost, tokenValidatePost, userGet } from '../services/api'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const autoLogin = React.useCallback(async () => {
    const token = window.localStorage.getItem('token')

    if (token) {
      try {
        setLoading(true)
        setError(null)

        const { data } = await tokenValidatePost(token)
        const { status } = data

        if (status !== 200) throw new Error('Token Inválido')
        const user = await userGet(token)
        setData(user)
        setLogin(true)
      } catch (error) {
        await userLogout()
        setError(error?.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  async function userLogin({ email, password }) {
    try {
      setLoading(true)
      setError(null)

      const { token } = await tokenPost({
        username: email,
        password: password
      })

      window.localStorage.setItem('token', token)
      const user = await userGet(token)

      setData(user)
      setLogin(true)
    } catch (error) {
      await userLogout()
      setError('Usuário Inválido')
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  async function userLogout() {
    setLoading(false)
    setData(null)
    setLogin(false)
    setError(null)
    window.localStorage.removeItem('token')
  }

  return (
    <UserContext.Provider
      value={{
        data,
        login,
        loading,
        error,
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
