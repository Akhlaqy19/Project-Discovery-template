/**
 * IssueTitle Component
 * 
 * A component that displays clickable issue titles with hover effects.
 * Features:
 * - Interactive click handling
 * - Dynamic color changes
 * - Hover effects
 * - Responsive text sizing
 * - Custom styling
 * 
 * @param {Object} props
 * @param {string} props.title - Title text to display
 * @param {Function} props.titleHandler - Function to handle title click
 * @param {string} props.color - Color class for text styling
 * 
 * @component
 * @example
 * <IssueTitle
 *   title="Security Issue"
 *   titleHandler={(title) => console.log(title)}
 *   color="white"
 * />
 */

import React from 'react'

export default function IssueTitle({ title, titleHandler, color: textColor }) {
  return (
    <>
      <div
        className={`flex min-w-max cursor-pointer items-center px-4 md:px-0 text-${textColor}
           hover:text-white`}
      >
        <p
          onClick={() => titleHandler(title)}
          className={`tracking-xs text-sm md:text-base leading-base text-${textColor} 
            py-6 font-semibold hover:text-white`}
        >
          {title}
        </p>
      </div>
    </>
  );
}
