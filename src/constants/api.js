const Api = {
  url: process.env.REACT_APP_API_URL,
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
