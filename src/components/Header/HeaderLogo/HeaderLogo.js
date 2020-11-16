import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { logoIcon } from '../../../assets/icons'
import { Box, Image, ResponsiveContext, Anchor } from 'grommet'
import { respondTo } from '../../../utils/breakpoints/_respondTo'

const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: normal;
  ${respondTo.desktop`
    font-size: 2.4em;
  `}
`

const HeaderLogo = () => {
  const screenSize = useContext(ResponsiveContext)

  return (
    <Box align="center" direction="row">
      <Box margin={{ right: 'small' }} width={screenSize === 'small' ? '30px' : '38px'}>
        <Image src={logoIcon} alt={'Logo projeto Atendo em Libras'} fill></Image>
      </Box>
      <StyledTitle>
        Atendo <br />
        em Libras
      </StyledTitle>
    </Box>
  )
}

export { HeaderLogo }
