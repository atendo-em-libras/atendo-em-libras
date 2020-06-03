import styled from 'styled-components'

export const Card = styled.div`
  font-size: 10px;
  margin: 50px;
  width: 700px;
  border-radius: 15px;
  box-shadow: 0px 10px 32px #0000001A;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  padding: 2em;
  line-height: normal;

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
`