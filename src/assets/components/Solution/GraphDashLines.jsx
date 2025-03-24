import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function GraphDashLines({}) {
  const pathRefs = useRef([]); // برای نگهداری رفرنس مسیرها
  const sparkRefs = useRef([]); // برای نگهداری رفرنس جرقه‌ها

  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      const spark = sparkRefs.current[index];
      // انیمیت حرکت جرقه روی مسیر
      gsap.to(spark, {
        duration: 3,
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          start: 0,
          end: 1,
        },
        repeat: -1, // انیمیشن تکرارشونده
        delay: Math.random() * 2, // تاخیر تصادفی برای شروع
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <>
      <svg
        className=""
        width="1424"
        height="596"
        viewBox="0 0 1424 596"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* section of decleration gradients */}
        <defs>
          {/* a radial gradient with config properties */}
          <radialGradient
            id="radial-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            {/* starting gradient color */}
            <stop offset="0%" stopColor="oklch(0.637 0.237 25.331)" />

            {/* ending gradient color*/}
            <stop offset="100%" stopColor="oklch(0.852 0.199 91.936)" />
          </radialGradient>

          {/* more gradients in this here... */}
        </defs>

        <g clipPath="clip0_1_53" strokeDasharray="5,5">
          {/* up lines (left and right) */}
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M32 -17C233.17 140.559 427.374 207.924 713 281M32 -17C233.17 140.559 427.374 207.924 713 281"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />
          <circle
            ref={(el) => (sparkRefs.current[0] = el)}
            cx="32"
            cy="-17"
            r="4"
            fill="white"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M1392 -17C1191.42 140.559 997.788 207.924 713 281"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />
          <circle
            ref={(el) => (sparkRefs.current[1] = el)}
            cx="32"
            cy="-17"
            r="4"
            fill="white"
          />

          {/* center line */}
          <path
            d="M17 289H1407"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />

          {/*bottom lines (left and right)  */}
          <path
            d="M32 595C233.17 437.441 427.374 370.076 713 297M32 595C233.17 437.441 427.374 370.076 713 297"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />
          <path
            d="M1392 595C1191.42 437.441 997.788 370.076 713 297"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />

          {/* clipPath برای برش ناحیه اضافه، در صورت نیاز */}
          <clipPath id="clip0_1_53">
            <rect width="1424" height="596" fill="white" />
          </clipPath>
        </g>
      </svg>
    </>
  );
}
