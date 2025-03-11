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

export {featureInfos};

const toolkitsInfos = [
  {
    id: 1,
    name: "Gitlab",
    situate: "Path Traversal",
    code: "CVE-2023-2825",
    score: 7.5,
    img: "/icons/toolkits-for-vulnerability/gitlab.svg",
  },
  {
    id: 2,
    name: "MOVEit transfer",
    situate: "Code Execution",
    code: "CVE-2023-34362",
    score: 9.8,
    img: "/icons/toolkits-for-vulnerability/moveit-transfer.svg",
  },
  {
    id: 3,
    name: "Redis",
    situate: "Code Execution",
    code: "CVE-2022-0543",
    score: 10,
    img: "/icons/toolkits-for-vulnerability/redis.svg",
  },
  {
    id: 4,
    name: "VMware",
    situate: "Code Execution",
    code: "CVE-2023-20887",
    score: 9.8,
    img: "/icons/toolkits-for-vulnerability/vmware.svg",
  },
  {
    id: 5,
    name: "Atlassian",
    situate: "Command Injection",
    code: "CVE-2022-36804",
    score: 8.8,
    img: "/icons/toolkits-for-vulnerability/atlassian.svg",
  },
];

export { toolkitsInfos };
