import React, { useState } from "react";
import Solution from './Solution';
import VulnerabilityDetails from '../VulnerabilityDetails';

export default function OurSolution() {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      // استفاده از مختصات clientX و clientY برای تعیین موقعیت ماوس نسبت به پنجره
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // ایجاد استایل maskImage با استفاده از مختصات ماوس
    const maskImageStyle = `radial-gradient(300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`;


  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="group relative flex-col size-full items-center justify-center bg-midnight"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 bg-line-grid-stroke"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 bg-line-grid-gray group-hover:opacity-50"
          style={{ maskImage: maskImageStyle }}
        ></div>
        <div className="relative z-40 mt-12 size-full">
          <section className="custom-container-sm pb-0" id="solutions">
            <Solution />
            <VulnerabilityDetails />
          </section>
        </div>
      </div>
    </>
  );
}
