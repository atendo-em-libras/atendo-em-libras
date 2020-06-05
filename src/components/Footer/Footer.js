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
          <footer>
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
          </footer>
        </Container>
      </div>  
    )
  }
}

const StyledFooter = styled(Footer)`
  width: 100%;
  
  display: flex;
  flex-flow: row;
  align-items: center;
  color: white;
  background-color: #FFFFFF;
  border-top: solid #0000001A 1px;
  footer {
    height: 20vh;
    display: flex;
    flex-flow: row; 
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
  align-items: center;
  justify-content: space-between;
  div {
    height: 5em;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: space-between;
    img {
      height: 1.8em;
    }
    p, a {
      color: black;
      font-size: 1.6em;
      font-weight: 600;
    }
    *:last-child {
      font-weight: 400;
    }
  }
  div:first-child {
    margin-right: 100px
  }
`

// const FooterElement = styled.div`
// `

export { StyledFooter as Footer }