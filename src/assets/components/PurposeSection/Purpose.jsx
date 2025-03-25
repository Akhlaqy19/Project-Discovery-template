import React from 'react';
import SectionTitle from '../SectionTitle';
import AttackServices from "./AttackServices";
import ScanVulnerabilities from "./ScanVulnerabilities";
import AlertBox from "./AlertBox";

function Purpose() {

  return (
    <>
      <section className="relative z-40 px-7 mx-auto mt-50 max-w-7xl">
        <div className="w-full">
          <div className="flex flex-col gap-3 items-start text-left my-6 py-10 w-full max-w-full mx-auto">
            <SectionTitle
              subTitle={`Why ProjectDiscovery`}
              mainTitle={`Real-time detection for teams that ship fast`}
              description={`Continuous security checks as your team deploys. Automated workflows to enable instant, organization-wide detection and triage. Transform noisy, ineffective scan results into relevant and actionable alerts.`}
              width={`max-w-4xl`}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 w-full text-gray text-lg font-semibold *:bg-glass-primary *:border-0.5 *:rounded-2xl *:first:px-6 *:nth-[2]:px-6">
            <AttackServices />
            <ScanVulnerabilities />
            <AlertBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Purpose