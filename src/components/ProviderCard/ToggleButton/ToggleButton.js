import React, { Component } from 'react'
import { Text } from 'grommet'
import { Button } from '../../Buttons'
import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

const colors = {
  open: {
    font: COLORS.brand,
    background: '#C7DDFD',
  },
  close: {
    font: '#FF7B7B',
    background: '#FFE8E8',
  },
}

class ToggleButton extends Component {
  render() {
    const H2 = styled.h2`
      width: 100%;
      background-color: ${(props) => (props.isOpen ? colors.close.background : colors.open.background)};
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    `

    const { isOpen, labelClose, labelOpen, iconClose, iconOpen, className, onClick } = this.props

    const info = isOpen
      ? { label: labelClose, icon: iconClose, font: colors.close.font }
      : { label: labelOpen, icon: iconOpen, font: colors.open.font }

    const Icon = info.icon

    return (
      <H2>
        <Button hoverIndicator="background" className={className} onClick={onClick}>
          <Text size="small">
            {info.label}
            <Icon color={info.font} />
          </Text>
        </Button>
      </H2>
    )
  }
}

const ToggleButtonStyled = styled(ToggleButton)`
  background-color: ${(props) => (props.isOpen ? colors.close.background : colors.open.background)};
  color: ${(props) => (props.isOpen ? colors.close.font : colors.open.font)};
  width: 100%;
  height: 100%;
  padding: 20px 0 20px 0;

  & svg {
    vertical-align: middle;
  }
`

export { ToggleButtonStyled as ToggleButton }
