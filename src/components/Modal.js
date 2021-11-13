import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import FormRow from '../components/FormRow'
const ModalForm = ({ handleClose, handleSubmit }) => {
  const [values, setValues] = useState({
    title: '',
    start: '',
    end: '',
    allDay: '',
    resource: '',
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
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
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={() => handleSubmit(values.title)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalForm
