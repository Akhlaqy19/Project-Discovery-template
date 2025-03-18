import React from "react";
// import imgBox from "/img/Forta.webp";
import ExploitNotif from "./ExploitNotif";
import { communityInfo } from "../../datas";


export default function CommunityPowered() {
  return (
    <>
      <section className="custom-container py-20">
        <div className="relative z-40 flex w-full flex-col-reverse gap-10 px-2 md:px-0 lg:flex-row">
          <div className="relative flex h-auto w-full flex-col justify-center lg:flex lg:w-2/5 lg:pl-8 xl:w-2/5 xl:pl-0 2xl:min-h-170 2xl:w-2/5">
            <div className="relative h-auto w-full overflow-hidden rounded-xl xl:h-full">
              <div className="relative size-full">
                <div className="absolute left-0 top-0 z-30 size-full bg-midnight/60 hover:overlay-back"></div>
                <div className="overlay absolute left-[38%] top-[44%] z-40">
                  <a
                    className="relative inline-flex items-center gap-x-1.5 overflow-hidden rounded-md px-4 py-2 text-sm tracking-xs shadow-sm border border-sub-yellow text-sub-yellow font-medium bg-sub-yellow/20 hover:text-midnight hover:bg-sub-yellow backdrop-blur-sm"
                    target="_self"
                    href="https://cloud.projectdiscovery.io/public/CVE-2024-0204"
                  >
                    View template
                    <div className="rounded-md">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[inherit] 
                        [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] 
                        ![mask-composite:intersect] 
                        [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square 
                        after:w-10 after:animate-border-beam 
                        after:[animation-delay:-0s] 
                        after:[background:linear-gradient(to_left,#FFF,#EEF35F,transparent)] 
                        after:[offset-anchor:90%_50%] 
                        after:[offset-path:rect(0_auto_auto_0_round_40px))]"
                        // style="--size: 40; --duration: 15; --anchor: 90; --color-from: #ffffff; --color-to: #EEF35F; --delay: -0s;"
                      ></div>
                    </div>
                  </a>
                </div>

                <img
                  src="/img/Forta.webp"
                  alt="hero"
                  className="relative z-20 h-auto w-full text-transparent lg:mt-auto xl:mt-0 xl:h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center px-1 lg:w-3/5 lg:pl-4 lg:pr-10 xl:w-2/5 xl:pr-0">
            <div className="flex flex-col gap-3 items-start text-left mb-8 mt-16 *:transform-none">
              <div className="my-5">
                <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
                  COMMUNITY POWERED
                </p>
              </div>
              <div>
                <h3 className="title-section title-gradient">
                  The fastest exploits feed on the Internet
                </h3>
              </div>
              <div>
                <p className="text-base xl:text-lg text-gray font-light tracking-xs w-full">
                  ProjectDiscovery is powered by our Nuclei open source project.
                  A global security community that streamlines exploits in
                  real-time.
                  <span className="block font-semibold">
                    Nuclei is used by Fortune 500 organizations, security firms,
                    and government-led agencies
                  </span>
                  to tackle the emerging exploitable vulnerabilities.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-72 w-full">
              <div className="relative z-30 flex w-full flex-col gap-4">
                <div className="bg-base-2 z-30 w-full rounded-xl bg-custom-gradient px-5 py-2 transform-none">
                  <p className="font-light text-sm md:text-base w-full leading-6 tracking-normal text-white">
                    Fortra GoAnywhere MFT - Authentication Bypass
                  </p>
                  <p className="font-light text-sm text-gray w-full leading-5 tracking-normal">
                    CVE-2024-0204
                  </p>
                </div>
                {communityInfo.map((data) => (
                  <div key={data.id}>
                    <ExploitNotif {...data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 z-20 size-full">
          <div className="custom-container-sm relative z-40 mx-auto size-full px-3 py-2 lg:px-8">
            <div className="relative overflow-hidden bg-base size-full rounded-2xl border">
              <div
                className="
                pointer-events-none
                absolute 
                inset-0 
                rounded-[inherit] 
                [border:calc(var(--border-width)*1px)_solid_transparent] 
                ![mask-clip:padding-box,border-box] 
                ![mask-composite:intersect] 
                [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square 
                after:w-75 
                after:animate-border-beam 
                after:[animation-delay:0s]
                after:[background:linear-gradient(to_left, #111112, #444444, transparent)] 
                after:[offset-anchor:90%_50%] 
                after:[offset-path:rect(0_auto_auto_0_round_300*1px))]"
              ></div>
            </div>
            <div className="absolute -bottom-5 right-12 z-30 w-auto md:right-24">
              <div className="flex items-center gap-0">
                <PaginationNumber number="1" rounded="rounded-l-xl" border="" />
                <PaginationNumber
                  number="2"
                  rounded=""
                  border="border-x-none"
                />
                <PaginationNumber number="3" rounded="rounded-r-xl" border="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



const PaginationNumber = ({ number, rounded, border }) => {
  return (
    <>
      {/* sm:bg-midnight */}
      <button
        className={`bg-base-smoke ${rounded} px-4 py-3 font-medium ${border} text-white hover:bg-midnight`}
      >
        {number}
      </button>
    </>
  );
};

export { PaginationNumber };