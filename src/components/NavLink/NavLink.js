import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(RouterLink)`
  color: white;
  text-decoration: none;
  font-weight: 600;
`

const NavLink = (props) => {
  return <LinkStyled {...props} />
}

export { NavLink }
