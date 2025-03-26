import React from 'react'
import ReactDOM from "react-dom";

export default function WavyPlaneWireframe() {

  const root = document.getElementById("root");
    
  return ReactDOM.createPortal(
    <>
      <div className="max-w-screen absolute left-0 top-0 z-30 size-full mt-186">
        <img
          src="/img/MountainGrid@2x.webp"
          alt="mountain grid"
          className="sticky top-28 z-10 w-718.75 h-367.5 max-w-screen left-[0]"
        />
      </div>
    </>,
    root
  );
}
