import React, { useRef, useCallback } from "react";
import SectionTitle from "./../SectionTitle";
import { featureInfos } from "./../../datas";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import SnakeBorder from "../SnakeBorder";

function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-50 top-20 pt-44 mx-auto max-w-7xl h-[400vh]"
    >
      <FeatureCard1 scrollProgress={scrollYProgress} {...featureInfos[0]} />
      <FeatureCard2 scrollProgress={scrollYProgress} {...featureInfos[1]} />
      <FeatureCard3 scrollProgress={scrollYProgress} {...featureInfos[2]} />
      <DummyCard scrollProgress={scrollYProgress} />
    </section>
  );
}

// ================== FeatureCard Components ==================
const FeatureCardBase = ({
  scrollProgress,
  subTitle,
  title,
  description,
  img,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  // Memoize transform calculations with useCallback
  const getTransforms = useCallback(() => {
    const scale = useTransform(
      scrollProgress,
      [0, 1],
      isInView ? [1, 0.5] : [1, 1]
    );
    const opacity = useTransform(
      scrollProgress,
      [0, 1],
      isInView ? [1, 0] : [1, 1]
    );
    return { scale, opacity };
  }, [scrollProgress, isInView]);

  const transforms = getTransforms();

  return (
    <motion.section
      ref={ref}
      style={transforms}
      className="sticky top-0 h-screen w-full mt-0 px-7 mx-auto"
    >
      <div className="flex flex-col gap-2 mx-auto w-full text-left items-start">
        <SectionTitle
          mainTitle={title}
          subTitle={subTitle}
          description={description}
          width=""
        />
      </div>
      <div className="relative">
        <motion.img
          src={img}
          alt=""
          className="block mt-6 w-full overflow-hidden border-3 border-stone-800 rounded-2xl card_feature-img"
        />
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <SnakeBorder
            specialStyles="
            after:w-75 
            after:[background:linear-gradient(to_left,#222222,#999999,transparent)] 
            after:[offset-path:rect(0_auto_auto_0_round_400px)]"
          />
        </div>
      </div>
    </motion.section>
  );
};

// Dummy component for handling the last card's animation
const DummyCard = ({ scrollProgress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  const transforms = useCallback(() => {
    const scale = useTransform(
      scrollProgress,
      [0, 1],
      isInView ? [1, 0.5] : [1, 1]
    );
    const opacity = useTransform(
      scrollProgress,
      [0, 1],
      isInView ? [1, 0] : [1, 1]
    );
    return { scale, opacity };
  }, [scrollProgress, isInView]);

  return (
    <motion.section
      ref={ref}
      style={transforms()}
      className="sticky top-0 h-screen w-full mt-0 px-7 mx-auto"
    />
  );
};

const FeatureCard1 = (props) => <FeatureCardBase {...props} />;
const FeatureCard2 = (props) => <FeatureCardBase {...props} />;
const FeatureCard3 = (props) => <FeatureCardBase {...props} />;

export { FeatureCard1, FeatureCard2, FeatureCard3 };
export default Features;
