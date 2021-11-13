import Schedule from '../components/Schedule'
import MobileSchedule from '../components/MobileSchedule'
import React, { useState, useEffect } from 'react'

function Calendar() {
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
      {isMobile ? (
        <div
          tyle={{
            width: window.innerWidth,
            height: '90vh',
            display: 'flex',
            padding: 0,
            margin: '0 auto',
            position: 'absolute',
          }}
        >
          <MobileSchedule />
        </div>
      ) : (
        <Schedule />
      )}{' '}
    </>
  )
}

export default Calendar
