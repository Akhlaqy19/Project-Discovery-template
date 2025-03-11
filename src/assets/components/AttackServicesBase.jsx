import React from 'react'
import {attackServicesInfos} from "./../datas"; 
import RowAttackServices from "./RowAttackServices"

function AttackServicesBase() {
  return (
    <>
      <div
        className="h-39 *:flex *:items-center *:text-sm
        *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
        *:*:nth-[2]:pl-4  *:*:nth-[3]:pl-0 *:*:nth-[3]:*:gap-x-1.75 *:
        transition-transform 
        "
      >
        {
            attackServicesInfos.map(data => (
                <RowAttackServices key={data.id} {...data}/>
            ))
        }
        {/* {
            attackServicesInfos.map(data => (
                <RowAttackServices key={data.id} {...data}/>
            ))
        } */}
      </div>
    </>
  );
}

export default AttackServicesBase