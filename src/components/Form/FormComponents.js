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

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`

const Span = styled.span`
  font-size: 14px;
  font-style: italic;
  opacity: 0.7;
  color: #000;
  font-weight: normal;
`

const SpanSubtext = styled.span`
  font-size: 14px;
  margin-left: 0px;
  line-height: 24px;
  color: #777777;
  margin-bottom: 1em;
`

const HeadingSectionCustom = (props) => (
  <Heading color="#5996F7" level="2" size="20px" margin={{ bottom: '24px' }} {...props}>
    {props.children} {props.required && <Span>Obrigatório</Span>}
  </Heading>
)

const FormField = (props) => {
  const { label, margin, subtext, marginBottom, ...formFieldProps } = props

  return (
    <Box margin={{ bottom: marginBottom || 'large', ...margin }}>
      <Label htmlFor={props.htmlFor}>
        {label} {props.required && !props.noRequiredLabel && <Span>Obrigatório</Span>}
      </Label>
      {subtext && <SpanSubtext>{subtext}</SpanSubtext>}
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
