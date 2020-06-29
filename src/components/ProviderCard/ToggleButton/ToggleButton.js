import React, { Component } from 'react'
import { Button, Text } from 'grommet'
import styled from 'styled-components'

const colors = {
  open: {
    font: '#5A8DED',
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

    const Icon = isOpen ? iconClose : iconOpen

    return (
      <H2>
        <Button hoverIndicator="background" className={className} onClick={onClick}>
          <Text size="small">
            {isOpen ? labelClose : labelOpen}
            <Icon color={isOpen ? colors.close.font : colors.open.font} />
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
