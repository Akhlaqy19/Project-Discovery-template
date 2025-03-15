import React from 'react'
import IntegrationBox from "./IntegrationBox"

// import { FaGithub } from "react-icons/fa";
import Slack from "/icons/alert-box-icons/slack.svg";
import Teams from "/icons/alert-box-icons/teams.svg";
import Webhook from "/icons/alert-box-icons/webhook.svg";
import Api from "/icons/alert-box-icons/api.svg";
import Email from "/icons/alert-box-icons/email.svg";
import Gitlab from "/icons/toolkits-for-vulnerability/gitlab.svg";

function Integration() {
  return (
    <>
      <section className="custom-container-sm custom-p-sm mb-36">
        <div className="relative z-40 flex w-full flex-col items-center py-10 lg:pt-20">
          <div className="flex flex-col gap-3 items-center text-center mx-auto my-6">
            <div className="my-5">
              <p class="text-xs font-light uppercase tracking-3 text-sub-yellow">
                Integrations
              </p>
            </div>
            <div className="">
              <h2 class="title-section title-gradient">
                Integrate with your platforms
              </h2>
            </div>
            <div className="">
              <p class="subtitle-section">
                Use our integrations to get alerts sent instantly for ticketing.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-col-1 relative grid w-full gap-4 md:grid-cols-3 md:gap-10">
          <IntegrationBox
            title="Alerting"
            caption="Receive notifications about the scans and discovery in your workspace."
            images={[Slack, Teams, Webhook, Email]}
          />
          <IntegrationBox
            title="Ticketing"
            caption="Automatically create tickets when new vulnerabilities are found."
            images={[Slack, Teams, Gitlab, Email]}
          />
          <IntegrationBox
            title="API"
            caption="Automate all platform features through our API for custom workflows."
            images={[Api]}
          />
        </div>
      </section>
    </>
  );
}

export default Integration