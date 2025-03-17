import React from 'react'

export default function IssueTitle({ title, titleHandler, color: textColor }) {
  return (
    <>
      <div
        className={`flex min-w-max cursor-pointer items-center px-4 md:px-0 text-${textColor}
           hover:text-white`}
      >
        <p
          onClick={() => {
            titleHandler(title);
          }}
          className={`tracking-xs text-sm md:text-base leading-base text-${textColor} 
            py-6 font-semibold hover:text-white`}
        >
          {title}
        </p>
      </div>
    </>
  );
}
