import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Filter from './Filter'
import userEvent from '@testing-library/user-event'

jest.mock('../../../api/location', () => ({
  getCitiesByUF: () => Promise.resolve(['São Paulo', 'Adolfo']),
  getUf: () => Promise.resolve(['SP', 'AC', 'XX', 'RS']),
}))

window.scrollTo = jest.fn()
// Deve mostrar o filtro de localidade Quando renderiizar o  componente filter - ok
//Deve abrir as Opções de estado, cidade, limpar e salvar quando eu clicar no filtro de localidade -ok
//Deve abrir as Opções de estado quando eu seleciono o input - ok
//Deve abrir as Opções de cidade quando eu seleciono o input  - ok
//UF e cidade preenchidos
//UF preenchidos e cidade  nao preenchidos
//Quando clicar em salvar e tiver sem preenchimento em estado e cidade retorna mensagem de erro
//Quando tiver UF ou/e cidade prenchido e clicar em limpar deve limpar os campos
//Deve chamar a Função onSave  e fechar o modal de localidade quando clicar em salvar

const generate = () =>
  render(
    <Filter
      filters={{ localities: [], categories: [], attendanceOptions: [], healthInsurances: [] }}
      setFilters={() => {}}
    />
  )

describe('FilteLocation tests', () => {
  it('Deve mostrar o filtro de localidade Quando renderiizar o  componente filter', () => {
    generate()

    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')
    waitFor(() => expect(filtroLocalidade).toBeInTheDocument())
  })
  it('Deve abrir as Opções de estado, cidade, limpar e salvar quando eu clicar no filtro de localidade', () => {
    generate()

    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')

    userEvent.click(filtroLocalidade)

    waitFor(() => {
      expect(screen.getByText('Estado')).toBeInTheDocument()
      // expect(screen.getByText('Cidade')).toBeInTheDocument()
      expect(screen.getByText('Limpar')).toBeInTheDocument()
      expect(screen.getByText('Salvar')).toBeInTheDocument()
    })
  })
  it('deverá abrir menu dropdown com todos os estados ', async () => {
    //renderiza o componente
    generate()

    //pega o elemento corresponente ao filtro de localidade
    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')

    //clica no filtro
    userEvent.click(filtroLocalidade)

    //esperamos que:
    // 1) o modal esteja no documento
    expect(await screen.findByTestId('teste-modal')).toBeInTheDocument()

    //2) tenha um elemento label com o texto Estado
    expect(await screen.findByText('Estado')).toBeInTheDocument()
    //3) tenha um elemento label com o texto Cidade
    //  expect(await screen.findByText('Cidade')).toBeInTheDocument()
    //4 tenha um botao com o texto Limpar
    expect(await screen.findByText('Limpar')).toBeInTheDocument()
    //5 tenha um botao com o texto Salvar
    expect(await screen.findByText('Salvar')).toBeInTheDocument()

    // pegamos o elemento input que guardará o valor do estado selecionado
    const estado = await screen.findByTestId('teste-estados')

    //Esperamos que o valor inicial do estado seja ''
    expect(estado.value).toBe('')

    //clicamos nesse elemento
    userEvent.click(estado)

    //Esperamos que as opções estejam disponíveis (AC, SP e XX) - se tirarmos o clique anterior não vemos as opções

    const opcaoAC = await screen.findByText('AC') // aqui eu guardamos as opções para clicar nela
    const opcaoSP = await screen.findByText('SP')
    const opcaoXX = await screen.findByText('XX')
    expect(opcaoAC).toBeInTheDocument()
    expect(opcaoSP).toBeInTheDocument()
    expect(opcaoXX).toBeInTheDocument()
  })
  it('Deve abrir as Opções de cidade quando eu seleciono o input cidades ', async () => {
    generate()

    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')

    userEvent.click(filtroLocalidade)

    expect(await screen.findByTestId('teste-modal')).toBeInTheDocument()

    const estado = await screen.findByTestId('teste-estados')
    userEvent.click(estado)
    expect(estado.value).toBe('')
    const opcaoSP = await screen.findByText('SP')
    expect(opcaoSP).toBeInTheDocument()
  })
})
