import Schedule from '../components/Schedule'
import React, { useState } from 'react'
import Loading from '../components/Loading'
import styled from 'styled-components'
function Calendar() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Wrapper className='page'>
        {isLoading ? <Loading /> : <Schedule />}{' '}
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section``
export default Calendar
