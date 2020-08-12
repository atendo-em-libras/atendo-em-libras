import React from 'react'
import { Layer } from 'grommet'
import styled from 'styled-components'

// height and position are handled manually to prevent
// fullscreen modal issue on mobile browsers. For more info read:
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
const FullLayer = styled(Layer)`
  position: fixed;
  height: 100%;
`
// These props are defined by Grommet's Layer component,
// for more info read https://v2.grommet.io/layer
const DEFAULT_PROPS = { plain: true, modal: true }

const Modal = React.forwardRef((props, ref) => {
  const { full } = props
  const enhancedProps = { ...props, ...DEFAULT_PROPS }

  return full ? <FullLayer ref={ref} {...enhancedProps} /> : <Layer {...enhancedProps} />
})

export { Modal }
