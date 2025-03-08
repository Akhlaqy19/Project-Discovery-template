import React, { useRef, useEffect } from 'react';
import Monitor from "./Monitor"
// import Bitmap1 from "/icons/header-bitmaps/1.svg"
// import Bitmap2 from "/icons/header-bitmaps/2.svg"
// import Bitmap3 from "/icons/header-bitmaps/3.svg"

function Hero() {

 return (
   <>
     {/* svg sprite */}
     {/* <svg className='hidden'>
    <symbol id='bit-big' xmlns="http://www.w3.org/2000/svg" class="text-critical" width="51" height="63" viewBox="0 0 51 63" style="width: 60px; height: 60px; transform: scale(1.1);">
        <g clip-path="url(#clip0_2100_16249)">
            <path d="M50.26 13.97H45.56V9.42H40.85V4.76H36.15V0H14.15V4.7H9.41V9.37H4.7V13.97H0V58.65H4.72V62.42H10.01V57.75H14.71V53.05H35.59V57.8H40.29V62.47H45.57V58.65H50.26V13.97Z" 
            fill="currentColor" fill-opacity="0.2"></path>
            <path d="M18.04 7.3999H12.76V12.0699H8.04998V16.8599H3.41998V45.9599H8.69998V17.3499H13.34V12.6799H18.04V7.3999Z"
            fill="currentColor"></path>
            <path d="M17.076 17.8737L11.002 23.9478L17.076 30.0218L23.15 23.9478L17.076 17.8737Z" fill="#09090B"></path>
            <path d="M33.9061 17.8732L27.8321 23.9473L33.9061 30.0213L39.9802 23.9473L33.9061 17.8732Z" fill="#09090B"></path>
            <path d="M41.2705 49.2998V44.8198H35.9805V50.0998H39.8605V54.5798H45.1405V49.2998H41.2705Z" fill="currentColor"></path>
        </g>
        <defs>
            <clipPath id="clip0_2100_16249">
                <rect width="50.26" height="62.47" fill="oklch(0.637 0.237 25.331)"></rect>
            </clipPath>
        </defs>
    </symbol>
    <symbol id='bit-mid' xmlns="http://www.w3.org/2000/svg" class="text-medium" width="51" height="63" viewBox="0 0 51 63" style="width: 60px; height: 60px; transform: scale(0.8);">
        <g clip-path="url(#clip0_2100_16249)">
            <path d="M50.26 13.97H45.56V9.42H40.85V4.76H36.15V0H14.15V4.7H9.41V9.37H4.7V13.97H0V58.65H4.72V62.42H10.01V57.75H14.71V53.05H35.59V57.8H40.29V62.47H45.57V58.65H50.26V13.97Z"
            fill="currentColor" fill-opacity="0.2"></path>
            <path d="M18.04 7.3999H12.76V12.0699H8.04998V16.8599H3.41998V45.9599H8.69998V17.3499H13.34V12.6799H18.04V7.3999Z" fill="currentColor"></path>
            <path d="M17.076 17.8737L11.002 23.9478L17.076 30.0218L23.15 23.9478L17.076 17.8737Z" fill="#09090B"></path>
            <path d="M33.9061 17.8732L27.8321 23.9473L33.9061 30.0213L39.9802 23.9473L33.9061 17.8732Z" fill="#09090B"></path>
            <path d="M41.2705 49.2998V44.8198H35.9805V50.0998H39.8605V54.5798H45.1405V49.2998H41.2705Z" fill="currentColor"></path>
        </g>
        <defs>
            <clipPath id="clip0_2100_16249">
                <rect width="50.26" height="62.47" fill="currentColor"></rect>
            </clipPath>
        </defs>
    </symbol>
      <symbol id="bit-sm" xmlns="http://www.w3.org/2000/svg" class="text-high" width="51" height="63" viewBox="0 0 51 63" style="width: 60px; height: 60px; transform: scale(0.5);">
        <g clip-path="url(#clip0_2100_16249)">
            <path d="M50.26 13.97H45.56V9.42H40.85V4.76H36.15V0H14.15V4.7H9.41V9.37H4.7V13.97H0V58.65H4.72V62.42H10.01V57.75H14.71V53.05H35.59V57.8H40.29V62.47H45.57V58.65H50.26V13.97Z" 
            fill="currentColor" fill-opacity="0.2"></path>
            <path d="M18.04 7.3999H12.76V12.0699H8.04998V16.8599H3.41998V45.9599H8.69998V17.3499H13.34V12.6799H18.04V7.3999Z" fill="currentColor"></path>
            <path d="M17.076 17.8737L11.002 23.9478L17.076 30.0218L23.15 23.9478L17.076 17.8737Z" fill="#09090B"></path>
            <path d="M33.9061 17.8732L27.8321 23.9473L33.9061 30.0213L39.9802 23.9473L33.9061 17.8732Z" fill="#09090B"></path>
            <path d="M41.2705 49.2998V44.8198H35.9805V50.0998H39.8605V54.5798H45.1405V49.2998H41.2705Z" fill="currentColor"></path>
        </g>
        <defs>
            <clipPath id="clip0_2100_16249">
                <rect width="50.26" height="62.47" fill="currentColor"></rect>
            </clipPath>
        </defs>
    </symbol>
  </svg> */}

     <section
       className="relative flex flex-col gap-y-7 mx-auto h-170 bg-0.15 text-center text-white 
   bg-radial from-white/10 to-black"
     >
       <a
         href="#"
         className="bg-[url(/icons/header-bitmaps/1.svg)] 
    bitmap absolute top-1/4 left-2/25 w-14 h-18 bg-no-repeat scale-110 opacity-85"
       ></a>
       <a
         href="#"
         className="bg-[url(/icons/header-bitmaps/2.svg)] 
    bitmap absolute top-2/5 right-4/25 size-12 bg-no-repeat bg-center opacity-85"
       ></a>
       <a
         href="#"
         className="bg-[url(/icons/header-bitmaps/3.svg)] 
    bitmap absolute top-6/32 right-1/16 size-8 bg-no-repeat bg-center scale-50 opacity-85"
       ></a>
       {/* <svg className='absolute top-48 left-27 '>
        <use href="#bit-big"></use>
      </svg>
      <svg className='absolute top-78 right-56'>
        <use href="#bit-mid"></use>
      </svg>
      <svg className='absolute top-44 right-18'>
        <use href="#bit-sm"></use>
      </svg> */}
       <div className="flex flex-col gap-y-6 absolute top-1/2 left-1/2 -translate-1/2 max-w-4/9">
         <h1
           className="text-11/13 font-semibold 
            title-gradient"
         >
           Monitor your infrastructure. <br />
           Real vulnerabilities. Zero noise.
         </h1>
         <p className="px-24 text-lg text-white/60">
           Trusted by 100k+ security professionals to streamline <br />
           vulnerabilities that can actually be exploited.
         </p>
       </div>
       <Monitor />
     </section>
   </>
 );
}

export default Hero;