import React from 'react';
import {grommet, Grommet} from "grommet";
import AppHeader from "./components/header/AppHeader";
import { ProviderCard } from "./components/providerCard/ProviderCard";

function App() {
  return (
    <div className="App">
        <Grommet theme={grommet}>
            <AppHeader/>
            <ProviderCard name="Luciana Andrade Souza" category="Medicina" speciality="Clínica Geral" />
        </Grommet>
    </div>
  );
}

export default App;
