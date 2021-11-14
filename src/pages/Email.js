import styled from 'styled-components'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
const url = 'https://event-manager-2021.herokuapp.com'
function Email() {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({
    email: '',
    emailMessage: '',
  })

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const emailMessage = value.emailMessage
      const emailTo = value.email
      await axios.post(url + '/api/v1/email', {
        emailMessage,
        emailTo,
      })
    } catch (error) {
      alert(error)
    }
    setValue({ email: '', emailMessage: '' })
    setLoading(false)
  }
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='emailPage'>
        <Wrapper className='page'>
          <Form onSubmit={sendEmail} className='form'>
            <Form.Group className='mb-3' controlId='formBasicEmailMessage'>
              <Form.Label>Email Message</Form.Label>
              <Form.Control
                type='text'
                name='emailMessage'
                placeholder='Email Message'
                required
                value={value.emailMessage}
                onChange={handleChange}
              />
              <Form.Text className='text-muted'>
                Plesae input message that you want to send on email
              </Form.Text>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder='Email Message'
                required
                value={value.email}
                onChange={handleChange}
              />
              <Form.Text className='text-muted'>Plesae input email</Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send email'}
            </Button>
          </Form>
        </Wrapper>
      </div>
    </>
  )
}
const Wrapper = styled.section``

export default Email
