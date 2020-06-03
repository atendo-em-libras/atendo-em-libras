import React, { PureComponent } from 'react'
import styled from "styled-components";

class HeaderCallOut extends PureComponent {
  render() {
    return <h1 className={this.props.className}>Profissionais de diverssas áreas da saúde prontos para te atender</h1>
  }
}

const StyledHeaderCallOut = styled(HeaderCallOut)`
  width: 50%;
  height: 30vh;
  padding: 0 25%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  font-weight: 200;
  line-height: 50px;
  background-color: #FFFFFF;
  color: #000000;
  &:before {
    content: "";
    height: 8px;
    width: 80px;
    margin-bottom: 30px;
    background-color: #5996F7;
    border-radius: 4px
  }
`
export { StyledHeaderCallOut as HeaderCallOut }