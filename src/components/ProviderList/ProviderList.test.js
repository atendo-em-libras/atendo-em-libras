import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { attendanceOptions } from '../../constants/attendanceOptions'
import { healthInsurance } from '../../constants/healthInsurance'
import { categories } from '../../constants/categories'
import ProviderApi from '../../api/provider'
import mockProviders from '../../mocks/providers'
import { ProviderList } from './ProviderList'
import { errorInfo } from './ProviderList.constants'

jest.mock('../../api/provider.js')
window.scrollTo = jest.fn()

const generate = () => render(<ProviderList />)

afterEach(() => {
  jest.clearAllMocks()
})

describe('ProviderList tests no data', () => {
  it('Component should render error to find providers', async () => {
    ProviderApi.get.mockResolvedValue([])
    generate()

    const providerList = await screen.findByRole('error')
    expect(providerList).toBeInTheDocument()
  })
})

describe('ProviderList tests with data', () => {
  beforeEach(() => {
    ProviderApi.get.mockResolvedValue(mockProviders.providers)
  })

  it('Component should show video call availability', async () => {
    generate()

    const videoCallAvailability = await screen.findAllByText('Atende Online')
    expect(videoCallAvailability[0]).toBeInTheDocument()
  })

  it('Component should show empty space before loading providers', async () => {
    generate()

    expect(screen.queryByRole('provider')).toBeNull()
    expect(await screen.findByText('doctor-who@tardis.com')).toBeInTheDocument()
  })

  it.each`
    filter                 | dropdownOpt                  | checkboxOpt                       | expected
    ${'attendance option'} | ${'teste-modal-atendimento'} | ${attendanceOptions[0]}           | ${'47 112233445'}
    ${'category'}          | ${'checkbox-categoria'}      | ${categories[1].description}      | ${'34 999624855'}
    ${'health insurance'}  | ${'teste-plano-saude'}       | ${healthInsurance[3].description} | ${'34 999624855'}
  `('Component should filter by $filter properly', async ({ dropdownOpt, checkboxOpt, expected }) => {
    generate()

    fireEvent.click(await screen.findByTestId(dropdownOpt))
    fireEvent.click(await screen.findByLabelText(checkboxOpt))
    fireEvent.click(await screen.findByTestId('filter-save-button'))

    expect(await screen.findByText(expected)).toBeInTheDocument()
  })
})

describe('ProviderList test error', () => {
  it('Component should show error card when api fails', async () => {
    ProviderApi.get.mockRejectedValue(new Error('API error'))
    generate()

    fireEvent.click(await screen.findByTestId('info-card-button'))

    expect(await screen.findByText(errorInfo.errorTextButton)).toBeInTheDocument()
  })
})
