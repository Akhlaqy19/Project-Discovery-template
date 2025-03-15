import React from "react";
import { sliderLogosInfo } from "./../../datas";

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';

// import required modules
// import { Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <>
      <section className="custom-container-sm py-0">
        <div className="w-full opacity-30 grayscale">
          <div
            className="custom-container-sm swiper-container py-2
            px-8 flex w-full flex-col items-center justify-center *:items-center mx-auto text-center overflow-hidden"
          >
            <div
              // style={{}}
              //  mask-gradient
              className="slider transform-none opacity-100 flex items-center shrink-0 gap-x-4 overflow-hidden
              *:shrink-0 *:flex *:items-center *:gap-x-4 *:*:mx-6"
            >
              <SliderBase />
              <SliderBase />
            </div>

            {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={8}
        loop={true}
        // translate='yes'
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        resizeObserver={true}
        className="flex justify-center items-center gap-x-2.5 *:min-w-full
        mx-auto mt-0 text-center *:flex *:justify-center *:items-center
        *:min-h-20 *:max-w-1/7 **:text-center
        **:text-sm **:text-gray-600 opacity-30 grayscale"
      >
        ...
      </Swiper> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;

const SliderBase = () => {
  return (
    <>
      <div className="bg-midnight">
        {sliderLogosInfo.map((logo) => (
          <div key={logo.id} className="bg-midnight">
            <img
              src={`/icons/header-logos/${logo.src}.svg`}
              alt={`${logo.src.toUpperCase()} company logo`}
              className="bg-midnight mx-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
};
