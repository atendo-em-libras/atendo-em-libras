import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Container } from '../../Container'
import logo from '../../../assets/images/img_atendo_em_libras_logo_white.svg'

class HeaderMenu extends PureComponent {
  render = () => {
    return (
      <Container>
        <div className={this.props.className}>
          <img src={logo} alt={'Logo projeto Atendo em Libras'}></img>
          <h2>É profissional de saúde ou conhece alguém da área?</h2>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
            <button>Cadastre Aqui</button>
          </a>
        </div>
      </Container>
    )
  }
}

const StyledHeaderMenu = styled(HeaderMenu)`
  width: 100%;
  height: 7.5vh;
  margin-top: 2.5vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  img {
    height: 5em;
  }
  h2 {
    height: 5rem;
    padding: 0 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    font-size: 1.6rem;
    font-weight: 400;
  }
  button {
    padding: 20px;
    background-color: #5996f7;
    border-radius: 20px 20px 20px 0;
    border: 0;
    color: white;
    font-size: 1.4em;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background-color: #96bfff;
  }
  button:focus {
    outline: none;
    outline-offset: 0;
  }
`

export { StyledHeaderMenu as HeaderMenu }
