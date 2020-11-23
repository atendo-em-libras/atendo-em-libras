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
  button {
    margin-bottom: 12px;
    margin-right: 0;
  }
  ${respondTo.desktop`
    flex-direction: row;
    button {
      margin-bottom: 0px;
      margin-right: 12px;
    }
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
  margin-right: 8px;
  color: ${COLORS.brand};
  font-size: 14px;
  padding: 12px 23px;
  span {
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
const StyleFilterArrowIcon = styled(IconText)`
  height: 15px;
  width: 15px;
  vertical-align: sub;
  margin-right: 0;
  margin-left: 12px;
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
  StyleFilterArrowIcon,
}
