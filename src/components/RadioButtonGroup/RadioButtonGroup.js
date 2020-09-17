import React, { useState } from 'react'
import { COLORS } from '../../constants/colors'
import { Button } from '../Buttons/'
import { Text } from 'grommet'
import styled from 'styled-components/macro'

export const RadioButtonGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleRadioButton = (value, i) => {
    setSelectedIndex(i)
    props.onChange(value)
  }

  const ButtonStyled = styled(Button)`
    border-style: solid;
    border-width: 1px;
    border-color: ${COLORS.brand};
    margin-right: 12px;
  `

  const options = props.options.map((option, i) => (
    <Button
      key={option.value}
      secondary
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
