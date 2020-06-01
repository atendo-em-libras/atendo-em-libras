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

  & .providerCardHeader {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  & .providerCardBody {
    display: flex;
    flex-flow: row;
    align-items: stretch;
    justify-content: space-around;
    margin-top: 1em;
  }
`