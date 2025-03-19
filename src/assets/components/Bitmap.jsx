import React from 'react'

export default function Bitmap({ yAxis, xAxis, size, scale, img }) {
  return (
    <>
      <div className={`absolute cursor-pointer ${yAxis} ${xAxis}`}>
        <a
          href="#"
          target="_blank"
          className={`pointer-events-auto ${size}`}
        >
          <div className={`pointer-events-auto`}>
            <img
              src={`/icons/bitmaps/${img}`}
              alt=""
              className={`bitmap ${scale}`}
            />
          </div>
        </a>
      </div>
    </>
  );
}
