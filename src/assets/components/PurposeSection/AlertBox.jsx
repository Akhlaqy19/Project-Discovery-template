import React, { useRef, useState } from "react";
import RowAlertBox from "./RowAlertBox";
import { rowAlertBoxInfos } from "./../../datas";

function AlertBox() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <section
        className="group relative col-span-4 md:col-span-4 m-0 p-0 w-full pb-7 h-75 bg-glass-primary rounded-xl
      "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between mb-4 w-full px-6 pb-3 pt-6 text-gray">
          <h3 className="group-hover:text-white box-title-effect text-base xl:text-lg font-semibold tracking-xs transition-colors ">
            Alert your engineering team in minutes
          </h3>
        </div>
        <div className="relative mx-5 h-full rounded-xl">
          <div className="bg-base relative h-auto w-full overflow-hidden rounded-xl p-0">
            <div className="group flex flex-col bg-base-2 relative h-48 max-h-48 gap-0 overflow-hidden p-0 ">
              {/*  [--gap:1rem] [gap:var(--gap)] flex-col bg-base-2 relative z-20 h-48 max-h-48 gap-0 overflow-hidden p-0 pt-4 [--duration:20s] */}


                <div className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${isHovered ? "running" : ""}`}>
                  {rowAlertBoxInfos.map((rowAlertBoxData) => (
                    <RowAlertBox
                      key={rowAlertBoxData.id}
                      {...rowAlertBoxData}
                    />
                  ))}
                </div>
                <div className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${isHovered ? "running" : ""}`}>
                  {rowAlertBoxInfos.map((rowAlertBoxData) => (
                    <RowAlertBox
                      key={rowAlertBoxData.id}
                      {...rowAlertBoxData}
                    />
                  ))}
                </div>
                <div className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${isHovered ? "running" : ""}`}>
                  {rowAlertBoxInfos.map((rowAlertBoxData) => (
                    <RowAlertBox
                      key={rowAlertBoxData.id}
                      {...rowAlertBoxData}
                    />
                  ))}
                </div>
                <div className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${isHovered ? "running" : ""}`}>
                  {rowAlertBoxInfos.map((rowAlertBoxData) => (
                    <RowAlertBox
                      key={rowAlertBoxData.id}
                      {...rowAlertBoxData}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default AlertBox;
