import React, { useContext } from 'react'
import { Layer, ResponsiveContext } from 'grommet'

export const SuccessModal = (props) => {
  const screenSize = useContext(ResponsiveContext)
  const responsiveProps = screenSize === 'small' &&
   {
     full: 'horizontal',
     margin: 'medium'
   }
   
  return <Layer {...responsiveProps} {...props}>{props.children}</Layer>
}
