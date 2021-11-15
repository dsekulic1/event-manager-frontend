import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FormRow from '../components/FormRow'
import axios from 'axios'
import useLocalState from '../utils/localState'
import Button from 'react-bootstrap/Button'
const url = 'https://event-manager-2021.herokuapp.com'
//const url = 'http://localhost:8080'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState()

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    hideAlert()
    if (!email) {
      showAlert({
        text: 'Please provide email',
      })
      setLoading(false)
      return
    }
    try {
      await axios.post(url + '/api/v1/auth/passwordreset', {
        email,
      })
      showAlert({ text: 'Please check your mail', type: 'success' })
      setSuccess(true)
    } catch (error) {
      showAlert({
        text: 'Something went wrong, please try again',
      })
      setSuccess(true)
    }
    setLoading(false)
  }
  return (
    <Wrapper className='page'>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      {!success && (
        <form className={'form'} onSubmit={handleSubmit}>
          <h4>Forgot password</h4>

          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={handleChange}
          />
          <Button variant='primary' type='submit' disabled={loading}>
            {loading ? 'Please Wait...' : 'Get Reset Password Link'}
          </Button>

          <p>
            Already a have an account?
            <Link to='/login' className='login-link'>
              Log In
            </Link>
          </p>
        </form>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  h4,
  p {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
  }
  .login-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
`

export default ForgotPassword
