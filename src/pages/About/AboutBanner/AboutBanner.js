import React from 'react'
import styled from 'styled-components/macro'

import { Container } from '../../../components/Container/Container'

class AboutBanner extends React.Component {
  render = () => {
    return (
      <Container>
        <div className={this.props.className}>
          <h1>Sobre o projeto</h1>
        </div>
      </Container>
    )
  }
}

const StyledAboutBanner = styled(AboutBanner)`
  width: 100%;
  height: auto;
  padding: 2em 0;
  box-sizing: border-box;
  background-color: #0f1423;
  color: white;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    align-items: flex-start;
    padding-left: 45%;
    min-height: 50vh;
    max-height: 500px;
  }
  img {
    width: 45%;
    max-height: 100%;
    left: 0;
    padding: 0 0 2em 0;
    box-sizing: border-box;
    @media (min-width: 800px) {
      padding: 2em 4vw 2em 0;
      position: absolute;
    }
  }
  h1 {
    margin-top: 1rem;
    font-size: 2em;
    font-weight: 400;
    line-height: 1.2em;
    text-align: left;
    @media (min-width: 800px) {
      margin-top: 0;
      width: 80%;
      font-size: 3.2em;
      line-height: 1.5em;
      text-align: left;
    }
  }
  p {
    margin: 1rem 3rem 2.5rem 0;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.3em;
    text-align: left;
    @media (min-width: 800px) {
      margin: 0;
      width: 80%;
      line-height: 1.5em;
      text-align: left;
    }
  }
`

export { StyledAboutBanner as AboutBanner }
