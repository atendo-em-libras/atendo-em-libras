import React, { useContext } from 'react'
import { Anchor, ResponsiveContext } from 'grommet'
import { NavLink } from 'react-router-dom'

const DEFAULT_PROPS = {
  size: 'small',
}

const DESKTOP_ACTIVE_LINK_STYLE = {
  color: '#5996f7',
  borderBottom: '2px solid #5996f7',
}

const AnchorLink = (props) => {
  const enhancedProps = { ...DEFAULT_PROPS, ...props }
  const screenSize = useContext(ResponsiveContext)

  return (
    <Anchor
      // remove unecessary props to avoid prop leaking
      as={({ colorProp, hasIcon, hasLabel, focus, ...props }) => {
        return <NavLink {...props} activeStyle={screenSize !== 'small' ? DESKTOP_ACTIVE_LINK_STYLE : undefined} />
      }}
      {...enhancedProps}
    />
  )
}

export { AnchorLink }
