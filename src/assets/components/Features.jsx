import React, {useEffect, useState, useRef} from "react";
import FeatureCard from "./FeatureCard";
import featureInfos from "../datas";
// import {motion, useScroll, useTransform} from "framer-motion";

function Features() {
 
  useEffect(() => {
  
  }, []);


  return (
    <section className="relative top-40 mx-auto mt-75 max-w-7xl w-screen">
      {
        featureInfos.map((featureData, index) => (
            
            <div
              
              // style={{scale}}
              className="child sticky top-0 mt-6 mx-auto h-screen"
              key={featureData.id}
              // i={index}
            >
              <FeatureCard i={index} {...featureData}></FeatureCard>
            </div>
          )
        )
      }
    </section>
  )
};

export default Features;