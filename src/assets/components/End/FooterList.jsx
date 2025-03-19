import React from 'react'

export default function FooterList({id, header, items}) {
  return (
    <>
      <div className={``}>
        <h6 className="text-sub-yellow text-xs font-normal uppercase tracking-3">
          {header}
        </h6>
        <ul role="list" className="mt-6 space-y-4">
          {items.map((item, i) => (
            <li key={i+1}>
              <a
                href="https://cloud.projectdiscovery.io/"
                target="_self"
                className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}

          {/* <li>
            <a
              className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              target="_self"
              href="https://cloud.projectdiscovery.io/"
            >
              ProjectDiscovery
            </a>
          </li>
          <li>
            <a
              className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              target="_self"
              href="/#features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              target="_self"
              href="/#solutions"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              target="_blank"
              href="https://feedback.projectdiscovery.io/changelog"
            >
              Change log
            </a>
          </li>
          <li>
            <a
              className="flex text-sm leading-5 text-white hover:text-gray w-fit cursor-pointer"
              target="_self"
              href="/pricing"
            >
              Pricing
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}
