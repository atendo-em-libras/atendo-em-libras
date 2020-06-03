import React, { PureComponent } from "react"
import styled from "styled-components"

import { HeaderCallOut } from './HeaderCallOut'
import { HeaderNavigation } from './HeaderNavigation'
import { HeaderBanner } from './HeaderBanner'

class Header extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <HeaderNavigation />
        <HeaderBanner />
        <HeaderCallOut />
      </div>
    )
  }
}

const StyledHeader = styled(Header)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  background: #0F1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`
export { StyledHeader as Header }