import { useState, useEffect } from 'react'

const useLocalState = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: '',
    type: 'danger',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  //dodati da se poslije 3sec skloni allert
  const showAlert = ({ text, type = 'danger' }) => {
    setAlert({ show: true, text, type })
    const timeout = setTimeout(() => {
      hideAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }
  const hideAlert = () => {
    setAlert({ show: false, text: '', type: 'danger' })
  }
  return {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  }
}

export default useLocalState
