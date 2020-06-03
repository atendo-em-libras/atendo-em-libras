import React, { PureComponent } from 'react'
import styled from "styled-components";

import illustration from '../../../assets/img_hands.svg';
import { Container } from '../Container';

class HeaderBanner extends PureComponent {
  render = () => {
    return (
      <Container>
        <div className={this.props.className}>
          <img src={illustration} alt={'Ilustração projeto Atendo em Libras'}></img>
          <h1>
            Conheça profissionais de saúde que atendem em Libras
          </h1>
          <p> 
            Sabemos da dificuldade de encontrar um profissional de saúde que 
            se comunique em Libras e no atual momento em que vivemos isso se 
            torna ainda mais difícil. Pensando nisso trouxemos alguns profissionais 
            que atendem em Libras.
          </p>
        </div>
      </Container>
    )
  }
}

const StyledHeaderBanner = styled(HeaderBanner)`
  width: 100%;
  height: 55vh;
  padding-left: 50%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  img {
    height: 40vw;
    left: 5vh;
    bottom: -5vh;
    position: absolute;
  }
  h1 {
    width: 85%;
    font-size: 4em;
    font-weight: 400;
    line-height: 1.5em;
  }
  p {
    width: 90%;
    margin-top: 1em;
    font-size: 2em;
    font-weight: 400;
    line-height: 1.5em
  }
`

export { StyledHeaderBanner as HeaderBanner }