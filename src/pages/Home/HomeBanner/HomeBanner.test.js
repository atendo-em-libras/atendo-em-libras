import React from 'react'
import { render } from '@testing-library/react'
import { HomeBanner } from './HomeBanner'

describe('HomeBanner component', () => {
  let homeBannerContainer

  beforeEach(() => {
    homeBannerContainer = render(<HomeBanner />)
  })

  it('should render description heading', () => {
    expect(homeBannerContainer.getByText('Conheça profissionais de saúde que atendem em Libras')).toBeInTheDocument()
  })

  it('should render description test', () => {
    expect(
      homeBannerContainer.getByText(
        'Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais que atendem em Libras.'
      )
    ).toBeInTheDocument()
  })
})
