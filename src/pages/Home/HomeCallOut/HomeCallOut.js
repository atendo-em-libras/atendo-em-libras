import React, { PureComponent } from 'react'
import styled from 'styled-components/macro'

class HomeCallOut extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Profissionais de diversas áreas da saúde prontos para te atender</h2>
      </div>
    )
  }
}

const StyledHomeCallOut = styled(HomeCallOut)`
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
    max-width: 80%;
    color: #000000;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    @media (min-width: 800px) {
      max-width: 50%;
      font-size: 3.2em;
      line-height: 5rem;
    }
  }
`
export { StyledHomeCallOut as HomeCallOut }
