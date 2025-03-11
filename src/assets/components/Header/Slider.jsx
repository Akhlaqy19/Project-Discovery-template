import React from 'react';

// import icons
import ibm from "/icons/header-logos/ibm.svg"
import amplify from "/icons/header-logos/ampli.svg"
import bytedance from "/icons/header-logos/bytedance.svg"
import chipotle from "/icons/header-logos/chipotle.svg"
import elastic from "/icons/header-logos/elastic.svg"
import fastly from "/icons/header-logos/fastly.svg"
import netflix from "/icons/header-logos/netflix.svg"
import paddle from "/icons/header-logos/paddle.svg"
import vanta from "/icons/header-logos/vanta.svg"

// import images
import observa from "/icons/header-logos/observa.svg"
import salesforce from "/icons/header-logos/salesforce.svg"

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';

// import required modules
// import { Autoplay } from 'swiper/modules';


function Slider() {
  return (
    <section className="swiper-container py-2
    px-8 flex justify-center *:items-center bg-midnight
     max-w-384 mx-auto text-center overflow-hidden -z-10">
      <div
        className="slider flex items-center shrink-0 gap-x-4
        *:shrink-0 *:flex *:items-center *:gap-x-4 *:*:mx-6
        grayscale opacity-40"
      >
        <div className="">
          <div className="">
            <img src={vanta} alt="Vanta company logo" className="bg-midnight mx-auto" />
          </div>
          <div className="">
            <img src={ibm} alt="IBM company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={bytedance}
              alt="ByteDance company logo"
              className="mx-auto"
            />
          </div>
          <div className="">
            <img src={netflix} alt="Netflix company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={amplify} alt="Amplify company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={chipotle}
              alt="chipotle company logo"
              className="mx-auto"
            />
          </div>
          <div className="">
            <img src={elastic} alt="elastic company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={paddle} alt="paddle company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={fastly} alt="fastly company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={observa} alt="observa company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={salesforce}
              alt="salesforce company logo"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <img src={vanta} alt="Vanta company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={ibm} alt="IBM company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={bytedance}
              alt="ByteDance company logo"
              className="mx-auto"
            />
          </div>
          <div className="">
            <img src={netflix} alt="Netflix company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={amplify} alt="Amplify company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={chipotle}
              alt="chipotle company logo"
              className="mx-auto"
            />
          </div>
          <div className="">
            <img src={elastic} alt="elastic company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={paddle} alt="paddle company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={fastly} alt="fastly company logo" className="mx-auto" />
          </div>
          <div className="">
            <img src={observa} alt="observa company logo" className="mx-auto" />
          </div>
          <div className="">
            <img
              src={salesforce}
              alt="salesforce company logo"
              className="mx-auto"
            />
          </div>
        </div>
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
  );
}

export default Slider;