import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import FormRow from '../components/FormRow'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import Alert from 'react-bootstrap/Alert'
import useLocalState from '../utils/localState'
const EditEventModal = ({ event, closeEventModal, submitEventModal }) => {
  const { alert, showAlert } = useLocalState()
  const [values, setValues] = useState({
    _id: event._id,
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
    allDay: event.allDay,
    resource: event.resource,
    userId: event.userId,
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleStartChanged = (e) => {
    const newStart = new Date(e._d)
    if (newStart < values.end) setValues({ ...values, start: newStart })
    else showAlert({ text: 'Start can not be after end' })
  }
  const handleEndChanged = (e) => {
    const newEnd = new Date(e._d)
    if (newEnd > values.start) setValues({ ...values, end: newEnd })
    else showAlert({ text: 'End can not be before start' })
  }
  function myFunction() {
    submitEventModal(values)
    closeEventModal()
  }
  return (
    <Modal show={true} onHide={closeEventModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {alert.show && (
          <div className='alert'>
            <Alert variant={alert.type}>{alert.text}</Alert>
          </div>
        )}

        <FormRow
          type='text'
          name='title'
          value={values.title}
          handleChange={handleChange}
        />
        <div className='form-row'>
          <label className='form-label'>Start:</label>
          <Datetime
            name='start'
            value={new Date(values.start)}
            onChange={handleStartChanged}
            timeConstraints={{
              hours: { min: 7, max: 23, step: 1 },
              minutes: { step: 30 },
            }}
          />
        </div>
        <div className='form-row'>
          <label className='form-label'>End:</label>
          <Datetime
            name='end'
            value={new Date(values.end)}
            onChange={handleEndChanged}
            timeConstraints={{
              hours: { min: 7, max: 23, step: 1 },
              minutes: { step: 30 },
            }}
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={closeEventModal}>
          Close
        </Button>
        <Button variant='primary' onClick={myFunction}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditEventModal
