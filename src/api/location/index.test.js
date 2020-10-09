import LocationApi from '.'

describe('Cep API', () => {
  it('Correct Cep must show correct values', async () => {
    const cepInformation = await LocationApi.getByCep('01310300')

    expect(cepInformation.uf).toEqual('SP')
    expect(cepInformation.localidade).toEqual('São Paulo')
  })

  it('Correct Cep must not show error', async () => {
    const cepInformation = await LocationApi.getByCep('91380410')
    expect(cepInformation.erro).toBeFalsy()
  })

  it('Incorret Cep must show empty value', async () => {
    const cepInformation = await LocationApi.getByCep('10000000')
    expect(cepInformation.erro).toBeTruthy()
  })
})

describe('Ibge Service', () => {
  it('Must return all UFs', async () => {
    const states = await LocationApi.getUf()

    expect(states.length).toEqual(27)
  })

  it('Must return capital city of RS, SP, MG and PE', async () => {
    const rsCities = await LocationApi.getCitiesByUF('RS')
    const spCities = await LocationApi.getCitiesByUF('SP')
    const peCities = await LocationApi.getCitiesByUF('PE')
    const mgCities = await LocationApi.getCitiesByUF('MG')

    expect(rsCities).toContain('Porto Alegre')
    expect(spCities).toContain('São Paulo')
    expect(peCities).toContain('Recife')
    expect(mgCities).toContain('Belo Horizonte')
  })
})
