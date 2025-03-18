import React from "react";
import Monitor from "./../Monitor";
import bitmap1 from "/icons/header-bitmaps/1.svg";
import bitmap2 from "/icons/header-bitmaps/2.svg";
import bitmap3 from "/icons/header-bitmaps/3.svg";

function Hero() {
  return (
    <>
      {/* svg sprite */}
      {/*   */}
      <section className="relative">
        <div className="relative z-40 mb-10">
          <div className="custom-container lg:pt-48 py-42 lg:pb-14 bg-0.15 text-center text-white">
            <div className="pointer-events-none relative z-40 w-full flex flex-col items-center">
              <div
                // flex flex-col gap-3 items-center text-center mx-auto pointer-events-auto mb-2 mt-16 w-full lg:max-w-[640px]
                className="flex flex-col gap-3 mb-2 mt-14 w-full items-center text-center mx-auto pointer-events-auto lg:max-w-160"
              >
                <h1 className="title-section title-gradient">
                  Monitor your infrastructure. Real vulnerabilities. Zero noise.
                </h1>

                <p className="mt-2 font-light tracking-xs max-w-xl text-base xl:text-lg text-gray">
                  Trusted by 100k+ security professionals to streamline <br />
                  vulnerabilities that can actually be exploited.
                </p>
                <div className="mt-6">
                  <Monitor />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 z-50 hidden h-full w-full md:block">
              <div className="absolute cursor-pointer left-[7%] top-[32%]">
                <a
                  href="https://cloud.projectdiscovery.io/public/CVE-2024-27198"
                  target="_blank"
                  className="pointer-events-auto w-14 h-18 bg-no-repeat scale-100"
                >
                  <div className="pointer-events-auto">
                    <img src={bitmap1} alt="" className="bitmap" />
                  </div>
                </a>
              </div>
              <div className="absolute cursor-pointer top-[52%] right-[15.5%]">
                <a
                  href="#"
                  target="_blank"
                  className="pointer-events-auto size-12"
                >
                  <div className="pointer-events-auto">
                    <img src={bitmap2} alt="" className="bitmap scale-75" />
                  </div>
                </a>
              </div>

              <div className="absolute cursor-pointer top-[20%] right-[4.5%]">
                <a
                  href="#"
                  target="_blank"
                  className="pointer-events-auto size-8 opacity-85"
                >
                  <div className="pointer-events-auto">
                    <img src={bitmap3} alt="" className="bitmap scale-50" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
