import { useGlobalContext } from '../context'
import styled from 'styled-components'
import Calendar from '../components/Scheduler'
function Email() {
  const { user } = useGlobalContext()
  return (
    <>
      <Wrapper className='page'>
        <Calendar />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section``

export default Email
