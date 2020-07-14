import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Grommet } from 'grommet'
import { DEFAULT_THEME } from './constants'
import { FeatureTogglesContext } from './FeatureTogglesContext'
import { toggles } from './constants'
import GlobalStyle from './globalStyles'
import Routes from './routes/router'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Grommet plain theme={DEFAULT_THEME}>
        <FeatureTogglesContext.Provider value={toggles}>
          <Header />
          <Routes />
          <Footer />
        </FeatureTogglesContext.Provider>
      </Grommet>
    </div>
  )
}

export default App
