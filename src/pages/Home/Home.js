import React from 'react'
import { Container } from '../../components/Container'
import { ProviderList } from '../../components/ProviderList'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <ProviderList />
      </Container>
    )
  }
}

export { Home }
