import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { InfoCard } from './InfoCard'
import 'jest-styled-components'

describe('InfoCard tests', () => {
  it('Render correctly', () => {
    let onClick = jest.fn()
    const { container } = render(<InfoCard onClick={onClick} />)
    expect(container).toMatchSnapshot()
  })

  it('Call reload function when button is clicked', () => {
    let onClick = jest.fn()
    render(<InfoCard onClick={onClick} />)
    fireEvent.click(screen.getByRole('button', { name: 'reload' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
