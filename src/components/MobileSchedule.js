import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import ModalForm from './Modal'

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: '2A3B2121',
      title: 'Board meeting',
      start: new Date(2021, 10, 13, 13, 0, 0),
      end: new Date(2021, 10, 13, 15, 0, 0),
      allDay: false,
      resourceId: 1,
    },
  ])
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
  const handleEventSet = () => {
    setEvents([...events, values])
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
    setLocalizer(momentLocalizer(moment))
  }, [])
  return (
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
  )
}

export default MyCalendar
