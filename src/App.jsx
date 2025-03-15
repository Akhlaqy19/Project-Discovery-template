import React from 'react';
import Header from './assets/components/Header/Header';
import Features from './assets/components/Features';
import Purpose from "./assets/components/PurposeSection/Purpose";
import Solution from './assets/components/Solution/Solution';
import VulnerabilityDetails from './assets/components/VulnerabilityDetails';
import Integration from "./assets/components/Integration/Integration"
import Footer from './assets/components/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className="App mx-auto max-w-384 font-main container">
        <Header />
        <main>
          <Features />
          <Purpose />
          <Solution/>
          <VulnerabilityDetails/>
          <Integration/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
