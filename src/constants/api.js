const Api = {
  url: 'https://atendo-em-libras-api.herokuapp.com',
  paths: {
    providers: '/professionals/',
  },
}
const Cep = {
  url: 'https://viacep.com.br/ws',
  returnType: 'json/',
}

const IbgeService = {
  url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  paths: {
    providers: '/municipios',
  },
}

export { Api, Cep, IbgeService }
