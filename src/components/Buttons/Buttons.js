import React from 'react'
import styled from 'styled-components/macro'
import { Button as GrommetButton } from 'grommet'
import { withSizes } from './utils/withSizes'

const BaseButton = styled(GrommetButton)`
  font-size: 1.4rem;
  font-weight: 600;
`

const Button = ({ 'aria-label': ariaLabel, ...props }) => {
  return <BaseButton plain a11yTitle={ariaLabel} {...props} />
}
const ButtonWithSizes = withSizes(Button)

const PrimaryButton = styled(ButtonWithSizes)`
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

export { ButtonWithSizes as Button, PrimaryButton }
