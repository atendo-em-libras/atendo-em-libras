import React from 'react';
import {grommet, Grommet} from "grommet";
import AppHeader from "./components/header/header";
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
              phoneNumber="(11) 96578 3434"
              email="i.standar27@fgv.com.br" 
              experience="I love lorem ipsum"
              healthInsurance="Amil, Unimed, SulAmérica"
              videoCallPlataform="iClinic"
              city="Recife"
              state="PE"
              adress="Rua Antônio Falcão, 45, Boa Viagem"/>
        </Grommet>
    </div>
  );
}

export default App;
