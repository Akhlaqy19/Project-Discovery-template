import React from 'react'

export default function GraphDashLines({}) {
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

        <g strokeDasharray="5,5">
          {/* up lines (left and right) */}
          <path
            d="M32 -17C233.17 140.559 427.374 207.924 713 281M32 -17C233.17 140.559 427.374 207.924 713 281"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
          />
          <path
            d="M1392 -17C1191.42 140.559 997.788 207.924 713 281"
            stroke="url(#radial-gradient)"
            strokeWidth="2"
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
          {/* <clipPath id="clip0_1_53">
            <rect width="1424" height="596" fill="white" />
          </clipPath> */}
        </g>
      </svg>
    </>
  );
}
