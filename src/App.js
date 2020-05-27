import React from 'react';
import './App.css';
import { ProviderCard } from './components/providerCard'
import {grommet, Grommet} from "grommet";
import AppHeader from "./components/header/header";

function App() {
  return (
    <div className="App">
        <Grommet theme={grommet}>
            <AppHeader/>
            <ProviderCard/>
        </Grommet>
    </div>
  );
}

export default App;
