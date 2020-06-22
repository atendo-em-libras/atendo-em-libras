import React from 'react'
import { Footer } from './Footer'
import { render } from '@testing-library/react'
import 'jest-styled-components'

describe('Footer component', () => {
  let view

  beforeEach(() => {
    view = render(<Footer />)
  })

  it('renders footer correctly', () => {
    expect(view.container).toMatchSnapshot()
  })

  it('should include Atendo em Libras email with label', () => {
    expect(view.getByText('Dúvidas? Entre em contato em:')).toBeInTheDocument()
    expect(view.getByText('atendoemlibras@gmail.com')).toBeInTheDocument()
  })
})
