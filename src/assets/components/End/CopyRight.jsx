import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import X from "/icons/X-white.svg";

export default function CopyRight() {
  return (
    <>
      <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
        <div
          className="flex items-center space-x-6 md:order-2 *:text-white *:hover:text-gray
          *:*:size-6 *:*:scale-90"
        >
          <a href="https://discord.com/invite/projectdiscovery" target="_blank">
            <FaDiscord />
          </a>
          <a href="https://github.com/projectdiscovery" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/pdiscoveryio" target="_blank">
            <img src={X} alt="" className="hover:text-gray" />
          </a>
          <a
            href="https://www.linkedin.com/company/projectdiscovery"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@projectdiscovery" target="_blank">
            <FaYoutube />
          </a>
        </div>
        <div className="mt-8 text-xs leading-5 text-gray md:order-1 md:mt-0">
          ©2025 ProjectDiscovery, Inc.
        </div>
      </div>
    </>
  );
}
