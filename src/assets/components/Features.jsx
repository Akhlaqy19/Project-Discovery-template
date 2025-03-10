import React, {useEffect, useState, useRef} from "react";
import FeatureCard from "./FeatureCard";
import featureInfos from "../datas";
import {motion} from "framer-motion";

function Features() {
  // نگهداری وضعیت فعال بودن افکت برای هر div فرزند
  // const [activeStates, setActiveStates] = useState([false, false, false]);
  // const child1Ref = useRef(null);
  // const child2Ref = useRef(null);
  // const child3Ref = useRef(null);

const cardVariants = {
    hidden: {
    y: 30,
    opacity: 0,
  },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        type: "spring",
        damping: 60,
        mass: 1,
        stiffness: 400,
      },
    },
  };

  useEffect(() => {
  
  }, []);


  return (
    <motion.section className="relative mx-auto mt-75 max-w-7xl">
      {
        featureInfos.map((featureData) => (
            
            <motion.div
              className="child sticky top-40 mt-6 mx-auto "
              key={featureData.id}
              // initial="hidden"
              // variants={cardVariants}
              // viewport={{ once: true }}
              // whileInView="visible"
            >
              <FeatureCard {...featureData}></FeatureCard>
            </motion.div>
          )
        )
      }
    </motion.section>
  )
};

export default Features;