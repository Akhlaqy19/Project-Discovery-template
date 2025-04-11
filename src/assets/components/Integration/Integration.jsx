/**
 * Integration Component
 * 
 * A section component that displays integration options with animated boxes.
 * Features:
 * - Animated grid layout
 * - Framer Motion animations
 * - Responsive design
 * - Staggered children animations
 * - Section title with description
 * 
 * @component
 * @example
 * <Integration />
 */

import React, { useState, useEffect } from "react";
import SectionTitle from "./../SectionTitle";
import IntegrationBox from "./IntegrationBox";
import axios from 'axios';
import { motion } from "framer-motion";

function Integration() {
  const [integrationBoxesInfo, setIntegrationBoxesInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/integrationBoxesInfo`);
        setIntegrationBoxesInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch integration boxes data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const wrapperVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: "10%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (loading) return null;
  if (error) return null;
  if (!integrationBoxesInfo.length) return null;

  return (
    <>
      <section className="custom-container-sm custom-p-sm mb-36">
        <div className="relative z-40 flex w-full flex-col items-center py-10 lg:pt-20">
          <div className="flex flex-col gap-3 items-center text-center mx-auto my-6">
            <SectionTitle
              mainTitle={`Integrate with your platforms`}
              subTitle={`Integrations`}
              description={`Use our integrations to get alerts sent instantly for ticketing.`}
              width={`max-w-xl`}
            />
          </div>
        </div>

        <motion.div
          variants={wrapperVariants}
          whileInView={wrapperVariants}
          initial="hidden"
          animate="visible"
          className="grid-col-1 relative grid w-full gap-4 md:grid-cols-3 md:gap-10"
        >
          {integrationBoxesInfo.map((data) => (
            <motion.div
              variants={childVariants}
              whileInView={childVariants}
              key={data.id}
            >
              <IntegrationBox {...data} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Integration;
