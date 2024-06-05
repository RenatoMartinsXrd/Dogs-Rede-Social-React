import React, { useContext, useState } from 'react'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  return (
    <UserContext.Provider
      value={{
        data,
        login: !!data,
        setData
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
