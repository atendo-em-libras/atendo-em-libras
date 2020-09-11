import React, { useState } from 'react'
import { COLORS } from '../../constants/colors'
import { Button } from '../Buttons/'
import { Text } from 'grommet'

export const RadioButtonGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleRadioButton = (value, i) => {
    setSelectedIndex(i)
    props.onChange(value)
  }

  const options = props.options.map((option, i) => (
    <Button
      key={option.value}
      primary
      color={i === selectedIndex ? undefined : 'light-1'}
      target="_blank"
      label={
        i === selectedIndex ? (
          option.label
        ) : (
          <Text size="small" color={COLORS.brand}>
            {option.label}
          </Text>
        )
      }
      size="medium"
      droplet="bottom-left"
      onClick={() => {
        toggleRadioButton(option.value, i)
      }}
    />
  ))

  return <div {...props}> {options} </div>
}
