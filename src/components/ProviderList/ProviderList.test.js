import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProviderList } from './ProviderList'
import { getServiceProviders } from '../../api/spreadSheet.js'

jest.mock('../../api/spreadSheet.js')

describe('ProviderList tests', () => {
  it('Component should render a provider card', async () => {
    const mockedProviderList = [
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
      },
    ]

    getServiceProviders.mockResolvedValue(mockedProviderList)
    render(<ProviderList />)
    const proveiderList = await screen.findByRole('provider')
    expect(proveiderList).toBeInTheDocument()
  })

  it('Component should render error to find providers', async () => {
    const error = []
    getServiceProviders.mockResolvedValue(error)
    render(<ProviderList />)
    const proveiderList = await screen.findByText(
      'Não foram encontrados profissionais cadastrados. Tente novamente mais tarde.'
    )
    expect(proveiderList).toBeInTheDocument()
  })
})
