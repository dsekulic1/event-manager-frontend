import { FaTrash, FaEdit } from 'react-icons/fa'

const Event = ({ completed, _id, name, removeTask }) => {
  let divClass = 'single-task'
  if (completed) divClass = 'single-task task-completed'
  return (
    <div className={divClass}>
      <h5>
        <span>
          <i className='far fa-check-circle'></i>
        </span>
        {name}
      </h5>
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
