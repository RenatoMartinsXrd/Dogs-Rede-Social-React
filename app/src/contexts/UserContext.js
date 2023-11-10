import React, { useContext } from 'react'
import { tokenPost, tokenValidatePost, userGet } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const navigate = useNavigate()

  const userLogout = React.useCallback(async () => {
    setLoading(false)
    setData(null)
    setError(null)
    window.localStorage.removeItem('token')

    navigate('/login')
  }, [navigate])

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
      } catch (error) {
        await userLogout()
        setError(error?.message)
      } finally {
        setLoading(false)
      }
    }
  }, [userLogout])

  const userLogin = React.useCallback(
    async ({ email, password }) => {
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
        navigate('/conta')
      } catch (error) {
        await userLogout()
        setError('Usuário Inválido')
      } finally {
        setLoading(false)
      }
    },
    [navigate, userLogout]
  )

  return (
    <UserContext.Provider
      value={{
        data,
        login: !!data,
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
