import styled from 'styled-components'
import React from 'react'
import { useGlobalContext } from '../context'
import Events from '../components/Events'
import Loading from '../components/Loading'
import { Redirect } from 'react-router-dom'
function Dashboard() {
  const { user, tasks, removeTask, isLoading } = useGlobalContext()

  const { name, userId, role } = user

  return (
    <>
      {(!user || !name) && <Redirect to='/msm ' />}
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
