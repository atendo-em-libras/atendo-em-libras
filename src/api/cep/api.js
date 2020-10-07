import Axios from 'axios'
import { Cep } from '../../constants/api'

const CepApi = {
  get: async (cepNumber) => {
    let res = await Axios.get(`${Cep.url}/${cepNumber}/${Cep.returnType}`)
    return res.data
  },
}

export default CepApi
