import React, { useState } from "react";
import ScanBoxToolkits from "./ScanBoxToolkits";
import { toolkitsInfos } from "./../../datas";

function ScanVulnerabilities() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)


  return (
    <>
      <section
        className="group col-span-4 md:col-span-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-50 m-0 h-auto w-full p-0 py-0">
          <div className="size-full">
            <div className="pointer-events-none relative z-20 h-auto w-full">
              <div className="flex items-center justify-between px-6 pb-3 pt-6">
                <h3
                  className="group-hover:text-white text-base xl:text-lg text-gray 
                tracking-xs font-semibold box-title-effect"
                >
                  Continuously scan for exploitable vulnerabilities
                </h3>
              </div>
            </div>

            <div className="group pointer-events-none relative z-20 size-full pb-2 overflow-hidden">
              <div className="relative top-0 z-40 h-auto w-full pb-2 transition-colors">
                <div className="mask-x-sm mx-auto w-[calc(100%-2px)] py-2 transition-colors">
                  <div
                    className="group pointer-events-none flex flex-row gap-3 shrink-0 p-2 overflow-hidden [--duration:30s]"
                  >
                    <div className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${isHovered ? "running" : "" }`}>
                      {toolkitsInfos.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id}
                          {...toolkitData}
                        />
                      ))}
                    </div>


                    {/* تکرار محتوای انیمیشن برای ایجاد افکت پیوسته */}
                    <div className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${isHovered ? "running" : "" }`}>
                      {toolkitsInfos.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>

                    <div className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${isHovered ? "running" : "" }`}>
                      {toolkitsInfos.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>

                    <div className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${isHovered ? "running" : "" }`}>
                      {toolkitsInfos.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScanVulnerabilities;
