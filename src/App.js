import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"
import { ProviderCard } from "./components/providerCard/ProviderCard";

function App() {
  return (
    <div className="App">
      <Header />
      <ProviderCard
        name="Luciana Andrade Souza"
        licenseNumber="CRM 151515"
        category="Medicina"
        specialty="Clínica Geral"
        videoCallAvailability={true}
        phoneNumber={"(11) 96578 3434"}
        email={"i.standar27@fgv.com.br"}
        city="Recife"
        state="PE"
        healthInsurance="Amil, SulAmérica, Bradesco..."
        experience="Médico formado pela PUCRS com 7 anos de experiência..."
        address="Rua Itapevi, 67"
        videoCallPlatform="iClinic" />
        <Footer />
    </div>
  );
}

export default App;
