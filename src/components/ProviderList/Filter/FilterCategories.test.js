import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter, { FilterChip } from './Filter'

window.scrollTo = jest.fn()

describe('Testa o filtro de categorias', () => {
  it('deverá renderizar os filtros de categorias', () => {
    const { getByText, getByTestId, getByLabelText, getByAllText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    const checkBoxCategorias = getByTestId('checkbox-tipos-de-atendimento')
    expect(checkBoxCategorias).toBeTruthy()
  })

  it('deverá encontrar as categorias', () => {
    const { getByText, getByTestId, getByLabelText, getByAllText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    const checkBoxCategorias = getByTestId('checkbox-tipos-de-atendimento')
    const categoria = getByTestId('checkbox-categoria')
    expect(categoria).toBeInTheDocument()
  })

  it('deverá abrir o modal e encontrar Enfermagem', () => {
    const { getByText, getByTestId, getByLabelText, getByAllText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    const checkBoxCategorias = getByTestId('checkbox-tipos-de-atendimento')
    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const enfermagem = screen.getByLabelText('Enfermagem')
    expect(enfermagem).toBeInTheDocument()
  })
})
