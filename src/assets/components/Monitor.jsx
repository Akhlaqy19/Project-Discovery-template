import React, { useRef, useEffect } from "react";

function Monitor() {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const button = container.parentElement.querySelector("button");
        const ctx = canvas.getContext("2d");

        let dots = [];
        const numberOfDots = 60;

        class Dot {
        constructor() {
            this.reset(canvas);
        }

        reset(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
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
        canvas.width = rect.width + 32;
        canvas.height = rect.height + 32;
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
      <div
        className="absolute top-120 left-1/2 flex items-center gap-x-4 
        w-full max-w-384 mx-auto text-center -translate-6/38 text-white *:border *:rounded-md"
      >
        <input
          type="text"
          placeholder="Enter your domain to get started"
          className="w-sm px-4 py-3 border-white/10 
          transition-colors delay-75 duration-250 caret-yellow
          placeholder:indent-3 placeholder:text-white/30
        hover:border-white/60 focus:border-white/60"
        />

        <div className="relative border-none">
          <div
            ref={containerRef}
            className="absolute -inset-4 z-0 overflow-hidden"
          >
            <canvas
              ref={canvasRef}
              className="absolute -top-5 w-35 h-19 border-0"
            />
          </div>

          <button
            className="btn-monitor absolute -top-5.5 z-10 px-4 py-3 text-sm font- text-yellow
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
            <a href="#" className="block w-full h-full cursor-not-allowed">
              Monitor
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Monitor