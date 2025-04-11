/**
 * AlertBox Component
 * 
 * A component that displays an animated vertical marquee of alert notifications.
 * Features:
 * - Interactive hover effects
 * - Continuous vertical scrolling animation
 * - Glassmorphism design
 * - Responsive layout
 * 
 * @component
 * @example
 * <AlertBox />
 */

import React, { useState, useEffect } from "react";
import RowAlertBox from "./RowAlertBox";
import GlowBackground from "./../GlowBackground";
import axios from "axios";

function AlertBox() {
  const [isHovered, setIsHovered] = useState(false);
  const [rowAlertBoxInfo, setRowAlertBoxInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // محاسبه درصد موقعیت نسبت به اندازه المان
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setMousePosition({
      x: xPercent,
      y: yPercent,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-discovery-template-security.vercel.app/rowAlertBoxInfo');
        setRowAlertBoxInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch alert box data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (loading) return null;
  if (error) return null;
  if (!rowAlertBoxInfo.length) return null;

  return (
    <>
      <section
        className="group relative col-span-4 md:col-span-4 m-0 p-0 w-full pb-7 h-75 bg-glass-primary rounded-xl
      "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="pointer-events-none z-20 flex items-center justify-between mb-4 w-full px-6 pb-3 pt-6 text-gray">
          <h3 className="z-20 group-hover:text-white box-title-effect text-base xl:text-lg font-semibold tracking-xs transition-colors ">
            Alert your engineering team in minutes
          </h3>
        </div>
        <div className="pointer-events-none z-20 relative mx-5 h-full rounded-xl">
          <div className="bg-base relative h-auto w-full overflow-hidden rounded-xl p-0">
            <div className="group flex flex-col bg-base-2 relative h-48 max-h-48 gap-0 overflow-hidden p-0 ">
              {/*  [--gap:1rem] [gap:var(--gap)] flex-col bg-base-2 relative z-20 h-48 max-h-48 gap-0 overflow-hidden p-0 pt-4 [--duration:20s] */}

              <div
                className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${
                  isHovered ? "running" : ""
                }`}
              >
                {rowAlertBoxInfo.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
              </div>
              <div
                className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${
                  isHovered ? "running" : ""
                }`}
              >
                {rowAlertBoxInfo.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
              </div>
              <div
                className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${
                  isHovered ? "running" : ""
                }`}
              >
                {rowAlertBoxInfo.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
              </div>
              <div
                className={`flex shrink-0 justify-around [gap:var(--gap)] vertical-marquee-slower flex-col ${
                  isHovered ? "running" : ""
                }`}
              >
                {rowAlertBoxInfo.map((rowAlertBoxData) => (
                  <RowAlertBox key={rowAlertBoxData.id} {...rowAlertBoxData} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <GlowBackground mousePosition={mousePosition} />
      </section>
    </>
  );
}

export default AlertBox;
