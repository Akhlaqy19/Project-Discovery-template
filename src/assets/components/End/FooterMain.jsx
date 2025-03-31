/**
 * FooterMain Component
 * 
 * A comprehensive footer component that includes newsletter subscription, company links, and copyright information.
 * Features:
 * - Newsletter subscription form with loading state
 * - Company logo display
 * - Dynamic footer lists
 * - Responsive grid layout
 * - Loading and submission states
 * 
 * @component
 * @example
 * <FooterMain />
 */

import React, { useState, useEffect } from "react";
import FooterList from "./FooterList";
import CopyRight from "./CopyRight";
import axios from 'axios';

export default function FooterMain() {
  const [footerListInfo, setFooterListInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/footerListInfo');
        setFooterListInfo(response.data);
      } catch (err) {
        setError('Failed to fetch footer data');
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const subscribeUser = async (email) => {
    try {
      const response = await axios.post('http://localhost:3001/newsletterSubscribers', {
        email,
        subscribedAt: new Date().toISOString()
      });
      return response.data;
    } catch (err) {
      throw new Error('Failed to subscribe to newsletter');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const email = e.target.email.value;
    try {
      await subscribeUser(email);
      setIsSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

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
            {footerListInfo.map((items, index) => (
              <PairOfLists key={index} itemsInfo={items} />
            ))}
          </div>

          <div className="mt-20 w-full lg:mt-10 xl:mt-0">
            <div className="">
              <h6 className="text-sub-yellow text-xs font-normal uppercase tracking-3">
                Newsletter
              </h6>
              <p className="font-light tracking-xs text-sm md:text-base mb-3 mt-2 text-white">
                Stay up to date with everything ProjectDiscovery.
              </p>
            </div>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex sm:max-w-md lg:mt-0"
              onSubmit={handleSubmit}
            >
              <input
                id="email"
                autoComplete="email"
                required
                className="input autofill:bg-base w-full min-w-0 autofill:text-white
               sm:border-gray/40 placeholder:indent-3"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full rounded-md border border-sub-yellow bg-sub-yellow/10 
                  p-2 text-sub-yellow hover:bg-sub-yellow/20"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {isSubmitted && (
                <p className="text-white" role="status" aria-live="polite">
                  Successfully subscribed to newsletter!
                </p>
              )}
            </form>
          </div>
        </div>

        <CopyRight />
      </div>
    </>
  );
}

/**
 * PairOfLists Component
 * 
 * A helper component that renders two FooterList components side by side.
 * Features:
 * - Responsive layout
 * - Dynamic spacing
 * - Mobile-first design
 * 
 * @param {Object} props
 * @param {Object} props.itemsInfo - Array containing two FooterList configurations
 * 
 * @component
 * @example
 * <PairOfLists itemsInfo={footerListInfo[0]} />
 */
const PairOfLists = ({ itemsInfo }) => {
  return (
    <>
      <div className="footer-lists-section *:nth-[2]:mt-10 *:nth-[2]:md:mt-0">
        <FooterList {...itemsInfo[0]} />
        <FooterList {...itemsInfo[1]} />
      </div>
    </>
  );
};
