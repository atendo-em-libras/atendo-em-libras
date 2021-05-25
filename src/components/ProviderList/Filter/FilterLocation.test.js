import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Filter from './Filter'
import userEvent from '@testing-library/user-event'

jest.mock('../../../api/location', () => ({
  getCitiesByUF: () => Promise.resolve(['Rio Branco', 'São Paulo']),
  getUf: () => Promise.resolve(['AC', 'SP', 'XX']),
}))

window.scrollTo = jest.fn()
// Deve mostrar o filtro de localidade Quando renderiizar o  componente filter - ok
//Deve abrir as Opções de estado, cidade, limpar e salvar quando eu clicar no filtro de localidade -ok
//Deve abrir as Opções de estado quando eu seleciono o input - ok
// Deve abrir as Opções de cidade quando eu seleciono o input 
//UF e cidade preenchidos 
//UF preenchidos e cidade  nao preenchidos
//Quando clicar em salvar e tiver sem preenchimento em estado e cidade retorna mensagem de erro
//Quando tiver UF ou/e cidade prenchido e clicar em limpar deve limpar os campos
//Deve chamar a Função onSave  e fechar o modal de localidade quando clicar em salvar

describe('FilteLocation tests', () => {
  it('Deve mostrar o filtro de localidade Quando renderiizar o  componente filter', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)
    
    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')
    waitFor( () => expect(filtroLocalidade).toBeInTheDocument())
  })
  it('Deve abrir as Opções de estado, cidade, limpar e salvar quando eu clicar no filtro de localidade', () => {
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')
    
    userEvent.click(filtroLocalidade)

    waitFor( () => {
      expect(screen.getByText('Estado')).toBeInTheDocument()
      expect(screen.getByText('Cidade')).toBeInTheDocument()
      expect(screen.getByText('Limpar')).toBeInTheDocument()
      expect(screen.getByText('Salvar')).toBeInTheDocument()
      
    })
  })
  

  xit('Deve abrir menu dropdown com todos os estados quando eu clico no input estado', () => {
   const {container} = render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

    const filtroLocalidade = screen.getByTestId('teste-modal-localidade')
    userEvent.click(filtroLocalidade)

    console.log(container.querySelector('button > div > div > div > input'))

})



  it('deverá abrir menu dropdown com todos os estados ', async () => {
    //renderiza o componente
    render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

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
    expect(await screen.findByText('Cidade')).toBeInTheDocument()
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
  it('Deve Sumir dropdown quando clicar em na opcao de estado SP ', async () => { 
   

   //renderiza o componente
   render(<Filter filters={{ localities: [], categories: [], attendanceOptions: [] }} setFilters={() => {}} />)

   //pega o elemento corresponente ao filtro de localidade
   const filtroLocalidade = screen.getByTestId('teste-modal-localidade')

   //clica no filtro
   userEvent.click(filtroLocalidade)

   const estado = await screen.findByTestId('teste-estados')

   //Esperamos que o valor inicial do estado seja ''
   expect(estado.value).toBe('')

   //clicamos nesse elemento
   userEvent.click(estado)
   const opcaoAC = await screen.findByText('AC') // aqui eu guardamos as opções para clicar nela
   const opcaoSP = await screen.findByText('SP')
   const opcaoXX = await screen.findByText('XX')
    //Clico na opção SP
    userEvent.click(opcaoSP)

    // Espero que o valor do estado agora seja SP
    expect(estado.value).toEqual('SP')

    //Espero que as opções não estejam mais no documento
    expect(opcaoSP).not.toBeInTheDocument()
    expect(opcaoAC).not.toBeInTheDocument()
    expect(opcaoXX).not.toBeInTheDocument()

  })
  it('Deve abrir as Opções de cidade quando eu seleciono o input ', async () => { 

  })
})
