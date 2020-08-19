import React from 'react'
import styled from 'styled-components/macro'
import { Button as GrommetButton } from 'grommet'
import PropTypes from 'prop-types'

const dropletStyle = (dropletDirection) => {
  if (!dropletDirection) {
    return undefined
  }

  return `border-${dropletDirection}-radius: 0`
}

const BaseButton = styled(GrommetButton)`
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 17px;
  ${({ droplet }) => dropletStyle(droplet)}
`

const Button = ({ 'aria-label': ariaLabel, ...props }) => {
  return <BaseButton a11yTitle={ariaLabel} {...props} />
}

const PrimaryButton = styled(Button)`
  background-color: #5996f7;
  color: white;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`
const WhiteButton = styled(Button)`
  background-color: white;
  color: #5996f7;
`

Button.propTypes = {
  droplet: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
}

export { Button, PrimaryButton, WhiteButton }
