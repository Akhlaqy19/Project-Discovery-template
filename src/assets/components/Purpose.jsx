import React from 'react'
import googleDrive from "/icons/techs/google-cloud.svg"
import php from "/icons/techs/php-logo.svg";
import Nextjs from "/icons/techs/nextjs.svg"
import Kubernetes from "/icons/techs/kubernetes.svg";

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
              *:border-1 *:border-gray-light *:px-6 *:py-7 *:bg-glass-primary *:border-0.5 *:rounded-2xl"
            >
              <section className="group flex flex-col gap-y-7">
                <h3 className="group-hover:text-white box-title-effect">
                  Monitor your entire attack surface
                </h3>

                <section
                  className="w-full h-50 mt-5 bg-glass-secondary backdrop-blur-2xl rounded-2xl
               **:font-light **:leading-3.5
                "
                >
                  <div className="h-11 text-sm text-left *:inline-block py-3 px-5 *:tracking-wide">
                    <div className="w-2/5">
                      <span className="">HOST</span>
                    </div>
                    <div className="w-1/5">
                      <span className="">PORT</span>
                    </div>
                    <div className="w-1/5 pl-3">
                      <span className="">TECH</span>
                    </div>
                    <div className="w-1/5 text-center">
                      <span className="">IP</span>
                    </div>
                  </div>

                  <div
                    className="h-39 overflow-hidden *:flex *:items-center *:text-sm
                     *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
                     *:*:pl-4.5 *:*:nth-[3]:pl-0"
                  >
                    <div className="h-13">
                      <div className="">
                        <span>app.hooli.com</span>
                      </div>
                      <div className="">
                        <span>80</span>
                      </div>
                      <div className="pl-0">
                        <div>
                          <img
                            src={googleDrive}
                            alt="google drive logo"
                            className="pl-1 w-5.5"
                          />
                        </div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>
                    <div className="h-13">
                      <div className="">
                        <span>qa.hooli.com</span>
                      </div>
                      <div className="">
                        <span>443</span>
                      </div>
                      <div className="">
                        <div className="flex" style={{ display: "flex" }}>
                          <img
                            src={php}
                            alt=""
                            className="w-7 overflow-hidden"
                          />
                          <img src={Nextjs} alt="" className="w-4" />
                        </div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>
                    <div className="h-13">
                      <div className="">
                        <span>prod.hooli.com</span>
                      </div>
                      <div className="">
                        <span>443</span>
                      </div>
                      <div className="">
                        <div></div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>
                    <div className="h-13">
                      <div className="">
                        <span>prod.hooli.com</span>
                      </div>
                      <div className="">
                        <span>25</span>
                      </div>
                      <div className="">
                        <div>
                          <img src={Kubernetes} alt="" className='w-4'/>
                        </div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>

                    <div className="h-13">
                      <div className="">
                        <span>raviga.hooli.com</span>
                      </div>
                      <div className="">
                        <span>53</span>
                      </div>
                      <div className="">
                        <div>
                          <img src={Kubernetes} alt="" className='w-4'/>
                        </div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>
                    <div className="h-13">
                      <div className="">
                        <span>ftp.hooli.com</span>
                      </div>
                      <div className="">
                        <span>110</span>
                      </div>
                      <div className="">
                        <div></div>
                      </div>
                      <div className="">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              <section className="group">
                <h3 className="group-hover:text-white box-title-effect">
                  Continuously scan for exploitable vulnerabilities
                </h3>
              </section>
            </div>

            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purpose