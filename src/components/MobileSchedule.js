import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import ModalForm from './Modal'
import axios from 'axios'
import useLocalState from '../utils/localState'
import ModalEvent from './EventModal'
import Alert from 'react-bootstrap/Alert'

const url = 'https://event-manager-2021.herokuapp.com'
const tasksUrl = url + '/api/v1/tasks/user/'

const MyCalendar = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [clickedEvent, setClickedEvent] = useState({
    title: '',
    start: '',
    end: '',
  })
  const { alert, showAlert } = useLocalState()
  const [events, setEvents] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [localizer, setLocalizer] = useState(momentLocalizer(moment))
  const [values, setValues] = useState({
    id: '',
    title: '',
    start: '',
    end: '',
    allDay: false,
    resourceId: 1,
    userId: userId,
  })
  const handleUnClicked = () => {
    setIsClicked(false)
    setClickedEvent({
      title: '',
      start: '',
      end: '',
    })
  }
  const handleClicked = (event) => {
    setClickedEvent({
      title: event.title,
      start: event.start,
      end: event.end,
    })
    setIsClicked(true)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const setTitle = (title) => {
    // setValues({ ...values, title: title })
    handleEventSet(title)
  }

  const getData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(tasksUrl + userId)
      const newData = []
      data.tasks.map((task) => {
        newData.push({
          id: task._id,
          title: task.title,
          start: new Date(task.start),
          end: new Date(task.end),
          allDay: task.allDay,
          resourceId: Number(task.resourceId),
        })
        return task
      })
      setEvents([...newData])
    } catch (error) {
      showAlert({ text: error.response.data.msg })
    }
    setIsLoading(false)
  }
  const handleEventSet = async (title) => {
    try {
      setIsLoading(true)
      const { start, end } = values
      const event = { title, start, end, userId: values.userId }
      const { data } = await axios.post(url + `/api/v1/tasks`, event)
      const { task } = data

      let newEvent = {
        id: task._id,
        title: task.title,
        start: new Date(task.start),
        end: new Date(task.end),
        allDay: task.allDay,
        resourceId: Number(task.resourceId),
      }
      setEvents([...events, newEvent])
    } catch (error) {
      showAlert({ text: error.response.data.msg })
    }
    setIsLoading(false)
    setValues({
      ...values,
      start: '',
      end: '',
      title: '',
      id: Number(new Date().getTime().toString()),
    })
  }
  const handleSubmit = (title) => {
    handleClose()
    setTitle(title)
  }
  const onAppointmentAdding = (e) => {
    setValues({ ...values, start: new Date(e.start), end: new Date(e.end) })
    openModal()
  }

  useEffect(() => {
    getData()
    setLocalizer(momentLocalizer(moment))
  }, [])

  return (
    <>
      {alert.show && (
        <div className='alert'>
          <Alert variant={alert.type}>{alert.text}</Alert>
        </div>
      )}
      {isOpen && (
        <ModalForm handleClose={handleClose} handleSubmit={handleSubmit} />
      )}
      {isClicked && (
        <ModalEvent
          handleUnClicked={handleUnClicked}
          clickedEvent={clickedEvent}
        />
      )}
      {!isLoading && (
        <Calendar
          localizer={localizer}
          selectable
          events={events}
          defaultView={Views.DAY}
          onSelectEvent={(event) => handleClicked(event)}
          onSelectSlot={onAppointmentAdding}
          min={new Date(0, 0, 0, 6, 0, 0)}
          max={new Date(0, 0, 0, 23, 0, 0)}
        />
      )}
    </>
  )
}

export default MyCalendar
