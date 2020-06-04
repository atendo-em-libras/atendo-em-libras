import styled from 'styled-components'
import { Box } from 'grommet'

export const Card = styled(Box)`
  font-size: 10px;
  margin: 50px;
  width: 700px;
  border-radius: 15px;
  box-shadow: 0px 10px 32px #0000001A;
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 2em;
  line-height: 3em;

  & .providerName {
    font-weight: 600;
    color: #0F1423;
    font-size: 1.8em;
  }

  & .providerCardColumn {
    border-right: #F5F5F5 1.5px dashed;
    padding-right: 3em;
  }
  
  & .providerCardColumn:last-child {
    padding-left: 3em;
    border-right: none;
    margin-right: none;
  }

  & .providerSpecialty {
    color: #0F1423;
    font-size: 1.4em;
    white-space: nowrap;
    overflow: hidden;
    max-width: 30em;
    text-overflow: ellipsis;
  }
  
  & .providerVideoCallAvailability {
    color: #5996F7;
    background-color: #c7ddfd;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 15px;
    font-size: 1.4em;
    font-weight: 600;
    padding: 0.5em 1em;
  }
`