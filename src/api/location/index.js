import Axios from 'axios'
import { Cep, IbgeService } from '../../constants/api'

const LocationApi = {
  getByCep: async (cepNumber) => {
    let res = await Axios.get(`${Cep.url}/${cepNumber}/${Cep.returnType}`)
    return res.data
  },

  getCitiesByUF: async (uf) => {
    let res = await Axios.get(`${IbgeService.url}/${uf}/${IbgeService.paths.providers}`)
    return res.data.map((obj) => obj.nome).sort()
  },

  getUf: async () => {
    let res = await Axios.get(`${IbgeService.url}`)
    return res.data.map((obj) => obj.sigla).sort()
  },
}

export default LocationApi
