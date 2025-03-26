import React, { useRef } from "react";
import SectionTitle from "./../SectionTitle";
import { featureInfos } from "./../../datas";
import { motion, useTransform, useScroll, useInView } from "framer-motion";

function Features() {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative top-20 mx-auto mt-60 max-w-7xl h-[300vh]"
    >
      <FeatureCard1 scrollProgress={scrollYProgress} {...featureInfos[0]} />
      <FeatureCard2 scrollProgress={scrollYProgress} {...featureInfos[1]} />
      <FeatureCard3 scrollProgress={scrollYProgress} {...featureInfos[2]} />
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

  // وقتی کارت بعدی وارد viewport شد، کارت قبلی کوچک و کم‌رنگ شود
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

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
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
      <motion.img
        src={img}
        alt=""
        className="block mt-6 w-full overflow-hidden border-3 border-stone-800 rounded-2xl card_feature-img"
      />
    </motion.section>
  );
};

const FeatureCard1 = (props) => <FeatureCardBase {...props} />;
const FeatureCard2 = (props) => <FeatureCardBase {...props} />;
const FeatureCard3 = (props) => <FeatureCardBase {...props} />;

export { FeatureCard1, FeatureCard2, FeatureCard3 };
export default Features;
