

const usersRated = 101.3;

const monitorValidationText = "Enter a valid domain to discover your infrastructure"

const sliderLogosInfo = [
  {
    id: 1,
    src: "ibm",
  },
  {
    id: 2,
    src: "amplify",
  },
  {
    id: 3,
    src: "bytedance",
  },
  {
    id: 4,
    src: "chipotle",
  },
  {
    id: 5,
    src: "elastic",
  },
  {
    id: 6,
    src: "fastly",
  },
  {
    id: 7,
    src: "netflix",
  },
  {
    id: 8,
    src: "paddle",
  },
  {
    id: 9,
    src: "vanta",
  },
  {
    id: 10,
    src: "observa",
  },
  {
    id: 11,
    src: "salesforce",
  },
];

//////////////////////////////////////

const featureInfos = [
  {
    id: 1,
    subTitle: "Features - Vulnerability Management",
    title: "Eliminate false positives",
    description:
      "We detect exploitable vulnerabilities. Period. Enabling 10x faster triage and remediation.",
    img: "/img/scan_results.webp",
  },
  {
    id: 2,
    subTitle: "Features - Asset Discovery",
    title: "Discover your infrastructure",
    description:
      "Gain instant visibility into your entire tech stack as your team deploys. Contextualize and prioritize your exposure.",
    img: "/img/asset_results.webp",
  },
  {
    id: 3,
    subTitle: "Features - Nuclei templates",
    title: "Leverage custom exploit detection",
    description:
      "With our open-source framework Nuclei, security teams can automate detection for any vulnerability type.",
    img: "/img/template_example.webp",
  },
];

//////////////////////////////////////

const attackServicesInfos = [
  {
    id: 1,
    domain: "app.hooli.com",
    port: 21,
    techs: ["php-logo", "nextjs"],
    ip: "193.127.236",
  },
  {
    id: 2,
    domain: "staging.hooli.com",
    port: 110,
    techs: ["amazon-web-services", "kubernetes"],
    ip: "45.182.184",
  },
  {
    id: 3,
    domain: "ftp.hooli.com",
    port: 21,
    techs: ["amazon-web-services", "cloudflare", "kubernetes"],
    ip: "196.88.248",
  },
  {
    id: 4,
    domain: "dev.hooli.com",
    port: 23,
    techs: ["cloudflare", "google-cloud"],
    ip: "5.242.113",
  },
  {
    id: 5,
    domain: "api.hooli.com",
    port: 21,
    techs: ["fastly", "nextjs"],
    ip: "238.147.26",
  },
  {
    id: 6,
    domain: "breamhall.hooli.com",
    port: 25,
    techs: ["php-logo", "fastly", "cloudflare"],
    ip: "148.154.199",
  },
];

//////////////////////////////////////

const toolkitsInfos = [
  {
    id: 1,
    name: "Gitlab",
    situate: "Path Traversal",
    code: "CVE-2023-2825",
    score: 7.5,
    img: "gitlab-sm",
  },
  {
    id: 2,
    name: "MOVEit transfer",
    situate: "Code Execution",
    code: "CVE-2023-34362",
    score: 9.8,
    img: "moveit-transfer",
  },
  {
    id: 3,
    name: "Redis",
    situate: "Code Execution",
    code: "CVE-2022-0543",
    score: 10,
    img: "redis",
  },
  {
    id: 4,
    name: "VMware",
    situate: "Code Execution",
    code: "CVE-2023-20887",
    score: 9.8,
    img: "vmware",
  },
  {
    id: 5,
    name: "Atlassian",
    situate: "Command Injection",
    code: "CVE-2022-36804",
    score: 8.8,
    img: "atlassian",
  },
];

//////////////////////////////////////

