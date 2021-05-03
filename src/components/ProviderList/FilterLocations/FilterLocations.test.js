import React from 'react'
import ProviderApi from '../../../api/provider'
import { FormField } from '../../Form'

jest.mock('../../../api/provider')

describe('Filter locations Tests', () => {
  it('Component should render FormField', async () => {
    ProviderApi.get.mockResolvedValue([])

    await expect(<FormField />).toEqual(<FormField />)
  })
})
