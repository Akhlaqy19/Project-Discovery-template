import React, { useRef, useState } from "react";
import AttackServicesBase from "./AttackServicesBase";

function AttackServices() {
 
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
        className="group flex flex-col gap-y-7 py-7 h-75.5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="">
          <h3 className="group-hover:text-white box-title-effect">
            Monitor your entire attack surface
          </h3>
        </div>

        <div
          className="h-47.5 mt-5 px-6 bg-base-2 backdrop-blur-2xl 
                **:font-light **:leading-3.5 rounded-2xl overflow-hidden"
        >
          <div className="h-11.25 text-xm text-left *:inline-block py-3 *:tracking-wide">
            <div className="w-2/5">
              <span className="">HOST</span>
            </div>
            <div className="w-1/5">
              <span className="">PORT</span>
            </div>
            <div className="w-1/5 pl-3">
              <span className="">TECH</span>
            </div>
            <div className="w-1/5 text-center">
              <span className="text-x1">ɪ</span>P
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

export default AttackServices