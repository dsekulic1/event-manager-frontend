import * as React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui'

import appointments from '../demo-data/today-appointments'
const currentDate = '2018-07-17'

function Calendar() {
  const { user } = useGlobalContext()
  return (
    <>
      <Wrapper className='page'>
        <Paper>
          <Scheduler data={appointments} height={660}>
            <WeekView startDayHour={9} endDayHour={19} />
            <Appointments />
          </Scheduler>
        </Paper>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section``

export default Calendar
