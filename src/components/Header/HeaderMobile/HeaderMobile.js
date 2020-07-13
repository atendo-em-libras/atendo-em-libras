import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PrimaryButton, Button } from '../../Buttons'
import { Layer } from 'grommet'
import logo from '../../../assets/images/img_atendo_em_libras_logo_all_white.svg'
import { closeIcon } from '../../../assets/icons'

const StyledButton = styled(PrimaryButton)`
  border-radius: 20px 20px 20px 0;
  background-color: white;
  color: #5996f7;
`

const MainMenuModal = styled(Layer)`
  background-color: #5996f7;
`

const Logo = styled.img`
  height: auto;
  width: 100px;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer = styled.div`
  flex-grow: 1;
  margin-top: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    width: 80%;
    color: white;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6em;
    margin-bottom: 21px;
  }
`
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
    const { onClose } = this.props

    return (
      <MainMenuModal ref={this.myRef} modal plain full>
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
