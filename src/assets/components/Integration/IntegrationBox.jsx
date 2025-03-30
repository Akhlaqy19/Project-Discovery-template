/**
 * IntegrationBox Component
 * 
 * A tiltable box component that displays integration information with images.
 * Features:
 * - Parallax tilt effect
 * - Hover animations
 * - Image gallery
 * - Responsive design
 * - External link support
 * 
 * @param {Object} props
 * @param {string} props.title - Title of the integration box
 * @param {string} props.caption - Description text for the integration
 * @param {string[]} props.images - Array of image paths to display
 * @param {string} props.url - External link URL
 * 
 * @component
 * @example
 * <IntegrationBox
 *   title="GitHub Integration"
 *   caption="Connect with your GitHub repositories"
 *   images={["github.png", "alert.png"]}
 *   url="https://github.com/integration"
 * />
 */

import React from "react";
import Tilt from "react-parallax-tilt";

export default function IntegrationBox({ title, caption, images, url }) {

  return (
    <div>
      <Tilt
        tiltReverse={"true"}
        tiltMaxAngleX={6}
        tiltMaxAngleY={10}
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
      >
        <div className="col-span-1">
          <a target="_blank" href={url}>
            <div className="center" style={{ perspective: 1000 }}>
              {/* transform-style: preserve-3d; transform: rotateY(0deg) rotateX(0deg); */}
              <div className="relative transition-all duration-200 ease-linear bg-base w-full cursor-pointer flex-col center gap-3 rounded-xl p-8 hover:border-gray/40 transform-3d">
                <div className="flex size-full flex-col items-center transform-3d *:transform-3d">
                  <div className="transition duration-200 ease-linear pointer-events-none relative z-20 mb-4 h-auto w-full">
                    <p className="text-base xl:text-lg tracking-xs text-center font-semibold text-white">
                      {title}
                    </p>
                  </div>

                  <div className="transition duration-200 ease-linear pointer-events-none relative z-20 h-auto w-full">
                    <p className="font-light tracking-xs text-sm md:text-base leading-base text-center text-gray">
                      {caption}
                    </p>
                  </div>

                  <div className="w-fit transition duration-200 ease-linear pointer-events-none relative z-20">
                    <div className="bg-base-2 mt-6 flex items-center rounded-xl p-3 align-middle *:px-4 *:not-last:border-r *:not-last:border-[#363636]">
                      {images.map((img, i) => (
                        <img
                          key={i}
                          src={`/icons/alert-box-icons/${img}`}
                          alt={`${img} technology`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Tilt>
    </div>
  );
}
