const usersRated = 101.4;

const bitmapsHeader = [
  {
    id: 1,
    yAxis: "top-[32%]",
    xAxis: "left-[7%]",
    size: "w-14 h-18",
    scale: "",
    img: "1.svg",
  },
  {
    id: 2,
    yAxis: "top-[52%]",
    xAxis: "right-[15.5%]",
    size: "size-12",
    scale: "scale-75",
    img: "2.svg",
  },
  {
    id: 3,
    yAxis: "top-[20%]",
    xAxis: "right-[4.5%]",
    size: "size-8",
    scale: "scale-50",
    img: "3.svg",
  },
];

const sliderLogosInfo = [
  {
    id: 1,
    src: "ibm.svg",
  },
  {
    id: 2,
    src: "amplify.svg",
  },
  {
    id: 3,
    src: "bytedance.svg",
  },
  {
    id: 4,
    src: "chipotle.svg",
  },
  {
    id: 5,
    src: "elastic.svg",
  },
  {
    id: 6,
    src: "fastly.svg",
  },
  {
    id: 7,
    src: "netflix.svg",
  },
  {
    id: 8,
    src: "paddle.svg",
  },
  {
    id: 9,
    src: "vanta.svg",
  },
  {
    id: 10,
    src: "observa.svg",
  },
  {
    id: 11,
    src: "salesforce.svg",
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
    techs: ["php-logo.svg", "nextjs.svg"],
    ip: "193.127.236",
  },
  {
    id: 2,
    domain: "staging.hooli.com",
    port: 110,
    techs: ["amazon-web-services.svg", "kubernetes.svg"],
    ip: "45.182.184",
  },
  {
    id: 3,
    domain: "ftp.hooli.com",
    port: 21,
    techs: ["amazon-web-services.svg", "cloudflare.svg", "kubernetes.svg"],
    ip: "196.88.248",
  },
  {
    id: 4,
    domain: "dev.hooli.com",
    port: 23,
    techs: ["cloudflare.svg", "google-cloud.svg"],
    ip: "5.242.113",
  },
  {
    id: 5,
    domain: "api.hooli.com",
    port: 21,
    techs: ["fastly.svg", "nextjs.svg"],
    ip: "238.147.26",
  },
  {
    id: 6,
    domain: "breamhall.hooli.com",
    port: 25,
    techs: ["php-logo.svg", "fastly.svg", "cloudflare.svg"],
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
    img: "gitlab-sm.svg",
  },
  {
    id: 2,
    name: "MOVEit transfer",
    situate: "Code Execution",
    code: "CVE-2023-34362",
    score: 9.8,
    img: "moveit-transfer.svg",
  },
  {
    id: 3,
    name: "Redis",
    situate: "Code Execution",
    code: "CVE-2022-0543",
    score: 10,
    img: "redis.svg",
  },
  {
    id: 4,
    name: "VMware",
    situate: "Code Execution",
    code: "CVE-2023-20887",
    score: 9.8,
    img: "vmware.svg",
  },
  {
    id: 5,
    name: "Atlassian",
    situate: "Command Injection",
    code: "CVE-2022-36804",
    score: 8.8,
    img: "atlassian.svg",
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

const integrationBoxesInfo = [
  {
    id: 1,
    title: "Alerting",
    caption:
      "Receive notifications about the scans and discovery in your workspace.",
    images: ["slack.svg", "teams.svg", "webhook.svg", "email.svg"],
  },
  {
    id: 2,
    title: "Ticketing",
    caption: "Automatically create tickets when new vulnerabilities are found.",
    images: ["jira.svg", "github.svg", "gitlab-lg.svg", "linear.svg"],
  },
  {
    id: 3,
    title: "API",
    caption:
      "Automate all platform features through our API for custom workflows.",
    images: ["api.svg"],
  },
];

const communityPoweredInfo = [
  {
    id: 1,
    color: "critical",
    img: "danger-sign.svg",
    text: "Vulnerability announced — ",
  },
  {
    id: 2,
    color: "high",
    img: "timer.svg",
    text: "Nuclei template created — ",
  },
  {
    id: 3,
    color: "info",
    img: "tick-green.svg",
    text: "Vulnerability detected — Alert sent in",
  },
];

const issueInfos = [
  {
    id: 1,
    title: "Broken Authentication",
    count: 37,
  },
  {
    id: 2,
    title: "Weak password",
    count: 62,
  },
  {
    id: 3,
    title: "Out of band",
    count: 50,
  },
  {
    id: 4,
    title: "SQL Injection",
    count: 43,
  },
  {
    id: 5,
    title: "Secrets",
    count: 31,
  },
  {
    id: 6,
    title: "IDOR",
    count: 55,
  },
];

const cutomizationInfo = [
  {
    id: 1,
    img: "circle.svg",
    title: "Real world simulation",
    text: "Run the vulnerability tests as an attacker would to exploit a given vulnerability. Capture full logs behind a given test to triage faster for the team.",
  },
  {
    id: 2,
    img: "stars.svg",
    title: "AI-powered editor",
    text: "Use our AI-powered vulnerability automation editor to convert your internal vulnerability data into an automated detection pipeline.",
  },
  {
    id: 3,
    img: "confirm.svg",
    title: "Supports 6 protocols",
    text: "Nuclei, built by our team, supports over 6 protocols as well as code protocols, so you can basically stitch almost any kind of vulnerability.",
  },
];

const communityComments = [
  {
    id: 1,
    fullName: "Paul Seekamp",
    userName: "nullenc0de",
    avatar: "1.png",
    comment:
      "Starting to get better results running Nuclei, than a Nessus scan these days.",
  },
  {
    id: 2,
    fullName: "STÖK",
    userName: "stokfredrik",
    avatar: "2.png",
    comment:
      "The @pdnuclei team does it again! Need to dev/null all my hacky shit, low and behold... notify!!! Not only captures it you burp colab request & passes it to slack/discord/telegram.",
  },
  {
    id: 3,
    fullName: "Daniel Miessler",
    userName: "DanielMiessler",
    avatar: "3.png",
    comment:
      "This is the best security tool released in probably 10 years. Maybe longer. It’s Nessus—except transparent and automatable—and for AppSec as well.",
  },
  {
    id: 4,
    fullName: "Jason Haddix",
    userName: "JHaddix",
    avatar: "4.png",
    comment:
      "The next level of automation in recon is targeted content discovery / directory bruteforcing for CVE's ++. Want a good start on these fingerprints/templates? They exist!",
  },
  {
    id: 5,
    fullName: "STÖK",
    userName: "stokfredrik",
    avatar: "5.png",
    comment:
      "Check out the stack from @pdnuclei sooooo many game changing tools, nuclei and chaos is the bomb.",
  },
];

const BitmapsFooter = [
  {
    id: 1,
    yAxis: "top-[42%]",
    xAxis: "left-[4%]",
    size: "size-15",
    scale: "scale-90",
    img: "1.svg",
  },
  {
    id: 2,
    yAxis: "top-[6.5%]",
    xAxis: "right-[22.5%]",
    size: "size-15",
    scale: "scale-80",
    img: "2.svg",
  },
  {
    id: 3,
    yAxis: "top-[20%]",
    xAxis: "right-[9.2%]",
    size: "size-15",
    scale: "scale-70",
    img: "3.svg",
  },
];

const footerListInfo = [
  [
    {
      id: 1,
      header: "Platform",
      items: [
        "ProjectDiscovery",
        "Features",
        "Solutions",
        "Change log",
        "Pricing",
      ],
    },
    {
      id: 2,
      header: "Open Source",
      items: [
        "Nuclei",
        "Nuclei Templates",
        "Subfinder",
        "HTTPx",
        "Naabu",
        "CVEmap",
        "All tools",
      ],
    },
  ],
  [
    {
      id: 3,
      header: "Resources",
      items: ["Docs", "Blog", "Community", "Pioneers", "Support"],
    },
    {
      id: 4,
      header: "Company",
      items: ["About", "Careers", "Security", "Privacy", "Terms", "Contact"],
    },
  ],
];

export { usersRated };
export { bitmapsHeader };
export { sliderLogosInfo };
export { featureInfos };
export { attackServicesInfos };
export { toolkitsInfos };
export { rowAlertBoxInfos };
export { vulnerabilityInfo };
export { integrationBoxesInfo };
export { communityPoweredInfo };
export { issueInfos };
export { cutomizationInfo };
export { communityComments };
export { BitmapsFooter };
export { footerListInfo };

// // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsSticky(entry.intersectionRatio == 1);
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px 0px 0px 0px', // منطبق با top: 0 در استایل sticky
  //       threshold: [0, 1]
  //     }
  //   );

  //   if (elementRef.current) observer.observe(elementRef.current);
    
  //   return () => observer.disconnect();
  // }, []);