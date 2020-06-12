import styled from 'styled-components'
import { Box } from 'grommet'

const Card = styled(Box)`
  font-size: 10px;
  border-radius: 15px;
  box-shadow: 0px 10px 32px #0000001a;
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 2em;
  line-height: 3em;
  word-break: break-word;

  & .providerCardColumn:last-child {
    border-right: none;
    margin-right: none;
  }

  @media (min-width: 700px) {
    & .providerCardColumn {
      border-right: #f5f5f5 1.5px dashed;
      padding-right: 3em;
    }

    & .providerCardColumn:last-child {
      padding-left: 3em;
    }
  }
`

export { Card }
