import React from "react";

function ScanBoxToolkits({name, situate, code, score, img}) {
  return (
    <>
      <div className="border border-black">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="mt-1">
          <h5 className="text-white text-lg font-light tracking-[0.3px]">
            {name}
          </h5>
          <div className="">
            <p className="text-base font-light tracking-[0.3px] leading-6">
              {situate}
            </p>
            <p className="font-light text-sm leading-4 sm:text-[10px]">
              {code}
            </p>
          </div>
        </div>
        <button>
          <p className="mt-2 px-3 py-1 font-light text-xm leading-3.5 rounded-full border border-red-500 bg-red-400/30 text-red-400">
            {score}
          </p>
        </button>
{/* 
        <div
          className="GlowBackground_glowBackground__jasUQ"
          style="background-color: rgb(34, 34, 34); --glow-color: #444444; --glow-size-start: 0px; --glow-size-end: 500px; --border-radius: 16px; --border-width: 1px; --overlay-color: radial-gradient(160.33% 160.3% at 98.14% 97.73%,rgba(9, 9, 11, 0) 33.78%,rgba(255, 255, 255, 0.03) 64.91%,rgba(255, 255, 255, 0.03) 100%),#09090b; --x: 0px; --y: 0px;"
        >
          <div className="GlowBackground_glowBorderBg__g39y_ "></div>
        </div> */}
      </div>
    </>
  );
}

export default ScanBoxToolkits;
