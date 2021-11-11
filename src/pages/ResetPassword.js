import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FormRow from '../components/FormRow'
import useLocalState from '../utils/localState'
const url = 'https://event-manager-2021.herokuapp.com'
//const url = 'http://localhost:8080'
const ResetPasswordForm = () => {
  const history = useHistory()
  const [password, setPassword] = useState('')
  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState()
  const { token } = useParams()

  const handleChange = async (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!password) {
      showAlert({ text: 'please enter password' })
      setLoading(false)
      return
    }
    try {
      await axios.post(url + '/api/v1/auth/resetpassword', {
        password,
        token: token,
      })

      setLoading(false)
      setSuccess(true)
      showAlert({
        text: `Success, redirecting to login page shortly`,
        type: 'success',
      })
      setTimeout(() => {
        history.push('/login')
      }, 3000)
    } catch (error) {
      showAlert({ text: error.response.data.msg })
      setLoading(false)
    }
  }
  return (
    <Wrapper className='page'>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      {!success && (
        <form
          className={loading ? 'form form-loading' : 'form'}
          onSubmit={handleSubmit}
        >
          <h4>reset password</h4>
          {/* single form row */}
          <FormRow
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
          />
          {/* end of single form row */}
          <button type='submit' className='btn btn-block' disabled={loading}>
            {loading ? 'Please Wait...' : 'New Password'}
          </button>
        </form>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h4,
  p {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
  }
`

export default ResetPasswordForm
