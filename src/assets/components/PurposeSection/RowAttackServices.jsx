import React from 'react'

function RowAttackServices({domain, port, techs, ip}) {
  return (
    <>
      <div className="h-13">
        <div className="">
          <span>{domain}</span>
        </div>
        <div className="">
          <span>{port}</span>
        </div>
        <div className="pl-0">
          <div className="*:w-4" style={{ display: "flex" }}>
            {techs.map((tech, i) => (
              <img 
              key={i} 
              src={`/icons/techs/${tech}.svg`} 
              alt={`${tech} technology for attack services`} />
            ))}
          </div>
        </div>
        <div className="">
          <span>{ip}</span>
        </div>
      </div>
    </>
  );
}

export default RowAttackServices