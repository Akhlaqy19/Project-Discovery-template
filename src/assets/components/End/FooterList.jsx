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
