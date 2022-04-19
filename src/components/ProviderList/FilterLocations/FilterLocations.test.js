import React from 'react'
import { render, screen } from '@testing-library/react'
import { FilterLocations } from './FilterLocations'
import '@testing-library/jest-dom'

jest.mock('../../../api/provider')

describe('Filter locations Tests', () => {
  it('Component should render FilterLocations', async () => {
    render(<FilterLocations />)
    const filter = screen.getByText('Localidade')
    expect(filter).toBeInTheDocument()
  })
})
