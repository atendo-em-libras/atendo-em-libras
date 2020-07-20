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
  font-family: Open Sans, sans-serif;
  padding: 4em;
  @media (max-width: 800px) {
    padding: 2em;
    flex-flow: column;
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

class About extends React.Component {
  render() {
    return (
      <>
        <AboutWrapper>
          <AboutBanner />
        </AboutWrapper>

        <SectionStyled>
          <TitleAndParagraphWrapper>
            <Title>O Atendo em Libras</Title>
            <Paragraph>
              O Atendo em Libras é uma plataforma de cadastro e consulta de profissionais que sabem Libras, com a
              finalidade de disponibilizar à comunidade surda acesso aos serviços sem a necessidade de intérprete.
              Assim, as pessoas surdas podem cuidar de sua saúde com autonomia.
            </Paragraph>
          </TitleAndParagraphWrapper>
          <Video controls>Your browser does not support the Video tag.</Video>
        </SectionStyled>

        <SectionStyled>
          <TitleAndParagraphWrapper>
            <Title>Nosso propósito</Title>
            <Paragraph>
              Dar visibilidade aos profissionais que disponibilizam serviços de atendimento em Libras, trazendo
              acessibilidade à comunidade surda e, também, conceder a autonomia às pessoas surdas nos cuidados de saúde.
            </Paragraph>
          </TitleAndParagraphWrapper>
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
