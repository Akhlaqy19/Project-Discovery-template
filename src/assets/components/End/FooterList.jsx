/**
 * FooterList Component
 * 
 * A component that renders a list of footer links with a header.
 * Features:
 * - Customizable header text
 * - Dynamic list items
 * - External link support
 * - Hover effects
 * - Accessibility attributes
 * 
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the list section
 * @param {string} props.header - Header text for the list section
 * @param {string[]} props.items - Array of text items to display
 * @param {string[]} props.links - Array of URLs corresponding to items
 * 
 * @component
 * @example
 * <FooterList
 *   id="company"
 *   header="Company"
 *   items={["About", "Careers", "Contact"]}
 *   links={["/about", "/careers", "/contact"]}
 * />
 */

import React from 'react'

export default function FooterList({id, header, items, links}) {
  return (
    <>
      <div className="">
        <h6 className="text-sub-yellow text-xs font-normal uppercase tracking-3">
          {header}
        </h6>
        <ul role="list" className="mt-6 space-y-4 nav-effect">
          {items.map((item, i) => (
            <li key={i + 1}>
              <a
                href={links[i]}
                target="_self"
                className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
