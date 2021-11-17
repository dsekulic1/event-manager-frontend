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

  const updateTask = async (data) => {
    try {
      await axios.patch(tasksUrl + '/' + data._id, data).then(() => {
        const arr2 = [data]
        setTasks(tasks.map((obj) => arr2.find((o) => o._id === obj._id) || obj))
      })
    } catch (error) {}
  }
  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(tasksUrl)
      setTasks(
        data.tasks.sort(function (a, b) {
          return new Date(b.start) - new Date(a.start)
        })
      )
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
        updateTask,
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
