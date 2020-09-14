import React, { useContext } from 'react'
import styled from 'styled-components/macro'

import { Heading } from '../../../components/Typography/Heading'
import illustration from '../../../assets/images/img_atendo_em_libras_illustration.svg'
import { Box, Image, ResponsiveContext } from 'grommet'

const Line = styled.hr`
  width: 40px;
  height: 2px;
  background-color: white;
  margin: 24px 0;
`

const AboutBanner = () => {
  const screenSize = useContext(ResponsiveContext)

  return (
    <Box align="center" margin={{ vertical: 'large' }}>
      <Box width={screenSize === 'small' ? '80px' : '128px'} align="center">
        <Image src={illustration} alt="Sobre o Projeto" fill />
      </Box>
      <Line />
      <Heading level="1" color="white">
        Sobre o projeto
      </Heading>
    </Box>
  )
}

export { AboutBanner }
