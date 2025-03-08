import React from 'react';
import Header from './assets/components/Header';
// import Navbar from './assets/components/Navbar';
// import Hero from './assets/components/Hero';
import Purpose from "./assets/components/Purpose";
import Features from './assets/components/Features';
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
