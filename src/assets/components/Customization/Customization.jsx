import React from "react";
import SectionTitle from "./../SectionTitle";
import IssueTitle from "./IssueTitle";
import {issueInfos} from "./../../datas";

export default function Customization() {
  return (
    <>
      <section className="custom-container-sm custom-p-sm">
        <div
          className="flex flex-col gap-3 items-start text-left my-20 w-full md:max-w-[85%]
        *:transform-none"
        >
          <SectionTitle
            subTitle={`Customization`}
            mainTitle={`Write your own detection templates using AI powered by our Nuclei open source library`}
            description={`Leverage the global security community to streamline your vulnerability management. With a template library full of contributions from pentest, bug bounty, and security teams to automate the most complex vulnerability detection.`}
            width={`w-full`}
          />
        </div>

        <div className="">
          <div className="bg-base flex flex-col overflow-hidden rounded-2xl">
            <div className="flex min-w-full justify-between overflow-x-scroll bg-midnight px-8 py-1 pr-24 lg:overflow-x-hidden">
              {issueInfos.map((data) => (
                <div key={data.id}>
                  <IssueTitle title={data.title} />
                </div>
              ))}
            </div>

            <div className="relative max-h-137.5">
              <div className="h-full max-h-137.5 overflow-y-auto overflow-x-hidden px-6 pb-14">
                <pre className="__className_c1e5c9">
                    
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
