import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { ErrorCard } from './ErrorCard'
import 'jest-styled-components'

describe('ErrorCard tests', () => {
  it('Render correctly', () => {
    let onClick = jest.fn()
    const { container } = render(<ErrorCard onClick={onClick} />)
    expect(container).toMatchSnapshot()
  })

  it('Call reload function when button is clicked', () => {
    let onClick = jest.fn()
    render(<ErrorCard onClick={onClick} />)
    fireEvent.click(screen.getByRole('button', { name: 'reload' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
