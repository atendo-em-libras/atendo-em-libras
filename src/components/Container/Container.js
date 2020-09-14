import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { respondTo } from '../../utils/breakpoints/_respondTo'

const StyledBox = styled(Box)`
  padding: 0 10vw;
  margin: 0 auto;

  ${respondTo.desktop`
    padding: 0 40px;
  `}
`
const Container = (props) => {
  return <StyledBox width="xlarge" direction="row" {...props} />
}

export { Container }
