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

export { Api, Cep }
