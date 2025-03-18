import React from 'react'
import X from "/icons/X.svg";

export default function CommentBox({ fullName, userName, avatar, comment }) {
  return (
    <>
      <a
        href={`https://twitter.com/${userName}`}
        target="_blank"
        className="slider mx-3"
      >
        <figure className="relative w-96 cursor-pointer overflow-hidden p-8">
          <div className="pointer-events-none relative z-20 flex flex-col items-center gap-2">
            <div className="flex w-full items-start justify-center gap-5">
              <div className="">
                <img src={`/img/comments/${avatar}`} alt="" />
              </div>

              <div className="flex w-full flex-col">
                <figcaption>
                  <h5 className="text-base text-white">{fullName}</h5>
                  <h5 className="flex gap-2 text-sm text-gray">
                    <img
                      src={X}
                      alt="Twitter (X) social media"
                      className="w-4 h-5"
                    />
                    {`@${userName}`}
                  </h5>
                </figcaption>
              </div>
            </div>

            <h5 className="font-light tracking-xs text-sm md:text-base text-gray mt-3 leading-5">
              {comment}
            </h5>
          </div>

          <div className="absolute left-0 top-0 z-10 h-full w-full">
            <div
              className="GlowBackground_glowBackground__jasUQ 
              bg-glass-secondary border rounded-2xl"
            >
              <div className="GlowBackground_glowBorderBg__g39y_"></div>
            </div>
          </div>
        </figure>
      </a>
    </>
  );
}
