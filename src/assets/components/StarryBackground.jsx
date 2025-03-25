import React from "react";
import Particles from "@tsparticles/react";

export default function StarryBackground() {
  return (
    <>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        options={{
          background: {
            color: { value: "#000" }, // رنگ پس‌زمینه
          },
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffff00",
            },
            size: {
              value: 8, // اندازه کوچک‌تر
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
    </>
  );
}
