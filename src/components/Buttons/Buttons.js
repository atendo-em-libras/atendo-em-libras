import React from 'react'
import styled from 'styled-components/macro'
import { Button as GrommetButton } from 'grommet'

const BaseButton = styled(GrommetButton)`
  font-size: 1.4rem;
  font-weight: 600;
`

const Button = ({ 'aria-label': ariaLabel, ...props }) => {
  return <BaseButton a11yTitle={ariaLabel} {...props} />
}

const PrimaryButton = styled(Button)`
  background-color: #5996f7;
  border-radius: 17px;
  color: white;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

export { Button, PrimaryButton }
