import React, { PureComponent } from 'react'
import { StyledFooter, FooterContent, FooterDetails, FooterLogo, InfoBox } from './FooterStyles'
import { Container } from '../Container'
import atendoEmLibasLogo from '../../assets/images/img_atendo_em_libras_logo_blue.svg'
import thoughtworksLogo from '../../assets/images/img_thoughtworks_logo_black.svg'

class Footer extends PureComponent {
  render = () => {
    return (
      <StyledFooter>
        <Container>
          <FooterContent>
            <FooterLogo src={atendoEmLibasLogo} alt={'Logo Atendo em Libras'} />
            <FooterDetails>
              <InfoBox>
                <p>Apoio:</p>
                <img src={thoughtworksLogo} alt={'Logo ThoughtWorks'}></img>
              </InfoBox>
              <InfoBox>
                <p>Dúvidas? Entre em contato em:</p>
                <a href={`mailto:atendoemlibras@gmail.com`}>atendoemlibras@gmail.com</a>
              </InfoBox>
            </FooterDetails>
          </FooterContent>
        </Container>
      </StyledFooter>
    )
  }
}

export { Footer }
