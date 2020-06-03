import React, { PureComponent } from 'react'
import styled from "styled-components";

import illustration from '../../../assets/images/img_atendo_em_libras_illustration.svg';
import { Container } from '../../Container';

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
  padding-left: 45%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  img {
    width: 45%;
    left: 0;
    position: absolute;
    box-sizing: border-box;
    padding: 0 2vw;
  }
  h1 {
    width: 85%;
    font-size: 5em;
    font-weight: 400;
    line-height: 1.5em;
  }
  p {
    width: 85%;
    margin-top: 1em;
    font-size: 2em;
    font-weight: 400;
    line-height: 1.5em
  }
`

export { StyledHeaderBanner as HeaderBanner }