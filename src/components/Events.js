import React, { useState } from 'react'
import Event from './Event'
import axios from 'axios'
import EditEventModal from './EditEventModal'
const url = 'https://event-manager-2021.herokuapp.com'
const tasksUrl = url + '/api/v1/tasks'

const Events = ({ tasks, removeTask, userId, updateTask }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [event, setEvent] = useState('')
  const closeEventModal = () => {
    setIsOpenEditModal(false)
    setEvent('')
  }
  const getTaskById = (_id) => {
    const newEvent = tasks.filter((task) => {
      return task._id === _id
    })
    setEvent(newEvent[0])
    setIsOpenEditModal(true)
  }
  const editTask = (_id) => {
    getTaskById(_id)
  }
  return (
    <>
      {isOpenEditModal ? (
        <EditEventModal
          event={event}
          closeEventModal={closeEventModal}
          submitEventModal={updateTask}
        />
      ) : (
        <section>
          {tasks.map((task) => {
            if (task.userId === userId)
              return (
                <Event
                  key={task._id}
                  {...task}
                  removeTask={removeTask}
                  editTask={editTask}
                />
              )
          })}
        </section>
      )}
    </>
  )
}

export default Events
