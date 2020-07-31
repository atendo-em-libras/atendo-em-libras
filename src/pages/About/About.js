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

/* stylelint-disable property-no-unknown */
const DropletAvatar = styled(Avatar)`
  border-${(props) => props.dropletDirection}-radius: 0; 
`
/* stylelint-enable property-no-unkown */

const About = () => {
  const screenSize = useContext(ResponsiveContext)
  const contentDirection = screenSize === 'small' ? 'column' : 'row'
  const textAlign = screenSize === 'small' ? 'center' : undefined

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
        <Box direction={contentDirection} pad="xlarge" background="#F7F8FA">
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
        <Box align="center" pad="xlarge">
          <Heading level="2" margin={{ bottom: 'xlarge' }}>
            As idealizadoras
          </Heading>
          <Box direction={contentDirection} justify="between">
            {idealizadoras.map((idealizadora) => (
              <Box key={idealizadora.nome} align="center" direction={contentDirection} basis="48%">
                <DropletAvatar
                  dropletDirection="top-right"
                  size="120px"
                  src={idealizadora.avatar}
                  round="large"
                  margin={screenSize === 'small' ? {} : { right: 'small' }}
                  flex={{ shrink: 0 }}
                />
                <Box align={textAlign}>
                  <Heading level="3">{idealizadora.nome}</Heading>
                  <Heading color="#5996F7" level="4">
                    {idealizadora.role}
                  </Heading>
                  <Paragraph textAlign={textAlign}>{idealizadora.paragraph}</Paragraph>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center" pad="xlarge">
          <Heading level="2" margin={{ bottom: 'xlarge' }}>
            Conheça quem faz parte
          </Heading>
          <Box direction="row" wrap justify="between">
            {participantes.map((participant) => (
              <Box
                key={participant.nome}
                align="center"
                basis={screenSize === 'small' ? '46%' : '18%'}
                pad={{ bottom: 'large' }}
              >
                <DropletAvatar dropletDirection="top-left" size="120px" src={participant.avatar} round="large" />
                <Heading level="3" textAlign="center">
                  {participant.nome}
                </Heading>
                <Heading color="#5996F7" level="4" textAlign="center">
                  {participant.role}
                </Heading>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>
    </>
  )
}

export { About }
