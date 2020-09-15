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

  describe('Attendances', () => {
    it('Has OnlineAttendences fields when Online is selected', () => {
      const radioButtonGroup = wrapper.getByTestId('atendimento-option')
      const options = radioButtonGroup.getElementsByTagName('button')
      fireEvent.click(options[0])

      const onlineTestAttendance = wrapper.getByTestId('online-attendance')

      expect(onlineTestAttendance).toBeVisible()
    })
  })
})
