import React from 'react'
import { ProviderCard } from './ProviderCard'
import { render, screen } from '@testing-library/react'

describe('ProviderCard tests', () => {
  let view
  const name = 'Luciana Andrade Souza'
  const category = 'Medicina'
  const specialty = 'Clínica Geral'
  const licenseNumber = 'PE 16505 / RQE 11952'
  const phoneNumber = '(11) 96578 3434'
  const email = 'i.standar27@fgv.com.br'
  const experience = 'Experience with lorem ipsum'
  const healthInsurance = 'Amil, Unimed, SulAmérica'
  const videoCallPlatform = 'iClinic'
  const city = 'Recife'
  const state = 'PE'
  const address = 'Rua Antônio Falcão, 45, Boa Viagem'
  const videoCallAvailability = true

  beforeEach(() => {
    view = render(
      <ProviderCard
        name={name}
        category={category}
        specialty={specialty}
        licenseNumber={licenseNumber}
        phoneNumber={phoneNumber}
        email={email}
        experience={experience}
        healthInsurance={healthInsurance}
        videoCallPlatform={videoCallPlatform}
        videoCallAvailability={videoCallAvailability}
        city={city}
        state={state}
        address={address}
      />
    )
  })

  it('Component should render name property', () => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })

  it('Component should render category property', () => {
    expect(screen.getByText(category)).toBeInTheDocument()
  })

  it('Component should render specialty property', () => {
    expect(screen.getByText(specialty)).toBeInTheDocument()
  })

  it('Component should render license number', () => {
    expect(screen.getByText(licenseNumber)).toBeInTheDocument()
  })

  it('Component should render phone number', () => {
    expect(screen.getByText(phoneNumber)).toBeInTheDocument()
  })

  it('Component should render email', () => {
    expect(screen.getByText(email)).toBeInTheDocument()
  })

  it('Component should render experience', () => {
    expect(screen.getByText(experience)).toBeInTheDocument()
  })

  it('Component should render health insurence', () => {
    expect(screen.getByText(healthInsurance)).toBeInTheDocument()
  })

  it('Component should render video call platform', () => {
    expect(screen.getByText(videoCallPlatform)).toBeInTheDocument()
  })

  it('Component should render city and state', () => {
    expect(screen.getByText(`${city} - ${state}`)).toBeInTheDocument()
  })

  it('Component should render address', () => {
    expect(screen.getByText(address)).toBeInTheDocument()
  })

  it('Component should render video call avallability', () => {
    expect(screen.getByText('Atende Online')).toBeInTheDocument()
  })

  it('Component should not render video call avallability', () => {
    view.rerender(
      <ProviderCard
        name={name}
        category={category}
        specialty={specialty}
        licenseNumber={licenseNumber}
        videoCallAvailability={false}
        phoneNumber={phoneNumber}
        email={email}
      />
    )

    expect(screen.queryByText('Atende Online')).toBeNull()
  })

  it('Component should not render video call platform', () => {
    view.rerender(
      <ProviderCard
        name={name}
        category={category}
        specialty={specialty}
        licenseNumber={licenseNumber}
        videoCallAvailability={false}
        phoneNumber={phoneNumber}
        email={email}
      />
    )

    expect(screen.queryByText(videoCallPlatform)).toBeNull()
  })
})
