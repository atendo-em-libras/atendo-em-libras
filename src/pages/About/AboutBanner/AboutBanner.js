import React, { useContext } from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../../components/Container/Container'
import { Heading } from '../../../components/Typography/Heading'
import BannerImage from '../../../assets/images/pages/about/about-sobre-o-projeto.svg'
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
    <Container>
      <Box align="center" margin={{ vertical: 'large' }}>
        <Box width={screenSize === 'small' ? '60px' : '100px'} align="center">
          <Image src={BannerImage} alt="Sobre o Projeto" fill />
        </Box>
        <Line />
        <Heading level="1">Sobre o projeto</Heading>
      </Box>
    </Container>
  )
}

export { AboutBanner }
