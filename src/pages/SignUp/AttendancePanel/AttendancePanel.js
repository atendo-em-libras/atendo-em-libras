import React, { useState } from 'react'
import { Box, CheckBox } from 'grommet'

const AttendancePanel = (props) => {
  const [enabledAttendance, setEnabledAttendance] = useState('Não')

  const { label, name, component } = props

  return (
    <>
      <Box margin={{ bottom: 'medium' }}>
        <CheckBox
          label={label}
          checked={enabledAttendance === 'Sim'}
          name={`${name}`}
          onChange={() => {
            setEnabledAttendance(enabledAttendance === 'Sim' ? 'Não' : 'Sim')
          }}
        />
      </Box>
      {enabledAttendance === 'Sim' ? component : null}
    </>
  )
}

export { AttendancePanel }
