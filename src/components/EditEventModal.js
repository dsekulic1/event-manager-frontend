import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import FormRow from '../components/FormRow'
const EditEventModal = ({ event, closeEventModal, submitEventModal }) => {
  const [values, setValues] = useState({
    _id: event._id,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay,
    resource: event.resource,
    userId: event.userId,
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
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
        <FormRow
          type='text'
          name='title'
          value={values.title}
          handleChange={handleChange}
        />
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
