import providersData from '../../mocks/providers'

const mockProviderApi = {
  get: jest.fn().mockImplementation(() => {
    return providersData.providers
  }),
}

export default mockProviderApi
