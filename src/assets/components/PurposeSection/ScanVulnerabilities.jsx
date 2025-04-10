/**
 * ScanVulnerabilities Component
 * 
 * A component that displays an animated horizontal marquee of vulnerability scanning toolkits.
 * Features:
 * - Interactive hover effects
 * - Continuous horizontal scrolling animation
 * - Responsive grid layout
 * - Seamless infinite scroll effect
 * 
 * @component
 * @example
 * <ScanVulnerabilities />
 */

import React, { useState, useEffect } from "react";
import ScanBoxToolkits from "./ScanBoxToolkits";
import GlowBackground from "./../GlowBackground";
import axios from 'axios';

function ScanVulnerabilities() {
  const [isHovered, setIsHovered] = useState(false);
  const [toolkitsInfo, setToolkitsInfo] = useState([]);
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
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/toolkitsInfo`
        );
        setToolkitsInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch toolkits data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  if (loading) return null;
  if (error) return null;
  if (!toolkitsInfo.length) return null;

  return (
    <>
      <section
        className="group col-span-4 md:col-span-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="relative z-50 m-0 h-auto w-full p-0 py-0">
          <div className="size-full">
            <div className="pointer-events-none relative z-20 h-auto w-full">
              <div className="flex items-center justify-between px-6 pb-3 pt-6">
                <h3
                  className="group-hover:text-white text-base xl:text-lg text-gray 
                tracking-xs font-semibold box-title-effect"
                >
                  Continuously scan for exploitable vulnerabilities
                </h3>
              </div>
            </div>

            <div className="group pointer-events-none relative z-20 size-full pb-4 overflow-hidden">
              <div className="relative top-0 z-40 h-auto w-full pb-2 transition-colors">
                <div className="mask-x-sm mx-auto w-[calc(100%-2px)] py-2 transition-colors">
                  <div className="group pointer-events-none flex flex-row gap-3 shrink-0 p-2 overflow-hidden [--duration:30s]">
                    <div
                      className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${
                        isHovered ? "running" : ""
                      }`}
                    >
                      {toolkitsInfo.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id}
                          {...toolkitData}
                        />
                      ))}
                    </div>

                    <div
                      className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${
                        isHovered ? "running" : ""
                      }`}
                    >
                      {toolkitsInfo.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>

                    <div
                      className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${
                        isHovered ? "running" : ""
                      }`}
                    >
                      {toolkitsInfo.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>

                    <div
                      className={`flex shrink-0 justify-around [gap:var(--gap)] horizontal-marquee flex-row ${
                        isHovered ? "running" : ""
                      }`}
                    >
                      {toolkitsInfo.map((toolkitData) => (
                        <ScanBoxToolkits
                          key={toolkitData.id + "-duplicate"}
                          {...toolkitData}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <GlowBackground mousePosition={mousePosition} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ScanVulnerabilities;
