import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../Container'
import logo from '../../../assets/images/img_atendo_em_libras_logo_white.svg'

import { videoIcon } from '../../../assets/icons'
import { PrimaryButton, IconButton } from '../../Buttons'
import { ResponsiveContext } from 'grommet'
import { HeaderMobile } from '../HeaderMobile/HeaderMobile'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'

const StyledButton = styled(PrimaryButton)`
  border-radius: 20px 20px 20px 0;
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
      <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
        <StyledButton>Cadastre Aqui</StyledButton>
      </a>
    </Fragment>
  )

  mainMenuMobileButton = () => (
    <IconButton
      aria-label="Menu Button"
      onClick={() => {
        this.setState({ showModal: true })
      }}
    >
      <img src={videoIcon} alt="Menu Icon" width="36px" height="36px" />
    </IconButton>
  )

  render = () => {
    return this.state.showModal ? (
      <HeaderMobile onClose={this.onCloseHeaderMobile} />
    ) : (
      <Container>
        <header className={this.props.className}>
          <Logo src={logo} alt={'Logo projeto Atendo em Libras'} />
          <FeatureTogglesContext.Consumer>
            {(toggles) =>
              toggles.SHOW_RESPONSIVE_HEADER ? (
                <ResponsiveContext.Consumer>
                  {(responsive) =>
                    responsive === 'small' ? this.mainMenuMobileButton() : this.mainMenuDesktopButton()
                  }
                </ResponsiveContext.Consumer>
              ) : (
                this.mainMenuDesktopButton()
              )
            }
          </FeatureTogglesContext.Consumer>
        </header>
      </Container>
    )
  }
}

const Logo = styled.img`
  @media (max-width: 800px) {
    height: auto;
    width: 40%;
  }
`

const StyledHeaderMenu = styled(HeaderMenu)`
  width: 100%;
  height: auto;
  margin-top: 2.5vh;
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
