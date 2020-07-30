import React, { useContext } from 'react'

import { AboutBanner } from './AboutBanner/AboutBanner'

import styled from 'styled-components/macro'
import { respondTo } from '../../utils/breakpoints/_respondTo'

import { Box, ResponsiveContext, Avatar } from 'grommet'
import { Paragraph } from '../../components/Typography/Paragraph'
import { Heading } from '../../components/Typography/Heading'

import { participantes } from './participantes'
import { idealizadoras } from './idealizadoras'

const AboutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`

const SectionStyled = styled.section`
  p {
    padding-bottom: 2em;
  }
`
const Video = styled.video`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  ${respondTo.desktop`
    width: 476px;
    height: 338px;
  `}
`

const TitleAndParagraphWrapper = styled.div`
  ${respondTo.desktop`
    display: flex;
    flex-flow: column;
  `}
`

const DropletAvatar = styled(Avatar)`
  border-top-right-radius: 0;
`

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & div {
    width: 120px;
  }
`

const About = () => {
  const screenSize = useContext(ResponsiveContext)
  const contentDirection = screenSize === 'small' ? 'column' : 'row'

  return (
    <>
      <AboutWrapper>
        <AboutBanner />
      </AboutWrapper>

      <SectionStyled>
        <Box direction={contentDirection} pad="xlarge">
          <TitleAndParagraphWrapper>
            <Heading level="2">O Atendo em Libras</Heading>
            <Paragraph>
              O Atendo em Libras é uma plataforma de cadastro e consulta de profissionais que sabem Libras, com a
              finalidade de disponibilizar à comunidade surda acesso aos serviços sem a necessidade de intérprete.
              Assim, as pessoas surdas podem cuidar de sua saúde com autonomia.
            </Paragraph>
          </TitleAndParagraphWrapper>
          <Video controls>Your browser does not support the Video tag.</Video>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box direction={contentDirection} pad="xlarge">
          <TitleAndParagraphWrapper>
            <Heading level="2">Nosso propósito</Heading>
            <Paragraph>
              Dar visibilidade aos profissionais que disponibilizam serviços de atendimento em Libras, trazendo
              acessibilidade à comunidade surda e, também, conceder a autonomia às pessoas surdas nos cuidados de saúde.
            </Paragraph>
          </TitleAndParagraphWrapper>
          <Video controls>Your browser does not support the Video tag.</Video>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center">
          <Heading level="2">As idealizadoras</Heading>
          <Box direction={contentDirection} pad="xlarge">
            {idealizadoras.map((idealizadora) => (
              <Box align="center">
                <DropletAvatar size="xlarge" src={idealizadora.avatar} round="large" />
                <Heading level="3">{idealizadora.nome}</Heading>
                <Heading level="4">{idealizadora.role}</Heading>
                <Paragraph textAlign="center">{idealizadora.paragraph}</Paragraph>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center">
          <Heading level="2">Conheça quem faz parte</Heading>
          <BoxStyled justify="center" pad="large">
            {participantes.map((participant) => (
              <Box align="center" margin="small">
                <DropletAvatar size="xlarge" src={participant.avatar} round="large" />
                <Heading level="3" textAlign="center">
                  {participant.nome}
                </Heading>
                <Heading level="4" textAlign="center">
                  {participant.role}
                </Heading>
              </Box>
            ))}
          </BoxStyled>
        </Box>
      </SectionStyled>
    </>
  )
}

export { About }
