/**
 * FooterBitmaps Component
 * 
 * A component that displays interactive bitmaps in the footer section.
 * Features:
 * - Responsive display (hidden on mobile)
 * - Interactive bitmap elements
 * - Tooltip integration
 * - Absolute positioning
 * 
 * @component
 * @example
 * <FooterBitmaps />
 */

import React, { useState, useEffect } from "react";
import Bitmap from "./../Bitmap";
import axios from 'axios';

export default function FooterBitmaps() {
  const [bitmapsInfo, setBitmapsInfo] = useState([]);
  const [bitmapTooltipInfo, setBitmapTooltipInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bitmapsResponse, tooltipResponse] = await Promise.all([
          axios.get('http://localhost:3001/bitmapsInfo'),
          axios.get('http://localhost:3001/bitmapTooltipInfo')
        ]);
        setBitmapsInfo(bitmapsResponse.data);
        setBitmapTooltipInfo(tooltipResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bitmap data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!bitmapsInfo.length || !bitmapTooltipInfo.length) return null;

  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-50 hidden size-full md:block">
        <div className="absolute left-0 top-0 z-50 size-full">
          {bitmapsInfo[1].map((data) => (
            <div key={data.id}>
              <Bitmap {...data} {...bitmapTooltipInfo[data.id - 1]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
