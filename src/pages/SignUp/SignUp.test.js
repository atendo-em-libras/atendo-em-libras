import React from 'react'
import { SignUp, tiposAtendimento } from './SignUp'
import { render, fireEvent, screen } from '@testing-library/react'

describe('SignUp', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<SignUp />)
  })

  it('Has a Nome Completo field', () => {
    const textbox = wrapper.getByLabelText('Nome Completo')

    expect(textbox).toBeTruthy()
  })

  it('Has a Telefone field', () => {
    const textbox = wrapper.getByLabelText('Telefone', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Email field', () => {
    const textbox = wrapper.getByLabelText('Email', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Categoria field', () => {
    const textbox = wrapper.getByLabelText('Categoria', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Especialidade field', () => {
    const textbox = wrapper.getByLabelText('Especialidade', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Número de cadastro profissional field', () => {
    const textbox = wrapper.getByLabelText('Número de cadastro profissional', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Número de cadastro profissional field', () => {
    const textbox = wrapper.getByLabelText('Número de cadastro profissional', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Apresentação field', () => {
    const textbox = wrapper.getByLabelText('Apresentação', { selector: 'textarea' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Planos de saúde aceitos field', () => {
    const textbox = wrapper.getByLabelText('Planos de saúde aceitos', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  // it('Has Atendimento options', () => {
  //   const groupRadioButton = wrapper.getByTestId('atendimento-option')
  //   const options = groupRadioButton.getElementsByTagName('button')

  //   console.log('%cSignUp.test.js line:70 object', 'color: #007acc;', options[0])

  //   const online = parseInt(options[0].key)
  //   const emClinica = parseInt(options[1].key)
  //   const domiciliar = parseInt(options[2].key)

  //   // expect(online).toBe(tiposAtendimento.Online)
  //   expect(emClinica).toBe(tiposAtendimento.EmClinica)
  //   expect(domiciliar).toBe(tiposAtendimento.Domiciliar)
  // })

  // it('Has a Atende por video chamada? option', () => {
  //   const groupRadioButton = wrapper.getByTestId('video-call-option')
  //   const options = groupRadioButton.getElementsByTagName('input')
  //   fireEvent.click(options[1])
  //   const value = groupRadioButton.querySelector('input:checked').value
  //   expect(value).toBe(options[1].value)
  // })

  it('Has a Plataforma field', () => {
    const textbox = wrapper.getByLabelText('Plataforma', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })

  it('Has a Contato field', () => {
    const textbox = wrapper.getByLabelText('Contato', { selector: 'input' })

    expect(textbox).toBeTruthy()
  })
})
