import { FaTrash, FaEdit } from 'react-icons/fa'

const Event = ({ _id, title, start, end, removeTask }) => {
  let divClass = 'single-task'
  const getOutputDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
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
  return (
    <div className={divClass}>
      <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <h5 style={{ paddingTop: '15px' }}>{title}</h5>
        <p
          style={{ fontSize: '10px', marginTop: '5px', alignItems: 'justify' }}
        >
          {getOutputDate(start)} to {getOutputDate(end)}{' '}
        </p>
      </div>

      <div className='task-links'>
        <div className='button-container'>
          <button className='edit-btn'>
            <FaEdit />
          </button>
          <button className='delete-btn' onClick={() => removeTask(_id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Event
