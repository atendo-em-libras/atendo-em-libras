import React from 'react'
import { Header } from './Header'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Header component', () => {
  let headerElement
  const history = createMemoryHistory()
  
  beforeEach(() => {
    headerElement = render(
      <Router history={history}>
        <Header />
      </Router>
    )
  })

  it('should render register button', () => {
    expect(headerElement.getByText('Cadastre-se aqui')).toBeInTheDocument()
  })
})
