import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/macro'

import LocationApi from '../../api/location'
import ProviderApi from '../../api/provider'
import { Box, Image, Form, Paragraph, ResponsiveContext, CheckBox } from 'grommet'
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
import { SuccessModal } from '../../components/SuccessModal'
import { Heading } from '../../components/Typography/Heading'
import { Button } from '../../components/Buttons'
import { AttendancePanel } from './AttendancePanel'
import ProfessionalModel from './ProfessionalModel'
import { categories } from './categories'
import { useHistory } from 'react-router-dom'
import { COLORS } from '../../constants/colors'
import { logoIcon } from '../../assets/icons'

import img_palmas from '../../assets/images/img_palmas.svg'
import { Square, SectionBox, FormBox } from './SignUpStyles'

const SignUp = () => {
  const history = useHistory()
  const [show, setShow] = useState(false)

  const screenSize = useContext(ResponsiveContext)

  const emailValidation = (email) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
      return 'Insira um e-mail válido'
  }

  const PersonalInfo = () => {
    return (
      <SectionBox>
        <HeadingSectionCustom>Informações pessoais</HeadingSectionCustom>
        <FormField name="name" htmlFor="name" label="Nome completo" required>
          <TextInput name="name" id="name" />
        </FormField>
        <FormField name="phone" htmlFor="phone" label="Telefone" required>
          <MobilePhoneMaskedInput name="phone" id="phone" />
        </FormField>
        <FormField name="email" htmlFor="email" label="Email" validate={emailValidation} required>
          <EmailMaskedInput name="email" id="email" />
        </FormField>
      </SectionBox>
    )
  }

  const ContactInfo = () => (
    <SectionBox>
      <HeadingSectionCustom>Informações de contato</HeadingSectionCustom>
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
        <Select name="category" options={categories} labelKey="Description" id="category" />
      </FormField>
      <FormField name="specialty" htmlFor="specialty" label="Especialidade">
        <TextInput name="specialty" id="specialty" placeholder="Pediatra, Cardiologista, Traumatologista" />
      </FormField>
      <FormField name="registerNumber" htmlFor="registerNumber" label="Número de cadastro profissional" required>
        <TextInput name="registerNumber" id="registerNumber" placeholder="Exemplo: CRM, CRP" />
      </FormField>
      <FormField name="biography" htmlFor="biography" label="Apresentação">
        <TextInput
          name="biography"
          id="biography"
          placeholder="Descreva um pouco a sua área profissional e de atendimento"
        />
      </FormField>
      <FormField name="healthInsurancePlans" htmlFor="healthInsurancePlans" label="Planos de saúde aceitos">
        <TextInput name="healthInsurancePlans" id="healthInsurancePlans" placeholder="Particular, Unimed, SulAmerica" />
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
        <FormField name="hospitalClinicCep" label="CEP" required>
          <CepMaskedInput
            onChange={handleOnChange}
            name="hospitalClinicCep"
            id="hospitalClinicCep"
            disabled={loading}
          />
        </FormField>
        <FormField name="hospitalClinicState" label="Estado" required>
          <TextInput disabled name="hospitalClinicState" id="hospitalClinicState" value={state} />
        </FormField>
        <FormField name="hospitalClinicCity" label="Cidade" required>
          <TextInput disabled name="hospitalClinicCity" id="hospitalClinicCity" value={city} />
        </FormField>
        <FormField name="hospitalClinicStreetName" label="Logradouro">
          <TextInput name="hospitalClinicStreetName" id="hospitalClinicStreetName" />
        </FormField>
        <FormField name="hospitalClinicStreetNumber" label="Número">
          <TextInput name="hospitalClinicStreetNumber" id="hospitalClinicStreetNumber" />
        </FormField>
        <FormField name="hospitalClinicComplementInfo" label="Complemento">
          <TextInput name="complehospitalClinicComplementInfomentInfo" id="hospitalClinicComplementInfo" />
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
        <FormField name="householdState" label="Estado" required>
          <Select
            name="householdState"
            id="householdState"
            options={states}
            value={state}
            onChange={handleOnSelectState}
            disabled={loading}
          />
        </FormField>
        <FormField name="householdCity" label="Cidade" required>
          <Select name="householdCity" id="householdCity" options={cities} disabled={loading || !state} />
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

    const attendancesValidate = (formValue) => {
      {
        if (
          !formValue.onlineAttendanceOption &&
          !formValue.householdAttendanceOption &&
          !formValue.hospitalclinicAttendanceOption
        )
          return 'Pelo menos um atendimento é obrigatório'
      }
    }

    return (
      <Box>
        <HeadingSectionCustom style={{ marginBottom: '0' }} required>
          Atendimento
        </HeadingSectionCustom>
        <SpanSubtext>Escolha os tipos de atendimento</SpanSubtext>

        <FormField
          name={'attendances'}
          marginBottom={'none'}
          validate={(value, formValue) => attendancesValidate(formValue)}
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
          <Box>
            <CheckBox
              checked={checked}
              label="Li e aceito"
              name="termsAndConditions"
              onChange={(event) => setChecked(event.target.checked)}
            />
          </Box>
        </FormField>
      </Box>
    )
  }

  const PageTitle = () => (
    <>
      <Square margin={{ right: 'medium' }} background="white">
        <Image src={logoIcon} fill />
      </Square>
      <Heading alignSelf="center" level="2">
        Cadastrar profissional
      </Heading>
    </>
  )

  const onSubmit = async (event) => {
    const professionalModel = ProfessionalModel.createModel(event.value)
    let response = await ProviderApi.post(professionalModel)
    setShow(response.status === 200)
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

          {show && (
            <SuccessModal responsive={false} animation="fadeIn" style={{ borderRadius: '1em' }}>
              <Box pad="medium" align="center">
                <Image src={img_palmas} margin={{ bottom: 'medium' }} />
                <Heading level="2" color={COLORS.brand} style={{ fontWeight: 'bold' }} margin={{ bottom: 'medium' }}>
                  Parabéns!
                </Heading>
                <Paragraph textAlign="center" margin={{ bottom: 'medium' }}>
                  Obrigada, iremos analisar o cadastro e em breve incluiremos na nossa plataforma.
                </Paragraph>
                <Box direction="row" justify="center">
                  <Button
                    label="Muito bem!"
                    size="small"
                    primary
                    droplet="bottom-left"
                    onClick={() => history.push('/')}
                  />
                </Box>
              </Box>
            </SuccessModal>
          )}

          <SectionBox>
            <Button type="submit" primary droplet="bottom-left" label="Cadastrar" />
          </SectionBox>
        </Form>
      </Box>
    </FormBox>
  )
}

export { SignUp }
