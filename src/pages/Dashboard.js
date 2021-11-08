import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://event-manager-2021.herokuapp.com'

function Dashboard() {
  const { user } = useGlobalContext()
  const { name, userId, role } = user
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
