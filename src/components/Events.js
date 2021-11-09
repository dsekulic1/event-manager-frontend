import React from 'react'
import Event from './Event'

const Events = ({ tasks, removeTask }) => {
  return (
    <section>
      {tasks.map((task) => {
        return <Event key={task._id} {...task} removeTask={removeTask} />
      })}
    </section>
  )
}

export default Events
