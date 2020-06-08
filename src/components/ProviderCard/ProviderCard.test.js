import React from 'react'
import { ProviderCard } from './ProviderCard'
import { render } from '@testing-library/react'

describe('ProviderCard tests', () => {
  let providerCardComponent
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

  beforeEach(() => {
    providerCardComponent = render(
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
        city={city}
        state={state}
        address={address}
      />
    )
  })

  it('Component should render name property', () => {
    expect(providerCardComponent.getByText(name)).toBeInTheDocument()
  })

  it('Component should render category property', () => {
    expect(providerCardComponent.getByText(category)).toBeInTheDocument()
  })

  it('Component should render specialty property', () => {
    expect(providerCardComponent.getByText(specialty)).toBeInTheDocument()
  })

  it('Component should render license number', () => {
    expect(providerCardComponent.getByText(licenseNumber)).toBeInTheDocument()
  })

  it('Component should render phone number', () => {
    expect(providerCardComponent.getByText(phoneNumber)).toBeInTheDocument()
  })

  it('Component should render email', () => {
    expect(providerCardComponent.getByText(email)).toBeInTheDocument()
  })

  it('Component should render experience', () => {
    expect(providerCardComponent.getByText(experience)).toBeInTheDocument()
  })

  it('Component should render health insurence', () => {
    expect(providerCardComponent.getByText(healthInsurance)).toBeInTheDocument()
  })

  it('Component should render video call platform', () => {
    expect(providerCardComponent.getByText(videoCallPlatform)).toBeInTheDocument()
  })

  it('Component should render city and state', () => {
    expect(providerCardComponent.getByText(`${city} - ${state}`)).toBeInTheDocument()
  })

  it('Component should render address', () => {
    expect(providerCardComponent.getByText(address)).toBeInTheDocument()
  })

  it('Component should not render video call avallability', () => {
    expect(providerCardComponent.queryByText('Atende Online')).toBeNull()
  })

  it('Component should render video call avallability', () => {
    const providerCardComponent = render(
      <ProviderCard
        name={name}
        category={category}
        specialty={specialty}
        licenseNumber={licenseNumber}
        videoCallAvailability={true}
        phoneNumber={phoneNumber}
        email={email}
      />
    )

    expect(providerCardComponent.getByText('Atende Online')).toBeInTheDocument()
  })
})