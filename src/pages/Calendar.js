import Schedule from '../components/Schedule'
import React, { useState } from 'react'
import Loading from '../components/Loading'

function Calendar() {
  const [isLoading, setIsLoading] = useState(false)
  return <>{isLoading ? <Loading /> : <Schedule />}</>
}

export default Calendar
