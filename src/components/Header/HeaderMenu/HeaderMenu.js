import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../Container'
import logo from '../../../assets/images/img_atendo_em_libras_logo_white.svg'

import { mobileHamburgerIcon } from '../../../assets/icons'
import { PrimaryButton, Button } from '../../Buttons'
import { ResponsiveContext } from 'grommet'
import { HeaderMobile } from '../HeaderMobile/HeaderMobile'

const StyledButton = styled(PrimaryButton)`
  border-radius: 17px 17px 17px 0;
  padding: 22px;
`

class HeaderMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  onCloseHeaderMobile = () => {
    this.setState({ showModal: false })
  }

  mainMenuDesktopButton = () => (
    <Fragment>
      <h2>É profissional de saúde ou conhece alguém da área?</h2>
      <StyledButton size="medium" target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
        Cadastre-se aqui
      </StyledButton>
    </Fragment>
  )

  mainMenuMobileButton = () => (
    <Button
      aria-label="Menu Button"
      onClick={() => {
        this.setState({ showModal: true })
      }}
      icon={<img src={mobileHamburgerIcon} alt="Menu Icon" />}
      size="small"
    ></Button>
  )

  render = () => {
    return this.state.showModal ? (
      <HeaderMobile onClose={this.onCloseHeaderMobile} />
    ) : (
      <Container>
        <header className={this.props.className}>
          <Logo src={logo} alt={'Logo projeto Atendo em Libras'} />
          <ResponsiveContext.Consumer>
            {(responsive) => (responsive === 'small' ? this.mainMenuMobileButton() : this.mainMenuDesktopButton())}
          </ResponsiveContext.Consumer>
        </header>
      </Container>
    )
  }
}

const Logo = styled.img`
  @media (max-width: 800px) {
    height: auto;
    width: 100px;
  }
`

const StyledHeaderMenu = styled(HeaderMenu)`
  width: 100%;
  height: auto;
  margin-top: 3.6rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  h2 {
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
  }
`

export { StyledHeaderMenu as HeaderMenu }
