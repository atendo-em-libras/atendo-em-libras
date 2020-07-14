import React from 'react'
import { Home } from './Home'
import { render } from '@testing-library/react'
import 'jest-styled-components'

describe('Home component', () => {
  let view

  beforeEach(() => {
    view = render(<Home />)
  })

  it('renders home correctly', () => {
    expect(view).toMatchSnapshot()
  })
})