const rowAlertBoxInfos = [
  {
    id: 1,
    type: "Medium",
    code: "CVE-2014-4941",
    details: "Cross RSS 1.7 - Local File Inclusion",
    count: 4,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 2,
    type: "Critical",
    code: "CVE-2024-28255",
    details: "OpenMetadata - Authentication Bypass",
    count: 5,
    img: "teams.svg",
    name: "Teams",
  },
  {
    id: 3,
    type: "High",
    code: "CVE-2024-20767",
    details: "Adobe ColdFusion - Arbitrary File Read",
    count: 1,
    img: "slack.svg",
    name: "Slack",
  },
  {
    id: 4,
    type: "Info",
    code: "PRIVATEBIN-DET",
    details: "PrivateBin - Detect",
    count: 18,
    img: "api.svg",
    name: "API",
  },
  {
    id: 5,
    type: "Medium",
    code: "CVE-2024-28734",
    details: "Coda v.2024Q1 - Cross-Site Scripting",
    count: 3,
    img: "email.svg",
    name: "Email",
  },
  {
    id: 6,
    type: "High",
    code: "CVE-2019-9632",
    details: "ESAFENET CDG - Arbitrary File Download",
    count: 12,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 7,
    type: "Critical",
    code: "CVE-2024-27954",
    details: "WordPress Automatic Plugin <3.92.1 - Arbitrary Fil...",
    count: 21,
    img: "api.svg",
    name: "API",
  },
  {
    id: 8,
    type: "Medium",
    code: "CVE-2014-4577",
    details: "WP AmASIN – The Amazon Affiliate Shop - Local File...",
    count: 3,
    img: "teams.svg",
    name: "Teams",
  },
  {
    id: 9,
    type: "Info",
    code: "DIRECTUS-DETEC",
    details: "Directus - Detect",
    count: 7,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 10,
    type: "High",
    code: "quick-cms-sqli",
    details: "Quick.CMS v6.7 - SQL Injection",
    count: 9,
    img: "email.svg",
    name: "Email",
  },
  {
    id: 11,
    type: "High",
    code: "UPS-NETWORK-LF",
    details: "UPS Network Management Card 4 Path Traversal",
    count: 1,
    img: "api.svg",
    name: "API",
  },
  {
    id: 12,
    type: "Medium",
    code: "CVE-2012-2122",
    details: "MySQL - Authentication Bypass",
    count: 14,
    img: "api.svg",
    name: "API",
  },
  {
    id: 13,
    type: "Critical",
    code: "CVE-2024-1212",
    details: "Progress Kemp LoadMaster - Command Injection",
    count: 6,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 14,
    type: "High",
    code: "CVE-2023-34105",
    details: "SRS - Command Injection",
    count: 2,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 15,
    type: "Critical",
    code: "CVE-2023-5830",
    details: "ColumbiaSoft DocumentLocator - Improper Authentica...",
    count: 6,
    img: "api.svg",
    name: "API",
  },
  {
    id: 16,
    type: "Medium",
    code: "CVE-2014-4941",
    details: "Cross RSS 1.7 - Local File Inclusion",
    count: 14,
    img: "api.svg",
    name: "API",
  },
  {
    id: 17,
    type: "Critical",
    code: "CVE-2024-28255",
    details: "OpenMetadata - Authentication Bypass",
    count: 10,
    img: "webhook.svg",
    name: "Webhook",
  },
  {
    id: 18,
    type: "High",
    code: "CVE-2024-20767",
    details: "Adobe ColdFusion - Arbitrary File Read",
    count: 1,
    img: "slack.svg",
    name: "Slack",
  },
  {
    id: 19,
    type: "Info",
    code: "PRIVATEBIN-DET",
    details: "PrivateBin - Detect",
    count: 18,
    img: "api.svg",
    name: "API",
  },
];

//////////////////////////////////////
// آرایه‌ای از عناوین با شناسه‌ها و برچسب‌ها
const vulnerabilityInfo = [
  {
    id: "vulnerability",
    label: "Vulnerability Management",
    restOfTitle: "",
    text: [
      `Traditional vulnerability management platforms struggle with excessive false positives and noise. Our vulnerability management platform, powered by Nuclei, delivers high-fidelity scanning to identify actual exploitable vulnerabilities that have real-world impact rather than just relying on CVSS scores. By leveraging the global open-source community, our library of over 9,000 Nuclei templates reflect the latest CVEs and trending misconfigurations.
    `,
      `
    Our product integrates asset data from cloud platforms to provide essential context, allowing you to prioritize and manage vulnerabilities effectively. With multiple status tracking and easy export options via JSON, API, or Jira integration, remediation is streamlined for your engineering teams.
    `,
    ],
    options: [
      "Exploitable vulnerabilities",
      "10x faster triage",
      "Open source community",
    ],
  },
  {
    id: "attack",
    label: "Attack Surface Management",
    restOfTitle: " (ASM)",
    text: [
      `
    Managing an organization's attack surface is increasingly complex with the expansion of cloud environments and shadow IT. Our platform offers industry-leading reconnaissance, powered by our globally popular open-source tools like Subfinder, Naabu, Chaos, and more, to continuously discover your attack surface.
    `,
      ` Our comprehensive library and real-time feed of Nuclei templates detect not only trending CVEs but also exposed panels, misconfigurations, and other critical issues across your full attack surface. A successful attack surface management program goes beyond discovery—it ensures critical vulnerabilities are detected early and remediated, reducing your overall risk and strengthening your security posture.`,
    ],
    options: [
      "Advanced reconnaissance",
      "AI query and filters",
      "Labels, asset owners",
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    restOfTitle: " and Security",
    text: [
      `
    Compliance-driven security tools today are expensive, outdated, and do little beyond compliance to improve an organization's security posture. Our platform not only helps identify critical issues and exploits in your infrastructure but also satisfies compliance frameworks like SOC 2, PCI, and others.`,
      `We provide the necessary integrations and reporting to meet regulatory requirements and help you pass your next audit. Beyond compliance, our platform enhances your overall security by addressing real-world vulnerabilities, ensuring continuous protection while reducing risk.`,
    ],
    options: ["SOC 2", "PCI", "HIPAA"],
  },
];

export { usersRated };
export { sliderLogosInfo };
export { featureInfos };
export { attackServicesInfos };
export { toolkitsInfos };
export { rowAlertBoxInfos };
export { vulnerabilityInfo };

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/autoplay';

// import required modules
// import { Autoplay } from 'swiper/modules';

  {/* <Swiper
  modules={[Autoplay]}
  spaceBetween={0}
  slidesPerView={8}
  loop={true}
  // translate='yes'
  speed={2000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  allowTouchMove={false}
  resizeObserver={true}
  className="flex justify-center items-center gap-x-2.5 *:min-w-full
  mx-auto mt-0 text-center *:flex *:justify-center *:items-center
  *:min-h-20 *:max-w-1/7 **:text-center
  **:text-sm **:text-gray-600 opacity-30 grayscale"
  >
  ...
  </Swiper> */}