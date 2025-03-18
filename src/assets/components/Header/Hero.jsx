import React from "react";
import Monitor from "./../Monitor";
import Bitmap from "./../Bitmap";
import {bitmapData} from "./../../datas";

function Hero() {
  return (
    <>
      <section className="relative">
        <div className="relative z-40 mb-10">
          <div className="custom-container lg:pt-48 py-42 lg:pb-14 bg-0.15 text-center text-white">
            <div className="pointer-events-none relative z-40 w-full flex flex-col items-center">
              <div className="flex flex-col gap-3 mb-2 mt-14 w-full items-center text-center mx-auto pointer-events-auto lg:max-w-160">
                <h1 className="section-gradient-title">
                  Monitor your infrastructure. Real vulnerabilities. Zero noise.
                </h1>

                <p className="section-subtitle mt-2 max-w-xl">
                  Trusted by 100k+ security professionals to streamline <br />
                  vulnerabilities that can actually be exploited.
                </p>
                <div className="mt-6">
                  <div className="flex w-full mx-auto min-w-96">
                    <Monitor />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 z-50 hidden h-full w-full md:block">
              {/* <Bitmap
                top={`[32%]`}
                left={`left-[7%]`}
                right={``}
                size={`w-14 h-18`}
                scale={``}
                img={bitmap1}
              />
              <Bitmap top={`[52%]`} left={``} right={`right-[15.5%]`} size={`size-12`} scale={`scale-75`} img={bitmap2}/>
              <Bitmap top={`[20%]`} left={``} right={`right-[4.5%]`} size={`size-8`} scale={`scale-50`} img={bitmap3}/> */}

              {
                bitmapData.map(data => (
                  <div key={data.id}>
                    <Bitmap {...data}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
