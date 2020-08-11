import React from 'react'
import { Anchor } from 'grommet'
import { Link } from 'react-router-dom'

const DEFAULT_PROPS = {
  size: 'small',
}

const AnchorLink = (props) => {
  const enhancedProps = { ...DEFAULT_PROPS, ...props }

  return (
    <Anchor
      // remove unecessary props to avoid prop leaking
      as={({ colorProp, hasIcon, hasLabel, focus, ...props }) => {
        return <Link {...props} />
      }}
      {...enhancedProps}
    />
  )
}

export { AnchorLink }
