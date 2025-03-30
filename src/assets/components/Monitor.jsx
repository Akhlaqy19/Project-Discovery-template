/**
 * Monitor Component
 * 
 * A React component that provides a URL monitoring interface with animated background effects.
 * Features include:
 * - URL input validation
 * - Animated dot background effect
 * - Responsive design
 * - Snake border animation
 * 
 * @component
 * @returns {JSX.Element} A monitoring interface with URL input and animated effects
 */


import React, { useRef, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SnakeBorder from "./SnakeBorder";
import UrlInput from "../../components/common/UrlInput";
import { CANVAS_CONFIG } from "../../constants/config";
import { isValidUrl, getMonitorUrl } from "../../utils/urlUtils";


function Monitor() {
  const [url, setUrl] = useState("");
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const inputRef = useRef();
  const btnRef = useRef();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef();

  const isValid = useMemo(() => isValidUrl(url), [url]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const button = container.parentElement.querySelector("button");
    const ctx = canvas.getContext("2d");

    let dots = [];

    /**
     * Dot class for creating animated particles
     * Each dot has position, speed, size, and opacity properties
     */
    class Dot {
      constructor() {
        this.reset(canvas);
      }

      /**
       * Reset dot properties with random values
       * @param {HTMLCanvasElement} canvas - The canvas element
       */
      reset(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * CANVAS_CONFIG.DOT_SPEED;
        this.speedY = (Math.random() - 0.5) * CANVAS_CONFIG.DOT_SPEED;
        this.size =
          CANVAS_CONFIG.DOT_SIZE.MIN +
          Math.random() *
            (CANVAS_CONFIG.DOT_SIZE.MAX - CANVAS_CONFIG.DOT_SIZE.MIN);
        this.alpha =
          CANVAS_CONFIG.DOT_ALPHA.MIN +
          Math.random() *
            (CANVAS_CONFIG.DOT_ALPHA.MAX - CANVAS_CONFIG.DOT_ALPHA.MIN);
      }

      /**
       * Update dot position and handle boundary collisions
       * @param {HTMLCanvasElement} canvas - The canvas element
       */
      update(canvas) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
      }

      /**
       * Draw the dot on the canvas
       * @param {CanvasRenderingContext2D} ctx - The canvas context
       */
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 0, ${this.alpha})`;
        ctx.fill();
      }
    }

    /**
     * Resize canvas and dots based on button dimensions
     * Handles responsive behavior and error cases
     */
    const resizeCanvas = () => {
      try {
        const rect = button.getBoundingClientRect();
        canvas.width =
          window.innerWidth < CANVAS_CONFIG.BREAKPOINT_SM
            ? rect.width
            : rect.width + CANVAS_CONFIG.CANVAS_PADDING;

        canvas.height = rect.height + CANVAS_CONFIG.CANVAS_PADDING;
        container.style.width = `${canvas.width}px`;
        container.style.height = `${canvas.height}px`;
        dots.forEach((dot) => dot.reset(canvas));
      } catch (error) {
        console.error("Error resizing canvas:", error);
      }
    };

    /**
     * Initialize dots array with random positions
     */
    const initDots = () => {
      dots = Array.from(
        { length: CANVAS_CONFIG.NUMBER_OF_DOTS },
        () => new Dot()
      );
    };

    /**
     * Animation loop for updating and drawing dots
     */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.update(canvas);
        dot.draw(ctx);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initDots();
    animate();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(button);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-auto flex flex-col items-start gap-4 w-full text-white sm:flex-row md:items-center">
      {/* URL Input Component */}
      <UrlInput
        url={url}
        onChange={(e) => setUrl(e.target.value)}
        isHovered={isBtnHovered}
        inputRef={inputRef}
      />

      {/* Monitor Button with Animated Background */}
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
          ${!isValid && "cursor-not-allowed"}
          bg-sub-yellow/20 shadow-sm backdrop-blur-sm tracking-xs hover:bg-sub-yellow hover:text-midnight transition-all duration-300`}
          disabled={!isValid}
          onMouseOver={() => setIsBtnHovered(true)}
          onMouseOut={() => setIsBtnHovered(false)}
          aria-label="Monitor domain"
        >
          <a
            href={isValid ? getMonitorUrl(url) : undefined}
            className={`${!isValid && "cursor-not-allowed"}`}
            aria-disabled={!isValid}
          >
            <span className="relative z-20 mx-auto flex font-medium">
              Monitor
            </span>
          </a>
          <div className="rounded-md">
            <SnakeBorder
              specialStyles="
              after:w-10 
              after:[background:linear-gradient(to_left,#ffffff,#EEF35F,transparent)] 
              after:[offset-path:rect(0_auto_auto_0_round_40px)]"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Monitor;
