import React from 'react';
import Monitor from "./../Monitor"

function Hero() {

 return (
   <>
     {/* svg sprite */}

     <section
       className="relative flex flex-col gap-y-7 mx-auto h-150 bg-0.15 text-center text-white"
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
      
       <div className="flex flex-col gap-y-6 absolute top-57/100 left-1/2 -translate-1/2 max-w-4/9">
         <h1
           className="text-11/13 font-semibold 
            title-gradient tracking-tight"
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