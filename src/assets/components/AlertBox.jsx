import React, { useState } from "react";
import RowAlertBox from "./RowAlertBox"
import {rowAlertBoxInfos} from "./../datas"

function AlertBox() {

  const [isVerticalMarquee, setIsVerticalMarquee] = useState(false);

  return (
    <>
      <section
        className=" relative m-0 p-0 w-full pb-7 h-75 bg-glass-primary rounded-xl
      "
        onMouseEnter={() => setIsVerticalMarquee(true)}
        onMouseLeave={() => setIsVerticalMarquee(false)}
      >
        <div className="flex items-center justify-between mb-4 w-full px-6 pb-3 pt-6 text-gray">
          {/* duration-200 */}
          <h3 className="text-base xl:text-lg font-semibold tracking-[0.3px] transition-colors ">
            Alert your engineering team in minutes
          </h3>
        </div>
        <div className="relative mx-5 h-full rounded-xl">
          <div className="bg-base relative h-auto w-full overflow-hidden rounded-xl p-0">
            <div className="group flex flex-col bg-base-2 relative h-48 max-h-48 gap-0 overflow-hidden p-0 ">
              {/* [--duration-200] */}
              {/* group-hover:[animation-play-state:running] [animation-play-state:paused] */}
              <div
                className={`flex flex-col shrink-0 justify-around 
                  ${isVerticalMarquee ? "vertical-marquee" : ""}`}
              >
                {rowAlertBoxInfos.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
                {rowAlertBoxInfos.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
                {rowAlertBoxInfos.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
                {rowAlertBoxInfos.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AlertBox