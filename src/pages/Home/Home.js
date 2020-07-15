import React from 'react'
import { Container } from '../../components/Container'
import { ProviderList } from '../../components/ProviderList'
import ReactGA from 'react-ga'

class Home extends React.Component {
  componentDidMount() {
    ReactGA.pageview('/')
  }

  render() {
    return (
      <Container>
        <ProviderList />
      </Container>
    )
  }
}

export { Home }
