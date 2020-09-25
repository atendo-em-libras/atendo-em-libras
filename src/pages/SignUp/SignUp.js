import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import { Heading } from '../../components/Typography/Heading'
import { Box, Image, Form, Paragraph, Button, ResponsiveContext, RadioButton } from 'grommet'
import { respondTo } from '../../utils/breakpoints/_respondTo'
import {
  FormField,
  CepMaskedInput,
  MobilePhoneMaskedInput,
  PhoneMaskedInput,
  EmailMaskedInput,
  Select,
  TextInput,
  HeadingSectionCustom,
} from '../../components/Form/FormComponents'
import logoLarge from '../../assets/images/pages/singup/signup-logo.svg'
import { cities } from './cities'
import { states } from './states'

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

const SectionBox = styled(Box)`
  margin-top: 50px;
`

const FormBox = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f7f8fa;

  ${respondTo.desktop`
    background: url(${logoLarge}) no-repeat #f7f8fa;
    background-position-x: -300px;
    background-position-y: 320px;
    background-size: 660px 550px;
  `}
`

const SignUp = () => {
  const [checked, setChecked] = useState(false)
  const [enabledAttendance, setEnabledAttendance] = useState('Não')
  const [enabledHouseholdAttendance, setEnabledHouseholdAttendance] = useState('Não')
  const [enabledClinicAttendance, setEnabledClinicAttendance] = useState('Não')

  const screenSize = useContext(ResponsiveContext)

  const PersonalInfo = () => (
    <SectionBox>
      <HeadingSectionCustom>Informações pessoais</HeadingSectionCustom>
      <FormField name="name" htmlFor="name" label="Nome Completo" required>
        <TextInput name="name" id="name" />
      </FormField>
      <FormField name="phone" htmlFor="phone" label="Telefone" required>
        <MobilePhoneMaskedInput name="phone" id="phone" />
      </FormField>
      <FormField name="email" htmlFor="email" label="Email">
        <EmailMaskedInput name="email" id="email" />
      </FormField>
    </SectionBox>
  )

  const ProfessionalInfo = () => (
    <SectionBox>
      <HeadingSectionCustom>Informações profissionais</HeadingSectionCustom>
      <FormField name="category" htmlFor="category__input" label="Categoria">
        <Select
          name="category"
          options={[
            'Enfermagem',
            'Fisioterapia',
            'Fonoaudiologia',
            'Medicina',
            'Nutrição',
            'Odontologia',
            'Psicologia',
            'Técnico de Enfermagem',
          ]}
          id="category"
        />
      </FormField>
      <FormField name="expertise" htmlFor="expertise" label="Especialidade">
        <TextInput name="expertise" id="expertise" placeholder="Pediatra, Cardiologista, Traumatologista" />
      </FormField>
      <FormField name="register_number" htmlFor="register_number" label="Número de cadastro profissional">
        <TextInput name="register_number" id="register_number" placeholder="Exemplo: CRM, CRP" />
      </FormField>
      <FormField name="presentation" htmlFor="presentation" label="Apresentação">
        <TextInput
          name="presentation"
          id="presentation"
          placeholder="Descreva um pouco a sua área profissional e de atendimento"
        />
      </FormField>
      <FormField name="health_insurance_plans" htmlFor="health_insurance_plans" label="Planos de saúde aceitos">
        <TextInput
          name="health_insurance_plans"
          id="health_insurance_plans"
          placeholder="Particular, Unimed, SulAmerica"
        />
      </FormField>
    </SectionBox>
  )

  const OnlineAttendance = () => {
    return (
      <Box>
        <HeadingSectionCustom>Atendimento Online</HeadingSectionCustom>
        <FormField label="Atende por video chamada?" required>
          <RadioButton
            label="Sim"
            checked={enabledAttendance === 'Sim'}
            name={'online-attendance-yes'}
            onChange={() => {
              setEnabledAttendance('Sim')
            }}
          />
          <RadioButton
            label="Não"
            checked={enabledAttendance === 'Não'}
            name={'online-attendance-no'}
            onChange={(event) => {
              setEnabledAttendance('Não')
            }}
          />
        </FormField>
        {enabledAttendance === 'Sim' && (
          <Box direction="column" data-testid="online-attendance">
            <FormField name="whatsAppNumber" htmlFor="whatsAppNumber" label="Número do Whatsapp" margin="0 0 5px 0">
              <MobilePhoneMaskedInput name="whatsAppNumber" id="whatsAppNumber" />
            </FormField>
            <FormField name="plataform" htmlFor="plataform__input" label="Plataforma">
              <Select name="plataform" multiple options={['Zoom', 'Whatsapp']} id="plataform" />
            </FormField>
          </Box>
        )}
      </Box>
    )
  }

  const HouseholdAttendance = () => {
    return (
      <Box>
        <HeadingSectionCustom>Atendimento em Domicílio</HeadingSectionCustom>
        <FormField label="Atende em Domicílio?" required>
          <RadioButton
            label="Sim"
            checked={enabledHouseholdAttendance === 'Sim'}
            name={'household-attendance-yes'}
            onChange={() => {
              setEnabledHouseholdAttendance('Sim')
            }}
          />
          <RadioButton
            label="Não"
            checked={enabledHouseholdAttendance === 'Não'}
            name={'household-attendance-no'}
            onChange={(event) => {
              setEnabledHouseholdAttendance('Não')
            }}
          />
        </FormField>
        {enabledHouseholdAttendance === 'Sim' && (
          <Box data-testid="household-attendance">
            <FormField name="state" label="Estado">
              <Select name="state" id="state" options={states} />
            </FormField>
            <FormField name="city" label="Cidade">
              <Select name="city" id="city" options={cities} />
            </FormField>
          </Box>
        )}
      </Box>
    )
  }

  const HospitalClinicAttendance = () => {
    return (
      <Box>
        <HeadingSectionCustom>Atendimento em Clínica / Hospital</HeadingSectionCustom>
        <FormField label="Atende em Clínica ou Hospital?" required>
          <RadioButton
            label="Sim"
            checked={enabledClinicAttendance === 'Sim'}
            name={'hospital-clinic-attendance-yes'}
            onChange={() => {
              setEnabledClinicAttendance('Sim')
            }}
          />
          <RadioButton
            label="Não"
            checked={enabledClinicAttendance === 'Não'}
            name={'hospital-clinic-attendance-no'}
            onChange={(event) => {
              setEnabledClinicAttendance('Não')
            }}
          />
        </FormField>
        {enabledClinicAttendance === 'Sim' && (
          <Box data-testid="hospitalclinic-attendance">
            <FormField name="hospitalClinicName" label="Nome do local">
              <TextInput name="hospitalClinicName" id="hospitalClinicName" />
            </FormField>
            <FormField name="cep" label="CEP">
              <CepMaskedInput name="cep" id="cep" />
            </FormField>
            <FormField name="hospitalClinicState" label="Estado">
              <Select name="hospitalClinicState" id="hospitalClinicState" options={states} />
            </FormField>
            <FormField name="hospitalClinicCity" label="Cidade">
              <Select name="hospitalClinicCity" id="hospitalClinicCity" options={cities} />
            </FormField>
            <FormField name="streetName" label="Logradouro">
              <TextInput name="streetName" id="streetName" />
            </FormField>
            <FormField name="streetNumber" label="Número">
              <TextInput name="streetNumber" id="streetNumber" />
            </FormField>
            <FormField name="complementInfo" label="Complemento">
              <TextInput name="complementInfo" id="complementInfo" />
            </FormField>
            <FormField name="hospitalClinicPhone" label="Telefone">
              <PhoneMaskedInput name="hospitalClinicPhone" id="hospitalClinicPhone" />
            </FormField>
            <FormField name="hospitalClinicEmail" label="E-mail">
              <EmailMaskedInput name="hospitalClinicEmail" id="hospitalClinicEmail" />
            </FormField>
          </Box>
        )}
      </Box>
    )
  }

  const Attendances = () => {
    return (
      <Box>
        <OnlineAttendance />
        <HospitalClinicAttendance />
        <HouseholdAttendance />
      </Box>
    )
  }

  const TermsAndConditions = () => (
    <SectionBox>
      <HeadingSectionCustom>Termo de aceite</HeadingSectionCustom>

      <Paragraph size="small" fill>
        O site Atendo em Libras é uma iniciativa, sem fins lucrativos, que visa possibilitar maior visibilidade de dados
        de contato de profissionais que sabem Libras. Contudo, seu conteúdo é construído de forma colaborativa pela
        comunidade, não podendo assim o site garantir sua veracidade, exatidão, integridade ou qualidade das informações
        aqui expostas. Dessa forma, isenta-se de qualquer responsabilidade quanto à utilização ou não destas
        informações. Se você encontrou seus dados aqui expostos e deseja removê-los, envie um email para
        atendoemlibras@gmail.com.
      </Paragraph>

      <FormField margin={{ top: '20px' }}>
        <RadioButton
          checked={checked}
          label="Li e aceito"
          name="termsAndConditions"
          onChange={(event) => setChecked(event.target.checked)}
        />
      </FormField>
    </SectionBox>
  )

  const PageTitle = () => (
    <>
      <Square margin={{ right: 'medium' }} background="white">
        <Image src={logoIcon} fill />
      </Square>
      <Heading level="2">Cadastrar</Heading>
    </>
  )

  return (
    <FormBox>
      <Box margin={screenSize === 'small' ? { horizontal: 'xlarge' } : { horizontal: '20%' }}>
        <Box direction="row" alignSelf="center">
          <PageTitle />
        </Box>

        <Form
          onSubmit={({ value }) => {
            console.log(value)
          }}
          messages={{ required: 'Campo obrigatório' }}
        >
          <PersonalInfo />
          <ProfessionalInfo />
          <Attendances />
          <TermsAndConditions />

          <SectionBox>
            <Button type="submit" primary label="Cadastrar" />
          </SectionBox>
        </Form>
      </Box>
    </FormBox>
  )
}

export { SignUp }

// TODO:
// Ajustar problema de espaçamento entre o sim e o não
// Espaço entre termos e aceite e os atendimentos
// Exportar o componente pra ser único
// Validacao dos campos
// Enviar para o backend
