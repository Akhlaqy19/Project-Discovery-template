import React from "react";
import SectionTitle from "../SectionTitle";
import AttackServices from "./AttackServices";
import ScanVulnerabilities from "./ScanVulnerabilities";
import AlertBox from "./AlertBox";

function Purpose() {
  return (
    <>
      <section className="custom-container-sm custom-p-sm mt-120">
        <div className="relative z-40 flex w-full flex-col items-center py-10">
          {/* <div className="w-full"> */}
          <div className="flex flex-col gap-3 items-start text-left my-6 w-full max-w-full">
            <SectionTitle
              subTitle={`Why ProjectDiscovery`}
              mainTitle={`Real-time detection for teams that ship fast`}
              description={`Continuous security checks as your team deploys. Automated workflows to enable instant, organization-wide detection and triage. Transform noisy, ineffective scan results into relevant and actionable alerts.`}
              width={`max-w-4xl`}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-6 text-gray font-semibold *:bg-glass-primary *:border-0.5 *:rounded-2xl *:first:px-6 *:nth-[2]:px-6">
            <AttackServices />
            <ScanVulnerabilities />
            <AlertBox />
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Purpose;
