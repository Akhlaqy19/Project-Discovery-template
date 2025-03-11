import React from 'react'
import SolutionCase from "./SolutionCase"
import CompanyLogo from "/icons/company-logo.svg";

export default function Solution() {
  return (
    <>
      <section className="custom-container-sm">
        <div className="relative z-40 mt-12 size-full">
          <div className="w-full flex flex-col items-center py-12 md:pb-0 md:pt-20">
            <div className="flex flex-col gap-3 items-center text-center mx-auto my-6 max-w-2xl">
              <div className="my-5">
                <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
                  Our Solution
                </p>
              </div>
              <div>
                <h2 className="title-gradient text-3xl md:text-3xl lg:text-4xl xl:text-11 font-semibold leading-[1.15] xl:leading-[1.20] tracking-[-1px]">
                  Dramatically reduce scanning times, tools, and resources
                </h2>
              </div>
              <div>
                <p className="text-base xl:text-lg text-gray font-light tracking-[0.3px] max-w-xl">
                  Consolidate scattered scanning tools into a single, precise,
                  customizable framework for modern teams.
                </p>
              </div>
            </div>
            <div
              className="relative flex flex-col gap-11 w-full md:gap-24 
            *:flex *:justify-between"
            >
              <div className="">
                <SolutionCase title="Application" />
                <SolutionCase title="DNS" />
              </div>
              <div className="relative">
                <SolutionCase title="Internal" />
                <div className="bg-base-2 relative z-30 flex size-28 rounded-full md:h-36 md:w-36">
                  <div className="font-light tracking-xs text-sm md:text-base leading-base m-auto text-white">
                    <img src={CompanyLogo} alt="Project Discovery logo" />
                  </div>
                </div>
                <SolutionCase title="Cloud" />
              </div>
              <div className="flex">
                <SolutionCase title="API" />
                <SolutionCase title="Database" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
