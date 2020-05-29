import React from 'react';
import {grommet, Grommet} from "grommet";
import AppHeader from "./components/header/AppHeader";
import { ProviderCard } from "./components/providerCard/ProviderCard";

function App() {
  return (
    <div className="App">
        <Grommet theme={grommet}>
            <AppHeader/>
            <ProviderCard
              name="Luciana Andrade Souza"
              licenseNumber="CRM 151515"
              category="Medicina"
              specialty="Clínica Geral"
              videoCallAvailability={true}
              phoneNumber={"(11) 96578 3434"}
              email={"i.standar27@fgv.com.br"} />
        </Grommet>
    </div>
  );
}

export default App;
