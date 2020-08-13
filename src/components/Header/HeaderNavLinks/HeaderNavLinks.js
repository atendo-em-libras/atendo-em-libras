import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AnchorLink } from '../../AnchorLink/AnchorLink'

const GAP_BETWEEN_ITEMS = '30px'

const List = styled.ol`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ direction }) => (direction === 'column' ? 'initial' : 'center')};
`

const ListItem = styled.li`
  margin-bottom: ${({ direction }) => (direction === 'column' ? GAP_BETWEEN_ITEMS : 0)};
  margin-right: ${({ direction }) => (direction === 'column' ? 0 : GAP_BETWEEN_ITEMS)};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`
const HeaderNavLinks = ({ direction }) => (
  <List direction={direction}>
    <ListItem direction={direction}>
      <AnchorLink to="/" exact label="Home" />
    </ListItem>
    <ListItem direction={direction}>
      <AnchorLink to="/sobre" label="Sobre o Projeto" />
    </ListItem>
  </List>
)

HeaderNavLinks.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
}

HeaderNavLinks.defaultProps = {
  direction: 'row',
}

export { HeaderNavLinks }
