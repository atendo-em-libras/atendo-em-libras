import CepApi from './api'

describe('Cep API', () => {
  it('Correct Cep must show correct values', async () => {
    const cepInformation = await CepApi.get('01310300')

    expect(cepInformation.uf).toEqual('SP')
    expect(cepInformation.localidade).toEqual('São Paulo')
  })

  it('Correct Cep must not show error', async () => {
    const cepInformation = await CepApi.get('91380410')
    expect(cepInformation.erro).toBeFalsy()
  })

  it('Incorret Cep must show empty value', async () => {
    const cepInformation = await CepApi.get('10000000')
    expect(cepInformation.erro).toBeTruthy()
  })
})
