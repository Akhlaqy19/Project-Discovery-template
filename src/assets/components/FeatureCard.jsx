import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


function FeatureCard({ i, subTitle, title, description, img }) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"]
  })

  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.4]);

  return (
    <>
    {/* `${i * 500}px` */}
      <section ref={container} className="px-7 mx-auto w-full">
        <motion.div style={{top: -(scrollYProgress * 20)}} className="relative">

          <motion.div style={{ opacity: scrollYProgress + 0.3 , scale }} className="">

            <div
              className="">
              <div className="flex flex-col gap-4 mx-auto w-full text-left items-start">
                <span
                  className="inline-block text-xs font-light 
            tracking-3 text-sub-yellow uppercase"
                >
                  {subTitle}
                </span>
                <h2
                  className="pt-5 text-11 font-semibold -tracking-wide
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
            </div>
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}

export default FeatureCard;
