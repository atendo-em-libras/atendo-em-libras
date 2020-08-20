import React, { useContext } from 'react'
import { Anchor, ResponsiveContext } from 'grommet'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { respondTo } from '../../utils/breakpoints/_respondTo'
import { COLORS } from '../../constants/colors'

const DEFAULT_PROPS = {
  size: 'small',
}

const DESKTOP_ACTIVE_LINK_STYLE = {
  color: COLORS.brand,
  borderBottom: `2px solid ${COLORS.brand}`,
}

const NavLinkStyled = styled(NavLink)`
  color: white;

  :hover {
    color: white;
    border-bottom: 2px solid white;
  }

  ${respondTo.desktop`
    :hover {
      color: ${COLORS.brand};
      border-bottom: 2px solid ${COLORS.brand};
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
