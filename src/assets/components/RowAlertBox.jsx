import React from 'react'

function RowAlertBox({type, code, details, count, img, name}) {

  const color = type.toLowerCase();

  return (
    <>
      <div
        className="flex flex-col items-start gap-2 px-3 py-5 border-b border-b-[#222] border-stroke 
        md:flex-row md:items-center md:gap-8 md:px-0 *:w-auto"
      >
        <div className="flex gap-4 md:pl-4">
          <p
            className={`px-3 py-2 text-center text-${color} leading-4 text-sm font-medium rounded-full border md:w-24 
            bg-opacity-10 border-opacity-10 backdrop-blur-sm`}
          >
            {type}
          </p>
          <p
            className="px-3 py-2 text-center text-gray font-light leading-4 rounded-full
           border border-[#27272A] text-sm md:w-40"
          >
            {code}
          </p>
        </div>
        <div className="my-2 flex items-center gap-4 pr-4 text-left md:my-0">
          <p className="text-sm text-gray font-medium leading-3.5 tracking-wide text-moon">
            {details}
          </p>
          {/* sm:bg-opacity-0 */}
          <p className="font-light leading-4 text-gray bg-base hidden rounded-full px-3 py-2 text-xm md:flex md:text-sm">
            {count} assets
          </p>
        </div>
        <div className="flex items-center gap-4 text-left md:ml-auto md:w-56 md:pr-4">
          <p className="font-light text-sm text-gray leading-3.5 tracking-wide">
            Alert sent to
          </p>
          <img
            src={`/icons/alert-box-icons/${img}`}
            alt=""
            className="text-white"
          />
          <p className="font-light leading-4 text-white py-2 text-sm">{name}</p>
        </div>
      </div>
    </>
  );
}

export default RowAlertBox