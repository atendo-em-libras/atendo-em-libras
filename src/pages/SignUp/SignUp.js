import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import {
  Box,
  Image,
  Heading,
  FormField,
  TextInput,
  Form,
  Select,
  Paragraph,
  TextArea,
  Button,
  RadioButtonGroup,
  ResponsiveContext,
} from 'grommet'
import { respondTo } from '../../utils/breakpoints/_respondTo'

import { RadioButtonGroup as RadioButtonGroupCustom } from '../../components/RadioButtonGroup/RadioButtonGroup'

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
  const [formValue, setFormValue] = useState({ name: '' })

  const screenSize = useContext(ResponsiveContext)

  const PersonalInfo = () => (
    <>
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
    </>
  )

  const ProfessionalInfo = () => (
    <>
      <Heading>Informações profissionais</Heading>
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
    </>
  )

  return (
    <>
      <Box margin={screenSize === 'small' ? { horizontal: 'xlarge' } : { horizontal: '30%' }}>
        <Box>
          <Box direction="row" alignSelf="center">
            <Square margin={{ right: 'medium' }} background="white">
              <Image src={logoIcon} fill />
            </Square>
            <Heading level="2">Cadastrar</Heading>
          </Box>

          <Form
            value={formValue}
            onChange={(nextValue) => setFormValue(nextValue)}
            onReset={() => setFormValue({})}
            onSubmit={({ value }) => {
              console.log(value)
            }}
          >
            <PersonalInfo />
            <ProfessionalInfo />

            <Heading color="#5996F7" level="4">
              Atendimento
            </Heading>
            <Paragraph>Escolha o tipo de atendimento</Paragraph>
            <Box direction="row">
              <RadioButtonGroupCustom
                data-testid="atendimento-option"
                options={[
                  { label: 'Online', value: tiposAtendimento.Online, role: 'option' },
                  { label: 'Em clínica/hospital', value: tiposAtendimento.EmClinica, role: 'option' },
                  { label: 'Domiciliar', value: tiposAtendimento.Domiciliar, role: 'option' },
                ]}
                onChange={() => {}}
              />
            </Box>
            <Paragraph>Atende video por video chamada?</Paragraph>

            <RadioButtonGroup
              data-testid="video-call-option"
              name="video-call-option"
              options={[
                { label: 'Sim', value: true, role: 'option', selected: true },
                { label: 'Não', value: false, role: 'option' },
              ]}
            />
            <Box direction="row">
              <FormField name="plataform" htmlFor="plataform__input" label="Plataforma">
                <Select name="plataform" options={['Zoom', 'Whatsapp']} id="plataform" />
              </FormField>
              <FormField name="contact" htmlFor="contact" label="Contato" margin="0 0 5px 0">
                <TextInput name="contact" id="contact" />
              </FormField>
            </Box>
            <Heading color="#5996f7" level="4" onClick={() => {}}>
              + Adiconar outra plataforma
            </Heading>
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </Box>
    </>
  )
}

const tiposAtendimento = {
  Online: 0,
  EmClinica: 1,
  Domiciliar: 2,
}

export { SignUp, tiposAtendimento }
