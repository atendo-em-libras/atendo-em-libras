import { CheckBoxGroup, DropButton, Box } from 'grommet'
import { Button } from '../../Buttons'
import { Select } from '../../Form'
import styled from 'styled-components/macro'
import { COLORS } from '../../../constants/colors'
import { IconText } from '../../IconText'
import { respondTo } from '../../../utils/breakpoints/_respondTo'

const StyledDropBox = styled(Box)`
  background: ${COLORS.brand};
  color: #fff;
  border-radius: 12px;
  * {
    border-color: #fff;
  }
`

const StyledFilterBox = styled(Box)`
  flex-direction: column;
  ${respondTo.desktop`
    flex-direction: row;
  `}
`

const StyledCheckBox = styled(CheckBoxGroup)`
  div {
    border-color: #fff !important;
  }
  input:checked + div {
    background: #fff;
  }
  svg {
    stroke: ${COLORS.brand};
  }
`

const StyledSaveButton = styled(Button)`
  background: #fff;
  color: ${COLORS.brand};
`

const StyledClearButton = styled(Button)`
  color: #fff;
`

const StyledSelect = styled(Select)`
  color: #000;
`

const StyledHr = styled.hr`
  height: 1px;
`

const StyledDropButton = styled(DropButton)`
  border: 2px solid ${COLORS.brand};
  color: ${COLORS.brand};
  font-size: 14px;
  padding: 12px 23px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  ${respondTo.desktop`
    margin-bottom: 0px;
  `} span {
    vertical-align: middle;
  }
`

const StyledIconText = styled(IconText)`
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 12px;
`
const StyledFormChip = styled.div`
  height: 44px;
  padding: 0 22px;
  background: ${COLORS.brandLight};
  color: ${COLORS.brand};
  border-radius: 22px;
  font-size: 14px;
  margin: 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StyledClearFilterButton = styled(Button)`
  background: #eb5757;
  margin: 5px 5px 5px 0px;
  color: #fff;
`
const StyledFilterArrowIcon = styled(IconText)`
  height: 15px;
  width: 15px;
  vertical-align: sub;
  margin-right: 0;
  margin-left: 12px;
`

const StyledCloseButton = styled(Button)`
  margin-left: 12px;
  padding: 0 7px;
  border-radius: 50%;
  background: ${COLORS.brand};
  img {
    margin: 0;
    width: 10px;
    height: 10px;
    vertical-align: inherit;
  }
`

export {
  StyledCheckBox,
  StyledClearButton,
  StyledDropBox,
  StyledFilterBox,
  StyledSaveButton,
  StyledSelect,
  StyledDropButton,
  StyledHr,
  StyledIconText,
  StyledFormChip,
  StyledClearFilterButton,
  StyledFilterArrowIcon,
  StyledCloseButton,
}
