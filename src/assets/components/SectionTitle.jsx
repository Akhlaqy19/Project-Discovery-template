import React from 'react'

export default function SectionTitle({ mainTitle, subTitle, description, width }) {
  subTitle = subTitle.toUpperCase();

  return (
    <>
      <div className="my-5">
        <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
          {subTitle}
        </p>
      </div>
      <div>
        <h3 className="title-section title-gradient w-full">{mainTitle}</h3>
      </div>
      <div>
        <p
          className={`text-base xl:text-lg text-gray font-light tracking-xs ${width}`}
        >
          {description}
        </p>
      </div>
    </>
  );
}
