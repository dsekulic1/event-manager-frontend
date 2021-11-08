import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
const url = 'https://event-manager-2021.herokuapp.com'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const saveUser = (user) => {
    setUser(user)
  }

  const removeUser = () => {
    setUser(null)
  }

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(url + `/api/v1/users/showMe`)
      saveUser(data.user)
    } catch (error) {
      removeUser()
    }
    setIsLoading(false)
  }

  const logoutUser = async () => {
    try {
      await axios.delete(url + '/api/v1/auth/logout')
      removeUser()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    //fetchUser()
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
