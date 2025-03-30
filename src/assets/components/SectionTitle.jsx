/**
 * SectionTitle Component
 * 
 * A reusable component for displaying section titles with animations.
 * Features:
 * - Animated entrance with staggered children
 * - Customizable width for description
 * - Automatic uppercase conversion for subtitle
 * - Gradient title styling
 * 
 * @param {Object} props
 * @param {string} props.mainTitle - The main title text
 * @param {string} props.subTitle - The subtitle text (will be converted to uppercase)
 * @param {string} props.description - The description text
 * @param {string} props.width - Custom width class for description container
 * 
 * @example
 * <SectionTitle
 *   mainTitle="Our Services"
 *   subTitle="What We Offer"
 *   description="Discover our comprehensive range of services"
 *   width="w-3/4"
 * />
 */

import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  mainTitle,
  subTitle,
  description,
  width,
}) {
  const wrapperVariants = {
    hidden: { opacity: 0, y: "30%" },
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
      <motion.div 
      variants={wrapperVariants} 
      whileInView={wrapperVariants} 
      initial="hidden" 
      animate="visible">
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
