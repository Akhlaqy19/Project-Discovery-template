import React, { useRef } from "react";
import { attackServicesInfos } from "./../../datas";
import RowAttackServices from "./RowAttackServices";

export default function AttackServices() {
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
        className="group col-span-4 md:col-span-2 flex flex-col gap-y-7 py-7 h-75.5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="">
          <h3 className="group-hover:text-white box-title-effect">
            Monitor your entire attack surface
          </h3>
        </div>

        {/*   h-full w-auto  */}
        <div className="bg-base-2 bg-custom-gradient pointer-events-none relative z-20 h-47.5 mt-5 mx-5 backdrop-blur-2xl **:font-light rounded-xl overflow-hidden">
          {/*  */}
          <div className="relative top-0 z-40 h-auto w-full rounded-xl pb-1 text-left **:tracking-wide **:uppercase *:*:inline-block">
            <div
              className="flex justify-around py-3
            *:*:font-light *:*:text-sm text-gray *:*:leading-3 *:*:tracking-wide fonts-list
            "
            >
              <div className="w-2/5 text-left pl-6">
                <p className="">HOST</p>
              </div>
              <div className="w-1/5">
                <p className="">PORT</p>
              </div>
              <div className="w-1/5 pl-3">
                <p className="">TECH</p>
              </div>
              <div className="w-1/5 pr-4 text-center">
                <p className="text-gray-400">ɪ</p>P
              </div>
            </div>
          </div>
          <section className="w-full overflow-hidden">
            <div
              ref={marqueeRef}
              className="flex flex-col h-312 vertical-marquee"
            >
              <AttackServicesBase />
              <AttackServicesBase />
              <AttackServicesBase />
              <AttackServicesBase />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

const AttackServicesBase = () => {
  return (
    <>
      <div
        className="h-78 *:flex *:items-center *:text-sm
        *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
        *:*:nth-[2]:pl-4  *:*:nth-[3]:pl-0 *:*:nth-[3]:*:gap-x-1.75 *:
        transition-transform 
        "
      >
        {attackServicesInfos.map((data) => (
          <RowAttackServices key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};
