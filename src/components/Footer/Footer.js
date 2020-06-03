import React, { PureComponent } from 'react'
import styled from "styled-components"

import { Container } from '../Container'
import atendoEmLibasLogo from '../../assets/images/img_atendo_em_libras_logo_blue.svg'
import thoughtworksLogo from '../../assets/images/img_thoughtworks_logo_black.svg'

class Footer extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <Container>
          <FooterContent>
            <img src={atendoEmLibasLogo} alt={'Logo Atendo em Libras'}></img>
            <FooterElement>
              <p>Apoio:</p>
              <img src={thoughtworksLogo} alt={'Logo Thoughtworks'}></img>
            </FooterElement>
            <FooterElement>
              <p>Dúvidas? Entre em contato em:</p>
              <p>atendoemlibras@gmail.com</p>
            </FooterElement>
          </FooterContent>
        </Container>
      </div>  
    )
  }
}

const StyledFooter = styled(Footer)`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row;
  align-items: center;
  color: white;
  background-color: #FFFFFF;
  border-top: solid #0000001A 1px;
`

const FooterContent = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`

const FooterElement = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  img {
    height: 2em;
  }
  p {
    color: black;
    font-size: 2em;
    font-weight: 400;
  }
  p:first-child {
    font-weight: 600;
    padding-bottom: .5em;
  }
`

export { StyledFooter as Footer }