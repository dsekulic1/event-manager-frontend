import MyCalendar from '../components/MobileSchedule'
import React, { useEffect, useState } from 'react'
function Calendar() {
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const loggedInUser = sessionStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
    setIsLoading(false)
  }, [])

  return <>{!isLoading && user && <MyCalendar userId={user.userId} />}</>
}

export default Calendar
