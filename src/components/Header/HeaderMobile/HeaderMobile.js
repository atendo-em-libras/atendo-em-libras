import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../../Buttons'
import { Layer } from 'grommet'
import logo from '../../../assets/images/img_atendo_em_libras_logo_white.svg'

const StyledButton = styled(PrimaryButton)`
  color: #5996f7;
  border-radius: 20px 20px 20px 0;
  background-color: white;
`

const MainMenuModal = styled(Layer)`
  background-color: #5996f7;
`

const Logo = styled.img`
  @media (max-width: 800px) {
    height: auto;
    width: 40%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`

const Header = styled.div``

const Footer = styled.div``
class HeaderMobile extends PureComponent {
  render = () => {
    return (
      <MainMenuModal modal plain full>
        <Wrapper>
          <Header>
            <Logo src={logo} alt={'Logo projeto Atendo em Libras'} />
          </Header>
          <Footer>
            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
              <StyledButton>Cadastre Aqui</StyledButton>
            </a>
          </Footer>
        </Wrapper>
      </MainMenuModal>
    )
  }
}

export { HeaderMobile }
