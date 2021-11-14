import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
const url = 'https://event-manager-2021.herokuapp.com'
const tasksUrl = url + '/api/v1/tasks'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState()
  const [tasks, setTasks] = useState([])
  const deleteTask = async (id) => {
    await axios
      .delete(tasksUrl + '/' + id)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }
  const removeTask = (id) => {
    deleteTask(id)
  }
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(tasksUrl)
      setTasks(data.tasks)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
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
    fetchTasks()
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
        tasks,
        setTasks,
        removeTask,
        setIsLoading,
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
