import { getServiceProviders } from './spreadSheet'

const ProviderApi = {
  get: async () => {
    const serviceProvidersJson = await getServiceProviders()

    return mapJsonToProviders(serviceProvidersJson)
  },
}

const mapJsonToProviders = (json) => {
  return json
    .map((provider) => {
      if (provider['Exibir site'] !== 'Sim') {
        return null
      }

      return {
        id: provider['Timestamp'],
        name: provider['Nome do profissional'],
        registerNumber: provider['Número de cadastro profissional'],
        category: provider['Categoria'],
        specialty: provider['Especialidade'],
        phone: provider['Telefone'],
        email: provider['E-mail'],
        healthInsurance: provider['Planos de saúde aceitos'],
        biography: provider['Apresentação'],
        referred: provider['Cadastro'] !== 'Quero me cadastrar' ? true : false,
        attendance: {
          onlineAttendance:
            provider['Atende por videochamada?'] === 'Sim'
              ? {
                  whatsAppNumber: null,
                  platforms: provider['Plataforma de Atendimento'],
                }
              : null,
          hospitalClinicAttendance: {
            city: provider['Cidade'],
            state: provider['Estado'],
            streetName: provider['Endereço de atendimento'],
            streetNumber: null,
            stateInitials: null,
            complementInfo: null,
            name: null,
            phone: null,
            email: null,
            cep: null,
          },
          householdAttendance: null,
        },
      }
    })
    .filter((provider) => provider !== null)
}

export default ProviderApi
