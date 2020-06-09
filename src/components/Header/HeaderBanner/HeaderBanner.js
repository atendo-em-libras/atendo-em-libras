import React, { PureComponent } from 'react'
import styled from 'styled-components'

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
  height: 60vh;
  max-height: 500px;
  box-sizing: border-box;
  background-color: #0f1423;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    align-items: flex-start;
    padding-left: 45%;
  }

  img {
    width: 45%;
    left: 0;
    box-sizing: border-box;
    padding: 0 4vw 0 0;
    @media (min-width: 800px) {
      position: absolute;
    }
  }
  h1 {
    font-size: 3.2em;
    font-weight: 400;
    line-height: 1.5em;
    text-align: center;
    @media (min-width: 800px) {
      width: 80%;
      text-align: left;
    }
  }
  p {
    margin-top: 1em;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.5em;
    text-align: center;
    @media (min-width: 800px) {
      width: 80%;
      text-align: left;
    }
  }
`

export { StyledHeaderBanner as HeaderBanner }
