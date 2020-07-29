import { getServiceProviders } from './spreadSheet'

const ProviderApi = {
  get: async () => {
    const serviceProvidersJson = await getServiceProviders()

    return mapJsonToProviders(serviceProvidersJson)
  },
}

const mapJsonToProviders = (json) => {
  return [json].map((provider) => {
    return {
      name: provider['Nome do profissional '],
      licenseNumber: provider['Número de cadastro profissional '],
      category: provider['Categoria '],
      specialty: provider['Especialidade '],
      videoCallAvailability: provider['Atende por videochamada? '] === 'Sim' ? true : false,
      phoneNumber: provider['Telefone '],
      email: provider['E-mail '],
      city: provider['Cidade '],
      state: provider['Estado '],
      address: provider['Endereço de atendimento '],
      healthInsurance: provider['Planos de saúde aceitos '],
      experience: provider['Apresentação '],
      videoCallPlatform: provider['Plataforma de Atendimento '],
      showCard: provider['Exibir site '] === 'Sim' ? true : false,
    }
  })
}

export default ProviderApi
