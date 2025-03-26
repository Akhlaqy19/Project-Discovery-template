import React from 'react'
import { motion } from "framer-motion";

export default function Bitmap({ yAxis, xAxis, size, scale, img }) {

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
      transition: {
        duration: 1.6,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={wrapperVariants}
        className={`absolute cursor-pointer ${yAxis} ${xAxis}`}
      >
        <a href="#" target="_blank" className={`pointer-events-auto ${size}`}>
          <div className={`pointer-events-auto`}>
            <img
              src={`/icons/bitmaps/${img}`}
              alt=""
              className={`bitmap ${scale}`}
            />
          </div>
        </a>
      </motion.div>
    </>
  );
}
