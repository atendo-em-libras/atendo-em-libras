import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../../Buttons'
import { Layer } from 'grommet'

const StyledButton = styled(PrimaryButton)`
  border-radius: 20px 20px 20px 0;
`

const MainMenuModal = styled(Layer)`
  background-color: red;
`

class HeaderMobile extends PureComponent {
  render = () => {
    return (
      <MainMenuModal modal plain full>
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/h1sX9nD45PgUAzGB6">
          <StyledButton>Cadastre Aqui</StyledButton>
        </a>
      </MainMenuModal>
    )
  }
}

export { HeaderMobile }
