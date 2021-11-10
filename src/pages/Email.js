import { useGlobalContext } from '../context'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
function Email() {
  const { user } = useGlobalContext()
  return (
    <>
      <Wrapper className='page'>
        <h2>Email page</h2>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section``

export default Email
