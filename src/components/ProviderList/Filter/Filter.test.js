import React from 'react'
import {fireEvent, getAllByAltText, render, screen} from '@testing-library/react'
import Filter, {FilterChip} from './Filter'
import {ProviderList} from "../ProviderList";
import userEvent from "@testing-library/user-event";

window.scrollTo = jest.fn()

describe('FilterCard tests', () => {
  it('deverá renderizar os filtros', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const checkBoxTiposdeAtendimento = screen.getByTestId('checkbox-tipos-de-atendimento')

    expect(checkBoxTiposdeAtendimento).toBeTruthy()
  })
  it('deverá encontrar Tipo de Atendimento', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const atendimento = screen.getByText('Tipos de atendimento')
    expect(atendimento).toBeInTheDocument()
  })
  it('deverá abrir o modal e encontrar Domicílio', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const tipo = screen.getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    screen.getByTestId('teste-modal')
    const domicilio = screen.getByLabelText('Domicílio')
    expect(domicilio).toBeInTheDocument()
  })

  it('deverá checar se seleciona uma opção do filtro Tipos de Atendimento', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    screen.getByTestId('checkbox-tipos-de-atendimento')
    const tipo = screen.getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    screen.getByTestId('teste-modal')
    const opcaoDomicilio = screen.getByLabelText('Domicílio')
    fireEvent.click(opcaoDomicilio)
    expect(opcaoDomicilio).toBeChecked()
  })
  it('deverá salvar a seleçao video chamada', () => {
    const {getByText,getByTestId, getByLabelText} = render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    getByTestId('checkbox-tipos-de-atendimento')
    const tipo = getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    getByTestId('teste-modal')
    const opcaoVideoChamada = getByLabelText('Vídeo chamada')
    fireEvent.click(opcaoVideoChamada)
    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)
    expect(botaoSalvar).toBeTruthy()

  })
  it('deverá renderizar o filterChip', () => {
    const {getByText,getByTestId, getByLabelText, getAllByText } = render(<FilterChip />)
    expect(getByTestId('filter-chip')).toBeInTheDocument()

  })


  it('deverá salvar a seleçao video chamada e renderizar filter chip video chamada', () => {
    const {getByText,getByTestId, getByLabelText} = render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    getByTestId('checkbox-tipos-de-atendimento')
    const tipo = getByText('Tipos de atendimento')
    fireEvent.click(tipo)
    getByTestId('teste-modal')
    const opcaoVideoChamada = getByLabelText('Vídeo chamada')
    fireEvent.click(opcaoVideoChamada)
    const botaoSalvar = getByText('Salvar')
    fireEvent.click(botaoSalvar)
    const filterChip = render(<FilterChip />)

    expect(filterChip.getByTestId('filter-chip')).toBeInTheDocument()
    expect(filterChip.getByText('Vídeo chamada')).toBeInTheDocument()


  })

})
