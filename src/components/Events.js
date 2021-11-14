import React from 'react'
import Event from './Event'

const Events = ({ tasks, removeTask, userId }) => {
  return (
    <section>
      {tasks.map((task) => {
        if (task.userId === userId)
          return <Event key={task._id} {...task} removeTask={removeTask} />
      })}
    </section>
  )
}

export default Events
