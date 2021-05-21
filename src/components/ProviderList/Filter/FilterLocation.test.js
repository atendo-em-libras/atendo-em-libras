import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter from './Filter'
import userEvent from '@testing-library/user-event'

jest.mock('../../../api/location', () => ({
  getCitiesByUF: () => Promise.resolve(['Rio Branco']),
  getUf: () => Promise.resolve(['AC', 'SP', 'POA']),
}))

window.scrollTo = jest.fn()

describe('FilteLocation tests', () => {
  it('deverá renderizar os filtros localidade', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const filtroLocalidade = screen.getByTestId('filter-box')

    expect(filtroLocalidade).toBeTruthy()
  })
  it('deverá clicar no filtro localidade', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const filtroLocalidade = screen.getByTestId('filter-box')
    fireEvent.click(filtroLocalidade)
    expect(filtroLocalidade).toBeTruthy()
  })
  it('deverá abrir modal de localidade', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('filter-box')
    const tipo = screen.getByText('Localidade')
    fireEvent.click(tipo)
    const estado = screen.getByText('Estado')
    expect(estado).toBeInTheDocument()
  })

  it('deverá abrir menu dropdown com todos os estados ', async () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)
    screen.getByTestId('filter-box')
    const tipo = screen.getByText('Localidade')
    fireEvent.click(tipo)
    expect(screen.getByText('Estado')).toBeInTheDocument()
    //const inputEstado = await screen.getByTestId('teste-estados')
    //fireEvent.change(inputEstado, { target: { value: 'AC' } })
    //fireEvent.change(screen.getByTestId('teste-estados'), { target: { value: 'AC' } })
    await userEvent.click(screen.getByTestId('teste-estados'))
    //await userEvent.selectOptions(screen.getByTestId('teste-estados'), ['AC'])
    expect(screen.getByText('POA')).toBeTruthy()
  })
  //it('deverá abrir menu dropdown com todos os estados ', async () => {
})
