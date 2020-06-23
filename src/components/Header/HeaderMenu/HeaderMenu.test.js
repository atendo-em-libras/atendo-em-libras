import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMenu } from './HeaderMenu'
import { ResponsiveContext } from 'grommet'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

describe('HeaderMenu component', () => {
  let view

  describe('when view is desktop', () => {
    describe('when feature toggle SHOW_RESPONSIVE_HEADER is true', () => {
      it('should render register message', () => {
        view = render(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: true }}>
            <HeaderMenu />
          </FeatureTogglesContext.Provider>
        )
        expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
      })
    })
    describe('when feature toggle SHOW_RESPONSIVE_HEADER is false', () => {
      it('should render register message', () => {
        view = render(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: false }}>
            <HeaderMenu />
          </FeatureTogglesContext.Provider>
        )
        expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
      })
    })
  })
  describe('when view is mobile', () => {
    describe('when feature toggle SHOW_RESPONSIVE_HEADER is false', () => {
      it('should render register message', () => {
        view = render(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: false }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderMenu />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )
        expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
      })
    })
    describe('when feature toggle SHOW_RESPONSIVE_HEADER is true', () => {
      it('displays a hamburger icon for main menu', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderMenu />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays menu when menu button is clicked', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ SHOW_RESPONSIVE_HEADER: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderMenu />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )

        const button = view.getByRole('button', { name: 'Menu Button' })

        expect(view.queryByRole('menu')).toBeNull()
        fireEvent.click(button)
        expect(view.getByRole('menu')).toBeInTheDocument()
      })
    })
  })
})
