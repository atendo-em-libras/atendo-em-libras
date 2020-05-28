import React from 'react';
import './App.css';
import {grommet, Grommet} from "grommet";
import AppHeader from "./components/header/header";
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
