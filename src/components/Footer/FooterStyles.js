import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  background-color: #ffffff;
  border-top: solid #0000001a 1px;
  flex-flow: row;
`

const FooterContent = styled.section`
  display: flex;
  flex-flow: row;
  @media (max-width: 800px) {
    flex-flow: column;
    align-items: flex-start;
    margin: 58px 0 58px 0;
  }
  @media (min-width: 801px) {
    height: 20vh;
  }
  justify-content: space-between;
  align-items: center;
`

const FooterLogo = styled.img`
  height: 5em;
`

const FooterDetails = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row;
  @media (max-width: 800px) {
    flex-flow: column;
    align-items: flex-start;
  }
  align-items: center;
  justify-content: space-between;
`
const InfoBox = styled.div`
  height: 5em;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-top: 40px;
  }
  img {
    height: 1.8em;
  }
  p,
  a {
    color: black;
    font-size: 1.6em;
    font-weight: 600;
  }
  *:last-child {
    font-weight: 400;
  }
  &:first-child {
    margin-right: 100px;
  }
`

export { StyledFooter, FooterContent, FooterDetails, FooterLogo, InfoBox }
