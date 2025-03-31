/**
 * CommunityPowered Component
 * 
 * A section component that displays community-powered exploit information with pagination.
 * Features:
 * - Framer Motion animations
 * - Pagination system
 * - Hover effects
 * - Dynamic content loading
 * - Snake border effects
 * - Responsive design
 * 
 * @component
 * @example
 * <CommunityPowered />
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExploitNotif from "./ExploitNotif";
import SnakeBorder from "./../SnakeBorder";
import { Pagination, PaginationItem } from "@mui/material";
import axios from 'axios';

export default function CommunityPowered() {
  // All useState hooks must be at the top
  const [communityPoweredInfo, setCommunityPoweredInfo] = useState([]);
  const [communityPoweredFidsInfo, setCommunityPoweredFidsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoResponse, fidsResponse] = await Promise.all([
          axios.get('http://localhost:3001/communityPoweredInfo'),
          axios.get('http://localhost:3001/communityPoweredFidsInfo')
        ]);
        setCommunityPoweredInfo(infoResponse.data);
        setCommunityPoweredFidsInfo(fidsResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch community powered data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!communityPoweredInfo.length || !communityPoweredFidsInfo.length) return null;

  const titleVariants = {
    hidden: { opacity: 0, y: "30%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: "20%"
    },
    visible: {
      opacity: 1,
      y: 0
    },
  };

  const notifsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const notifVariants = {
    hidden: {
      opacity: 0,
      y: "15%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handlePageChange = (event, value) => setPage(value);

  const PaginationButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "50px",
    margin: "0",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    border: "1px solid rgb(34, 34, 34)",
    backgroundColor: "rgb(17, 17, 18)",
    "&:hover": {
      backgroundColor: "rgb(9, 9, 11)",
    },
    paddingInline: "16px",
    paddingBlock: "12px",
  };

  return (
    <>
      <section className="custom-container py-20">
        <div className="relative z-40 flex w-full flex-col-reverse gap-10 px-2 md:px-0 lg:flex-row">
          <div className="relative flex h-auto w-full flex-col justify-center lg:flex lg:w-2/5 lg:pl-8 xl:w-2/5 xl:pl-0 2xl:min-h-170 2xl:w-2/5">
            <div
              className="relative h-auto w-full overflow-hidden rounded-xl xl:h-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative size-full">
                <div
                  className={`absolute left-0 top-0 z-30 size-full bg-midnight/60 duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div
                  className={`absolute left-[38%] top-[44%] z-40  duration-500 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12.5"
                  }`}
                >
                  <a
                    href={`https://cloud.projectdiscovery.io/public/CVE-${
                      communityPoweredInfo[page - 1].mainFidCode
                    }`}
                    className="btn-monitor relative inline-flex items-center gap-x-1.5 overflow-hidden rounded-md px-4 py-2 text-sm tracking-xs shadow-sm border border-sub-yellow text-sub-yellow font-medium bg-sub-yellow/20 hover:text-midnight hover:bg-sub-yellow backdrop-blur-sm"
                    target="_self"
                  >
                    View template
                    <div className="rounded-md">
                      <SnakeBorder
                        specialStyles="
                      after:w-10 
                      after:[background:linear-gradient(to_left,#ffffff,#EEF35F,transparent)] 
                      after:[offset-path:rect(0_auto_auto_0_round_40px)]"
                      />
                    </div>
                  </a>
                </div>

                <motion.img
                  initial={{ opacity: 0, y: "4%" }}
                  animate={{ opacity: 1, y: 0 }}
                  src={`/img/${communityPoweredInfo[page - 1].img}`}
                  alt="hero"
                  className="relative z-20 h-auto w-full text-transparent lg:mt-auto xl:mt-0 xl:h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center px-1 lg:w-3/5 lg:pl-4 lg:pr-10 xl:w-2/5 xl:pr-0">
            <motion.div
              variants={titleVariants}
              whileHover={titleVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 items-start text-left mb-8 mt-16 *:transform-none"
            >
              <motion.div
                className="my-5"
                variants={textVariants}
                whileHover={textVariants}
              >
                <p className="text-xs font-light uppercase tracking-3 text-sub-yellow">
                  COMMUNITY POWERED
                </p>
              </motion.div>
              <motion.div variants={textVariants} whileHover={textVariants}>
                <h3 className="section-gradient-title xl:max-w-139">
                  The fastest exploits feed on the Internet
                </h3>
              </motion.div>
              <motion.div variants={textVariants} whileHover={textVariants}>
                <p className="text-left max-w-140.5 text-base xl:text-lg text-gray font-light tracking-xs w-full">
                  ProjectDiscovery is powered by our Nuclei open source project.
                  A global security community that streamlines exploits in
                  real-time.
                  <strong className="font-semibold">
                    <span className="inline-block -translate-x-0.25">
                      Nuclei
                    </span>
                    is used by Fortune 500 organizations, security firms, and
                    government-led agencies&nbsp;
                  </strong>
                  to tackle the emerging exploitable vulnerabilities.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex min-h-72 w-full"
              variants={notifsVariants}
              whileHover={notifsVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative z-30 flex w-full flex-col gap-4">
                <motion.div
                  variants={notifVariants}
                  whileHover={notifVariants}
                  className="bg-base-2 z-30 w-full rounded-xl bg-custom-gradient px-5 py-2 transform-none"
                >
                  <p className="font-light text-sm md:text-base w-full leading-6 tracking-normal text-white">
                    {communityPoweredInfo[page - 1].mainFid}
                  </p>
                  <p className="font-light text-sm text-gray w-full leading-5 tracking-normal">
                    CVE-{communityPoweredInfo[page - 1].mainFidCode}
                  </p>
                </motion.div>
                {communityPoweredFidsInfo.map((data, i) => (
                  <motion.div
                    variants={notifVariants}
                    whileHover={notifVariants}
                    key={data.id}
                  >
                    <ExploitNotif
                      {...data}
                      fidsData={communityPoweredInfo[page - 1].fids[i]}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute left-0 top-0 z-20 size-full">
          <div className="custom-container-sm relative z-40 mx-auto size-full px-3 py-2 lg:px-8">
            <div className="relative overflow-hidden bg-base size-full rounded-2xl border">
              <SnakeBorder
                specialStyles="
                after:w-75
                after:[background:linear-gradient(to_left,#111112,#444444,transparent)] 
                after:[offset-path:rect(0_auto_auto_0_round_300px)]
                "
              />
            </div>

            <div className="absolute -bottom-5 right-12 z-30 w-auto md:right-24">
              <div className="flex items-center gap-0">
                <Pagination
                  count={3} // تعداد کل صفحات
                  page={page} // صفحه فعلی
                  onChange={handlePageChange} // تغییر صفحه
                  hidePrevButton={true}
                  hideNextButton={true}
                  renderItem={(item) => {
                    const isFirst = item.page === 1;
                    const isLast = item.page === 3;
                    return (
                      <PaginationItem
                        {...item}
                        sx={{
                          ...PaginationButtonStyle,
                          borderTopLeftRadius: isFirst ? "12px" : 0,
                          borderBottomLeftRadius: isFirst ? "12px" : 0,
                          borderTopRightRadius: isLast ? "12px" : 0,
                          borderBottomRightRadius: isLast ? "12px" : 0,
                          "sm:": {
                            backgroundColor: isFirst && "#09090b",
                          },
                        }}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
