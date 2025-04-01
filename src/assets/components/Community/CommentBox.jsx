/**
 * CommentBox Component
 * 
 * A component that displays a single community testimonial with user information.
 * Features:
 * - Twitter integration
 * - User avatar display
 * - Glowing background effect
 * - Responsive design
 * - External link support
 * 
 * @param {Object} props
 * @param {string} props.fullName - User's full name
 * @param {string} props.userName - User's Twitter handle
 * @param {string} props.avatar - Path to user's avatar image
 * @param {string} props.comment - User's testimonial text
 * 
 * @component
 * @example
 * <CommentBox
 *   fullName="John Doe"
 *   userName="johndoe"
 *   avatar="avatar.png"
 *   comment="Great product!"
 * />
 */

import React, {useState} from 'react'
import GlowBackground from "../GlowBackground";
import X from "/icons/X.svg";

export default function CommentBox({ fullName, userName, avatar, comment }) {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e) => {
     const rect = e.currentTarget.getBoundingClientRect();
     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;

     // محاسبه درصد موقعیت نسبت به اندازه المان
     const xPercent = (x / rect.width) * 100;
     const yPercent = (y / rect.height) * 100;

     setMousePosition({
       x: xPercent,
       y: yPercent,
     });
   };

  return (
    <>
      <a
        href={`https://twitter.com/${userName}`}
        target="_blank"
        className="slider-comments mx-3"
        onMouseMove={handleMouseMove}
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

          <GlowBackground mousePosition={mousePosition} />
        </figure>
      </a>
    </>
  );
}

{
  /* bg-glass-secondary */
}
