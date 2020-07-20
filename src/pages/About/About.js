import React from 'react'
import { AboutBanner } from './AboutBanner/AboutBanner'
import styled from 'styled-components/macro'
import { Paragraph } from 'grommet'

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
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  font-family: Open Sans, sans-serif;
  text-align: left;
  padding-bottom: 2em;
  @media (max-width: 800px) {
    flex-flow: column;
    p {
      width: 80%;
    }
  }
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
  width: 320px;
  height: 240px;
  border-radius: 14px;
`

class About extends React.Component {
  render() {
    return (
      <>
        <AboutWrapper>
          <AboutBanner />
        </AboutWrapper>

        <SectionStyled>
          <Title>O Atendo em Libras</Title>
          <Paragraph>
            O Atendo em Libras é uma plataforma de cadastro e consulta de profissionais que sabem Libras, com a
            finalidade de disponibilizar à comunidade surda acesso aos serviços sem a necessidade de intérprete. Assim,
            as pessoas surdas podem cuidar de sua saúde com autonomia.
          </Paragraph>
          <Video controls>Your browser does not support the Video tag.</Video>
        </SectionStyled>
        <SectionStyled>
          <Title>Nosso propósito</Title>
          <Paragraph>
            Dar visibilidade aos profissionais que disponibilizam serviços de atendimento em Libras, trazendo
            acessibilidade à comunidade surda e, também, conceder a autonomia às pessoas surdas nos cuidados de saúde.
          </Paragraph>
          <Video controls>Your browser does not support the Video tag.</Video>
        </SectionStyled>

        <SectionStyled>
          <Title>As idealizadoras</Title>
        </SectionStyled>

        <SectionStyled>
          <Title>Conheça quem faz parte</Title>
        </SectionStyled>
      </>
    )
  }
}

export { About }
