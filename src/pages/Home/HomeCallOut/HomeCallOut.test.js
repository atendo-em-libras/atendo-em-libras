import React from 'react'
import { render } from '@testing-library/react'
import { HomeCallOut } from './HomeCallOut'

describe('HomeCallOut component', () => {
  let homeCallOutContainer

  beforeEach(() => {
    homeCallOutContainer = render(<HomeCallOut />)
  })

  it('should render register message', () => {
    expect(
      homeCallOutContainer.getByText('Profissionais de diversas áreas da saúde prontos para te atender')
    ).toBeInTheDocument()
  })
})
