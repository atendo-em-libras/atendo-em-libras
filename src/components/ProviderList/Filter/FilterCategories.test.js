import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Filter, { FilterChip } from './Filter'

window.scrollTo = jest.fn()

describe('Testa o filtro de categorias', () => {
  it('deverá renderizar os filtros de categorias', () => {
    const { getByTestId } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    const checkBoxCategorias = getByTestId('filter-box')
    expect(checkBoxCategorias).toBeTruthy()
  })

  it('deverá encontrar as categorias', () => {
    const { getByTestId } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    getByTestId('filter-box')
    const categoria = getByTestId('checkbox-categoria')
    expect(categoria).toBeInTheDocument()
  })

  it('deverá abrir o modal e encontrar Enfermagem', () => {
    const { getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    getByTestId('filter-box')
    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const enfermagem = getByLabelText('Enfermagem')
    expect(enfermagem).toBeInTheDocument()
  })

  it('deverá checar se seleciona uma opção do filtro Categorias', () => {
    const { getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )

    getByTestId('filter-box')
    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const enfermagem = getByLabelText('Enfermagem')
    fireEvent.click(enfermagem)

    expect(enfermagem).toBeChecked()
  })

  it('deverá salvar a seleçao enfermagem', () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )

    getByTestId('filter-box')
    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const enfermagem = getByLabelText('Enfermagem')
    fireEvent.click(enfermagem)
    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)

    expect(botaoSalvar).toBeTruthy()
  })

  it('deverá salvar a seleçao Fonoaudiologia e renderizar filter chip Fonoaudiologia', () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )

    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const fonoaudiologia = getByLabelText('Fonoaudiologia')
    fireEvent.click(fonoaudiologia)
    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)

    const filterChip = render(<FilterChip />)

    expect(filterChip.getByTestId('filter-chip')).toBeInTheDocument()
    expect(filterChip.getByText('Fonoaudiologia')).toBeInTheDocument()
  })

  it('deverá tirar a seleçao do checkbox em categorias', () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )
    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const fonoaudiologia = getByLabelText('Fonoaudiologia')
    fireEvent.click(fonoaudiologia)

    fireEvent.click(getByText('Limpar'))

    expect(fonoaudiologia).not.toBeChecked()
  })

  it('deverá mostrar o Botão limpar filtros', () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: ['São Paulo'], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )

    getByTestId('filter-box')

    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const fonoaudiologia = getByLabelText('Fonoaudiologia')
    fireEvent.click(fonoaudiologia)

    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)

    fireEvent.click(fonoaudiologia)
    expect(getByTestId('limpar-filtro')).toBeInTheDocument()
  })

  it('deverá limpar filtros', async () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <Filter filters={{ localities: ['São Paulo'], categories: [], attendanceOptions: [] }} setFilters={() => {}} />
    )

    getByTestId('filter-box')

    const categoria = getByTestId('checkbox-categoria')
    fireEvent.click(categoria)
    getByTestId('teste-modal')
    const fonoaudiologia = getByLabelText('Fonoaudiologia')
    fireEvent.click(fonoaudiologia)

    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)
    fireEvent.click(fonoaudiologia)

    fireEvent.click(getByTestId('limpar-filtro'))

    expect(getByTestId('limpar-filtro')).toMatchObject({})
  })
})
