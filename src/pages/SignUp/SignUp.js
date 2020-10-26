import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import { Heading } from '../../components/Typography/Heading'
import { Box, Image, Form, Paragraph, Button, ResponsiveContext, CheckBox } from 'grommet'
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
import { AttendancePanel } from './AttendancePanel'
import LocationApi from '../../api/location'

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
  const screenSize = useContext(ResponsiveContext)

  const PersonalInfo = () => {
    return (
      <SectionBox>
        <HeadingSectionCustom>Informações pessoais</HeadingSectionCustom>
        <FormField name="name" htmlFor="name" label="Nome Completo" required>
          <TextInput name="name" id="name" />
        </FormField>
        <FormField name="phone" htmlFor="phone" label="Telefone" required>
          <MobilePhoneMaskedInput name="phone" id="phone" />
        </FormField>
        <FormField name="email" htmlFor="email" label="Email" required>
          <EmailMaskedInput name="email" id="email" />
        </FormField>
      </SectionBox>
    )
  }

  const ContactInfo = () => (
    <SectionBox>
      <HeadingSectionCustom>Informações de Contato</HeadingSectionCustom>
      <FormField
        name="whatsappNumber"
        htmlFor="whatsappNumber"
        label="Número de WhatsApp"
        subtext="O número será usado para contato principal e para combinar atendimentos"
        required
      >
        <MobilePhoneMaskedInput name="whatsappNumber" id="whatsappNumber" />
      </FormField>
    </SectionBox>
  )

  const ProfessionalInfo = () => (
    <SectionBox>
      <HeadingSectionCustom>Informações profissionais</HeadingSectionCustom>
      <FormField name="category" htmlFor="category__input" label="Categoria" required>
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
      <FormField name="register_number" htmlFor="register_number" label="Número de cadastro profissional" required>
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

  const HospitalClinicAttendanceComponent = () => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOnChange = (event) => {
      event.preventDefault()

      if (event.target.value.length >= 9) {
        setLoading(true)
        getLocation(event)
      }
    }

    const getLocation = async (event) => {
      const location = await LocationApi.getByCep(event.target.value)
      setCity(location.localidade)
      setState(location.uf)
      setLoading(false)
    }

    return (
      <Box data-testid="hospitalclinic-attendance">
        <FormField name="hospitalClinicName" label="Nome do local" required>
          <TextInput name="hospitalClinicName" id="hospitalClinicName" />
        </FormField>
        <FormField name="cep" label="CEP" required>
          <CepMaskedInput onChange={handleOnChange} name="cep" id="cep" disabled={loading} />
        </FormField>
        <FormField name="hospitalClinicState" label="Estado" required>
          <TextInput disabled name="hospitalClinicState" id="hospitalClinicState" value={state} />
        </FormField>
        <FormField name="hospitalClinicCity" label="Cidade" required>
          <TextInput disabled name="hospitalClinicCity" id="hospitalClinicCity" value={city} />
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
    )
  }

  const HouseholdAttendanceComponent = () => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState('')
    const [cities, setCities] = useState([])
    const [states, setStates] = useState([])

    useEffect(() => {
      let mounted = true

      const getUfs = async () => {
        setLoading(true)
        LocationApi.getUf().then((response) => {
          if (mounted) {
            setStates(response)
          }
        })

        setLoading(false)
      }
      getUfs()

      return () => {
        mounted = false
      }
    }, [])

    const handleOnSelectState = (event) => {
      event.preventDefault()
      setState(event.option)
    }

    useEffect(() => {
      let mounted = true

      const getCitiesByUf = async () => {
        setLoading(true)
        LocationApi.getCitiesByUF(state).then((response) => {
          if (mounted) {
            setCities(response)
          }
        })

        setLoading(false)
      }
      getCitiesByUf()

      return () => {
        mounted = false
      }
    }, [state])

    return (
      <Box data-testid="household-attendance">
        <FormField name="state" label="Estado" required>
          <Select
            name="state"
            id="state"
            options={states}
            value={state}
            onChange={handleOnSelectState}
            disabled={loading}
          />
        </FormField>
        <FormField name="city" label="Cidade" required>
          <Select name="city" id="city" options={cities} disabled={loading || !state} />
        </FormField>
      </Box>
    )
  }

  const Attendances = () => {
    const SpanSubtext = styled.span`
      font-size: 14px;
      margin-left: 0px;
      line-height: 24px;
      color: #777777;
      margin-bottom: 1em;
    `

    return (
      <Box>
        <HeadingSectionCustom required>Atendimento</HeadingSectionCustom>
        <SpanSubtext>Escolha o(s) tipo(s) de atendimento(s)</SpanSubtext>

        <FormField
          name={'attendances'}
          marginBottom={'none'}
          validate={(value, formValue) => {
            if (
              !formValue.onlineAttendanceOption &&
              !formValue.householdAttendanceOption &&
              !formValue.hospitalclinicAttendanceOption
            )
              return 'Pelo menos um atendimento é obrigatório'
          }}
        >
          <AttendancePanel label="Video chamada" name="onlineAttendanceOption" />
          <AttendancePanel
            label="Domicílio"
            name="householdAttendanceOption"
            component={<HouseholdAttendanceComponent />}
          />
          <AttendancePanel
            label="Clínica ou Hospital"
            name="hospitalclinicAttendanceOption"
            component={<HospitalClinicAttendanceComponent />}
          />
        </FormField>
      </Box>
    )
  }

  const TermsAndConditions = () => {
    const [checked, setChecked] = useState(false)

    return (
      <Box>
        <HeadingSectionCustom required>Termo de aceite</HeadingSectionCustom>

        <Paragraph size="small" fill>
          O site Atendo em Libras é uma iniciativa, sem fins lucrativos, que visa possibilitar maior visibilidade de
          dados de contato de profissionais que sabem Libras. Contudo, seu conteúdo é construído de forma colaborativa
          pela comunidade, não podendo assim o site garantir sua veracidade, exatidão, integridade ou qualidade das
          informações aqui expostas. Dessa forma, isenta-se de qualquer responsabilidade quanto à utilização ou não
          destas informações. Se você encontrou seus dados aqui expostos e deseja removê-los, envie um email para
          atendoemlibras@gmail.com.
        </Paragraph>

        <FormField margin={{ top: '20px' }} name="termsAndConditions" required noRequiredLabel>
          <CheckBox
            checked={checked}
            label="Li e aceito"
            name="termsAndConditions"
            onChange={(event) => setChecked(event.target.checked)}
          />
        </FormField>
      </Box>
    )
  }

  const PageTitle = () => (
    <>
      <Square margin={{ right: 'medium' }} background="white">
        <Image src={logoIcon} fill />
      </Square>
      <Heading level="2">Cadastrar</Heading>
    </>
  )

  const onSubmit = (event) => {
    console.log(event.value)
  }

  return (
    <FormBox>
      <Box margin={screenSize === 'small' ? { horizontal: 'xlarge' } : { horizontal: '20%' }}>
        <Box direction="row" alignSelf="center">
          <PageTitle />
        </Box>

        <Form validate="blur" onSubmit={onSubmit} messages={{ required: 'Campo obrigatório' }}>
          <PersonalInfo />
          <ContactInfo />
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
// Validacao dos campos
// Enviar para o backend
// Criar testes para o componente AttendencePanel
