import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { respondTo } from '../../utils/breakpoints/_respondTo'

const StyledBox = styled(Box)`
  padding: 0 10vw 10vw 10vw;
  margin: 0 auto;

  ${respondTo.desktop`
    padding: 0 40px 50px 40px;
  `}
`
const Container = (props) => {
  return <StyledBox width="xlarge" justify="center" direction="row" {...props} />
}

export { Container }
