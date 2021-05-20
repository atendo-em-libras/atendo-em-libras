import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter from './Filter'
import LocationApi from '../../../api/location'

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
    const locations = LocationApi.getUf()
    const { StyledSelect } = render(
      <Filter filters={{ localities: locations, categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    screen.getByTestId('filter-box')
    const tipo = screen.getByText('Localidade')
    fireEvent.click(tipo)
    screen.getByText('Estado')
    const inputEstado = StyledSelect.queryByText('teste-estados')
    fireEvent.selectOptions(inputEstado)
    expect(screen.getByText('AC')).toBeTruthy()
  })
  //it('deverá abrir menu dropdown com todos os estados ', async () => {
})
