import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter from './Filter'

window.scrollTo = jest.fn()
describe('FilterCard tests', () => {
  it('deverá renderizar os filtros', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const checkBoxTiposdeAtendimento = screen.getByTestId('checkbox-tipos-de-atendimento')

    expect(checkBoxTiposdeAtendimento).toBeTruthy()
  })
  it('deverá encontrar Tipo de Atendimento', async () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const atendimento = screen.getByText('Tipos de atendimento')
    expect(atendimento).toBeInTheDocument()
  })
  it('deverá abrir o modal e encontrar Domicílio', async () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const tipo = screen.getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    screen.getByTestId('teste-modal')
    const domicilio = screen.getByLabelText('Domicílio')
    expect(domicilio).toBeInTheDocument()
  })

  it('deverá checar se seleciona uma opção do filtro Tipos de Atendimento', async () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const tipo = screen.getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    screen.getByTestId('teste-modal')
    const checar = screen.getByLabelText('Domicílio')
    const clicado = fireEvent.click(checar)
    expect(clicado).toEqual(true)
  })
})
