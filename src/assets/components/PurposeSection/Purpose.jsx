/**
 * Purpose Component
 * 
 * A section component that showcases the main purpose and value proposition of ProjectDiscovery.
 * Features:
 * - Section title with description
 * - Grid layout of feature boxes
 * - Glassmorphism design elements
 * - Responsive layout
 * 
 * @component
 * @example
 * <Purpose />
 */

import React from "react";
import SectionTitle from "../SectionTitle";
import AttackServices from "./AttackServices";
import ScanVulnerabilities from "./ScanVulnerabilities";
import AlertBox from "./AlertBox";

function Purpose() {
  return (
    <>
      <section className="custom-container-sm custom-p-sm mt-30">
        <div className="relative z-40 flex w-full flex-col items-center py-10">
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
          <div className="grid grid-cols-4 gap-6 text-gray *:bg-glass-primary *:rounded-2xl">
            <AttackServices />
            <ScanVulnerabilities />
            <AlertBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Purpose;
