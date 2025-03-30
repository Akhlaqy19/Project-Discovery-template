/**
 * ScanBoxToolkits Component
 * 
 * A component that displays individual toolkit information in a card format.
 * Features:
 * - Icon display with gradient background
 * - Vulnerability score indicator
 * - Responsive text sizing
 * - Custom gradient background
 * 
 * @param {Object} props
 * @param {string} props.name - Toolkit name
 * @param {string} props.situate - Situation or description
 * @param {string} props.code - Vulnerability code
 * @param {string} props.score - Vulnerability score
 * @param {string} props.img - Icon image filename
 * 
 * @example
 * <ScanBoxToolkits
 *   name="SQL Injection"
 *   situate="Critical vulnerability detected"
 *   code="CVE-2023-123"
 *   score="9.8"
 *   img="sql-injection.svg"
 * />
 */

import React from "react";

function ScanBoxToolkits({name, situate, code, score, img}) {
  return (
    <>
      
      <div className="bg-base-2 pointer-events-none flex w-full min-w-48 flex-col items-start justify-between gap-1 rounded-xl bg-custom-gradient p-4">
        <div
          className="bg-base rounded-full bg-gradient-radial from-white/15 to-transparent 
        p-2.5"
        >
          <img
            src={`/icons/toolkits-for-vulnerability/${img}`}
            alt=""
            className="size-4"
          />
        </div>
        <div className="mt-1">
          <h5 className="text-white text-base xl:text-lg font-light tracking-xs">
            {name}
          </h5>
          <div className="flex flex-col gap-0">
            <p className="font-light tracking-xs text-sm md:text-base text-gray leading-6">
              {situate}
            </p>
            <p className="font-light text-sm text-gray leading-4 sm:text-[10px]">
              {code}
            </p>
          </div>
        </div>
        <button>
          <p className="font-light mt-2 px-3 py-1 text-xs leading-3 rounded-full border border-red-500 bg-red-400/30 text-red-400">
            {score}
          </p>
        </button>
      </div>
    </>
  );
}

export default ScanBoxToolkits;
