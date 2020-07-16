import React from 'react'
import { Header } from './Header'
import { render } from '@testing-library/react'

describe('Header component', () => {
  let headerElement

  beforeEach(() => {
    headerElement = render(<Header />)
  })

  it('should render register button', () => {
    expect(headerElement.getByRole('link')).toBeInTheDocument()
  })
})
