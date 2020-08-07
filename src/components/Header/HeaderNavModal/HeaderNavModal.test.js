import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderNavModal } from './HeaderNavModal'
import 'jest-styled-components'

describe('HeaderNavModal component', () => {
  let view
  let onClose

  beforeEach(() => {
    onClose = jest.fn()
    view = render(<HeaderNavModal onClose={onClose} />)
  })

  it('should execute callback function when close button is clicked', () => {
    const closeButton = view.getByLabelText('Close Menu Button')

    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('should redirect to form when register button is clicked', () => {
    const registerLink = view.getByLabelText('register form')

    expect(registerLink.href).toBe('https://forms.gle/h1sX9nD45PgUAzGB6')
  })

  it('Render correctly', () => {
    const { baseElement } = view
    expect(baseElement).toMatchSnapshot()
  })
})
