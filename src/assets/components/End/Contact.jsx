/**
 * Contact Component
 * 
 * A contact section component with interactive elements.
 * Features:
 * - Gradient background
 * - Two-column layout
 * - Monitor component integration
 * - Sales button integration
 * - Responsive design
 * 
 * @component
 * @example
 * <Contact />
 */

import React from 'react'
import ContactBox from "./ContactBox";
import Monitor from './../Monitor';
import BtnSales from './../BtnSales';

export default function Contact() {
  return (
    <>
      <div
        className="pointer-events-none w-full bg-gradient-to-t
       from-midnight to-midnight/0 to-100%"
      >
        <div className="custom-container-sm custom-p-sm">
          <h2 className="section-gradient-title mb-12">Get started</h2>
          <div className="bg-base rounded-2xl p-4 md:p-6 lg:p-12">
            <div className="grid grid-cols-2 gap-4 md:gap-12">
              <ContactBox
                title={`Monitor your infrastructure`}
                description={`Trusted by 100k+ security professionals to streamline
                    vulnerabilities that can actually be exploited.`}
                styles={`mx-auto w-full`}
              >
                <Monitor />
              </ContactBox>
              <ContactBox
                title={`Talk to sales`}
                description={`Our community spans members from full-time bug bounty
                    hunters to Fortune 500 security engineers.`}
                styles={`gap-4`}
              >
                <BtnSales height={"h-12"} />
              </ContactBox>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
