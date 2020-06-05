import React, { PureComponent } from 'react'
import styled from 'styled-components'

class HeaderCallOut extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Profissionais de diverssas áreas da saúde prontos para te atender</h2>
      </div>
    )
  }
}

const StyledHeaderCallOut = styled(HeaderCallOut)`
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  background-color: #ffffff;
  &:before {
    content: '';
    height: 8px;
    width: 65px;
    margin-bottom: 32px;
    background-color: #5996f7;
    border-radius: 4px;
  }
  h2 {
    max-width: 480px;
    color: #000000;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    line-height: 50px;
  }
`
export { StyledHeaderCallOut as HeaderCallOut }
