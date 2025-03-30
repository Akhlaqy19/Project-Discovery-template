import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

/**
 * StarryBackground Component
 * 
 * A component that creates an interactive starry background effect using tsParticles.
 * Features:
 * - Particle system
 * - Static star effect
 * - Customizable particle properties
 * - Responsive density
 * - Performance optimized
 * 
 * @component
 * @example
 * <StarryBackground />
 */

export default function StarryBackground() {

     const [init, setInit] = useState(false);

     // this should be run only once per application lifetime
     useEffect(() => {
       initParticlesEngine(async (engine) => {
         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         //await loadAll(engine);
         //await loadFull(engine);
         await loadSlim(engine);
         //await loadBasic(engine);
       }).then(() => {
         setInit(true);
       });
     }, []);

  return (
    <>
     { init && 
      <Particles
        options={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                area: 300,
              },
            },
            color: {
              value: "#b4b4bb",
            },
            size: {
              value: 1,
            },
            move: {
              enable: false,
            },
            shape: {
              type: "circle",
            },
          },
        }}
      />
      }
    </>
  );
}
