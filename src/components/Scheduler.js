import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  MonthView,
  DayView,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui'
import { alpha } from '@material-ui/core/styles'
import { ViewState } from '@devexpress/dx-react-scheduler'
//import appointments from '../demo-data/today-appointments'
const appointments = []
const today = new Date()
function Calendar() {
  const [props, setProps] = useState({
    data: appointments,
    currentDate: new Date(),
    currentViewName: '',
  })

  const { data, currentDate, currentViewName } = props

  const currentDateChange = (currentDate) => {
    setProps({ ...props, currentDate })
  }
  const currentViewNameChange = (currentViewName) => {
    console.log(currentViewName)
    setProps({ ...props, currentViewName })
  }
  return (
    <>
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={(currentViewName) =>
              currentViewNameChange(currentViewName)
            }
            onCurrentDateChange={(currentDate) =>
              currentDateChange(currentDate)
            }
          />
          <WeekView startDayHour={7} endDayHour={22} />
          <WeekView
            name='work-week'
            displayName='Work Week'
            excludedDays={[0, 6]}
            startDayHour={7}
            endDayHour={22}
          />
          <MonthView />
          <DayView startDayHour={7} endDayHour={22} />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </>
  )
}
const Wrapper = styled.section``

export default Calendar
