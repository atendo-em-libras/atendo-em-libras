import spreadSheet from './spreadSheet'
import { toggles } from '../constants/featureToggles'
import Axios from 'axios'
import { Api } from '../constants/api'

const ProviderApi = {
  get: async () => {
    if (toggles.apiIntegration) {
      let res = await Axios.get(Api.url + Api.paths.providers)
      return res.data
    }

    const serviceProvidersJson = await spreadSheet.getServiceProviders()
    return mapJsonToProviders(serviceProvidersJson)
  },
  post: async (professional) => {
    let res = await Axios.post(Api.url + Api.paths.providers, professional)
    return res
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
