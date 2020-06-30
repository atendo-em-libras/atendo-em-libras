import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMobile } from './HeaderMobile'

describe('HeaderMobile component', () => {
  let view
  let onClose

  beforeEach(() => {
    onClose = jest.fn()
    view = render(<HeaderMobile onClose={onClose} />)
  })

  it('should execute callback function when close button is clicked', () => {
    const closeButton = view.getByLabelText('Close Menu Button')

    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('should redirect to form when register button is clicked', () => {
    const registerLink = view.getByText('Cadastre-se aqui')

    expect(registerLink.href).toBe('https://forms.gle/h1sX9nD45PgUAzGB6')
  })

  it('Render correctly', () => {
    const { baseElement } = view
    expect(baseElement).toMatchSnapshot()
  })
})
