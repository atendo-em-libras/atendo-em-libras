import React, { useContext } from 'react'
import { AboutBanner } from './AboutBanner/AboutBanner'
import styled from 'styled-components/macro'
import { Paragraph, Box, ResponsiveContext, Avatar } from 'grommet'
import FotoBeatriz from '../../assets/images/idealizadoras/beatriz.png'
import FotoManuella from '../../assets/images/idealizadoras/manuella.png'

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
const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2em;
  font-weight: 400;
  line-height: 1.2em;
  text-align: left;
  padding: 2em 0 2em 0;
`
const Video = styled.video`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  @media (min-width: 800px) {
    width: 476px;
    height: 338px;
  }
`

const TitleAndParagraphWrapper = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-flow: column;
  }
`

const DropletAvatar = styled(Avatar)`
  border-top-right-radius: 0;
`

const idealizadoras = [
  {
    nome: 'Beatriz Lonskis',
    role: 'Designer e idealizadora do projeto',
    avatar: FotoBeatriz,
    paragraph:
      'lorem ipsim lorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsim',
  },
  {
    nome: 'Manuella Torreão',
    role: 'Desenvolvedora e idealizadora do projeto',
    avatar: FotoManuella,
    paragraph:
      'lorem ipsim lorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsim',
  },
]

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
            <Title>O Atendo em Libras</Title>
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
            <Title>Nosso propósito</Title>
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
          <Title>As idealizadoras</Title>
          <Box direction={contentDirection} pad="xlarge">
            {idealizadoras.map((idealizadora) => (
              <Box align="center">
                <DropletAvatar size="xlarge" src={idealizadora.avatar} round="large" />
                <h2>{idealizadora.nome}</h2>
                <h3>{idealizadora.role}</h3>
                <Paragraph textAlign="center">{idealizadora.paragraph}</Paragraph>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Title>Conheça quem faz parte</Title>
      </SectionStyled>
    </>
  )
}

export { About }
