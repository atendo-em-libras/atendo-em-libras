import React from 'react'
import styled from 'styled-components/macro'
import { Button as GrommetButton } from 'grommet'

const BaseButton = styled(GrommetButton)`
  font-size: 1.4rem;
  font-weight: 600;
`

const Button = ({ 'aria-label': ariaLabel, ...props }) => {
  return <BaseButton plain a11yTitle={ariaLabel} {...props} />
}

const PrimaryButton = styled(Button)`
  padding: 20px;
  background-color: #5996f7;
  border-radius: 17px;
  border: 0;
  color: white;
  width: max-content;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

const IconButton = styled(Button)`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #5996f7;
`

export { Button, PrimaryButton, IconButton }
