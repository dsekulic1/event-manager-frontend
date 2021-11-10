import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
const url = 'https://event-manager-2021.herokuapp.com'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState()

  const saveUser = (user) => {
    setUser(user)
  }

  const removeUser = () => {
    setUser(null)
  }

  const clearStorage = () => {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }

  const logoutUser = async () => {
    try {
      clearStorage()
      await axios.delete(url + '/api/v1/auth/logout')
      removeUser()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // const loggedInUser = localStorage.getItem('user')
    const loggedInUser = sessionStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
      setIsLoading(false)
    }
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
