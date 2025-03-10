import React from "react";
import { motion } from "framer-motion";


function FeatureCard({ subTitle, title, description, img }) {
  return (
    <>
      <section className="px-7 mx-auto w-full">
        <div 
        className="">
          <div className="flex flex-col gap-4 mx-auto w-full text-left items-start">
            <span
              className="inline-block text-xs font-light 
            tracking-3 text-sub-yellow uppercase"
            >
              {subTitle}
            </span>
            <h2
              className="pt-5 text-11 font-semibold -tracking-wide
              title-gradient"
            >
              {title}
            </h2>
            <p className="text-gray text-lg font-light tracking-wide">
              {description}
            </p>
          </div>

          <div className="mt-6 overflow-hidden border-3 border-stone-800 rounded-2xl">
            <img src={img} alt="" className="block w-full card_feature-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureCard;
