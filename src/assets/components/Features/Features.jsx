import React, { useEffect, useState, useRef } from "react";
import SectionTitle from "./../SectionTitle";
import {featureInfos} from "./../../datas";
import { motion, useScroll, useTransform } from "framer-motion";

function Features() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative top-20 mx-auto mt-60 max-w-7xl h-[300vh]"
    >
      <FeatureCard1 scrollYProgress={scrollYProgress} {...featureInfos[0]} />
      <FeatureCard2 scrollYProgress={scrollYProgress} {...featureInfos[1]} />
      <FeatureCard3 scrollYProgress={scrollYProgress} {...featureInfos[2]} />
    </section>
  );
}

// ================== FeatureCard Components ==================
const FeatureCardBase = ({
  scrollYProgress,
  id,
  subTitle,
  title,
  description,
  img,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsSticky(entry.intersectionRatio == 1);
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px 0px 0px 0px', // منطبق با top: 0 در استایل sticky
  //       threshold: [0, 1]
  //     }
  //   );

  //   if (elementRef.current) observer.observe(elementRef.current);
    
  //   return () => observer.disconnect();
  // }, []);

  const Component = isSticky ? motion.section : "section";
  const motionProps = isSticky ? { style: { scale } } : {};

  return (
    <Component
      ref={elementRef}
      className="sticky top-0 h-screen px-7 mx-auto w-full mt-5"
      {...motionProps}
    >
      <div className="flex flex-col gap-2 mx-auto w-full text-left items-start">
        <SectionTitle
        mainTitle={title}
        subTitle={subTitle}
        description={description}
        width={""}
        />
      </div>

      <div className="mt-6 overflow-hidden border-3 border-stone-800 rounded-2xl">
        <img src={img} alt="" className="block w-full card_feature-img" />
      </div>
    </Component>
  );
};

// ================== Separated Cards ==================
const FeatureCard1 = (props) => <FeatureCardBase {...props} />;
const FeatureCard2 = (props) => <FeatureCardBase {...props} />;
const FeatureCard3 = (props) => <FeatureCardBase {...props} />;

export { FeatureCard1, FeatureCard2, FeatureCard3 };
export default Features;