import React from "react";

function ScanBoxToolkits({name, situate, code, score, img}) {
  return (
    <>
      <div className="bg-base-2 border border-black">
        <div className="bg-base rounded-full bg-gradient-radial from-white/15 to-transparent p-2.5">
          <img
            src={`/icons/toolkits-for-vulnerability/${img}`}
            alt=""
            className="size-4"
          />
        </div>
        <div className="mt-1">
          <h5 className="text-white text-lg font-light tracking-xs">{name}</h5>
          <div className="">
            <p className="text-base font-light tracking-xs leading-6">
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
      </div>
    </>
  );
}

export default ScanBoxToolkits;
