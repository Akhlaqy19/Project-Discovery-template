import React from "react";
import Bitmap from "./../Bitmap";
import { bitmapsInfo } from "../../datas";
import { bitmapTooltipInfo } from "./../../datas";

export default function FooterBitmaps() {
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
