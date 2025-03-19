import React from 'react'
import FooterList from "./FooterList";
import CopyRight from "./CopyRight";
import { footerListInfo } from '../../datas';

export default function FooterMain() {

  return (
    <>
      <div className="custom-container pb-7 pt-20">
        <div className="pb-6 xl:grid xl:grid-cols-5 xl:gap-7">
          <div className="">
            <img
              src="/img/footer-logo.png"
              alt="The American Institute of Certified Public Accountants - (AICPA)"
              className="size-20"
            />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <PairOfLists itemsInfo={footerListInfo[0]} />
            <PairOfLists itemsInfo={footerListInfo[1]} />
          </div>

          <div className="mt-20 w-full lg:mt-10 xl:mt-0">
            <div className="">
              <h6 className="text-sub-yellow text-xs font-normal uppercase tracking-3">
                Newsletter
              </h6>
              <p className="font-light tracking-xs text-sm md:text-base leading-base mb-3 mt-2 text-white">
                Stay up to date with everything ProjectDiscovery.
              </p>
            </div>
            <form className="mt-8 flex flex-col gap-3 sm:flex sm:max-w-md lg:mt-0">
              <input
                id="email"
                autocomplete="email"
                required=""
                className="input autofill:bg-base w-full min-w-0 autofill:text-white
               sm:border-gray/40"
                placeholder="Enter your email"
                type="email"
                value=""
                name="email"
              />
              <div className="w-full">
                <button
                  type="submit"
                  class="w-full rounded-md border border-sub-yellow bg-sub-yellow/10 
                  p-2 text-sub-yellow hover:bg-sub-yellow/20"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <CopyRight/>
      </div>
    </>
  );
}

const PairOfLists = ({itemsInfo}) => {
  return (
    <>
      <div className="footer-lists-section *:nth-[2]:mt-10 *:nth-[2]:md:mt-0">
        <FooterList {...itemsInfo[0]} />
        <FooterList {...itemsInfo[1]} />
      </div>
    </>
  );
}