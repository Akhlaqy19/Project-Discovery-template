/**
 * Slider Component
 * 
 * A component that displays a continuous scrolling banner of company logos.
 * Features:
 * - Infinite scroll effect
 * - Grayscale and opacity styling
 * - Responsive layout
 * - Multiple instances for seamless animation
 * 
 * @component
 * @example
 * <Slider />
 */

import React from "react";
import { sliderLogosInfo } from "./../../datas";

export default function Slider() {
  return (
    <>
      <section className="custom-container-sm py-0 mt-6">
        <div className="w-full opacity-30 grayscale">
          <div
            className="custom-container-sm swiper-container py-2
            px-8 w-full flex-col center *:items-center mx-auto text-center overflow-hidden"
          >
            <div
              className="group transform-none opacity-100 
              flex items-center shrink-0 gap-x-4 overflow-hidden
              *:shrink-0 *:flex *:items-center *:gap-x-4 *:*:mx-6"
            >
              <SliderBase />
              <SliderBase />
              <SliderBase />
              <SliderBase />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * SliderBase Component
 * 
 * A subcomponent that renders a single row of company logos.
 * Features:
 * - Dynamic logo rendering from data
 * - Consistent spacing and alignment
 * - Background color matching
 * 
 * @component
 */

const SliderBase = () => {
  return (
    <>
      <div className="slider bg-midnight justify-around">
        {sliderLogosInfo.map((logo) => (
          <div key={logo.id} className="bg-midnight">
            <img
              src={`/icons/header-logos/${logo.src}`}
              alt={`${logo.src.toUpperCase()} company logo`}
              className="bg-midnight mx-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
};
