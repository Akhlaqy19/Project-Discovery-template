import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function GraphDashLines() {
  // آرایه‌ای برای نگهداری رفرنس‌های مسیرهای خط‌چین
  const dashPathRefs = useRef([]);
  // آرایه‌ای برای نگهداری رفرنس‌های مسیرهای هاله
  const haloPathRefs = useRef([]);
  const dashLinesRef = useRef();
  const svgRef = useRef();
  // ریست کردن رفرنس‌ها در هر رندر
  dashPathRefs.current = [];
  haloPathRefs.current = [];

  useEffect(() => {
    // برای هر مسیر خط‌چین و هاله‌ی متناظر، انیمیشن اضافه می‌کنیم
    dashPathRefs.current.forEach((dashPath, index) => {
      const haloPath = haloPathRefs.current[index];
      if (dashPath && haloPath) {
        // محاسبه طول مسیر
        const pathLength = dashPath.getTotalLength();

        // تنظیم ویژگی‌های اولیه برای هاله
        gsap.set(haloPath, {
          strokeDasharray: `120, ${pathLength}`,
          strokeDashoffset: 0,
        });

        // تعیین تاخیر تصادفی اولیه و همچنین تاخیر بین تکرارها (repeatDelay)
        const initialDelay = Math.random() * 30;
        const cycleDelay = Math.random() * 20;

        // موقعیت (position parameter) انیمیشن هر هاله به صورت افست زمانی (مثلاً index * 0.8 ثانیه)
        // اجرای انیمیشن به‌طور مستقل با delay تصادفی
        gsap.to(haloPath, {
          strokeDashoffset: -pathLength,
          duration: 1, // مدت زمان ثابت انیمیشن
          repeat: -1, // تکرار بی‌نهایت
          delay: initialDelay,
          repeatDelay: cycleDelay,
          ease: "power1.inOut",
        });
      }
    });

    function updateDash() {
      const viewportWidth = window.innerWidth;
      // بروزرسانی مقدار strokeDasharray برای تمام رفرنس‌های ذخیره‌شده
      dashPathRefs.current.forEach((dashPath) => {
        if (dashPath) {
          if (viewportWidth < 640) {
            dashPath.setAttribute("stroke-dasharray", `13 6`);
            dashPath.setAttribute("stroke-width", `4.5`);
          } else if (viewportWidth < 768) {
            dashPath.setAttribute("stroke-dasharray", `10 5`);
            dashPath.setAttribute("stroke-width", `2.5`);
          } else if (viewportWidth < 1024)
            dashPath.setAttribute("stroke-dasharray", `8 4`);
        }
      });

      if (viewportWidth < 640) {
        // svgRef.current.classList.add("h-200");
      }
    }

    // اجرای اولیه
    updateDash();
    window.addEventListener("resize", updateDash);

    return () => window.removeEventListener("resize", updateDash);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1424"
      height="596"
      viewBox="0 0 1424 596"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* تعریف گرادیان‌ها */}
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="oklch(0.637 0.237 25.331)" />
          <stop offset="100%" stopColor="oklch(0.795 0.184 86.047)" />
        </radialGradient>
      </defs>

      <g
        ref={dashLinesRef}
        clipPath="url(#clip0_1_53)"
        strokeDasharray="6,3"
        className=""
      >
        {/* اولین مسیر خط‌چین و هاله مربوطه */}
        <path
          ref={(el) => (dashPathRefs.current[0] = el)}
          d="M32 -17C233.17 140.559 427.374 207.924 713 281"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[0] = el)}
          d="M32 -17C233.17 140.559 427.374 207.924 713 281"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />

        {/* دومین مسیر خط‌چین و هاله مربوطه */}
        <path
          ref={(el) => (dashPathRefs.current[1] = el)}
          d="M1392 -17C1191.42 140.559 997.788 207.924 713 281"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[1] = el)}
          d="M1392 -17C1191.42 140.559 997.788 207.924 713 281"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />

        {/* مسیر میانی */}
        <path
          ref={(el) => (dashPathRefs.current[2] = el)}
          d="M17 289H712"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[2] = el)}
          d="M17 289H712"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />

        <path
          ref={(el) => (dashPathRefs.current[3] = el)}
          d="M1407 289H712"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[3] = el)}
          d="M1407 289H712"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />

        {/* مسیرهای پایین */}
        <path
          ref={(el) => (dashPathRefs.current[4] = el)}
          d="M32 595C233.17 437.441 427.374 370.076 713 297M32 595C233.17 437.441 427.374 370.076 713 297"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[4] = el)}
          d="M32 595C233.17 437.441 427.374 370.076 713 297M32 595C233.17 437.441 427.374 370.076 713 297"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />
        <path
          ref={(el) => (dashPathRefs.current[5] = el)}
          d="M1392 595C1191.42 437.441 997.788 370.076 713 297"
          stroke="url(#radial-gradient)"
          strokeWidth="2"
        />
        <path
          ref={(el) => (haloPathRefs.current[5] = el)}
          d="M1392 595C1191.42 437.441 997.788 370.076 713 297"
          stroke="oklch(0.905 0.182 98.111)"
          strokeWidth="4"
          strokeLinecap="square"
          opacity="0.8"
        />

        {/* clipPath برای برش ناحیه */}
        <clipPath id="clip0_1_53">
          <rect width="1424" height="596" fill="white" />
        </clipPath>
      </g>
    </svg>
  );
}
