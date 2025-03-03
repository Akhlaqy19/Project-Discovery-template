import React from 'react';
import Header from './assets/components/Header';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Features from './assets/components/Features';
import Footer from './assets/components/Footer';
import './App.css'

function App() {

  return (
    <>
     <div className="App mx-auto max-w-384 font-main">

        <Header/>
        <Features />
        {/* <About />
        <CTA /> */}
        <Footer />
     </div>
    </>
  )
}

export default App
