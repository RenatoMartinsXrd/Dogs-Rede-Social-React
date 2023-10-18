import React from 'react'

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  return (
    <UserContext.Provider value={{data,setData, login, setLogin, loading, setLoading}}>
      {children}
    </UserContext.Provider>
  )
}
