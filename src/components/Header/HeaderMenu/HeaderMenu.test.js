import React from 'react'
import { render } from '@testing-library/react'
import { HeaderMenu } from './HeaderMenu'

describe('HeaderMenu component', () => {
  let headerMenuContainer

  beforeEach(() => {
    headerMenuContainer = render(<HeaderMenu />)
  })

  it('should render register message', () => {
    expect(headerMenuContainer.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
  })
})
