import React from 'react'
import SectionTitle from "./../SectionTitle";
import CommentBox from "./CommentBox";
import {communityComments} from "./../../datas";

export default function Community() {
  return (
    <>
      <section className="custom-container custom-p-sm">
        <div className="relative z-40 mb-20 mt-12 grid w-full grid-cols-1 gap-6">
          <div className="flex flex-col gap-3 items-center text-center mx-auto max-w-auto">
            <SectionTitle
              mainTitle={`Security teams love us`}
              subTitle={`Community`}
              description={`Learn, collaborate, and contribute with our community.`}
              width={""}
            />
          </div>
          <img
            src="https://projectdiscovery.io/_next/static/media/GridWormHole.de67f92e.svg"
            alt="wormhole"
            loading="lazy"
            className="absolute -top-12 left-0 z-10 h-[300%] w-full text-transparent opacity-50"
          />
        </div>

        <div className="relative z-40 mx-auto flex justify-between">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="w-full mask-gradient">
              <div className="group flex overflow-hidden p-2 gap-4 [--duration:75s]">
                {communityComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-row shrink-0 justify-around gap-4 *:slider"
                  >
                    <CommentBox {...comment} />
                  </div>
                ))}
                {communityComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-row shrink-0 justify-around gap-4 *:slider"
                  >
                    <CommentBox {...comment} />
                  </div>
                ))}
                {communityComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-row shrink-0 justify-around gap-4 *:slider"
                  >
                    <CommentBox {...comment} />
                  </div>
                ))}
                {communityComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-row shrink-0 justify-around gap-4 *:slider"
                  >
                    <CommentBox {...comment} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
