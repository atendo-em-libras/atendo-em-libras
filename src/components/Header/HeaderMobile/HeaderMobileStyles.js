import styled from 'styled-components'
import { PrimaryButton } from '../../Buttons'
import { Layer } from 'grommet'

const StyledButton = styled(PrimaryButton)`
  border-radius: 20px 20px 20px 0;
  background-color: white;
  color: #5996f7;
`

// height and position are handled manually to prevent
// fullscreen modal issue on mobile browsers. For more info read:
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
const MainMenuModal = styled(Layer)`
  position: fixed;
  height: 100%;
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
  h2 {
    width: 80%;
    color: white;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6em;
    margin-bottom: 21px;
  }
`

export { StyledButton, MainMenuModal, Logo, Wrapper, Header, Footer }
