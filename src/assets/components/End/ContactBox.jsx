/**
 * ContactBox Component
 * 
 * A container component for contact section content.
 * Features:
 * - Customizable styling
 * - Responsive layout
 * - Flexible content area
 * - Consistent spacing
 * 
 * @param {Object} props
 * @param {string} props.title - Box title text
 * @param {string} props.description - Box description text
 * @param {string} props.styles - Additional CSS classes for styling
 * @param {React.ReactNode} props.children - Child components to render
 * 
 * @example
 * <ContactBox
 *   title="Get Started"
 *   description="Start your journey with us"
 *   styles="gap-4"
 * >
 *   <Button>Click Me</Button>
 * </ContactBox>
 */

import React from 'react'

export default function ContactBox({ title, description, styles, children }) {
  return (
    <>
      <div className="pointer-events-auto col-span-2 w-full md:col-span-1">
        <div className="bg-base-2 flex size-full flex-col justify-between rounded-2xl p-7">
          <h3 className="mb-3 font-semibold text-white sm:text-xl">{title}</h3>
          <p className="font-light tracking-xs text-sm md:text-base leading-base text-gray mb-10">
            {description}
          </p>
          <div className={`flex ${styles}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
