import React, { useContext } from 'react'
import { Anchor, ResponsiveContext } from 'grommet'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { respondTo } from '../../utils/breakpoints/_respondTo'

const DEFAULT_PROPS = {
  size: 'small',
}

const DESKTOP_ACTIVE_LINK_STYLE = {
  color: '#5996f7',
  borderBottom: '2px solid #5996f7',
}

const NavLinkStyled = styled(NavLink)`
  color: white;

  :hover {
    color: white;
    border-bottom: 2px solid white;
  }

  ${respondTo.desktop`
    :hover {
      color: #5996f7;
      border-bottom: 2px solid #5996f7;
    }
  `}
`

const AnchorLink = (props) => {
  const enhancedProps = { ...DEFAULT_PROPS, ...props }
  const screenSize = useContext(ResponsiveContext)

  return (
    <Anchor
      // remove unecessary props to avoid prop leaking
      as={({ colorProp, hasIcon, hasLabel, focus, ...props }) => {
        return <NavLinkStyled {...props} activeStyle={screenSize === 'large' ? DESKTOP_ACTIVE_LINK_STYLE : undefined} />
      }}
      {...enhancedProps}
    />
  )
}

export { AnchorLink }
