import React, { PureComponent } from 'react'
import styled from "styled-components";

import { Container } from '../Container';
import logo from '../../assets/images/img_atendo_em_libras_logo_blue.svg';

class Footer extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <Container>
          <img src={logo} alt={'Logo projeto Atendo em Libras'}></img>
        </Container>
      </div>
    )
  }
}

const StyledFooter = styled(Footer)`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #FFFFFF;
`

export { StyledFooter as Footer }