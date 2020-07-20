import ProviderSpreadsheet from '../utils/ProviderSpreadsheet'

const ProviderApi = {
  get: (query = '') => {
    return new Promise((resolveFn) => {
      ProviderSpreadsheet.get(query).then((data) => {
        console.log('data is: ', data)
        const providers = ProviderSpreadsheet.convertDataToProviders(data)

        resolveFn(providers)
      })
    })
  },
}

export default ProviderApi
