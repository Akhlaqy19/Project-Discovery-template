import React from "react";

export default function DashedLine({ x1, y1, x2, y2 }) {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
    </svg>
  );
}
