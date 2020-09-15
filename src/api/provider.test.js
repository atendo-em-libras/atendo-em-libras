import axios from 'axios'
import ProviderApi from './provider'
import spreadSheet from './spreadSheet'
import { toggles } from '../constants/featureToggles'
import Api from '../constants/api'

jest.mock('axios')
jest.mock('./spreadSheet')
jest.mock('../constants/featureToggles', () => {
  return { toggles: { apiIntegration: true } }
})
describe('ProviderApi', () => {
  describe('ProviderApi.get', () => {
    describe('When apiIntegration toggle is True', () => {
      it('Should fetch data from API', async () => {
        axios.get.mockResolvedValue({ data: [] })

        await ProviderApi.get()
        expect(axios.get).toHaveBeenCalledWith(`${Api.url}/professionals/`)
      })
    })

    describe('When apiIntegration toggle is False', () => {
      it('Should fetch data from spreadsheet', async () => {
        toggles.apiIntegration = false
        spreadSheet.getServiceProviders.mockResolvedValue([])
        await ProviderApi.get()
        expect(spreadSheet.getServiceProviders).toHaveBeenCalledTimes(1)
      })
    })
  })
})
