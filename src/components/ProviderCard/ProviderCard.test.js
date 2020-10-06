import React from 'react'
import { ProviderCard } from './ProviderCard'
import { render, screen, fireEvent } from '@testing-library/react'
import mockProviders from '../../mocks/providers'
import { ResponsiveContext } from 'grommet'
import 'jest-styled-components'

describe('ProviderCard tests', () => {
  let view

  const provider = mockProviders.providers[0]

  beforeEach(() => {
    view = render(<ProviderCard provider={provider} />)
  })

  it('Component should render name property', () => {
    expect(screen.getByText(provider.name)).toBeInTheDocument()
  })

  it('Component should render category property', () => {
    expect(screen.getByText(provider.category)).toBeInTheDocument()
  })

  it('Component should render specialty property', () => {
    expect(screen.getByText(provider.specialty)).toBeInTheDocument()
  })

  it('Component should render license number', () => {
    expect(screen.getByText(provider.registerNumber)).toBeInTheDocument()
  })

  it('Component should render phone number', () => {
    expect(screen.getByText(provider.phone)).toBeInTheDocument()
  })

  it('Component should render email', () => {
    expect(screen.getByText(provider.email)).toBeInTheDocument()
  })

  it('Component should render experience', () => {
    expect(screen.getByText(provider.biography)).toBeInTheDocument()
  })

  it('Component should render health insurence', () => {
    expect(screen.getByText(provider.healthInsurance)).toBeInTheDocument()
  })

  it('Component should render video call platform', () => {
    provider.attendance.onlineAttendance = {
      platforms: 'Zoom',
    }

    view.rerender(<ProviderCard provider={provider} />)

    expect(screen.getByText(provider.attendance.onlineAttendance.platforms)).toBeInTheDocument()
  })

  it('Component should render city and state', () => {
    console.log(screen)
    expect(
      screen.getByText(
        `${provider.attendance.hospitalClinicAttendance.city} - ${provider.attendance.hospitalClinicAttendance.state} (${provider.attendance.hospitalClinicAttendance.stateInitials})`
      )
    ).toBeInTheDocument()
  })

  it('Component should render only state when city is not informed', () => {
    provider.attendance.hospitalClinicAttendance.city = ''

    view.rerender(<ProviderCard provider={provider} />)

    expect(screen.getByText(`${provider.attendance.hospitalClinicAttendance.state}`)).toBeInTheDocument()
  })

  it('Component should render address', () => {
    expect(screen.getByText(provider.attendance.hospitalClinicAttendance.streetName)).toBeInTheDocument()
  })

  it('Component should render video call avallability', () => {
    view.rerender(
      <ProviderCard provider={{ ...provider, attendance: { ...provider.attendance, onlineAttendance: {} } }} />
    )

    expect(screen.getByText('Atende Online')).toBeInTheDocument()
  })

  it('Component should not render video call avallability', () => {
    view.rerender(
      <ProviderCard provider={{ ...provider, attendance: { ...provider.attendance, onlineAttendance: null } }} />
    )

    expect(screen.queryByText('Atende Online')).toBeNull()
  })

  it('Component should render correctly', () => {
    const { container } = view
    expect(container).toMatchSnapshot()
  })

  describe('when mobile', () => {
    it('Component should render correctly', () => {
      view.rerender(
        <ResponsiveContext.Provider value={'small'}>
          <ProviderCard provider={provider} />
        </ResponsiveContext.Provider>
      )
      const { container } = view
      expect(container).toMatchSnapshot()
    })

    it('Should show and hide more info', () => {
      view.rerender(
        <ResponsiveContext.Provider value={'small'}>
          <ProviderCard provider={provider} />
        </ResponsiveContext.Provider>
      )

      expect(screen.getByText('Saiba Mais')).toBeInTheDocument()

      const buttonSaibaMais = screen.getByRole('button')
      fireEvent.click(buttonSaibaMais)
      expect(screen.getByText('Fechar')).toBeInTheDocument()

      const buttonFechar = screen.getByRole('button')
      fireEvent.click(buttonFechar)
      expect(screen.getByText('Saiba Mais')).toBeInTheDocument()
    })
  })
})
