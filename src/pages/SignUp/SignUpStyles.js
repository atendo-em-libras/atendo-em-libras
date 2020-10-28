import logoLarge from '../../assets/images/pages/singup/signup-logo.svg'
import { respondTo } from '../../utils/breakpoints/_respondTo'
import styled from 'styled-components/macro'
import { Box } from 'grommet'

const Square = styled(Box)`
  box-shadow: 0px 10px 32px #00000029;
  border-radius: 0px 20px 20px 20px;
  width: 45px;
  height: 45px;
  padding: 10px;
  ${respondTo.desktop`
    width: 50px;
    height: 50px;
  `}
`

const SectionBox = styled(Box)`
  margin-top: 50px;
`

const FormBox = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f7f8fa;

  ${respondTo.desktop`
    background: url(${logoLarge}) no-repeat #f7f8fa;
    background-position-x: -300px;
    background-position-y: 320px;
    background-size: 660px 550px;
  `}
`
export { Square, SectionBox, FormBox }
