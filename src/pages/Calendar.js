import Schedule from '../components/Schedule'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function Calendar() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Wrapper className='page'>
        {isLoading ? <Loading /> : <Schedule />}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``

export default Calendar
