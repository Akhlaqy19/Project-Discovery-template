/**
 * BtnSales Component
 * 
 * A styled button component for sales contact with hover effects.
 * Features:
 * - Glassmorphism design with backdrop blur
 * - Hover state transitions
 * - Customizable height
 * - External link to sales demo request
 * 
 * @param {Object} props
 * @param {string} [props.height] - Custom height class for the button
 * 
 * @example
 * <BtnSales height="h-10" />
 */

import React from "react";
import { Button } from "@mui/material";

function BtnSales({ height }) {
  return (
    <>
      <Button
        sx={{all: "unset"}}
      >
        <a
          href="https://projectdiscovery.io/request-demo"
          className={`box-title-effect relative inline-flex items-center gap-x-1.5 overflow-hidden rounded-md px-4.25 py-2 ${height} text-sm tracking-xs shadow-sm border border-white text-white font-medium bg-white/10 hover:text-midnight hover:bg-white backdrop-blur-sm`}
        >
          Talk to sales
        </a>
      </Button>
    </>
  );
}

export default BtnSales;
