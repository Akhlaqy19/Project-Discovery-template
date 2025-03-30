/**
 * Solution Component
 * 
 * A comprehensive solution showcase component displaying different scanning capabilities.
 * Features:
 * - Grid layout of solution cases
 * - Animated section titles
 * - Background grid lines
 * - Company logo integration
 * 
 * @component
 * @example
 * <Solution />
 */

import React from 'react'
import SectionTitle from "./../SectionTitle";
import SolutionCase from "./SolutionCase"
import CompanyLogo from "/icons/company-logo.svg";
import GraphDashLines from './GraphDashLines';

export default function Solution() {
  return (
    <>
      {/* <section className="custom-container-sm"> */}
        <div className="relative z-40 size-full">
          <div className="relative w-full flex flex-col items-center py-12 md:pb-0 md:pt-20">
            <div className="flex flex-col gap-3 items-center text-center mx-auto my-6 max-w-2xl">
              <SectionTitle
                mainTitle={`Dramatically reduce scanning times, tools, and resources`}
                subTitle={`Our Solution`}
                description={`Consolidate scattered scanning tools into a single, precise, customizable framework for modern teams.`}
                width={`max-w-xl`}
              />
            </div>

            <div
              className="relative flex flex-col gap-11 w-full md:gap-24 
            *:flex *:justify-between"
            >
              <div className="aspect-auto absolute top-0 left-0 right-0 bottom-0">
                <GraphDashLines />
              </div>
              <div className="">
                <SolutionCase title="Application" />
                <SolutionCase title="DNS" />
              </div>
              <div className="">
                <SolutionCase title="Internal" />
                <div className="bg-base-2 relative z-5 flex size-28 rounded-full md:h-36 md:w-36">
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
      {/* </section> */}
    </>
  );
}
