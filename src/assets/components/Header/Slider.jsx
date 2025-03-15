import React from 'react';
import {sliderLogosInfo} from "./../../datas";

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
      <section
        className="swiper-container py-2
    px-8 flex justify-center *:items-center bg-midnight
     max-w-384 mx-auto text-center overflow-hidden -z-10"
      >
        <div
          className="slider flex items-center shrink-0 gap-x-4
        *:shrink-0 *:flex *:items-center *:gap-x-4 *:*:mx-6
        grayscale opacity-40"
        >
          <SliderBase/>
          <SliderBase/>
       
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
      </section>
    </>
  );
}

export default Slider;

const SliderBase = () => {
  return (
    <>
      <div className="">
        {sliderLogosInfo.map((logo) => (
          <div key={logo.id}>
            <img
              src={`/icons/header-logos/${logo.src}.svg`}
              alt={`${logo.src.toUpperCase()} company logo`}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
}