import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderNavModal } from './HeaderNavModal'
import 'jest-styled-components'
import { Router } from 'react-router-dom'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'
import { createMemoryHistory } from 'history'

describe('HeaderNavModal component', () => {
  const history = createMemoryHistory()
  let view
  let onClose

  beforeEach(() => {
    onClose = jest.fn()
    view = render(
      <Router history={history}>
        <HeaderNavModal onClose={onClose} />
      </Router>
    )
  })

  it('should execute callback function when close button is clicked', () => {
    const closeButton = view.getByLabelText('Close Menu Button')

    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it("menu displays a link to 'Home' that takes the user to '/'", () => {
    history.push('/some-route')
    fireEvent.click(view.getByText(/Home/i))

    expect(history.location.pathname).toBe('/')
  })

  it("menu displays a link to 'Sobre o Projeto' that takes the user to '/about'", () => {
    history.push('/some-route')
    fireEvent.click(view.getByText(/Sobre o Projeto/i))

    expect(history.location.pathname).toBe('/sobre')
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
