/**
 * Features Component
 * 
 * A section component that displays feature cards with scroll-based animations.
 * Features:
 * - Scroll-based animations
 * - Sticky positioning
 * - Responsive design
 * - Framer Motion integration
 * - Snake border effects
 * 
 * @component
 * @example
 * <Features />
 */

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

/**
 * FeatureCardBase Component
 * 
 * Base component for feature cards with scroll-based animations.
 * Features:
 * - Scroll progress tracking
 * - Scale and opacity animations
 * - Image display with border effects
 * - Responsive layout
 * 
 * @param {Object} props
 * @param {number} props.scrollProgress - Current scroll progress (0-1)
 * @param {string} props.subTitle - Subtitle text for the feature
 * @param {string} props.title - Main title text
 * @param {string} props.description - Feature description
 * @param {string} props.img - Image URL
 * @param {string} props.id - Unique identifier
 * 
 * @component
 * @example
 * <FeatureCardBase
 *   scrollProgress={0.5}
 *   subTitle="Feature"
 *   title="Main Feature"
 *   description="Feature description"
 *   img="/path/to/image.png"
 *   id="feature-1"
 * />
 */
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

/**
 * DummyCard Component
 * 
 * A placeholder component for handling the last card's animation.
 * Features:
 * - Scroll-based animations
 * - Scale and opacity transitions
 * - Viewport detection
 * 
 * @param {Object} props
 * @param {number} props.scrollProgress - Current scroll progress (0-1)
 * 
 * @component
 * @example
 * <DummyCard scrollProgress={0.5} />
 */
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
