import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { logoIcon } from '../../assets/icons'
import { Box, Image, Heading, FormField, TextInput, Form } from 'grommet'
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

          <Heading color="#5996F7" level="4">
            Informações pessoais
          </Heading>
          <Form value={value}>
            <FormField name="name" htmlFor="name" label="Nome Completo">
              <TextInput name="name" id="name" />
            </FormField>
            <FormField name="phone" htmlFor="phone" label="Telefone">
              <TextInput name="phone" id="phone" />
            </FormField>
            <FormField name="email" htmlFor="email" label="Email">
              <TextInput name="email" id="email" />
            </FormField>
          </Form>
        </Box>
      </SignUpWrapper>
    </>
  )
}

export { SignUp }
