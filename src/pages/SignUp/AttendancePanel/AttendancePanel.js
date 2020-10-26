import React, { useState } from 'react'
import { Box, RadioButton } from 'grommet'
import { FormField, HeadingSectionCustom } from '../../../components/Form/FormComponents'

const AttendancePanel = (props) => {
  // const [enabledAttendance, setEnabledAttendance] = useState('Sim')
  const { header, label, name, component, radioButtonValue, setRadioButtonValue } = props

  return (
    <Box>
      <HeadingSectionCustom>{header}</HeadingSectionCustom>
      <FormField label={label} name={name} required>
        <Box margin={{ top: 'small' }}>
          <RadioButton
            label="Sim"
            checked={radioButtonValue === 'Sim'}
            name={`${name}-yes`}
            onChange={() => {
              setRadioButtonValue('Sim')
            }}
          />
        </Box>
        <Box margin={{ top: 'small' }}>
          <RadioButton
            label="Não"
            checked={radioButtonValue === 'Não'}
            name={`${name}-no`}
            onChange={(event) => {
              setRadioButtonValue('Não')
            }}
          />
        </Box>
      </FormField>
      {radioButtonValue === 'Sim' ? component : null}
    </Box>
  )
}

export { AttendancePanel }
