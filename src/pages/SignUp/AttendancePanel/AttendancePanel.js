import React, { useState } from 'react'
import { Box, RadioButton } from 'grommet'
import { FormField, HeadingSectionCustom } from '../../../components/Form/FormComponents'

const AttendancePanel = (props) => {
  const [enabledAttendance, setEnabledAttendance] = useState('Sim')
  const { header, label, name, component } = props

  return (
    <Box>
      <HeadingSectionCustom>{header}</HeadingSectionCustom>
      <FormField label={label}>
        <Box margin={{ top: 'small' }}>
          <RadioButton
            label="Sim"
            checked={enabledAttendance === 'Sim'}
            name={`${name}-yes`}
            onChange={() => {
              setEnabledAttendance('Sim')
            }}
          />
        </Box>
        <Box margin={{ top: 'small' }}>
          <RadioButton
            label="Não"
            checked={enabledAttendance === 'Não'}
            name={`${name}-no`}
            onChange={(event) => {
              setEnabledAttendance('Não')
            }}
          />
        </Box>
      </FormField>
      {enabledAttendance === 'Sim' ? component : null}
    </Box>
  )
}

export { AttendancePanel }
