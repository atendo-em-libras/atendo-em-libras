import React from 'react'
import { Container } from '../../components/Container'
import { ProviderList } from '../../components/ProviderList'
import { HomeCallOut } from './HomeCallOut/HomeCallOut'

class Home extends React.Component {
  render() {
    return (
      <>
        <HomeCallOut />
        <Container>
          <ProviderList />
        </Container>
      </>
    )
  }
}

export { Home }
