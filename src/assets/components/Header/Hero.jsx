import React from "react";
import Monitor from "./../Monitor";
import Bitmap from "./../Bitmap";
import { bitmapsHeader } from "./../../datas";
import { Canvas } from '@react-three/fiber'
import WavyPlaneWireframe from "./../WavyPlaneWireframe";

function Hero() {
  return (
    <>
      <section className="">
        <div className="relative z-40 mb-10">
          <Canvas
            className="absolute top-0 left-0"
            camera={{ position: [0, 10, 10] }}
            style={{ position: "absolute", top: 0, left: 0 }}
            
          >
            <WavyPlaneWireframe />
          </Canvas>
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
              {bitmapsHeader.map((data) => (
                <div key={data.id}>
                  <Bitmap {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
