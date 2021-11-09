import { useGlobalContext } from '../context'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
function Home() {
  const { user } = useGlobalContext()
  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <h2>Home page</h2>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section``

export default Home
