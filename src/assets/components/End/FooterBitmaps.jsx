import React from 'react'
import Bitmap from "./../Bitmap";
import { BitmapsFooter } from '../../datas';

export default function FooterBitmaps() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-50 hidden size-full md:block">
        <div className="absolute left-0 top-0 z-50 size-full">
            {
                BitmapsFooter.map(data => (
                    <div key={data.id}>
                        <Bitmap {...data}/>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
}
