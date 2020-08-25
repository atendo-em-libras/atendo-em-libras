import React, { PureComponent } from 'react'
import { Button } from '../../Buttons'
import { Box, Heading, Text } from 'grommet'
import logo from '../../../assets/images/img_atendo_em_libras_logo_all_white.svg'
import { closeIcon } from '../../../assets/icons'
import { Logo } from './HeaderNavModalStyles'
import { Modal } from '../../Modal/Modal'
import { HeaderNavLinks } from '../HeaderNavLinks/HeaderNavLinks'
import PropTypes from 'prop-types'
import { COLORS } from '../../../constants/colors'

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

          <Box flex="grow" pad={{ top: 'xlarge' }}>
            <nav>
              <HeaderNavLinks direction="column" />
            </nav>
          </Box>

          <Box align="start">
            <Heading level="3" color="white" margin={{ bottom: 'medium' }}>
              É profissional de saúde ou conhece alguém da área?
            </Heading>

            <Button
              primary
              color="light-1"
              href="https://forms.gle/h1sX9nD45PgUAzGB6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="register form"
              label={
                <Text size="small" color={COLORS.brand}>
                  Cadastre-se aqui
                </Text>
              }
              size="medium"
              droplet="bottom-left"
            />
          </Box>
        </Box>
      </Modal>
    )
  }
}

HeaderNavModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export { HeaderNavModal }
