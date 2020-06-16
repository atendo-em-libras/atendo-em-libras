import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Container } from '../Container'
import atendoEmLibasLogo from '../../assets/images/img_atendo_em_libras_logo_blue.svg'
import thoughtworksLogo from '../../assets/images/img_thoughtworks_logo_black.svg'

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  background-color: #ffffff;
  border-top: solid #0000001a 1px;
  flex-flow: row;
  margin-top: 50px;
  section {
    height: 20vh;
    display: flex;
    flex-flow: row;
    @media (max-width: 800px) {
      flex-flow: column;
      align-items: flex-start;
      margin: 50px 0 100px 0;
    }
    justify-content: space-between;
    align-items: center;
    img {
      height: 5em;
    }
  }
`

const FooterContent = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row;
  @media (max-width: 800px) {
    flex-flow: column;
    align-items: flex-start;
  }
  align-items: center;
  justify-content: space-between;
  div {
    height: 5em;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: space-between;
    @media (max-width: 800px) {
      margin-top: 40px;
    }
    img {
      height: 1.8em;
    }
    p,
    a {
      color: black;
      font-size: 1.6em;
      font-weight: 600;
    }
    *:last-child {
      font-weight: 400;
    }
  }
  div:first-child {
    margin-right: 100px;
    @media (max-width: 800px) {
      margin-right: 10px;
    }
  }
`

class Footer extends PureComponent {
  render = () => {
    return (
      <StyledFooter>
        <Container>
          <section>
            <img src={atendoEmLibasLogo} alt={'Logo Atendo em Libras'}></img>
            <FooterContent>
              <div>
                <p>Apoio:</p>
                <img src={thoughtworksLogo} alt={'Logo ThoughtWorks'}></img>
              </div>
              <div>
                <p>Dúvidas? Entre em contato em:</p>
                <a href={`mailto:atendoemlibras@gmail.com`}>atendoemlibras@gmail.com</a>
              </div>
            </FooterContent>
          </section>
        </Container>
      </StyledFooter>
    )
  }
}

export { Footer }
