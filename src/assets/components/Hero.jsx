import React, { useRef, useEffect } from 'react';
import Bitmap1 from "/icons/header-bitmaps/1.svg"
import Bitmap2 from "/icons/header-bitmaps/2.svg"
import Bitmap3 from "/icons/header-bitmaps/3.svg"

function Hero() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameRef = useRef();

    
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const button = container.parentElement.querySelector('button');
    const ctx = canvas.getContext('2d');

    let dots = [];
    const numberOfDots = 30;

    class Dot {
      constructor() {
        this.reset(canvas);
      }

      reset(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.5; // سرعت کمتر
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.size = 0.4 + Math.random();
        this.alpha = 0.3 + Math.random() * 0.5;
      }

      update(canvas) {
        this.x += this.speedX;
        this.y += this.speedY;

        // محدودیت به مرزهای Canvas
        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 0, ${this.alpha})`;
        ctx.fill();
      }
    }

    const resizeCanvas = () => {
      const rect = button.getBoundingClientRect();
      canvas.width = rect.width + 32;
      canvas.height = rect.height + 32;
      container.style.width = `${canvas.width}px`;
      container.style.height = `${canvas.height}px`;
      dots.forEach(dot => dot.reset(canvas));
    };

    const initDots = () => {
      dots = Array.from({ length: numberOfDots }, () => new Dot());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        dot.update(canvas);
        dot.draw(ctx);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // اولیه‌سازی
    resizeCanvas();
    initDots();
    animate();

    // رصد تغییر اندازه دکمه
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(button);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
        
    };
  }, []);

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

   <section className='flex flex-col gap-y-7 mx-auto h-160 bg-0.15 text-center text-white 
   bg-radial from-white/15 to-black'>

    <a href="#" className='bg-[url(/icons/header-bitmaps/1.svg)] 
    bitmap absolute top-1/4 left-2/25 w-14 h-18 bg-no-repeat scale-110 opacity-85'>
    </a>
    <a href="#" className='bg-[url(/icons/header-bitmaps/2.svg)] 
    bitmap absolute top-2/5 right-4/25 size-12 bg-no-repeat bg-center opacity-85'>
    </a>
    <a href="#" className='bg-[url(/icons/header-bitmaps/3.svg)] 
    bitmap absolute top-6/32 right-1/16 size-8 bg-no-repeat bg-center scale-50 opacity-85'>
    </a>


      {/* <svg className='absolute top-48 left-27 '>
        <use href="#bit-big"></use>
      </svg>
      <svg className='absolute top-78 right-56'>
        <use href="#bit-mid"></use>
      </svg>
      <svg className='absolute top-44 right-18'>
        <use href="#bit-sm"></use>
      </svg> */}

      <div className="flex flex-col gap-y-6 absolute top-80 left-1/2 -translate-1/2 max-w-4/9">
        <h1 className='text-11/13 font-semibold 
        bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70'>
          Monitor your infrastructure. <br/>
           Real vulnerabilities. Zero noise.
        </h1>
        <p className='px-24 text-lg text-white/60'>
          Trusted by 100k+ security professionals to streamline <br/>
          vulnerabilities that can actually be exploited.
        </p>
      </div>

      {/* get started monitor */}
      <div className="absolute top-120 left-1/2 flex items-center gap-x-4 
        w-full mx-auto text-center -translate-6/38 text-white *:border *:rounded-md">

          <input 
          type="text"
          placeholder='Enter your domain to get started' 
          className='w-sm px-4 py-3 border-white/10 
          transition-colors delay-75 duration-250 caret-yellow
          placeholder:indent-3 placeholder:text-white/30
        hover:border-white/60 focus:border-white/60'/>


        <div className="relative">
          <div 
            ref={containerRef}
            className="absolute -inset-4 z-0 overflow-hidden"
          >
            <canvas ref={canvasRef} className='absolute -top-5 w-35 h-19' />
          </div>
          
          <button
            className="btn-monitor absolute -top-5.5 z-10 px-4 py-3 text-sm font-semibold text-yellow
              border-2 border-yellow/50 overflow-hidden
              outline-offset-8 outline-yellow rounded-md cursor-not-allowed
              bg-yellow/20 backdrop-blur-md 
              transition delay-75 duration-250 ease-in-out
              hover:text-black hover:bg-yellow"
            disabled
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <a href="#" className='block w-full h-full cursor-not-allowed'>Monitor</a>
          </button>
          
        </div>
      </div>

   </section>
  </>
  
  );
}

export default Hero;