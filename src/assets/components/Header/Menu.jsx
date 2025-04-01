/**
 * Menu Component
 * 
 * A mobile navigation menu component with animated transitions.
 * Features:
 * - Animated menu items using Framer Motion
 * - Backdrop overlay
 * - Responsive design
 * - Staggered animation effects
 * - Dynamic data fetching from API
 * 
 * @component
 * @example
 * <Menu />
 */

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Menu() {
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/navLinksData');
        setNavLinks(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch navigation links');
        setLoading(false);
        console.error('Error fetching nav links:', err);
      }
    };

    fetchNavLinks();
  }, []);

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3,
        type: "spring",
      },
    },
  };

  //  const childVariants = {
  //    hidden: {
  //      opacity: 0,
  //      y: "6%",
  //    },
  //    visible: {
  //      opacity: 1,
  //      y: 0
  //    },
  //  };

  if (loading) {
    return (
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
        <div className="fixed right-0 top-16 z-10 w-full bg-midnight">
          <div className="custom-container flow-root p-4 px-6 nav-effect">
            <div className="flex items-center justify-center py-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
        <div className="fixed right-0 top-16 z-10 w-full bg-midnight">
          <div className="custom-container flow-root p-4 px-6 nav-effect">
            <div className="py-6 text-center text-red-500">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
        <div className="fixed right-0 top-16 z-10 w-full bg-midnight">
          <div className="custom-container flow-root p-4 px-6 nav-effect">
            <motion.div
              variants={wrapperVariants}
              whileInView={wrapperVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2 py-6 opacity-[1]"
            >
              {navLinks.map((item) => (
                <div key={item.id}>
                  <MenuItem {...item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * MenuItem Component
 * 
 * A subcomponent that renders individual menu items with animations.
 * Features:
 * - Individual item animations
 * - Hover effects
 * - Customizable routes
 * 
 * @param {Object} props
 * @param {number} props.id - Unique identifier for animation timing
 * @param {string} props.route - Navigation route or URL
 * @param {string} props.navItem - Display text for the menu item
 * 
 * @example
 * <MenuItem
 *   id={1}
 *   route="/features"
 *   navItem="Features"
 * />
 */

const MenuItem = ({id, route, navItem}) => {
    return (
      <>
        <motion.div
          variants={{
            hidden: {
              y: `${8*id}%`,
              opacity: 0
            },
            visible: {
              y: 0,
              opacity: 1
            }
          }}
          className="opacity-[1] transform-none"
        >
          <a
            className="block text-sm leading-5 font-normal text-white hover:text-gray cursor-pointer"
            href={route}
          >
            {navItem}
          </a>
        </motion.div>
      </>
    );
}