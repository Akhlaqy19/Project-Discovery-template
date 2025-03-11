import React, { useState } from "react";
import ScanBoxToolkits from "./ScanBoxToolkits"

import {toolkitsInfos} from "./../datas";

function ScanVulnerabilities() {
  
  const [isHorizontalMarquee, setIsHorizontalMarquee] = useState(false);

  return (
    <>
      <section
        className="group **:pointer-events-none"
        onMouseEnter={() => setIsHorizontalMarquee(true)}
        onMouseLeave={() => setIsHorizontalMarquee(false)}
      >
        <div className="flex items-center justify-between pb-3 pt-6">
          <h3 className="group-hover:text-white box-title-effect">
            Continuously scan for exploitable vulnerabilities
          </h3>
        </div>

        <div className="group relative h-full w-full pb-2 overflow-hidden">
          <div className="w-[calc(100%-2px)] py-2 transition-colors">
            <div
              className={`flex gap-3 shrink-0 *:bg-base-2 
            *:flex *:flex-col *:items-start *:justify-between *:gap-1
            *:w-full *:min-w-48 *:min-h-48 *:rounded-xl *:p-4
            *:*:first:p-2.5 *:*:first:rounded-full *:*:first:bg-black 
              ${isHorizontalMarquee ? "horizontal-marquee" : ""}`}
            >
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits key={toolkitData.id} {...toolkitData} />
              ))}
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits key={toolkitData.id} {...toolkitData} />
              ))}
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits key={toolkitData.id} {...toolkitData} />
              ))}
              {toolkitsInfos.map((toolkitData) => (
                <ScanBoxToolkits key={toolkitData.id} {...toolkitData} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScanVulnerabilities;
