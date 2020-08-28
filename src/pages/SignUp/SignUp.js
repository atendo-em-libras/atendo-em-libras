import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import { Box, Image, Heading, FormField, TextInput, Form, Select, Paragraph, TextArea } from 'grommet'
import { respondTo } from '../../utils/breakpoints/_respondTo'

const SignUpWrapper = styled.div`
  width: 100%;
  margin: auto;
  ${respondTo.desktop`
    width:900px;
  `}
`

const Square = styled(Box)`
  box-shadow: 0px 10px 32px #00000029;
  border-radius: 0px 20px 20px 20px;
  width: 45px;
  height: 45px;
  padding: 10px;
  ${respondTo.desktop`
    width: 50px;
    height: 50px;
  `}
`

const SignUp = () => {
  const [value] = useState({ name: '' })

  return (
    <>
      <SignUpWrapper>
        <Box fill="horizontal" margin={{ top: 'large' }}>
          <Box direction="row" alignSelf="center">
            <Square margin={{ right: 'medium' }} background="white">
              <Image src={logoIcon} fill />
            </Square>
            <Heading level="2">Cadastrar</Heading>
          </Box>

          <Form value={value}>
            <Heading color="#5996F7" level="4">
              Informações pessoais
            </Heading>
            <FormField name="name" htmlFor="name" label="Nome Completo">
              <TextInput name="name" id="name" />
            </FormField>
            <FormField name="phone" htmlFor="phone" label="Telefone">
              <TextInput name="phone" id="phone" />
            </FormField>
            <FormField name="email" htmlFor="email" label="Email">
              <TextInput name="email" id="email" />
            </FormField>
            <Heading color="#5996F7" level="4">
              Informações profissionais
            </Heading>
            <FormField name="category" htmlFor="category__input" label="Categoria">
              <Select name="category" options={['Médico', 'Advogado']} id="category" />
            </FormField>
            <FormField name="expertise" htmlFor="expertise" label="Especialidade">
              <TextInput name="expertise" id="expertise" />
            </FormField>
            <FormField name="register_number" htmlFor="register_number" label="Número de cadastro profissional">
              <TextInput name="register_number" id="register_number" />
            </FormField>
            <Paragraph size="small">Exemplo: CRM, CRP</Paragraph>
            <FormField name="presentation" htmlFor="presentation" label="Apresentação">
              <TextArea
                name="presentation"
                id="presentation"
                placeholder="Descreva um pouco a sua área profissional e de atendimento"
              />
            </FormField>
            <FormField name="health_insurance_plans" htmlFor="health_insurance_plans" label="Planos de saúde aceitos">
              <TextInput name="health_insurance_plans" id="health_insurance_plans" />
            </FormField>
            <Heading color="#5996F7" level="4">
              Atendimento
            </Heading>
            <Paragraph>Escolha o tipo de atendimento</Paragraph>
          </Form>
        </Box>
      </SignUpWrapper>
    </>
  )
}

export { SignUp }
