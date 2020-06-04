import React from "react";
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"
import { ProviderList } from "./components/ProviderList";

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
});

function App() {
  return (
      <Grommet className="App" full theme={customBreakpoints}>
        <Header />
        <ProviderList />
        <Footer />
      </Grommet>
  );
}

export default App;
