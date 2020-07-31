import React from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../../components/Container/Container'
import { Heading } from '../../../components/Typography/Heading'
import BannerImage from '../../../assets/images/pages/about/about-sobre-o-projeto.svg'
import { Box, Image } from 'grommet'

const Line = styled.hr`
  width: 40px;
  height: 2px;
  background-color: white;
  margin: 24px 0;
`

const AboutBanner = () => {
  return (
    <Container>
      <Box align="center" margin={{ vertical: 'large' }}>
        <Box height="66px" width="66px" align="center">
          <Image src={BannerImage} alt="Sobre o Projeto" />
        </Box>
        <Line />
        <Heading level="1">Sobre o projeto</Heading>
      </Box>
    </Container>
  )
}

export { AboutBanner }
