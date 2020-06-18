import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProviderList } from './ProviderList'
import { getServiceProviders } from '../../api/spreadSheet.js'

jest.mock('../../api/spreadSheet.js')

let mockedProviderList = [
  {
    'Apresentação ': 'Fisioterapeuta - Traumato Ortopedia ',
    'Atende por videochamada? ': 'Não',
    'Cadastro ': 'Quero me cadastrar',
    'Categoria ': 'Fisioterapia',
    'Cidade ': 'Uberlândia ',
    'E-mail ': 'thais_amorim773@hotmail.com',
    'Endereço de atendimento ': 'R. Bernardo Cupertino, 423 - B. Martins',
    'Especialidade ': 'Traumato-ortopedia',
    'Estado ': 'Minas Gerais (MG)',
    'Local de atendimento ': 'Clínica Habilitar (Instituto de Habilitação física)',
    'Nome do profissional ': 'Thaís Amorim ',
    'Número de cadastro profissional ': 'Crefito4 202323',
    'Planos de saúde aceitos ': 'Sul América, IPSM, Saúde Caixa, Cassi, Amil e Vitalis',
    'Plataforma de Atendimento ': '',
    'Sabe LIBRAS? ': '',
    'Telefone ': '34 999624855',
    'Timestamp ': '5/22/2020 12:15:19',
    'Exibir site ': 'Sim',
  },
  {
    'Apresentação ': 'Nutrição',
    'Atende por videochamada? ': 'Sim',
    'Cadastro ': 'Quero me cadastrar',
    'Categoria ': 'Nutrição',
    'Cidade ': 'Belo Horizonte ',
    'E-mail ': 'alerebemestar@gmail.com',
    'Endereço de atendimento ': 'Rua Santa Rita Durão, 322 - sala 1309 Savassi',
    'Especialidade ': 'Nutricionista',
    'Estado ': 'Minas Gerais (MG)',
    'Local de atendimento ': 'Clínica Comunicarte',
    'Nome do profissional ': 'Lílian Almeida',
    'Número de cadastro profissional ': 'CRN9: 12273',
    'Planos de saúde aceitos ': 'Apenas particular',
    'Plataforma de Atendimento ': '@alerebemestar',
    'Sabe LIBRAS? ': '',
    'Telefone ': '34 982616599',
    'Timestamp ': '5/22/2020 19:07:26',
    'Exibir site ': 'Não',
  },
]

describe('ProviderList tests', () => {
  it('Component should render a provider card when showCard column is yes', async () => {
    getServiceProviders.mockResolvedValue(mockedProviderList)
    render(<ProviderList />)
    const providerList = await screen.findByText('thais_amorim773@hotmail.com')
    expect(providerList).toBeInTheDocument()
  })

  it('Component should not render a provider card when showCard column is no', async () => {
    getServiceProviders.mockResolvedValue(mockedProviderList)
    render(<ProviderList />)
    const providerList = await screen.findAllByText('Contato')
    expect(providerList.length).toBeLessThanOrEqual(1)
  })

  it('Component should render error to find providers', async () => {
    const error = []
    getServiceProviders.mockResolvedValue(error)
    render(<ProviderList />)
    const providerList = await screen.findByRole('error')
    expect(providerList).toBeInTheDocument()
  })

  it('Component should show video call availability', async () => {
    mockedProviderList[0]['Atende por videochamada? '] = 'Sim'
    getServiceProviders.mockResolvedValue(mockedProviderList)
    render(<ProviderList />)
    const videoCallAvailability = await screen.findAllByText('Atende Online')
    expect(videoCallAvailability[0]).toBeInTheDocument()
  })

  it('Component should show empty space before loading providers', async () => {
    getServiceProviders.mockResolvedValue(mockedProviderList)
    render(<ProviderList />)
    expect(screen.queryByRole('provider')).toBeNull()
    expect(screen.getByTestId('emptyList')).toBeInTheDocument()
    expect(await screen.findByText('thais_amorim773@hotmail.com')).toBeInTheDocument()
  })
})
