import React from 'react'
import { SignUp } from './SignUp'
import { render } from '@testing-library/react'

describe('SignUp', () => {
  it('Has a Nome Completo field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Nome Completo', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Telefone field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Telefone', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Email field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Email', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })
})
