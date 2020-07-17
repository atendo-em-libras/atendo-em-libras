import React from 'react'
import { AboutBanner } from './AboutBanner/AboutBanner'
import styled from 'styled-components/macro'

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

class About extends React.Component {
  render() {
    return (
      <>
        <AboutWrapper>
          <AboutBanner />
        </AboutWrapper>
      </>
    )
  }
}

export { About }
