import React from 'react'
import styled from 'styled-components/macro'
import {
  Box,
  TextInput as TextInputGrommet,
  Select as SelectGrommet,
  MaskedInput,
  FormField as FormFieldGrommet,
  Heading,
} from 'grommet'
import './index.css'

const TextInput = (props) => <TextInputGrommet {...props} size="medium" />

const Select = (props) => <SelectGrommet {...props} size="medium" />

const HeadingSectionCustom = (props) => (
  <Heading color="#5996F7" level="2" size="20px" margin={{ bottom: '24px' }}>
    {props.children}
  </Heading>
)

const FormField = (props) => {
  const Label = styled.label`
    font-size: 18px;
    margin-bottom: 8px;
  `

  const Span = styled.span`
    font-size: 14px;
    font-style: italic;
    opacity: 0.7;
  `

  const { label, margin, ...formFieldProps } = props

  return (
    <Box margin={{ bottom: 'large', ...margin }}>
      <Label htmlFor={props.htmlFor}>
        {label} {props.required && <Span>Obrigatório</Span>}
      </Label>
      <FormFieldGrommet className="form-field" {...formFieldProps}>
        {props.children}
      </FormFieldGrommet>
    </Box>
  )
}

const MobilePhoneMaskedInput = (props) => (
  <MaskedInput
    mask={[
      { fixed: '(' },
      {
        length: 2,
        regexp: /^[0-9]{1,2}$/,
        placeholder: '__',
      },
      { fixed: ')' },
      { fixed: ' ' },
      {
        length: 5,
        regexp: /^[0-9]{1,5}$/,
        placeholder: '_____',
      },
      { fixed: '-' },
      {
        length: 4,
        regexp: /^[0-9]{1,4}$/,
        placeholder: '____',
      },
    ]}
    {...props}
    size="medium"
  />
)

const PhoneMaskedInput = (props) => (
  <MaskedInput
    mask={[
      { fixed: '(' },
      {
        length: 2,
        regexp: /^[0-9]{1,2}$/,
        placeholder: '__',
      },
      { fixed: ')' },
      { fixed: ' ' },
      {
        length: 4,
        regexp: /^[0-9]{1,4}$/,
        placeholder: '____',
      },
      { fixed: '-' },
      {
        length: 4,
        regexp: /^[0-9]{1,4}$/,
        placeholder: '____',
      },
    ]}
    {...props}
    size="medium"
  />
)

const EmailMaskedInput = (props) => (
  <MaskedInput
    mask={[
      {
        regexp: /^[\w\-_.]+$/,
        placeholder: 'atendo',
      },
      { fixed: '@' },
      {
        regexp: /^[\w]+$/,
        placeholder: 'libras',
      },
      { fixed: '.' },
      {
        regexp: /^[\w]+$/,
        placeholder: 'com',
      },
    ]}
    {...props}
    size="medium"
  />
)

const CepMaskedInput = (props) => (
  <MaskedInput
    mask={[
      {
        length: 5,
        regexp: /^[0-9]{1,5}$/,
        placeholder: '00000',
      },
      { fixed: '-' },
      {
        length: 3,
        regexp: /^[0-9]{1,3}$/,
        placeholder: '000',
      },
    ]}
    {...props}
    size="medium"
  />
)

export {
  FormField,
  CepMaskedInput,
  MobilePhoneMaskedInput,
  PhoneMaskedInput,
  EmailMaskedInput,
  Select,
  TextInput,
  HeadingSectionCustom,
}
