/**
 * AttackServices Component
 * 
 * A component that displays a monitoring interface for attack surface information.
 * Features:
 * - Interactive hover effects
 * - Animated data display
 * - Responsive grid layout
 * - Real-time data updates
 * 
 * @component
 * @example
 * <AttackServices />
 */

import React, { useState, useEffect } from "react";
import axios from 'axios';
import RowAttackServices from "./RowAttackServices";
import GlowBackground from "../GlowBackground";

export default function AttackServices() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [attackServicesInfo, setAttackServicesInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/attackServicesInfo`);
        setAttackServicesInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch attack services data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // محاسبه درصد موقعیت نسبت به اندازه المان
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    setMousePosition({
      x: xPercent,
      y: yPercent
    });
  };

  if (loading) return null;
  if (error) return null;
  if (!attackServicesInfo.length) return null;

  return (
    <>
      <section
        className="group col-span-4 md:col-span-2 min-h-75.5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="relative z-50 m-0 size-full p-0 py-0">
          <div className="size-full pb-8">
            <div className="pointer-events-none relative z-20 mb-4 h-auto w-full">
              <div className="flex items-center justify-between px-6 pb-3 pt-6">
                <h3 className="group-hover:text-white box-title-effect text-base xl:text-lg text-gray tracking-xs font-semibold">
                  Monitor your entire attack surface
                </h3>
              </div>
            </div>

            <div className="bg-base-2 pointer-events-none relative z-20 mx-5 h-full max-h-48 w-auto rounded-xl bg-custom-gradient">
              <div className="relative top-0 z-40 h-auto w-full rounded-xl pb-1">
                <div
                  className="flex justify-around py-3 *:not-first:w-1/5 *:*:font-light *:*:text-sm *:*:text-gray *:*:leading-3 *:*:tracking-wide fonts-list
                "
                >
                  <div className="w-2/5 text-left pl-6">
                    <p>HOST</p>
                  </div>
                  <div className="text-left">
                    <p>PORT</p>
                  </div>
                  <div>
                    <p>TECH</p>
                  </div>
                  <div className="pr-4 text-center">
                    <p>IP</p>
                  </div>
                </div>
              </div>
              <section className="relative top-0 z-40 h-auto w-full rounded-b-xl overflow-hidden">
                <div className="group flex overflow-hidden p-2 flex-col relative z-20 max-h-36 gap-y-4">
                  <AttackServicesBase
                    isHovered={isHovered}
                    attackServicesInfo={attackServicesInfo}
                  />
                  <AttackServicesBase
                    isHovered={isHovered}
                    attackServicesInfo={attackServicesInfo}
                  />
                  <AttackServicesBase
                    isHovered={isHovered}
                    attackServicesInfo={attackServicesInfo}
                  />
                  <AttackServicesBase
                    isHovered={isHovered}
                    attackServicesInfo={attackServicesInfo}
                  />
                </div>
              </section>
            </div>

            <GlowBackground mousePosition={mousePosition}/>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * AttackServicesBase Component
 * 
 * A subcomponent that handles the animated display of attack service data.
 * Features:
 * - Vertical marquee animation
 * - Hover-based animation control
 * - Dynamic data rendering
 * 
 * @param {Object} props
 * @param {boolean} props.isHovered - Controls the animation state
 * @param {Array} props.attackServicesInfo - Array of attack service data
 */

const AttackServicesBase = ({ isHovered, attackServicesInfo }) => {
  return (
    <>
      <div
        className={`flex shrink-0 justify-around gap-4 flex-col vertical-marquee ${
          isHovered ? "running" : ""
        }`}
      >
        {attackServicesInfo.map((data) => (
          <RowAttackServices key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};