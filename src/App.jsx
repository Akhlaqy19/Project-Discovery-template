import React from 'react';
import Header from './assets/components/Header/Header';
import Features from './assets/components/Features';
import Purpose from "./assets/components/Purpose";
import Solution from './assets/components/Solution/Solution';
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
