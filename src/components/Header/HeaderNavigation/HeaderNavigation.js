import React, { PureComponent } from 'react'
import styled from "styled-components";

import logo from '../../../assets/img_logo_atendo_em_libras.svg';

class HeaderNavigation extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <img src={logo} alt={'Logo Atendo em Libras'}></img>
        <h2>É profissional de saúde ou conhece alguém da área?</h2>
        <button>Cadastre Aqui</button>
      </div>
    )
  }
}

const StyledHeaderNavigation = styled(HeaderNavigation)`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    flex-grow: 1;
    padding-right: 20px
  }

  button {
    width: 167px;
    height: 55px;
    background-color: #5996F7;
    border-radius: 15px 15px 15px 0px;
    border: 0px;
    color: white;
    font-size: 19px;
    cursor: pointer;
  }

  button:focus {
    outline: none;
    outline-offset: 0;
  }
`
export { StyledHeaderNavigation as HeaderNavigation }