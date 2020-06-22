import React, { PureComponent } from 'react'
import styled from 'styled-components/macro'

import illustration from '../../../assets/images/img_atendo_em_libras_illustration.svg'
import { Container } from '../../Container'

class HeaderBanner extends PureComponent {
  render = () => {
    return (
      <Container>
        <div className={this.props.className}>
          <img src={illustration} alt={'Ilustração projeto Atendo em Libras'}></img>
          <h1>Conheça profissionais de saúde que atendem em Libras</h1>
          <p>
            Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no atual momento
            em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais que atendem
            em Libras.
          </p>
        </div>
      </Container>
    )
  }
}

const StyledHeaderBanner = styled(HeaderBanner)`
  width: 100%;
  height: auto;
  padding: 2em 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    align-items: flex-start;
    padding-left: 45%;
    min-height: 50vh;
    max-height: 500px;
  }
  img {
    width: 45%;
    max-height: 100%;
    left: 0;
    padding: 0 0 2em 0;
    box-sizing: border-box;
    @media (min-width: 800px) {
      padding: 2em 4vw 2em 0;
      position: absolute;
    }
  }
  h1 {
    margin-top: 1em;
    font-size: 2em;
    font-weight: 400;
    line-height: 1.2em;
    text-align: left;
    @media (min-width: 800px) {
      margin-top: 0;
      width: 80%;
      font-size: 3.2em;
      line-height: 1.5em;
      text-align: left;
    }
  }
  p {
    margin-top: 1em;
    margin-bottom: 2.5em;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.3em;
    text-align: left;
    @media (min-width: 800px) {
      margin: 0;
      width: 80%;
      line-height: 1.5em;
      text-align: left;
    }
  }
`

export { StyledHeaderBanner as HeaderBanner }
