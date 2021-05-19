import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter from './Filter'
import LocationApi from '../../../api/location'
import mockLocations from '../../../mocks/locations'

import userEvent from '@testing-library/user-event'

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
    jest.mock('../../../api/location')

    LocationApi.getUf()

    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const tipo = screen.getByText('Localidade')
    fireEvent.click(tipo)
    expect(screen.getByText('Estado')).toBeInTheDocument()
    console.log(screen.getByTestId('teste-estados'))

    expect(screen.getByTestId('teste-estados')).toHaveFormValues(LocationApi.getUf())

    //expect(userEvent.click(screen.getByTestId(('teste-estados'),  ['AL']))).toBe(true)
  })
})
