import React from "react";
import Monitor from "./../Monitor";
import Bitmap from "./../Bitmap";
import { bitmapsInfo } from "./../../datas";
import { bitmapTooltipInfo } from "./../../datas";
import { motion } from "framer-motion";

const wrapperVariants = {
  hidden: { opacity: 0, y: "3%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Hero() {
  return (
    <>
      <section className="custom-container custome-p lg:pt-48 py-42 lg:pb-14 bg-0.15 text-center text-white">
        <div className="pointer-events-none relative z-40 w-full flex flex-col items-center">
          <motion.div
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            className="transform-gpu flex flex-col gap-3 mb-2 mt-16 w-full items-center text-center mx-auto pointer-events-auto lg:max-w-160"
          >
            <motion.h1
              variants={childVariants}
              className="section-gradient-title"
            >
              Monitor your infrastructure. Real vulnerabilities. Zero noise.
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="section-subtitle mt-2 max-w-xl"
            >
              Trusted by 100k+ security professionals to streamline <br />
              vulnerabilities that can actually be exploited.
            </motion.p>
            <motion.div variants={childVariants} className="mt-6">
              <div className="flex w-full mx-auto min-w-96">
                {/* <div className="mx-auto flex w-full"> */}
                <Monitor />
                {/* </div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute left-0 top-[0] z-50 hidden h-full w-full md:block">
          {bitmapsInfo[0].map((data) => (
            <div key={data.id}>
              <Bitmap {...data} {...bitmapTooltipInfo[data.id - 1]} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
