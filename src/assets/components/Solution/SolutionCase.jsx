import React from 'react'

export default function SolutionCase({title}) {
  return (
    <>
      <div className="bg-base-2 relative z-30 flex size-24 rounded-full md:h-32 md:w-32">
        <div className="m-auto flex h-auto w-auto flex-col items-center gap-1.5 align-middle">
          <p className="tracking-xs text-sm md:text-base leading-6 m-0 p-0 font-medium text-white sm:text-base">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
