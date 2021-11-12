import Schedule from '../components/Schedule'
import MobileSchedule from '../components/MobileSchedule'
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import styled from 'styled-components'

function Calendar() {
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isMobile ? (
        <div
          style={{
            width: window.innerWidth,
            display: 'flex',
            margin: '0 auto',
            padding: 0,
          }}
        >
          <MobileSchedule />
        </div>
      ) : (
        <Schedule />
      )}
    </>
  )
}

export default Calendar
