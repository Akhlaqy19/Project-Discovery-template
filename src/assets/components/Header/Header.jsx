import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Slider from "./Slider";


function Header() {
  return (
    <>
      <header className="w-full">
        <Navbar />
        <Hero />
        <Slider />
      </header>
    </>
  );
}

export default Header
