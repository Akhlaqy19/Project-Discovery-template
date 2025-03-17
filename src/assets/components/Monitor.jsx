import React, { useRef, useEffect, useState } from "react";

function Monitor() {

  const [isChechBtnHovered, setIsChechBtnHovered] = useState(false);
  const [isShowWarningText, setIsShowWarningText] = useState(false);

    const checkUrlValidation = () => {

    }

    const inputRef = useRef();
    const btnRef = useRef();

    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const button = container.parentElement.querySelector("button");
        const ctx = canvas.getContext("2d");

        let dots = [];
        const numberOfDots = 100;

        class Dot {
        constructor() {
            this.reset(canvas);
        }

        reset(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.speedY = (Math.random() - 0.5) * 0.6;
            this.size = 0.2 + Math.random();
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
        canvas.width = rect.width + 40;
        canvas.height = rect.height + 40;
        container.style.width = `${canvas.width}px`;
        container.style.height = `${canvas.height}px`;
        dots.forEach((dot) => dot.reset(canvas));
        };

        const initDots = () => {
        dots = Array.from({ length: numberOfDots }, () => new Dot());
        };

        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach((dot) => {
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
      {/* get started monitor */}

      <div className="flex w-full mx-auto min-w-96">
        <div
          className="flex flex-col items-center gap-4 
        w-full mx-auto text-center text-white 
        pointer-events-auto sm:flex-row md:items-center"
        >
          <div className="relative w-full flex-1 sm:w-96 md:max-w-96">
            <input
              ref={inputRef}
              type="url"
              placeholder="Enter your domain to get started"
              className={`check-validation z-30 w-sm h-12 px-4 py-3 text-gray border
            border-glass-secondary transition-all delay-75 duration-250 caret-yellow
              rounded-lg placeholder:indent-3 placeholder:text-white/30
            hover:border-gray/50 focus:border-gray/50`}
              // onInvalid={() => setIsShowWarningText(true)}

              // onInvalidCapture={() => {
              //   isChechBtnHovered && setIsShowWarningText(true)
              // }}
            />
            {/* { (
              <p className="absolute -bottom-7 left-1 z-40 w-full text-left text-xs text-sub-yellow opacity-100">
                Enter a valid domain to discover your infrastructure
              </p>
            )} */}
          </div>

          <div className="relative border-none">
            <div
              ref={containerRef}
              className="absolute -inset-4 z-0 overflow-hidden"
            >
              <canvas
                ref={canvasRef}
                className="absolute w-35 h-19 border-0"
              />
            </div>

            <button
              ref={btnRef}
              className={`
              z-30 inline-flex w-22 items-center justify-center px-4 py-2
              btn-monitor relative h-12 
              text-sm font-semibold text-sub-yellow
              border border-sub-yellow overflow-hidden
               rounded-md cursor-not-allowed
              bg-sub-yellow/20 shadow-sm backdrop-blur-sm tracking-xs
              transition delay-75 duration-250 ease-in-out
              hover:text-midnight hover:bg-sub-yellow`}
              disabled
              onMouseOver={() => setIsChechBtnHovered(true)}
              onMouseOut={() => setIsChechBtnHovered(false)}
            >
              <span className="relative z-20 mx-auto flex font-medium">
                Monitor
              </span>

              {/* <div className="rounded-md">
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
                  style="--size: 40; --duration: 15; --anchor: 90; --border-width: 0.75; --color-from: #ffffff; --color-to: #EEF35F; --delay: -0s;"
                ></div>
              </div> */}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Monitor