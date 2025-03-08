import React from 'react'
import AttackServices from "./AttackServices"
import ScanVulnerabilities from "./ScanVulnerabilities"

function Purpose() {

  return (
    <>
      <section className="relative mx-auto mt-20 max-w-7xl">
        <div className="px-7 mx-auto w-full">
          <div className="flex flex-col gap-4 my-10 mx-auto w-full items-start">
            <span
              className="inline-block text-xs font-light 
                tracking-3 text-sub-yellow uppercase"
            >
              Why ProjectDiscovery
            </span>
            <h2
              className="pt-5 text-11 font-semibold -tracking-wide
                title-gradient
            "
            >
              Real-time detection for teams that ship fast
            </h2>
            <p className="py-6 text-gray text-lg font-light tracking-wide">
              Continuous security checks as your team deploys. Automated
              workflows to enable instant, organization-wide detection and
              triage. Transform noisy, ineffective scan results into relevant
              and actionable alerts.
            </p>
          </div>

          <div className="w-full">
            <div
              className="grid grid-cols-2 gap-6 h-75.5 text-gray text-lg font-semibold 
              *:px-6 *:py-7 *:bg-glass-primary *:border-0.5 *:rounded-2xl"
            >
            
              <AttackServices/>
              <ScanVulnerabilities/>
              
            </div>

            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purpose