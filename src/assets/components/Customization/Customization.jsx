/**
 * Customization Component
 * 
 * A section component that displays code customization options with interactive features.
 * Features:
 * - Code template display
 * - Dynamic tab switching
 * - Framer Motion animations
 * - GitHub integration
 * - Responsive grid layout
 * - Custom code rendering
 * 
 * @component
 * @example
 * <Customization />
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./../SectionTitle";
import IssueTitle from "./IssueTitle";
import CutomizationInfo from "./CutomizationInfo";
import CustomCodeRenderer from "./CustomCodeRenderer";
import { issueInfos } from "./../../datas";
import { cutomizationInfo } from "./../../datas";
import { FaGithub } from "react-icons/fa";


export default function Customization() {

  const codeTemplateVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        damping: 100
      },
    },
  };

  const boxesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: "10%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const [selectedTitle, setSelectedTitle] = useState(issueInfos[0].title);
  const [codeTemplate, setCodeTemplate] = useState(issueInfos[0].code);

  // click management on title and set rows count
  const handleIssueClick = (title) => {
    setSelectedTitle(title);
    const selectedCode = issueInfos.find((item) => item.title === title);
    if (selectedCode) setCodeTemplate(selectedCode.code);
  };

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

        <motion.div
          variants={codeTemplateVariants}
          whileInView={codeTemplateVariants}
          initial="hidden"
          animate="visible"
          className=""
        >
          <div className="bg-base flex flex-col overflow-hidden rounded-2xl">
            <div className="flex min-w-full justify-between overflow-x-scroll bg-midnight px-8 py-1 pr-24 lg:overflow-x-hidden">
              {issueInfos.map((data) => {
                return (
                  <div key={data.id}>
                    <IssueTitle
                      title={data.title}
                      titleHandler={handleIssueClick}
                      color={`${
                        selectedTitle === data.title ? "white" : "gray"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="relative max-h-137.5">
              <div className="h-full max-h-137.5 overflow-y-auto overflow-x-hidden px-6 pb-14">
                <CustomCodeRenderer yamlTemplate={codeTemplate} />
              </div>

              <div className="absolute bottom-12 left-0 z-30 block h-6 w-full bg-gradient-to-t from-midnight to-midnight/0"></div>

              <div className="absolute bottom-0 left-0 flex min-h-12 w-full items-center bg-midnight px-2">
                <a
                  href="https://cloud.projectdiscovery.io/public/CVE-2023-38433"
                  target="_blank"
                  className="group relative inline-flex items-center gap-x-1.5 overflow-hidden rounded-md font-light px-4 py-2 text-sm tracking-xs shadow-sm text-gray"
                >
                  <FaGithub className="size-3.5 text-gray group-hover:text-white box-title-effect" />
                  <span className="group-hover:text-white box-title-effect">
                    View template
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxesVariants}
          whileInView={boxesVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-3"
        >
          {cutomizationInfo.map((data) => (
            <motion.div variants={boxVariants} whileInView={boxVariants} key={data.id}>
              <CutomizationInfo {...data} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
