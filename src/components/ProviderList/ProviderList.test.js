import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProviderList } from './ProviderList'
import ProviderApi from '../../api/provider'
import mockProviders from '../../mocks/providers'

jest.mock('../../api/provider.js')
window.scrollTo = jest.fn()

describe('ProviderList tests', () => {
  it('Component should render error to find providers', async () => {
    ProviderApi.get.mockResolvedValue([])

    render(<ProviderList />)

    const providerList = await screen.findByRole('error')
    expect(providerList).toBeInTheDocument()
  })

  it('Component should show video call availability', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    const videoCallAvailability = await screen.findAllByText('Atende Online')
    expect(videoCallAvailability[0]).toBeInTheDocument()
  })

  it('Component should show empty space before loading providers', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    expect(screen.queryByRole('provider')).toBeNull()
    expect(await screen.findByText('doctor-who@tardis.com')).toBeInTheDocument()
  })

  it('Component should filter properly', async () => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)

    render(<ProviderList />)

    fireEvent.click(await screen.findByTestId('teste-plano-saude'))
    fireEvent.click(await screen.findByLabelText('Amil'))
    fireEvent.click(await screen.findByText('Salvar'))

    expect(await screen.findByText('thais_amorim773@hotmail.com')).toBeInTheDocument()
  })
})
