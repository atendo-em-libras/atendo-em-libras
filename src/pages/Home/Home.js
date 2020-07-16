import React from 'react'
import { Container } from '../../components/Container'
import { ProviderList } from '../../components/ProviderList'
import { HomeCallOut } from './HomeCallOut/HomeCallOut'
import { HomeBanner } from './HomeBanner/HomeBanner'
import styled from 'styled-components/macro'

const HomeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`

class Home extends React.Component {
  render() {
    return (
      <><HomeWrapper>
        <HomeBanner />
        <HomeCallOut />
        </HomeWrapper>
        <Container>
          <ProviderList />
        </Container>
      </>
    )
  }
}

export { Home }
