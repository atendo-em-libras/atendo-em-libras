import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMenu } from './HeaderMenu'
import { ResponsiveContext } from 'grommet'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

describe('HeaderMenu component', () => {
  let view

  describe('when feature toggle SHOW_RESPONSIVE_HEADER is true', () => {
    beforeEach(() => {
      view = render(<HeaderMenu />)
    })

    it('should render register message', () => {
      expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
    })

    describe('when mobile', () => {
      it('displays a hamburger icon for main menu', () => {
        view.rerender(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderMenu />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays register button on modal', () => {
        view.rerender(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderMenu />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )

        const button = view.getByRole('button', { name: 'Menu Button' })

        expect(view.queryByRole('button', { name: 'Cadastre Aqui' })).toBeNull()
        fireEvent.click(button)
        expect(view.getByRole('button', { name: 'Cadastre Aqui' })).toBeInTheDocument()
      })
    })
  })

  describe('when feature toggle SHOW_RESPONSIVE_HEADER is false', () => {
    beforeEach(() => {
      view = render(<HeaderMenu />)
    })

    it('should render register message', () => {
      expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
    })
  })
})
