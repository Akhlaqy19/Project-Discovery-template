import React from 'react'

export default function IntegrationBox({title, caption, images}) {
  return (
    <>
      <div className="col-span-1">
        <a
          target="_blank"
          href="https://docs.projectdiscovery.io/cloud/examples/slackalert#generate-alerts-in-slack"
        >
          <div
            className="flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* transform-style: preserve-3d; transform: rotateY(0deg) rotateX(0deg); */}
            <div className="relative justify-center transition-all duration-200 ease-linear bg-base flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl p-8 hover:border-gray/40 transform-3d rotate-0">
              <div className="flex h-full w-full flex-col items-center transform-3d *:transform-3d">
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
                      <img key={i} src={`/icons/alert-box-icons/${img}`} alt={`${img} technology`}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
