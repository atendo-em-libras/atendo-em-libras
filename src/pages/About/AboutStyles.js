import styled from 'styled-components'
import { respondTo } from '../../utils/breakpoints/_respondTo'
import { Paragraph } from '../../components/Typography/Paragraph'
import { Box, Avatar, Image } from 'grommet'

const AboutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`

const SectionStyled = styled.section`
  p {
    padding-bottom: 2em;
  }

  background-color: ${(props) => props.backgroundColor};

  ${respondTo.desktop`
    background: ${(props) =>
      props.backgroundImg ? `url(${props.backgroundImg}) no-repeat ${props.backgroundColor}` : ''};
    background-position-x: -275px;
    background-size: contain;
  `}
`
const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
`

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

const AspectRatioBox = styled(Box)`
  padding-top: ${(props) => `calc(${props.ratio} * 100%)`};
  height: 0;
  position: relative;
  ${respondTo.desktop`
    padding-top: ${(props) => `calc(( ${props.ratio} * 100% ) / 3)`};
  `}
`

const ParagraphStyled = styled(Paragraph)`
  ${respondTo.desktop`
    line-height: ${(props) => props.lineHeight};
  `}
`

const OverlaidImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 7px;
  width: 52px;
  ${respondTo.desktop`
    left: 8px;
  `}
`

/* stylelint-disable property-no-unknown */
const DropletAvatar = styled(Avatar)`
  border-${(props) => props.dropletDirection}-radius: 0; 
`
/* stylelint-enable property-no-unkown */

export { AboutWrapper, SectionStyled, Video, Square, AspectRatioBox, ParagraphStyled, OverlaidImage, DropletAvatar }
