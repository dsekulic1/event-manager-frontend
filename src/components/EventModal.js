import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalEvent = ({ clickedEvent, handleUnClicked }) => {
  const getOutputDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const time = new Date(date)
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let returnValue =
      days[time.getDay()] +
      ' ' +
      time.getDate() +
      '. ' +
      months[time.getMonth()] +
      ' at ' +
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes === 0 ? '00' : minutes)

    return returnValue
  }
  const { title, start, end } = clickedEvent

  return (
    <Modal
      show={true}
      onHide={handleUnClicked}
      size='sm'
      aria-labelledby='example-modal-sizes-title-sm'
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ textAlign: 'center' }}>
          Start: {getOutputDate(start)}
          <br />
          End: {getOutputDate(end)}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleUnClicked}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEvent
