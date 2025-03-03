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
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
// import required modules
import { Autoplay } from 'swiper/modules';


function Slider() {
  return (
    <section className="max-w-300 mx-auto px-8 text-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={8}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        
    
        className="flex items-center *:flex *:justify-center *:items-center 
        gap-x-2.5 mt-0 **:max-h-20 *:max-w-1/7 **:text-center
        **:text-sm **:text-gray-600 opacity-30 grayscale"
      >
        <SwiperSlide className="">
          <img src={ibm} alt="IBM company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={amplify} alt="Amplify company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={bytedance} alt="ByteDance company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={chipotle} alt="chipotle company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={elastic} alt="elastic company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={fastly} alt="fastly company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={netflix} alt="Netflix company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={paddle} alt="paddle company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={vanta} alt="Vanta company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={observa} alt="observa company logo" className='mx-auto' />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={salesforce} alt="salesforce company logo" className='mx-auto' />
        </SwiperSlide>
      </Swiper>


   </section>
  );
}

export default Slider;

{/* <img src={ibm} alt="" className='mx-auto' />
<img src={amplify} alt="" className='mx-auto' />
<img src={bytedance} alt="" className='mx-auto' />
<img src={chipotle} alt="" className='mx-auto' />
<img src={elastic} alt="" className='mx-auto' />
<img src={fastly} alt="" className='mx-auto' />
<img src={netflix} alt="" className='mx-auto' />
<img src={paddle} alt="" className='mx-auto' />
<img src={vanta} alt="" className='mx-auto' />
<img src={observa} alt="" className='mx-auto' />
<img src={salesforce} alt="" className='mx-auto' /> */}