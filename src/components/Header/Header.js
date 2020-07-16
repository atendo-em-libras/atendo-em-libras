import React, { PureComponent } from 'react'
import styled from 'styled-components/macro'

import { HeaderMenu } from './HeaderMenu'

class Header extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <HeaderMenu />
      </div>
    )
  }
}

const StyledHeader = styled(Header)`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`
export { StyledHeader as Header }
