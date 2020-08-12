import styled from 'styled-components'
import { PrimaryButton } from '../../Buttons'

const StyledButton = styled(PrimaryButton)`
  border-radius: 20px 20px 20px 0;
  background-color: white;
  color: #5996f7;
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

export { StyledButton, Logo, Wrapper }
