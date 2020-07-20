import GoogleChart from './GoogleChart'

const ProviderSpreadsheet = {
  url:
    'https://docs.google.com/spreadsheets/d/1rRGYf7ynJ6srpk9ryab4OWtuNdLgpPDEjGSMNaoyTcM/gviz/tq?sheet=Form%20Responses%201',
  get: (query = '') => {
    return new Promise((resolveFn) => {
      GoogleChart.get(
        'https://docs.google.com/spreadsheets/d/1rRGYf7ynJ6srpk9ryab4OWtuNdLgpPDEjGSMNaoyTcM/gviz/tq?sheet=Form%20Responses%201',
        query
      ).then((data) => {
        resolveFn(data)
      })
    })
  },
  convertDataToProviders: (data) => {
    const rows = data.getNumberOfRows()
    const providers = []

    for (var currRow = 0; currRow < rows; currRow++) {
      let provider = {}

      provider.name = data.getValue(currRow, 1)
      provider.licenseNumber = data.getValue(currRow, 5)
      provider.category = data.getValue(currRow, 3)
      provider.specialty = data.getValue(currRow, 4)
      provider.videoCallAvailability = data.getValue(currRow, 14) === 'Sim' ? true : false
      provider.phoneNumber = data.getValue(currRow, 8)
      provider.email = data.getValue(currRow, 9)
      provider.city = data.getValue(currRow, 11)
      provider.state = data.getValue(currRow, 10)
      provider.address = data.getValue(currRow, 12)
      provider.healthInsurance = data.getValue(currRow, 6)
      provider.experience = data.getValue(currRow, 2)
      provider.videoCallPlatform = data.getValue(currRow, 15)
      provider.showCard = data.getValue(currRow, 17) === 'Sim' ? true : false

      providers.push(provider)
    }

    return providers
  },
}

Object.freeze(ProviderSpreadsheet)
export default ProviderSpreadsheet
