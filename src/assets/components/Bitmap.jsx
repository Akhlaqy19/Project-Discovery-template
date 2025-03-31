/**
 * Bitmap Component
 * 
 * An interactive bitmap component with mouse-follow rotation and animated tooltips.
 * Features:
 * - Mouse-follow rotation effect
 * - Animated tooltips with CVE information
 * - Customizable positioning and scaling
 * - Smooth animations using Framer Motion
 * 
 * @param {Object} props
 * @param {string} props.yAxis - Vertical positioning class
 * @param {string} props.xAxis - Horizontal positioning class
 * @param {string} props.size - Size class for the bitmap container
 * @param {string} props.scale - Scale class for the bitmap image
 * @param {string} props.img - Image filename in the bitmaps directory
 * @param {Object} props.tooltip - Tooltip configuration object
 * 
 * @example
 * <Bitmap
 *   yAxis="top-10"
 *   xAxis="left-10"
 *   size="size-12"
 *   scale="scale-100"
 *   img="bitmap1.png"
 *   tooltip={{
 *     id: "123",
 *     color: "text-red-500",
 *     text: "Critical Vulnerability",
 *     code: "2023-123",
 *     tooltipScale: 1,
 *     margin: "mt-2"
 *   }}
 * />
 */

import React from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Bitmap({ yAxis, xAxis, size, scale, img, ...tooltip }) {
  const rotate = useMotionValue(0);

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6,
      },
    },
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);
    const minAngle = -15;
    const maxAngle = 15;
    if (angleDeg < minAngle) angleDeg = minAngle;
    if (angleDeg > maxAngle) angleDeg = maxAngle;
    rotate.set(angleDeg);
  };

  const handleMouseLeave = () => {
    rotate.set(0);
  };

  return (
    <>
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
        className={`absolute cursor-pointer ${yAxis} ${xAxis}`}
      >
        <motion.a
          href="#"
          target="_blank"
          className={`inline-block pointer-events-auto ${size}`}
          initial="rest"
          whileHover="hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`pointer-events-auto`}>
            <Tooltip rotate={rotate} {...tooltip} />
            <img
              src={`/icons/bitmaps/${img}`}
              alt=""
              className={`bitmap ${scale}`}
            />
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}

/**
 * Tooltip Component
 * 
 * A subcomponent of Bitmap that displays animated tooltips with vulnerability information.
 * Features:
 * - Spring-based animation
 * - Customizable styling and positioning
 * - CVE code display
 * 
 * @param {Object} props
 * @param {MotionValue} props.rotate - Rotation value from parent Bitmap
 * @param {string} props.id - Unique identifier for the tooltip
 * @param {string} props.color - Text color class
 * @param {string} props.text - Tooltip text content
 * @param {string} props.code - CVE code to display
 * @param {number} props.tooltipScale - Scale factor for the tooltip
 * @param {string} props.margin - Margin class for positioning
 */

const Tooltip = ({ rotate, id, color, text, code, tooltipScale, translate }) => {

  const textVariants = {
    rest: { opacity: 0, y: 30, scale: 0 },
    hover: {
      opacity: 1,
      y: 0,
      scale: tooltipScale,
      transition: {
        type: "spring",
        duration: 1.6,
        stiffness: 180,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`text absolute -top-16 z-50 center -translate-x-[38%] flex-col rounded-md bg-midnight px-4 py-2 shadow-xl whitespace-nowrap opacity-[1] ${translate}`}
        variants={textVariants}
        style={{ rotate }}
      >
        <div className={`relative z-30 text-base font-semibold ${color}`}>
          {text}...
        </div>
        <div className="text-xs text-white">CVE-{code}</div>
      </motion.div>
    </>
  );
};
