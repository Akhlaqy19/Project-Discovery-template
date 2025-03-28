import React, { useState } from "react";
import { attackServicesInfos } from "./../../datas";
import RowAttackServices from "./RowAttackServices";

export default function AttackServices() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <>
      <section
        className="group col-span-4 md:col-span-2 min-h-75.5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-50 m-0 size-full p-0 py-0">
          <div className="h-full w-full pb-8">
            <div className="pointer-events-none relative z-20 mb-4 h-auto w-full">
              <div className="flex items-center justify-between px-6 pb-3 pt-6">
                <h3 className="group-hover:text-white box-title-effect text-base xl:text-lg text-gray tracking-xs font-semibold">
                  Monitor your entire attack surface
                </h3>
              </div>
            </div>

            {/* bg-base-2 pointer-events-none relative z-20 mx-5 h-full w-auto rounded-xl bg-custom-gradient */}

            <div className="bg-base-2 pointer-events-none relative z-20 mx-5 h-full max-h-48 w-auto rounded-xl bg-custom-gradient">
              <div className="relative top-0 z-40 h-auto w-full rounded-xl pb-1">
                <div
                  className="flex justify-around py-3 *:not-first:w-1/5 *:*:font-light *:*:text-sm *:*:text-gray *:*:leading-3 *:*:tracking-wide fonts-list
                "
                >
                  <div className="w-2/5 text-left pl-6">
                    <p>HOST</p>
                  </div>
                  <div className="text-left">
                    <p>PORT</p>
                  </div>
                  <div>
                    <p>TECH</p>
                  </div>
                  <div className="pr-4 text-center">
                    <p>IP</p>
                  </div>
                </div>
              </div>
              <section className="relative top-0 z-40 h-auto w-full rounded-b-xl overflow-hidden">
                <div
                  // ref={marqueeRef}
                  className="group flex overflow-hidden p-2 flex-col relative z-20 max-h-36 gap-y-4"
                >
                  <AttackServicesBase isHovered={isHovered} />
                  <AttackServicesBase isHovered={isHovered} />
                  <AttackServicesBase isHovered={isHovered} />
                  <AttackServicesBase isHovered={isHovered} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const AttackServicesBase = ({ isHovered }) => {
  return (
    <>
      <div
        className={`flex shrink-0 justify-around gap-4 flex-col vertical-marquee ${
          // اگر isHovered هست، کلاس حذف میشه؛ در غیر اینصورت اضافه میشه.
          isHovered ? "running" : ""
        }`}
      >
        {attackServicesInfos.map((data) => (
          <RowAttackServices key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

// h-78
//  *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
// *:*:nth-[2]:pl-4  *:*:nth-[3]:pl-0 *:*:nth-[3]:*:gap-x-1.75 *:
// transition-transform
