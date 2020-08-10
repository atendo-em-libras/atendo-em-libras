import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderNav } from './HeaderNav'
import { ResponsiveContext } from 'grommet'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

describe('HeaderNav component', () => {
  describe('when feature toggle navbar is active', () => {
    describe('when view is dektop', () => {
      it('renders a navigational bar', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <HeaderNav />
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByRole('navigation')).toBeInTheDocument()
      })

      it('renders a list of navigational links', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <HeaderNav />
          </FeatureTogglesContext.Provider>
        )

        expect(view.findAllByRole('listitem')).not.toBe([])
      })

      it('renders a Home button', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <HeaderNav />
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByText('Home')).toBeInTheDocument()
      })

      it('renders an About Us button', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <HeaderNav />
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByText('Sobre Nós')).toBeInTheDocument()
      })
    })

    describe('when view is mobile', () => {
      it('displays a hamburger icon for main menu', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderNav />
            </ResponsiveContext.Provider>
          </FeatureTogglesContext.Provider>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays menu when menu button is clicked', () => {
        let view = render(
          <FeatureTogglesContext.Provider value={{ navbar: true }}>
            <ResponsiveContext.Provider value={'small'}>
              <HeaderNav />
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

  describe('when feature toggle navbar is inactive', () => {
    describe('when view is mobile', () => {
      it('displays a hamburger icon for main menu', () => {
        let view = render(
          <ResponsiveContext.Provider value={'small'}>
            <HeaderNav />
          </ResponsiveContext.Provider>
        )

        expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
      })

      it('displays menu when menu button is clicked', () => {
        let view = render(
          <ResponsiveContext.Provider value={'small'}>
            <HeaderNav />
          </ResponsiveContext.Provider>
        )

        const button = view.getByRole('button', { name: 'Menu Button' })

        expect(view.queryByRole('menu')).toBeNull()
        fireEvent.click(button)
        expect(view.getByRole('menu')).toBeInTheDocument()
      })
    })
  })
})
