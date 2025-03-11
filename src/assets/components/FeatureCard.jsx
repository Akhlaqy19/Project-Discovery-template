import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function FeatureCard({ i, subTitle, title, description, img }) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });  

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    

  return (
    <>
      <motion.section
        style={{ scale }}
        className="sticky top-40 h-screen px-7 mx-auto w-full
         mt-5"
      >
          <div className="flex flex-col gap-2 mx-auto w-full text-left items-start">
            <span
              className="inline-block text-xs font-light 
            tracking-3 text-sub-yellow uppercase"
            >
              {subTitle}
            </span>
            <h2
              className="pt-4 text-11 font-semibold -tracking-wide
              title-gradient"
            >
              {title}
            </h2>
            <p className="text-gray text-lg font-light tracking-wide">
              {description}
            </p>
          </div>

          <div className="mt-6 overflow-hidden border-3 border-stone-800 rounded-2xl">
            <img src={img} alt="" className="block w-full card_feature-img" />
          </div>
      </motion.section>
    </>
  );
}

export default FeatureCard;
