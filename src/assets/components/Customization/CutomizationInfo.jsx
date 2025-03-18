import React from 'react'

export default function CutomizationInfo({ img, title, text }) {
  return (
    <>
      <div className="col-span-1 flex flex-col gap-3">
        <img src={`/icons/customization-info/${img}.svg`} alt="" className='size-6'/>
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
