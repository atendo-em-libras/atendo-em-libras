import React, { PureComponent } from 'react'
import { Button } from '../../Buttons'
import { Box } from 'grommet'
import logo from '../../../assets/images/img_atendo_em_libras_logo_all_white.svg'
import { closeIcon } from '../../../assets/icons'
import { Paragraph } from '../../Typography/Paragraph'
import { StyledButton, MainMenuModal, Logo, Wrapper, Header, Footer } from './HeaderMobileStyles'

class HeaderMobile extends PureComponent {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentWillUnmount() {
    const node = this.myRef.current
    node.parentNode.removeChild(node)
  }

  render = () => {
    const { onClose, height } = this.props

    return (
      <MainMenuModal ref={this.myRef} modal plain full height={height}>
        <Wrapper role="menu">
          <Header>
            <Logo src={logo} alt={'Logo projeto Atendo em Libras'} />
            <Button
              aria-label="Close Menu Button"
              onClick={onClose}
              icon={<img src={closeIcon} alt="Close Icon" width="18px" height="18px" />}
              size="small"
            ></Button>
          </Header>
          <Box>
            <Button color="#FDFDFD" size="large" onClick={() => {}} margin={{ vertical: 'small' }}>
              <Box pad={{ vertical: 'medium' }}>
                <Paragraph size="large">Home</Paragraph>
              </Box>
            </Button>
            <Button color="#FDFDFD" size="large" onClick={() => {}} margin={{ vertical: 'small' }}>
              <Box pad={{ vertical: 'medium' }}>
                <Paragraph size="large">Sobre</Paragraph>
              </Box>
            </Button>
          </Box>
          <Footer>
            <h2>É profissional de saúde ou conhece alguém da área?</h2>

            <StyledButton
              href="https://forms.gle/h1sX9nD45PgUAzGB6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="register form"
              label="Cadastre-se aqui"
              size="medium"
            />
          </Footer>
        </Wrapper>
      </MainMenuModal>
    )
  }
}

export { HeaderMobile }
