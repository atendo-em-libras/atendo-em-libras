import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { ErrorCard } from './ErrorCard'

describe('ErrorCard tests', () => {
  it('Should call reload function when button is clicked', () => {
    const onClick = jest.fn()
    render(<ErrorCard onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
