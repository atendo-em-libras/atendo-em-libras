import React, { useState } from 'react'
import { Box, FormField as Amilton } from 'grommet'
import {
  FormField,
  CepMaskedInput,
  PhoneMaskedInput,
  EmailMaskedInput,
  Select,
  TextInput,
} from '../../../components/Form/FormComponents'
import CepApi from '../../../api/cep/api'

const HospitalClinicAttendance = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [cep, setCep] = useState('')

  const handleOnChange = (event) => {
    event.preventDefault()

    setCep(event.target.value)
    if (event.target.value.length >= 9) {
      getLocation(event)
    }
  }

  const getLocation = async (event) => {
    const location = await CepApi.get(event.target.value)
    console.log(location)
    setCity(location.localidade)
    setState(location.uf)
  }

  return (
    <Box data-testid="hospitalclinic-attendance">
      <FormField name="hospitalClinicName" label="Nome do local">
        <TextInput name="hospitalClinicName" id="hospitalClinicName" />
      </FormField>
      <FormField name="cep" label="CEP">
        <CepMaskedInput cep={cep} onChange={handleOnChange} name="cep" id="cep" />
      </FormField>
      <FormField name="hospitalClinicState" label="Estado">
        <TextInput disabled name="hospitalClinicState" id="hospitalClinicState" value={state} />
      </FormField>
      <FormField name="hospitalClinicCity" label="Cidade">
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

export default HospitalClinicAttendance
