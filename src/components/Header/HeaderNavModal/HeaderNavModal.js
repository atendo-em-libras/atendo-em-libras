import React, { PureComponent } from 'react'
import { Button } from '../../Buttons'
import { Box, Heading } from 'grommet'
import logo from '../../../assets/images/img_atendo_em_libras_logo_all_white.svg'
import { closeIcon } from '../../../assets/icons'
import { StyledButton, Logo } from './HeaderNavModalStyles'
import { FeatureTogglesContext } from '../../../FeatureTogglesContext'
import { Modal } from '../../Modal/Modal'
import { HeaderNavLinks } from '../HeaderNavLinks/HeaderNavLinks'

class HeaderNavModal extends PureComponent {
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
      <Modal ref={this.myRef} modal plain full>
        <Box role="menu" flex="grow" justify="between" pad="large" background="#5996f7">
          <Box direction="row" justify="between">
            <Logo src={logo} alt={'Logo projeto Atendo em Libras'} />
            <Button
              aria-label="Close Menu Button"
              onClick={onClose}
              icon={<img src={closeIcon} alt="Close Icon" width="18px" height="18px" />}
              size="small"
            ></Button>
          </Box>
          <FeatureTogglesContext.Consumer>
            {({ navbar }) => {
              return (
                navbar && (
                  <Box flex="grow" pad={{ top: 'xlarge' }}>
                    <nav>
                      <HeaderNavLinks direction="column" />
                    </nav>
                  </Box>
                )
              )
            }}
          </FeatureTogglesContext.Consumer>
          <Box align="start">
            <Heading level="3" color="white" margin={{ bottom: 'medium' }}>
              É profissional de saúde ou conhece alguém da área?
            </Heading>

            <StyledButton
              href="https://forms.gle/h1sX9nD45PgUAzGB6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="register form"
              label="Cadastre-se aqui"
              size="medium"
            />
          </Box>
        </Box>
      </Modal>
    )
  }
}

export { HeaderNavModal }
