import React from 'react';
import Header from './assets/components/Header/Header';
import Hero from './assets/components/Header/Hero';
import Slider from './assets/components/Header/Slider';
import Features from './assets/components/Features/Features';
import Purpose from "./assets/components/PurposeSection/Purpose";
import Solution from './assets/components/Solution/Solution';
import VulnerabilityDetails from './assets/components/VulnerabilityDetails';
import Integration from "./assets/components/Integration/Integration";
import CommunityPowered from "./assets/components/CommunityPowered/CommunityPowered";
import Customization from './assets/components/Customization/Customization';
import Community from "./assets/components/Community/Community";
import Footer from './assets/components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <div className="mx-auto max-w-384 font-main">
        <Header />
        <main className="relative z-30 min-h-screen">
          <Hero />
          <Slider />
          <Features />
          <Purpose />
          <Solution />
          <VulnerabilityDetails />
          <Integration />
          <CommunityPowered/>
          <Customization />
          <Community/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
