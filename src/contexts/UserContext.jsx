import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
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

export { UserContext, UserProvider }
