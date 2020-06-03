import React from 'react';
import { Header } from "./components/Header";
import { ProviderCard } from "./components/providerCard/ProviderCard";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProviderCard
        name="Luciana Andrade Souza"
        licenseNumber="CRM 151515"
        category="Medicina"
        specialty="Clínica Geral"
        videoCallAvailability={true}
        phoneNumber={"(11) 96578 3434"}
        email={"i.standar27@fgv.com.br"} />
    </div>
  );
}

export default App;
