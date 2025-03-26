import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  mainTitle,
  subTitle,
  description,
  width,
}) {
  const wrapperVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
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

  subTitle = subTitle.toUpperCase();

  return (
    <>
      <motion.div variants={wrapperVariants} whileInView={wrapperVariants} initial="hidden" animate="visible">
        <motion.div className="my-5" variants={childVariants}>
          <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
            {subTitle}
          </p>
        </motion.div>
        <motion.div className="mt-8" variants={childVariants}>
          <h3 className="section-gradient-title w-full">{mainTitle}</h3>
        </motion.div>
        <motion.div
          className="mt-3"
          variants={{
            hidden: {
              opacity: 0,
              y: "4%",
            },
            visible: {
              opacity: 1,
              y: 0
            },
          }}
        >
          <p className={`section-subtitle ${width} mx-auto`}>{description}</p>
        </motion.div>
      </motion.div>
    </>
  );
}
