import React from 'react'

function RowAlertBox({type, code, details, count, img, name}) {
  return (
    <>
      <div
        className="flex flex-col items-start gap-2 px-3 pb-4 border-b border-stroke 
        md:flex-row md:items-center md:gap-8 md:px-0 *:w-auto"
     
      >
        <div className="flex gap-4 md:pl-4 text-gray">
          <p className="px-3 py-2 text-center text-medium leading-4 text-sm font-medium rounded-full border md:w-24 bg-medium/10 border-medium/10">
            {type}
          </p>
          <p
            className="px-3 py-2 text-center font-light leading-4 rounded-full
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
          <img src={`/icons/alert-box-icons/${img}`} alt="" className='text-white'/>
          <p className="font-light leading-4 text-white py-2 text-sm">{name}</p>
        </div>
      </div>
    </>
  );
}

export default RowAlertBox