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

  it('Has a Categoria field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Categoria', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Especialidade field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Especialidade', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Número de cadastro profissional field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Número de cadastro profissional', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Número de cadastro profissional field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Número de cadastro profissional', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Apresentação field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Apresentação', { selector: 'textarea' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Planos de saúde aceitos field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Planos de saúde aceitos', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })
})
