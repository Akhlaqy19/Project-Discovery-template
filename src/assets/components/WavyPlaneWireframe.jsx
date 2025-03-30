/**
 * WavyPlaneWireframe Component
 * 
 * A portal-based background component that displays a mountain grid image.
 * Features:
 * - Uses React Portal for rendering outside the main DOM hierarchy
 * - Lazy loading for better performance
 * - Sticky positioning for parallax-like effect
 * - Responsive image sizing
 * 
 * @component
 * @example
 * <WavyPlaneWireframe />
 */

import React from 'react'
import ReactDOM from "react-dom";

export default function WavyPlaneWireframe() {

  const root = document.getElementById("root");
    
  return ReactDOM.createPortal(
    <>
      <div className="absolute left-0 top-0 z-30 size-full mt-186">
        <img
          src="/img/MountainGrid@2x.webp"
          srcSet="/img/MountainGrid@2x.webp"
          alt="mountain grid"
          className="sticky top-28 z-10 w-718.75 h-367.5 left-[0]"
          loading="lazy"
          decoding="async"
          
        />
      </div>
    </>,
    root
  );
}
