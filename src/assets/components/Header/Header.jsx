/**
 * Header Component
 * 
 * A fixed header component that contains the main navigation.
 * Features:
 * - Fixed positioning at the top
 * - Transparent border with transition
 * - High z-index for overlay
 * - Responsive width
 * 
 * @component
 * @example
 * <Header />
 */

import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full max-w-384 transition-all duration-300 border-b border-transparent">
        <Navbar />
      </header>
    </>
  );
}