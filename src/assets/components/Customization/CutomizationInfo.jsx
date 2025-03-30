/**
 * CutomizationInfo Component
 * 
 * A component that displays customization information with icons and text.
 * Features:
 * - Icon display
 * - Responsive text sizing
 * - Custom styling
 * - Semantic HTML structure
 * 
 * @param {Object} props
 * @param {string} props.img - Path to icon image
 * @param {string} props.title - Title text
 * @param {string} props.text - Description text
 * 
 * @component
 * @example
 * <CutomizationInfo
 *   img="icon.png"
 *   title="Custom Templates"
 *   text="Create your own detection templates"
 * />
 */

import React from 'react'

export default function CutomizationInfo({ img, title, text }) {
  return (
    <>
      <div className="col-span-1 flex flex-col gap-3">
        <img src={`/icons/customization-info/${img}`} alt="" className='size-6'/>
        <h5 className="text-base xl:text-lg tracking-xs font-semibold text-white">
          {title}
        </h5>
        <p
          className="font-light tracking-xs text-sm md:text-base 
        leading-base text-gray"
        >
          <span>{text}</span>
        </p>
      </div>
    </>
  );
}
