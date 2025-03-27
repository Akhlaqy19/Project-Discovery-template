import React, { useRef, useEffect, useState } from "react";

function Monitor() {
  const [url, setUrl] = useState("");
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  // تابع بررسی اعتبار URL؛ اگر به پروتکل نیاز بود می‌توان قبل از بررسی اضافه کرد
  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (err) {
      return false;
    }
  };

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

      if (window.innerWidth < 640) canvas.width = rect.width;
      else canvas.width = rect.width + 40;

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

      <div className="pointer-events-auto flex flex-col items-start gap-4 w-full text-white sm:flex-row md:items-center">
        <div className="relative w-full flex-1 sm:w-96 md:max-w-96">
          {/* check-validation */}
          <input
            ref={inputRef}
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your domain to get started"
            className={`input relative flex w-full z-30 h-12 px-4 py-3 text-gray caret-yellow placeholder:indent-3 placeholder:text-white/30`}
          />

          {isBtnHovered && !isValidUrl(url) && (
            <p
              className={`fade-in absolute -bottom-7 left-1 z-40 w-full text-left text-xs text-sub-yellow ${
                isBtnHovered && !isValidUrl(url) ? "show" : ""
              }`}
            >
              Enter a valid domain to discover your infrastructure
            </p>
          )}
        </div>

        <div className="relative w-full h-12 sm:w-auto">
          <div
            ref={containerRef}
            className="block absolute inset-1/2 z-0 h-[160%] w-full -translate-x-1/2 -translate-y-1/2 rounded-md md:w-[160%] overflow-hidden"
          >
            <canvas ref={canvasRef} className="absolute size-full border-0" />
          </div>

          <button
            ref={btnRef}
            className={`btn-monitor relative z-30 size-full center h-12 px-4 py-2 text-sm font-semibold text-sub-yellow border border-sub-yellow overflow-hidden rounded-md 
            ${!isValidUrl(url) && "cursor-not-allowed"}
             bg-sub-yellow/20 shadow-sm backdrop-blur-sm tracking-xs hover:text-midnight hover:bg-sub-yellow`}
            disabled={!isValidUrl(url)}
            onMouseOver={() => setIsBtnHovered(true)}
            onMouseOut={() => setIsBtnHovered(false)}
          >
            <a
              href={
                isValidUrl(url) &&
                "https://cloud.projectdiscovery.io/sign-in?redirect_url=https%3A%2F%2Fcloud.projectdiscovery.io%2Fassets%3Fdomain%3Dgoogle.com"
              }
              className={`${!isValidUrl(url) && "cursor-not-allowed"}`}
            >
              <span className="relative z-20 mx-auto flex font-medium">
                Monitor
              </span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Monitor;
