import styled from 'styled-components'
import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import Events from '../components/Events'
import Loading from '../components/Loading'

function Dashboard() {
  const { user, tasks, removeTask, isLoading } = useGlobalContext()

  const { name, userId, role } = user

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
