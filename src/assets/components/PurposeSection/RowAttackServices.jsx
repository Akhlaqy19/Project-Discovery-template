/**
 * RowAttackServices Component
 * 
 * A component that displays individual attack service information in a row format.
 * Features:
 * - Technology stack icons display
 * - Domain and IP information
 * - Port information
 * - Responsive layout
 * 
 * @param {Object} props
 * @param {string} props.domain - Domain name or host
 * @param {string} props.port - Port number
 * @param {string[]} props.techs - Array of technology icon filenames
 * @param {string} props.ip - IP address
 * 
 * @example
 * <RowAttackServices
 *   domain="example.com"
 *   port="443"
 *   techs={["react.svg", "node.svg"]}
 *   ip="192.168.1.1"
 * />
 */

import React from 'react'

function RowAttackServices({domain, port, techs, ip}) {
  return (
    <>
      <div className="flex items-center justify-around rounded-xl py-2">
        <div className="w-2/5 pl-4 text-left">
          <p className="domain-detail fonts-list">{domain}</p>
        </div>
        <div className="w-1/6 text-left">
          <p className="domain-detail fonts-list">{port}</p>
        </div>
        <div className="w-1/5">
          <div className="*:w-4 flex items-center gap-2 align-middle"
          style={{display: "flex"}}>
            {techs.map((tech, i) => (
              <img
                key={i}
                src={`/icons/techs/${tech}`}
                alt={`${tech} technology for attack services`}
              />
            ))}
          </div>
        </div>
        <div className="w-1/5 pr-4 text-right">
          <p className="domain-detail fonts-list">{ip}</p>
        </div>
      </div>
    </>
  );
}

export default RowAttackServices