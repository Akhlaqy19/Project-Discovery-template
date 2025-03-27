import React from 'react'
import { navLinksData } from '../../datas';
import { easeIn, motion } from 'framer-motion'; 

export default function Menu() {

   const wrapperVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         duration: 1.5,
         staggerChildren: 0.3,
         type: "spring",
        //  easeIn: "true"
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
              {navLinksData.map((item) => (
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