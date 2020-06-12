import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProviderList } from './components/ProviderList'
import { Container } from './components/Container'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ProviderList />
      </Container>
      <Footer />
    </div>
  )
}

export default App
