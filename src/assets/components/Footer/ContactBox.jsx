import React from 'react'

export default function ContactBox({ title, description, styles, children }) {
  return (
    <>
      <div className="pointer-events-auto col-span-2 w-full md:col-span-1">
        <div className="bg-base-2 flex size-full flex-col justify-between rounded-2xl p-7">
          <h3 className="mb-3 font-semibold text-white sm:text-xl">{title}</h3>
          <p className="font-light tracking-xs text-sm md:text-base leading-base text-gray mb-10">
            {description}
          </p>
          <div className={`flex ${styles}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
