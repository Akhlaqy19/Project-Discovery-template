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
            <img src={`/icons/techs/${techs[0]}.svg`} alt="" />
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