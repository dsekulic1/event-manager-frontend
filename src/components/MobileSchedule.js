import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import ModalForm from './Modal'
import axios from 'axios'
import Loading from '../components/Loading'
import useLocalState from '../utils/localState'
const url = 'https://event-manager-2021.herokuapp.com'
const tasksUrl = url + '/api/v1/tasks'
const MyCalendar = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { alert, showAlert } = useLocalState()
  const [events, setEvents] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [localizer, setLocalizer] = useState(momentLocalizer(moment))
  const [values, setValues] = useState({
    id: Number(new Date().getTime().toString()),
    title: '',
    start: '',
    end: '',
    allDay: false,
    resourceId: 1,
  })

  const openModal = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const setTitle = (title) => {
    setValues({ ...values, title: title })
  }
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(tasksUrl)
      //setTasks(data.tasks)
      let newData = []
      data.tasks.map((task) => {
        const { _id, start, end, title, allDay, resourceId } = task
        let newEvent = {
          id: _id,
          title: title,
          start: new Date(start),
          end: new Date(end),
          allDay: allDay,
          resourceId: Number(resourceId),
        }
        newData.push(newEvent)
        return task
      })
      setEvents([...newData])
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleEventSet = async () => {
    try {
      const { title, start, end } = values
      const event = { title, start, end }
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
      // setLoading(false)
    }
    // setEvents([...events, values])
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
    if (values.title) handleEventSet()
  }, [values.title])

  useEffect(() => {
    fetchTasks()
    setLocalizer(momentLocalizer(moment))
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isOpen && (
            <ModalForm handleClose={handleClose} handleSubmit={handleSubmit} />
          )}
          <Calendar
            localizer={localizer}
            selectable
            events={events}
            defaultView={Views.DAY}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={onAppointmentAdding}
            min={new Date(0, 0, 0, 6, 0, 0)}
            max={new Date(0, 0, 0, 23, 0, 0)}
          />
        </>
      )}
    </>
  )
}

export default MyCalendar
