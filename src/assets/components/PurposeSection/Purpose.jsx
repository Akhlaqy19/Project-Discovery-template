import React from 'react';
import AttackServices from "./AttackServices";
import ScanVulnerabilities from "./ScanVulnerabilities";
import AlertBox from "./AlertBox";

function Purpose() {

  return (
    <>
      <section className="relative z-40 px-7 mx-auto mt-120 max-w-7xl">
        <div className="w-full">
          <div className="flex flex-col gap-3 items-start text-left my-6 py-10 w-full max-w-full mx-auto">
            <div className="my-5">
              <p
                className="inline-block text-xs font-light 
                tracking-3 text-sub-yellow uppercase"
              >
                Why ProjectDiscovery
              </p>
            </div>

            {/*  */}

            <h2 className="title-section title-gradient">
              Real-time detection for teams that ship fast
            </h2>
            <p className="max-w-4xl xl:text-lg text-gray text-lg font-light tracking-wide">
              Continuous security checks as your team deploys. Automated
              workflows to enable instant, organization-wide detection and
              triage. Transform noisy, ineffective scan results into relevant
              and actionable alerts.
            </p>
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