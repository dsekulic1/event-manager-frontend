import styled from 'styled-components'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
const url = 'https://event-manager-2021.herokuapp.com'

function Slack() {
  const [slackMessage, setSlackMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setSlackMessage(e.target.value)
  }
  const sendSlackMessage = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const message = slackMessage
      await axios.post(url + '/api/v1/slack', { message })
    } catch (error) {
      console.log(error)
    }
    //await axios.post('/api/v1/slack', { message })
    setSlackMessage('')
    setLoading(false)
  }
  return (
    <>
      <div className='slackPage'>
        <Wrapper className='page'>
          <Form onSubmit={sendSlackMessage} className='form'>
            <Form.Group className='mb-3' controlId='formBasicSlackMessage'>
              <Form.Label>Slack Message</Form.Label>
              <Form.Control
                type='text'
                placeholder='Slack Message'
                required
                value={slackMessage}
                onChange={handleChange}
              />
              <Form.Text className='text-muted'>
                Plesae input text that you want to send on group channel
              </Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send message'}
            </Button>
          </Form>
        </Wrapper>
      </div>
    </>
  )
}
const Wrapper = styled.section``

export default Slack
