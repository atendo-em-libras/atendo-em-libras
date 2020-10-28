import React from 'react'
import { Layer } from 'grommet'

export const SuccessModal = (props) => {
  return <Layer {...props}>{props.children}</Layer>
}
