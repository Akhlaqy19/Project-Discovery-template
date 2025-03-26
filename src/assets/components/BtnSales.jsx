import React from "react";
import { Button } from "@mui/material";

function BtnSales({ height }) {
  return (
    <>
      {/* start to talk btn */}
      <Button
        sx={{
          all: "unset",
        }}
      >
        <a
          href=""
          className={`box-title-effect relative inline-flex items-center gap-x-1.5 overflow-hidden rounded-md px-4.25 py-2 ${height} text-sm tracking-xs shadow-sm border border-white text-white font-medium bg-white/10 hover:text-midnight hover:bg-white backdrop-blur-sm`}
        >
          Talk to sales
        </a>
      </Button>
    </>
  );
}

export default BtnSales;
