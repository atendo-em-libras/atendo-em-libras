import React from 'react'
import { SignUp, tiposAtendimento } from './SignUp'
import { render, fireEvent } from '@testing-library/react'

describe('SignUp', () => {
  it('Has a Nome Completo field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Nome Completo')

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

  it('Has Atendimento options', () => {
    const screen = render(<SignUp />)

    const groupRadioButton = screen.getByTestId('atendimento-option')
    const options = groupRadioButton.getElementsByTagName('input')

    const online = parseInt(options[0].value)
    const emClinica = parseInt(options[1].value)
    const domiciliar = parseInt(options[2].value)

    expect(online).toBe(tiposAtendimento.Online)
    expect(emClinica).toBe(tiposAtendimento.EmClinica)
    expect(domiciliar).toBe(tiposAtendimento.Domiciliar)
  })

  it('Has a Atende por video chamada? option', () => {
    const screen = render(<SignUp />)

    const groupRadioButton = screen.getByTestId('video-call-option')
    const options = groupRadioButton.getElementsByTagName('input')
    fireEvent.click(options[1])
    const value = groupRadioButton.querySelector('input:checked').value
    expect(value).toBe(options[1].value)
  })

  it('Has a Plataforma field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Plataforma', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Contato field', () => {
    const screen = render(<SignUp />)

    const textbox = screen.getByLabelText('Contato', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })
})
