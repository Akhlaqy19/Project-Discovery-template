import React from 'react'
import SolutionCase from "./SolutionCase"
import CompanyLogo from "/icons/company-logo.svg";

export default function Solution() {
  return (
    <>
      <section className="custom-container-sm">
        <div className="relative z-40 mt-44 size-full">
          <div className="relative w-full flex flex-col items-center py-12 md:pb-0 md:pt-20">
            <div className="flex flex-col gap-3 items-center text-center mx-auto my-6 max-w-2xl">
              <div className="my-5">
                <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
                  Our Solution
                </p>
              </div>
              <div>
                <h2 className="title-gradient text-3xl md:text-3xl lg:text-4xl xl:text-11 font-semibold leading-[1.15] xl:leading-[1.20] tracking-[-1px]">
                  Dramatically reduce scanning times, tools, and resources
                </h2>
              </div>
              <div>
                <p className="text-base xl:text-lg text-gray font-light tracking-[0.3px] max-w-xl">
                  Consolidate scattered scanning tools into a single, precise,
                  customizable framework for modern teams.
                </p>
              </div>
            </div>

            {/* خطوط SVG */}
            {/* <div className="absolute w-full h-full top-1/5 left-0 pointer-events-none">
              <DashedLine x1="50%" y1="50%" x2="5%" y2="20%" />
              <DashedLine x1="50%" y1="50%" x2="95%" y2="20%" />
              <DashedLine x1="50%" y1="50%" x2="10%" y2="50%" />
              <DashedLine x1="50%" y1="50%" x2="95%" y2="50%" />
              <DashedLine x1="50%" y1="50%" x2="5%" y2="80%" />
              <DashedLine x1="50%" y1="50%" x2="95%" y2="80%" />
            </div> */}

            {/* بخش‌های مختلف */}

            <div
              className="relative flex flex-col gap-11 w-full md:gap-24 
            *:flex *:justify-between"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <svg
                  width="100%"
                  height="596"
                  viewBox="0 0 1424 596"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* بخش تعریف گرادیان‌ها */}
                  <defs>
                    {/* نمونه یک گرادیان خطی (linearGradient) از چپ به راست */}
                    <linearGradient
                      id="gradient" /* id دلخواه: باید در stroke=url(#...) هم استفاده شود */
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      {/* رنگ شروع گرادیان */}
                      <stop offset="0%" stopColor="oklch(0.852 0.199 91.936)" />
                      {/* رنگ انتهای گرادیان */}
                      <stop
                        offset="100%"
                        stopColor="oklch(0.637 0.237 25.331)"
                      />
                    </linearGradient>

                    {/* اگر نیاز به گرادیان دیگری داری، می‌توانی در همین‌جا تعریف کنی */}
                  </defs>

                  <g clip-path="url(#clip0_1_53)" strokeDasharray="5,5">
                    {/* خطوط بالایی (چپ و راست) */}
                    <path
                      d="M32 -17C233.17 140.559 427.374 207.924 713 281M32 -17C233.17 140.559 427.374 207.924 713 281"
                      stroke="url(#gradient)"
                      stroke-width="2"
                    />
                    <path
                      d="M1392 -17C1191.42 140.559 997.788 207.924 713 281"
                      stroke="url(#gradient)"
                      stroke-width="2"
                    />
                    <path
                      d="M32 595C233.17 437.441 427.374 370.076 713 297M32 595C233.17 437.441 427.374 370.076 713 297"
                      stroke="url(#gradient)"
                      stroke-width="2"
                    />
                    <path
                      d="M1392 595C1191.42 437.441 997.788 370.076 713 297"
                      stroke="url(#gradient)"
                      stroke-width="2"
                    />
                    <path d="M17 289H1407" stroke="url(#gradient)" stroke-width="2" />
                    {/* clipPath برای برش ناحیه اضافه، در صورت نیاز */}
                    <clipPath id="clip0_1_53">
                      <rect width="1424" height="596" fill="white" />
                    </clipPath>
                  </g>
                </svg>
              </div>
              <div className="">
                <SolutionCase title="Application" />
                <SolutionCase title="DNS" />
              </div>
              <div className="">
                <SolutionCase title="Internal" />
                <div className="bg-base-2 relative z-5 flex size-28 rounded-full md:h-36 md:w-36">
                  <div className="font-light tracking-xs text-sm md:text-base leading-base m-auto text-white">
                    <img src={CompanyLogo} alt="Project Discovery logo" />
                  </div>
                </div>
                <SolutionCase title="Cloud" />
              </div>
              <div className="flex">
                <SolutionCase title="API" />
                <SolutionCase title="Database" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
