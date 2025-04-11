/**
 * Hero Component
 * 
 * A hero section component with animated content and interactive elements.
 * Features:
 * - Animated text and content using Framer Motion
 * - Monitor component integration
 * - Interactive bitmaps with tooltips
 * - Responsive layout
 * - Gradient text effects
 * 
 * @component
 * @example
 * <Hero />
 */

import React, { useState, useEffect } from "react";
import Monitor from "./../Monitor";
import Bitmap from "./../Bitmap";
import axios from 'axios';
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

export default function Hero() {
  const [bitmapsInfo, setBitmapsInfo] = useState([]);
  const [bitmapTooltipInfo, setBitmapTooltipInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bitmapsResponse, tooltipResponse] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/bitmapsInfo`),
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/bitmapTooltipInfo`)
        ]);
        setBitmapsInfo(bitmapsResponse.data);
        setBitmapTooltipInfo(tooltipResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bitmap data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!bitmapsInfo.length || !bitmapTooltipInfo.length) return null;

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
                <Monitor />
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

