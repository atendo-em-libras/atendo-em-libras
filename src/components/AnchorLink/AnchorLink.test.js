import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { AnchorLink } from './AnchorLink'
import { render, fireEvent } from '@testing-library/react'

describe('AnchorLink component', () => {
  const history = createMemoryHistory()

  describe('it routes to different pages', () => {
    it('test case A', () => {
      const newRoute = '/some-route'
      let view = render(
        <Router history={history}>
          <AnchorLink to={newRoute} label="Some Route" />
        </Router>
      )

      fireEvent.click(view.getByText(/Some Route/i))

      expect(history.location.pathname).toBe(newRoute)
    })
    it('test case B', () => {
      const previousRoute = '/some-route'
      const newRoute = '/'
      let view = render(
        <Router history={history}>
          <AnchorLink to={newRoute} label="Home" />
        </Router>
      )

      history.push(previousRoute)
      fireEvent.click(view.getByText(/Home/i))

      expect(history.location.pathname).toBe(newRoute)
    })
  })
})
