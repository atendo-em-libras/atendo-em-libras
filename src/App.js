import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProviderList } from './components/ProviderList'
import { Container } from './components/Container'
import { Grommet } from 'grommet'
import { DEFAULT_THEME } from './constants'
import { FeatureTogglesContext } from './FeatureTogglesContext'
import { toggles } from './constants'

function App() {
  return (
    <div className="App">
      <Grommet plain theme={DEFAULT_THEME}>
        <FeatureTogglesContext.Provider value={toggles}>
          <Header />
          <Container>
            <ProviderList />
          </Container>
          <Footer />
        </FeatureTogglesContext.Provider>
      </Grommet>
    </div>
  )
}

export default App
