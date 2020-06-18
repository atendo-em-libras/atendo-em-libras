import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import { Container } from '../../Container'
import logo from '../../../assets/images/img_atendo_em_libras_logo_white.svg'
import { Button } from '../../Button'
import { Grommet, ResponsiveContext } from 'grommet'
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

const StyledButton = styled(Button)`
  border-radius: 20px 20px 20px 0;
  margin-top: 0;
`

const Label = styled.h2`
  height: 5rem;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6em;
  @media (max-width: 800px) {
    display: none;
  }
`

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 800,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
})

class HeaderMenu extends PureComponent {
  render = () => {
    return (
      <Grommet theme={customBreakpoints}>
        <Container>
          <header className={this.props.className}>
            <img src={logo} alt={'Logo projeto Atendo em Libras'}></img>
            <ResponsiveContext.Consumer>
              {(responsive) =>
                responsive === 'small' ? (
                  <p>Hello World!</p>
                ) : (
                  <Fragment>
                    <Label>É profissional de saúde ou conhece alguém da área?</Label>
                    <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
                      <StyledButton>Cadastre Aqui</StyledButton>
                    </a>
                  </Fragment>
                )
              }
            </ResponsiveContext.Consumer>
          </header>
        </Container>
      </Grommet>
    )
  }
}

const StyledHeaderMenu = styled(HeaderMenu)`
  width: 100%;
  height: auto;
  margin-top: 2.5vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  img {
    height: 5em;
  }
`

export { StyledHeaderMenu as HeaderMenu }
