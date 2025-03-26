import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import StarryBackground from "./assets/components/StarryBackground";
import WavyPlaneWireframe from "./assets/components/WavyPlaneWireframe";
import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Header/Hero";
import Slider from "./assets/components/Header/Slider";
import Features from "./assets/components/Features/Features";
import Purpose from "./assets/components/PurposeSection/Purpose";
import OurSolution from "./assets/components/Solution/OurSolution";
import Integration from "./assets/components/Integration/Integration";
import CommunityPowered from "./assets/components/CommunityPowered/CommunityPowered";
import Customization from "./assets/components/Customization/Customization";
import Community from "./assets/components/Community/Community";
import End from "./assets/components/End/End";

function App() {
  return (
    <>
      <div className="relative mx-auto max-w-384 font-main">
        <StarryBackground />
        <Header />
        <main className="relative z-30 min-h-screen">
          <Hero />
          <Slider />
          <Features />
          <Purpose />
          <OurSolution />
          <Integration />
          <CommunityPowered />
          <Customization />
          <Community />
        </main>
        <End />
      </div>
    </>
  );
}

export default App;
