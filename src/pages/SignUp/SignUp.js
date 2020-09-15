import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import { Heading } from '../../components/Typography/Heading'
import {
  Box,
  Image,
  FormField,
  TextInput,
  Form,
  Select,
  Paragraph,
  TextArea,
  Button,
  ResponsiveContext,
  RadioButton,
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

const HeadingSectionCustom = (props) => (
  <Heading color="#5996F7" level="3">
    {props.children}
  </Heading>
)

const SignUp = () => {
  const [formValue, setFormValue] = useState({ name: '' })
  const [checked, setChecked] = React.useState(false)

  const screenSize = useContext(ResponsiveContext)

  const TermsAndConditions = () => (
    <>
      <HeadingSectionCustom>Termo de aceite</HeadingSectionCustom>

      <Paragraph size="small" fill>
        O site Atendo em Libras é uma iniciativa, sem fins lucrativos, que visa possibilitar maior visibilidade de dados
        de contato de profissionais que sabem Libras. Contudo, seu conteúdo é construído de forma colaborativa pela
        comunidade, não podendo assim o site garantir sua veracidade, exatidão, integridade ou qualidade das informações
        aqui expostas. Dessa forma, isenta-se de qualquer responsabilidade quanto à utilização ou não destas
        informações. Se você encontrou seus dados aqui expostos e deseja removê-los, envie um email para
        atendoemlibras@gmail.com.
      </Paragraph>

      <FormField>
        <RadioButton
          checked={checked}
          label="Li e aceito"
          name="termsAndConditions"
          onChange={(event) => setChecked(event.target.checked)}
        />
      </FormField>
    </>
  )

  const PersonalInfo = () => (
    <>
      <HeadingSectionCustom>Informações pessoais</HeadingSectionCustom>
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
      <HeadingSectionCustom>Informações profissionais</HeadingSectionCustom>
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

  const OnlineAttendance = () => (
    <Box data-testid="online-attendance">
      <Paragraph>Atende video por video chamada?</Paragraph>
      <Box direction="row">
        <FormField name="plataform" htmlFor="plataform__input" label="Plataforma">
          <Select name="plataform" multiple options={['Zoom', 'Whatsapp']} id="plataform" />
        </FormField>
        <FormField name="whatsAppNumber" htmlFor="whatsAppNumber" label="Número do Whatsapp" margin="0 0 5px 0">
          <TextInput name="whatsAppNumber" id="whatsAppNumber" />
        </FormField>
      </Box>
    </Box>
  )

  const states = ['RS', 'SP', 'SC', 'RJ']
  const cities = ['Porto Alegre', 'Belo Horizonte', 'São Paulo', 'Recife']

  const HouseholdAttendace = () => (
    <>
      <FormField name="state" label="Estado">
        <Select name="state" id="state" options={states} />
      </FormField>
      <FormField name="city" label="Cidade">
        <Select name="city" id="city" options={cities} />
      </FormField>
    </>
  )

  const HospitalClinicAttendance = () => <></>

  const Attendances = () => {
    const [option, setOption] = useState(0)
    return (
      <>
        <HeadingSectionCustom>Atendimento</HeadingSectionCustom>
        <Paragraph>Escolha o tipo de atendimento</Paragraph>
        <Box direction="row">
          <RadioButtonGroupCustom
            data-testid="atendimento-option"
            options={[
              { label: 'Online', value: tiposAtendimento.Online, role: 'option' },
              { label: 'Em clínica/hospital', value: tiposAtendimento.EmClinica, role: 'option' },
              { label: 'Domiciliar', value: tiposAtendimento.Domiciliar, role: 'option' },
            ]}
            onChange={(newOption) => {
              setOption(newOption)
            }}
          />
        </Box>

        {option === tiposAtendimento.Online && <OnlineAttendance />}
        {option === tiposAtendimento.Domiciliar && <HouseholdAttendace />}
        {option === tiposAtendimento.EmClinica && <HospitalClinicAttendance />}
      </>
    )
  }

  return (
    <>
      <Box margin={screenSize === 'small' ? { horizontal: 'xlarge' } : { horizontal: '20%' }}>
        <Box>
          <Box direction="row" alignSelf="center">
            <Square margin={{ right: 'medium' }} background="white">
              <Image src={logoIcon} fill />
            </Square>
            <Heading level="2">Cadastrar</Heading>
          </Box>

          <Form
            value={formValue}
            onReset={() => setFormValue({})}
            onSubmit={({ value }) => {
              console.log(value)
            }}
          >
            <TermsAndConditions />
            <PersonalInfo />
            <ProfessionalInfo />
            <Attendances />

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
