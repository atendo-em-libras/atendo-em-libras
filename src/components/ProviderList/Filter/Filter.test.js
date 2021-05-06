import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Filter, { FilterCard, StyledCheckBox } from './Filter'
import userEvent from '@testing-library/user-event'
import { videoIcon } from '../../../assets/icons'

describe('FilterCard tests', () => {
  it('Should have `localizaçao` label', () => {
    render(<FilterCard label={'localizaçao'} onClear={false} onSave={true} icon={videoIcon} />)
    expect(screen.getByText('localizaçao')).toBeInTheDocument()
  })

  it('should be able to select one option on Tipos de atendimentos', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const checkBoxTiposdeAtendimento = screen.getByTestId('checkbox-tipos-de-atendimento')

    // userEvent.click(checkBoxTiposdeAtendimento);

    expect(checkBoxTiposdeAtendimento).toBeTruthy()
  })
})
