import React from 'react'
import { useCallback, useState } from 'react'
import { Scheduler, View, Editing } from 'devextreme-react/scheduler'
import 'devextreme/dist/css/dx.light.css'
const appointments = []

/*
var appointment = [{ 
    text: "Meet with a customer", 
    startDate: new Date("2021-05-21T15:00:00.000Z"),
    endDate: new Date("2021-05-21T16:00:00.000Z")
}];

var allDayAppointment = [{
    text: "Concert",
    startDate: new Date("2021-07-27T16:00:00.000Z"),
    allDay: true
}];
*/
function Schedule() {
  const [props, setProps] = useState({
    data: appointments,
    currentDate: new Date(),
  })
  const handlePropertyChange = useCallback((e) => {
    setProps({ ...props, [e.name]: e.value })
  }, [])

  const onAppointmentAdding = (e) => {
    console.log('adding: ', e)
  }
  const onAppointmentAdded = (e) => {
    console.log(e)
  }
  const { data, currentDate } = props

  const onAppointmentUpdating = (e) => {
    // Handler of the "appointmentUpdating" event
  }
  const onAppointmentUpdated = (e) => {
    // Handler of the "appointmentUpdated" event
  }
  const onAppointmentDeleting = (e) => {
    // Handler of the "appointmentDeleting" event
  }
  const onAppointmentDeleted = (e) => {
    // Handler of the "appointmentDeleted" event
  }

  return (
    <>
      <Scheduler
        dataSource={data}
        textExpr='title'
        allDayExpr='dayLong'
        recurrenceRuleExpr='recurrence'
        defaultCurrentView='week'
        currentDate={currentDate}
        adaptivityEnabled={true}
        onOptionChanged={handlePropertyChange}
        timeZone='Europe/Berlin'
        onAppointmentAdding={onAppointmentAdding}
        onAppointmentAdded={onAppointmentAdded}
        onAppointmentUpdating={onAppointmentUpdating}
        onAppointmentUpdated={onAppointmentUpdated}
        onAppointmentDeleting={onAppointmentDeleting}
        onAppointmentDeleted={onAppointmentDeleted}
        cellDuration={60}
        firstDayOfWeek={1}
      >
        <View type='day' startDayHour={7} endDayHour={22} />
        <View type='week' startDayHour={7} endDayHour={22} />
        <View type='month' />
        <Editing
          allowDragging={false}
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true}
        />
      </Scheduler>
    </>
  )
}

export default Schedule
