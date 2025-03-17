import React from 'react'

export default function IssueTitle({title}) {
  return (
    <>
      <div class="flex min-w-max cursor-pointer items-center px-4 md:px-0 text-gray hover:text-white">
        <p class="tracking-xs text-sm md:text-base leading-base text-gray py-6 font-semibold hover:text-white">
          {title}
        </p>
      </div>
    </>
  );
}
