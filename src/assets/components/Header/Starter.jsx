/**
 * Starter Component
 * 
 * A container component that combines Hero and Slider sections.
 * Features:
 * - Hero section with main content
 * - Company logos slider
 * - Proper z-index layering
 * - Responsive layout
 * 
 * @component
 * @example
 * <Starter />
 */

import React from 'react'
import Hero from './Hero';
import Slider from './Slider';

export default function Starter() {
  return (
    <>
      <div className="relative z-40 mb-12">
        <Hero />
        <Slider />
      </div>
    </>
  );
}
