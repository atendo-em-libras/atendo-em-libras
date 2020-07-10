import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HeaderMenu } from './HeaderMenu'
import { ResponsiveContext } from 'grommet'

describe('HeaderMenu component', () => {
  let view

  describe('when view is desktop', () => {
    it('should render register message', () => {
      view = render(<HeaderMenu />)
      expect(view.getByText('É profissional de saúde ou conhece alguém da área?')).toBeInTheDocument()
    })
  })

  describe('when view is mobile', () => {
    it('displays a hamburger icon for main menu', () => {
      let view = render(
        <ResponsiveContext.Provider value={'small'}>
          <HeaderMenu />
        </ResponsiveContext.Provider>
      )

      expect(view.getByRole('button', { name: 'Menu Button' })).toBeInTheDocument()
    })

    it('displays menu when menu button is clicked', () => {
      let view = render(
        <ResponsiveContext.Provider value={'small'}>
          <HeaderMenu />
        </ResponsiveContext.Provider>
      )

      const button = view.getByRole('button', { name: 'Menu Button' })

      expect(view.queryByRole('menu')).toBeNull()
      fireEvent.click(button)
      expect(view.getByRole('menu')).toBeInTheDocument()
    })
  })
})
