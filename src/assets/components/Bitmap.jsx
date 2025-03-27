import React from 'react'
import { motion, useMotionValue } from "framer-motion";


export default function Bitmap({ yAxis, xAxis, size, scale, img, ...tooltip }) {
  // تعریف motion value برای چرخش
  const rotate = useMotionValue(0);

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6,
      },
    },
  };

  // محاسبه چرخش بر اساس حرکت موس
  const handleMouseMove = (e) => {
    // دریافت ابعاد و موقعیت عنصر
    const rect = e.currentTarget.getBoundingClientRect();

    // محاسبه مرکز عنصر (به صورت مطلق در صفحه)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // اختلاف موس نسبت به مرکز عنصر
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // محاسبه زاویه بر حسب رادیان با استفاده از atan2 (نتیجه در بازه -π تا π)
    let angleRad = Math.atan2(deltaY, deltaX);

    // تبدیل زاویه از رادیان به درجه
    let angleDeg = angleRad * (180 / Math.PI);

    // حالا اگر می‌خواهید این زاویه را به صورت یک قطاع محدود کنید،
    // مثلاً فقط در بازه -15 تا +15 درجه اجازه تغییر داشته باشد:
    const minAngle = -15;
    const maxAngle = 15;

    // محدود کردن زاویه به این بازه
    if (angleDeg < minAngle) angleDeg = minAngle;
    if (angleDeg > maxAngle) angleDeg = maxAngle;

    // اعمال مقدار چرخش محاسبه شده به motion value
    rotate.set(angleDeg);
  };

  // بازگرداندن زاویه چرخش به صفر هنگام خروج موس
  const handleMouseLeave = () => {
    rotate.set(0);
  };

  return (
    <>
      <motion.div
        variants={wrapperVariants}
        className={`absolute cursor-pointer ${yAxis} ${xAxis}`}
      >
        <motion.a
          href="#"
          target="_blank"
          className={`inline-block pointer-events-auto ${size}`}
          initial="rest"
          whileHover="hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`pointer-events-auto`}>
            <Tooltip rotate={rotate} {...tooltip} />
            <img
              src={`/icons/bitmaps/${img}`}
              alt=""
              className={`bitmap ${scale}`}
            />
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}

const Tooltip = ({ rotate, id, color, text, code, tooltipScale, margin }) => {
  const textVariants = {
    rest: { opacity: 0, y: 30, scale: 0 },
    hover: {
      opacity: 1,
      y: 0,
      scale: tooltipScale,
      transition: {
        type: "spring",
        duration: 1.6,
        stiffness: 180,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`text absolute -top-16 z-50 center -translate-x-[38%] flex-col rounded-md bg-midnight px-4 py-2 shadow-xl whitespace-nowrap opacity-[1] ${margin}`}
        variants={textVariants}
        style={{ rotate }}
      >
        <div class={`relative z-30 text-base font-semibold ${color}`}>
          {text}...
        </div>
        <div class="text-xs text-white">CVE-{code}</div>
      </motion.div>
    </>
  );
};