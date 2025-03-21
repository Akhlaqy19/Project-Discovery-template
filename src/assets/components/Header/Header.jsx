import React from 'react'
import Navbar from './Navbar'


function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-midnight/80 backdrop-blur-lg transition-all duration-300 border-b border-transparent">
        <Navbar />
      </header>
    </>
  );
}

export default Header
