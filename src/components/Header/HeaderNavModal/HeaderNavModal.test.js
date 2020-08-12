import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderNavModal } from './HeaderNavModal'
import 'jest-styled-components'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

describe('HeaderNavModal component', () => {
  describe("when feature toggle 'navbar' is active", () => {
    const history = createMemoryHistory()
    let view
    let onClose

    beforeEach(() => {
      onClose = jest.fn()
      view = render(
        <Router history={history}>
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <HeaderNavModal onClose={onClose} />
          </FeatureTogglesContext.Provider>
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
  })
  describe("when feature toggle 'navbar' is inactive", () => {
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

    it("menu does NOT display a link to 'Home'", () => {
      const homeLink = view.queryByText(/Home/i)

      expect(homeLink).not.toBeInTheDocument()
    })

    it("menu does NOT display a link to 'Sobre o Projeto'", () => {
      const homeLink = view.queryByText(/Sobre o Projeto/i)

      expect(homeLink).not.toBeInTheDocument()
    })

    it('should redirect to form when register button is clicked', () => {
      const registerLink = view.getByLabelText('register form')

      expect(registerLink.href).toBe('https://forms.gle/h1sX9nD45PgUAzGB6')
    })
  })
})
