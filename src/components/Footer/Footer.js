import React, { PureComponent } from 'react'
import styled from 'styled-components'

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
  align-items: center;
  color: white;
  background-color: #ffffff;
  border-top: solid #0000001a 1px;
  flex-flow: row;
  margin-top: 50px;
  footer {
    height: 20vh;
    display: flex;
    flex-flow: row;
    @media (max-width: 800px) {
      flex-flow: column;
    }
    justify-content: space-between;
    align-items: center;
    img {
      height: 5em;
      @media (max-width: 800px) {
        padding-top: 20px;
      }
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

// const FooterElement = styled.div`
// `

export { StyledFooter as Footer }
