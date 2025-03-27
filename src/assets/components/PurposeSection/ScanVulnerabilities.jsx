import React, { useRef, useState } from "react";
import ScanBoxToolkits from "./ScanBoxToolkits"
import {toolkitsInfos} from "./../../datas";


function ScanVulnerabilities() {

  const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
      marqueeRef.current.classList.add("running");
    };

    const handleMouseLeave = () => {
      marqueeRef.current.classList.remove("running");
    };

  return (
    <>
      <section
        className="group col-span-4 md:col-span-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between pb-3 pt-6">
          <h3 className="group-hover:text-white box-title-effect">
            Continuously scan for exploitable vulnerabilities
          </h3>
        </div>

        <div className="group relative h-full w-full pb-2 overflow-hidden">
          <div className="w-[calc(100%-2px)] py-2 transition-colors">
            <div
              ref={marqueeRef}
              className="flex gap-3 shrink-0 *:bg-base-2 
            *:flex *:flex-col *:items-start *:justify-between *:gap-1
            *:w-full *:min-w-48 *:min-h-48 *:rounded-xl *:p-4
            *:*:first:p-2.5 *:*:first:rounded-full *:*:first:bg-black horizontal-marquee"
            >
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits key={toolkitData.id} {...toolkitData} />
              ))}
              {/* تکرار محتوای انیمیشن برای ایجاد افکت پیوسته */}
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits
                  key={toolkitData.id + "-duplicate"}
                  {...toolkitData}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScanVulnerabilities;
