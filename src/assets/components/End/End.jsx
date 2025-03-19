import React from 'react'
import Contact from "./Contact";
import FooterBitmaps from "./FooterBitmaps";
import FooterMain from "./FooterMain";

export default function End() {
  return (
    <>
      <footer id="footer" className="relative z-40">
        <Contact />
        <FooterBitmaps />

        <div className="bg-midnight">
          <div className="relative h-60">
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px]">
              <div className="absolute inset-0 [transform:rotateX(45deg)]">
                <div
                  className="
                animate-grid 
                bg-repeat
                [background-size:60px_60px] 
                w-[600vw]
                h-[300vh]
                [inset:0%_0px] 
                -ml-[50%]
                [transform-origin:100%_0_0] 
                dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
                ></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-midnight to-transparent to-30%"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-midnight to-transparent to-40%"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-midnight to-transparent to-40%"></div>
              <div className="absolute bottom-0 h-0.5 w-full bg-transparent">
                <div
                  className="absolute inset-0 size-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgb(161, 161, 170) 0%, rgb(5, 1, 13) 80%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <FooterMain />
      </footer>
    </>
  );
}
