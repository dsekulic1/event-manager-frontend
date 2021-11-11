import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'
import Events from '../components/Events'
import Loading from '../components/Loading'
const url = 'https://event-manager-2021.herokuapp.com'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const { user } = useGlobalContext()
  const [isLoading, setIsLoading] = useState(true)
  const { name, userId, role } = user
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
      const { data } = await axios.get(url + '/api/v1/tasks')
      setTasks(data.tasks)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  }, [])
  return (
    <>
      <Wrapper className='page'>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <h2>Hello there, {name}</h2>
            <p>
              Your ID : <span>{userId}</span>
            </p>
            <p>
              Your Role : <span>{role}</span>
            </p>
            <Events tasks={tasks} removeTask={removeTask}></Events>
          </div>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
`

export default Dashboard
