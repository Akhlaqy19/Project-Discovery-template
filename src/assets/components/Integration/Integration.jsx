import React from "react";
import SectionTitle from "./../SectionTitle";
import IntegrationBox from "./IntegrationBox";
import { integrationBoxesInfo } from "./../../datas";


function Integration() {
  return (
    <>
      <section className="custom-container-sm custom-p-sm mb-36">
        <div className="relative z-40 flex w-full flex-col items-center py-10 lg:pt-20">
          <div className="flex flex-col gap-3 items-center text-center mx-auto my-6">
            <SectionTitle
              mainTitle={`Integrate with your platforms`}
              subTitle={`Integrations`}
              description={`Use our integrations to get alerts sent instantly for ticketing.`}
              width={`max-w-xl`}
            />
          </div>
        </div>

        <div className="grid-col-1 relative grid w-full gap-4 md:grid-cols-3 md:gap-10">
          {integrationBoxesInfo.map((data) => (
            <div key={data.id}>
              <IntegrationBox {...data} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Integration;
