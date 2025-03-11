import React, { useState } from "react";
import GoogleCloud from "/icons/techs/google-cloud.svg"
import php from "/icons/techs/php-logo.svg";
import Nextjs from "/icons/techs/nextjs.svg"
import Kubernetes from "/icons/techs/kubernetes.svg";
import Cloudflare from "/icons/techs/cloudflare.svg";
import aws from "/icons/techs/amazon-web-services.svg";
import fastly from "/icons/techs/fastly.svg";

function AttackServices() {

  const [isVerticalMarquee, setIsVerticalMarquee] = useState(false);

  return (
    <>
      <section
        className="group flex flex-col gap-y-7 py-7"
        onMouseEnter={() => setIsVerticalMarquee(true)}
        onMouseLeave={() => setIsVerticalMarquee(false)}
      >
        <div className="">
          <h3 className="group-hover:text-white box-title-effect">
            Monitor your entire attack surface
          </h3>
        </div>

        <div
          className="h-47.5 mt-5 px-6 bg-glass-secondary backdrop-blur-2xl 
                **:font-light **:leading-3.5 rounded-2xl "
        >
          <div className="h-11.25 text-xm text-left *:inline-block py-3 *:tracking-wide">
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
              <span className="text-x1">ɪ</span>P
            </div>
          </div>
          <section className="w-full h-36.25 overflow-hidden">
            <div className={isVerticalMarquee ? "vertical-marquee" : ""}>
              <div
                className="h-39 *:flex *:items-center *:text-sm
                *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
                *:*:nth-[2]:pl-4  *:*:nth-[3]:pl-0 *:*:nth-[3]:*:gap-x-1.75 *:
                transition-transform
                "
              >
                <div className="h-13">
                  <div className="">
                    <span>app.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="pl-0">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={php} alt="PHP language logo" />
                      <img src={Nextjs} alt="Nextjs framework logo" />
                    </div>
                  </div>
                  <div className="">
                    <span>193.127.236</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>staging.hooli.com</span>
                  </div>
                  <div className="">
                    <span>110</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={aws} alt="Amazon Web Services" />
                      <img
                        src={Kubernetes}
                        alt="Kubernetes, an open-source container orchestration system"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>45.182.184</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>ftp.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={aws} alt="Amazon Web Services" />
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                        className="pl-1"
                      />
                      <img
                        src={Kubernetes}
                        alt="Kubernetes, an open-source container orchestration system"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>196.88.248</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>dev.hooli.com</span>
                  </div>
                  <div className="">
                    <span>23</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                      />
                      <img
                        src={GoogleCloud}
                        alt="GoogleCloud, a suite of cloud computing services offered by Google"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>5.242.113</span>
                  </div>
                </div>

                <div className="h-13">
                  <div className="">
                    <span>api.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={fastly} alt="fastly company logo" />
                      <img src={Nextjs} alt="Nextjs framework logo" />
                    </div>
                  </div>
                  <div className="">
                    <span>238.147.26</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>breamhall.hooli.com</span>
                  </div>
                  <div className="">
                    <span>25</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={php} alt="PHP language logo" />
                      <img src={fastly} alt="fastly company logo" />
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>148.154.199</span>
                  </div>
                </div>
              </div>
              <div
                className="h-39 *:flex *:items-center *:text-sm mt-39
                     *:tracking-widest *:*:*:block *:*:*:h-full *:*:first:w-2/5 *:*:not-first:w-1/5
                     *:*:nth-[2]:pl-4  *:*:nth-[3]:pl-0 *:*:nth-[3]:*:gap-x-1.75 *:
                     transition-transform 
                     "
              >
                <div className="h-13">
                  <div className="">
                    <span>app.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="pl-0">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={php} alt="PHP language logo" />
                      <img src={Nextjs} alt="Nextjs framework logo" />
                    </div>
                  </div>
                  <div className="">
                    <span>193.127.236</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>staging.hooli.com</span>
                  </div>
                  <div className="">
                    <span>110</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={aws} alt="Amazon Web Services" />
                      <img
                        src={Kubernetes}
                        alt="Kubernetes, an open-source container orchestration system"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>45.182.184</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>ftp.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={aws} alt="Amazon Web Services" />
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                        className="pl-1"
                      />
                      <img
                        src={Kubernetes}
                        alt="Kubernetes, an open-source container orchestration system"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>196.88.248</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>dev.hooli.com</span>
                  </div>
                  <div className="">
                    <span>23</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                      />
                      <img
                        src={GoogleCloud}
                        alt="GoogleCloud, a suite of cloud computing services offered by Google"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>5.242.113</span>
                  </div>
                </div>

                <div className="h-13">
                  <div className="">
                    <span>api.hooli.com</span>
                  </div>
                  <div className="">
                    <span>21</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={fastly} alt="fastly company logo" />
                      <img src={Nextjs} alt="Nextjs framework logo" />
                    </div>
                  </div>
                  <div className="">
                    <span>238.147.26</span>
                  </div>
                </div>
                <div className="h-13">
                  <div className="">
                    <span>breamhall.hooli.com</span>
                  </div>
                  <div className="">
                    <span>25</span>
                  </div>
                  <div className="">
                    <div className="*:w-4" style={{ display: "flex" }}>
                      <img src={php} alt="PHP language logo" />
                      <img src={fastly} alt="fastly company logo" />
                      <img
                        src={Cloudflare}
                        alt="Cloudflare, IT service management company"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span>148.154.199</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default AttackServices