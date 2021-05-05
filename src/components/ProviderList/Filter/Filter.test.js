import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { FilterCard } from './Filter'
import userEvent from '@testing-library/user-event'
import { videoIcon } from '../../../assets/icons'

describe('FilterCard tests', () => {
  it('Should have `localizaçao` label', () => {
    render(<FilterCard label={'localizaçao'} onClear={false} onSave={true} icon={videoIcon} />)
    expect(screen.getByText('localizaçao')).toBeInTheDocument()
  })

  it('Should open modal', () => {
    render(<FilterCard label={'Tipos de atendimento'} onClear={false} onSave={true} icon={videoIcon} onOpen={true} />)
    userEvent.click(screen.getByLabelText('Tipos de atendimento'))

    expect(screen.getByLabelText('Tipos de atendimento')).toBeChecked()
  })

  it('should open select menu with userEvent click', () => {
    const { container, getByText } = render(
      <FilterCard
        className="FilterStyles__StyledFilterBox-sc-1vn6zua-1 bWMecn"
        label="Tipos de atendimento"
        onClear={false}
        onSave={true}
        icon={videoIcon}
        onOpen={false}
      />
    )
    const control = container.querySelector('.select__dropdown-indicator')
    userEvent.click(control)
    expect(getByText('Video chamada')).toBeTruthy()
  })
})
