import styled from 'styled-components'

export const Card = styled.div`
  font-size: 10px;
  margin: 50px;
  width: 625px;
  border-radius: 15px;
  box-shadow: 0px 10px 32px #0000001A;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  padding: 2em;
  line-height: 3em;

  & .providerCardHeader {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  & .providerName {
    font-weight: 600;
    color: #0F1423;
    font-size: 1.8em;
  }

  & .providerCardBody {
    display: flex;
    flex-flow: row;
    align-items: stretch;
    justify-content: space-around;
    margin-top: 1em;
  }

  & .providerCardColumn {
    width: 50%;
    border-right: #F5F5F5 1.5px dashed;
    margin-right: 2em;
  }
  
  & .providerCardColumn:last-child {
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