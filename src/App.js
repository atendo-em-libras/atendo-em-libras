import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer"
import { ProviderList } from "./components/ProviderList";

function App() {
  return (
      <div className="App">
        <Header />
        <ProviderList />
        <Footer />
      </div>
  );
}

export default App;
