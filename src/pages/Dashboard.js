import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Events from '../components/Events'
import Loading from '../components/Loading'
import { Redirect } from 'react-router-dom'
function Dashboard() {
  const { tasks, removeTask } = useGlobalContext()
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const loggedInUser = sessionStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
    setIsLoading(false)
  }, [])
  const { name, userId } = user
  return (
    <>
      {!isLoading && (
        <>
          {!user && <Redirect to='/login' />}
          <Wrapper className='page'>
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <h2 style={{ textAlign: 'center' }}>Hello there, {name}</h2>
                <h4 style={{ textAlign: 'center' }}>Your events</h4>
                <Events
                  tasks={tasks}
                  removeTask={removeTask}
                  userId={userId}
                ></Events>
              </div>
            )}
          </Wrapper>
        </>
      )}
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
