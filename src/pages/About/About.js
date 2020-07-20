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
  height: 400px;
  font-family: Open Sans, sans-serif;
  text-align: left;
  @media (max-width: 800px) {
    flex-flow: column;
    p {
      width: 80%;
    }
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
          <h1>O Atendo em Libras</h1>
          <Paragraph>
            O Atendo em Libras é uma plataforma de cadastro e consulta de profissionais que sabem Libras, com a
            finalidade de disponibilizar à comunidade surda acesso aos serviços sem a necessidade de intérprete. Assim,
            as pessoas surdas podem cuidar de sua saúde com autonomia.
          </Paragraph>
        </SectionStyled>

        <SectionStyled>
          <h1>Nosso propósito</h1>
          <Paragraph>
            Dar visibilidade aos profissionais que disponibilizam serviços de atendimento em Libras, trazendo
            acessibilidade à comunidade surda e, também, conceder a autonomia às pessoas surdas nos cuidados de saúde.
          </Paragraph>
        </SectionStyled>

        <SectionStyled>
          <h1>As idealizadoras</h1>
        </SectionStyled>

        <SectionStyled>
          <h1>Conheça quem faz parte</h1>
        </SectionStyled>
      </>
    )
  }
}

export { About }
