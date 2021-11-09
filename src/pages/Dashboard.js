import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useGlobalContext } from '../context'
import axios from 'axios'

const url = 'https://event-manager-2021.herokuapp.com'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const { user } = useGlobalContext()
  const [isLoading, setIsLoading] = useState(true)
  const { name, userId, role } = user

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(url + '/api/v1/tasks')
      console.log(data)
      setTasks(data)
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
        <h2>Hello there, {name}</h2>
        <p>
          Your ID : <span>{userId}</span>
        </p>
        <p>
          Your Role : <span>{role}</span>
        </p>
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
