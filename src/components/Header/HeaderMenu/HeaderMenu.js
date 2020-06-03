import React, { PureComponent } from 'react'
import styled from "styled-components";

import { Container } from '../../Container'
import logo from '../../../assets/img_atendo_em_libras_logo_white.svg';

class HeaderMenu extends PureComponent {
  render = () => {
    return (
      <Container>
        <div className={this.props.className}>
          <img src={logo} alt={'Logo projeto Atendo em Libras'}></img>
          <h2>É profissional de saúde ou conhece alguém da área?</h2>
          <button>Cadastre Aqui</button>
        </div>
      </Container>
    )
  }
}

const StyledHeaderMenu = styled(HeaderMenu)`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  img {
    height: 9em;
  }
  h2 {
    display: flex;
    justify-content: flex-end;
    font-size: 2.2em;
    font-weight: 400;
    flex-grow: 1;
    padding-right: 2em
  }
  button {
    padding: 1.5em;
    background-color: #5996F7;
    border-radius: 1.5em 1.5em 1.5em 0;
    border: 0px;
    color: white;
    font-size: 2em;
    cursor: pointer;
  }
  button:hover {
    background-color: #96BFFF;
  }
  button:focus {
    outline: none;
    outline-offset: 0;
  }
`
export { StyledHeaderMenu as HeaderMenu }