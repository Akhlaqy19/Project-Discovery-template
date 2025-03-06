import React from "react";
import FeatureCard from "./FeatureCard";
import featureInfos from "../datas";

function Features() {
  return (
    <section className="relative mx-auto mt-75 max-w-7xl">
      {featureInfos.map((featureData) => (
        <div className="sticky top-40 mt-6 mx-auto" key={featureData.id}>
          <FeatureCard {...featureData}></FeatureCard>
        </div>
      ))}
    </section>
  );
}

export default Features;
