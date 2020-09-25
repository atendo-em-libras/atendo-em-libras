import React, { useState } from 'react'
import { Box, RadioButton } from 'grommet'
import { FormField, HeadingSectionCustom } from '../../../components/Form/FormComponents'

const AttendancePanel = (props) => {
  const [enabledAttendance, setEnabledAttendance] = useState('Sim')
  const { header, label, name, component } = props

  return (
    <Box>
      <HeadingSectionCustom>{header}</HeadingSectionCustom>
      <FormField label={label} required>
        <RadioButton
          label="Sim"
          checked={enabledAttendance === 'Sim'}
          name={`${name}-yes`}
          onChange={() => {
            setEnabledAttendance('Sim')
          }}
        />
        <RadioButton
          label="Não"
          checked={enabledAttendance === 'Não'}
          name={`${name}-no`}
          onChange={(event) => {
            setEnabledAttendance('Não')
          }}
        />
      </FormField>
      {enabledAttendance === 'Sim' && component}
    </Box>
  )
}

export { AttendancePanel }
