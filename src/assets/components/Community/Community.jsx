/**
 * Community Component
 * 
 * A section component that displays community testimonials in an infinite scroll.
 * Features:
 * - Infinite scroll animation
 * - Responsive grid layout
 * - Background effects
 * - Section title with description
 * - Dynamic comment rendering
 * 
 * @component
 * @example
 * <Community />
 */

import React, { useEffect } from 'react'
import SectionTitle from "./../SectionTitle";
import CommentBox from "./CommentBox";
import axios from 'axios';
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
            alt="wormhole"
            loading="lazy"
            decoding="async"
            className="absolute h-120.5 -top-12 left-0 z-10 w-full opacity-50"
            src="/icons/GridWormHole.de67f92e.svg"
          />
        </div>

        <div className="relative z-40 mx-auto flex justify-between">
          <div className="relative center w-full flex-col overflow-hidden">
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
