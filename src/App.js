import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProviderList } from './components/ProviderList'
import { Container } from './components/Container'
import { Grommet } from 'grommet'
import { DEFAULT_THEME } from './constants'

function App() {
  return (
    <div className="App">
      <Grommet plain theme={DEFAULT_THEME}>
        <Header />
        <Container>
          <ProviderList />
        </Container>
        <Footer />
      </Grommet>
    </div>
  )
}

export default App
