import React from 'react'
import { render } from '@testing-library/react'
import { HeaderBanner } from './HeaderBanner'

describe('HeaderBanner component', () => {
  let headerBannerContainer

  beforeEach(() => {
    headerBannerContainer = render(<HeaderBanner />)
  })

  it('should render description heading', () => {
    expect(headerBannerContainer.getByText('Conheça profissionais de saúde que atendem em Libras')).toBeInTheDocument()
  })

  it('should render description test', () => {
    expect(
      headerBannerContainer.getByText(
        'Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais que atendem em Libras.'
      )
    ).toBeInTheDocument()
  })
})
