import React from 'react'
import BtnSales from './../BtnSales';
import {FaGithub } from 'react-icons/fa'
import { TiStar } from "react-icons/ti";
import confetti from "canvas-confetti"

function Navbar() {
 const handleHover = () => {
    confetti({
      particleCount: 300,
      spread: 40,
      origin: 
        { y: 0.075, 
          x : 0.18 },
      colors: ['#ffff00', '#ff0000'], // رنگ‌های دلخواه
      scalar: 0.3,
      startVelocity: 20,
      gravity: 0.8,
      ticks: 90,  // تعداد فریم‌های انیمیشن (تقریباً 0.5 ثانیه در 60fps)
    });
  };
  
  return (
    <>
      {/* wrapper */}
      <nav className="">
        {/* navbar */}
        <div
          className="fixed z-50 top-0 left-0 right-0 
        flex justify-between items-center mx-auto max-w-384
        px-8 py-5 leading-5 bg-black text-white backdrop-blur-lg
        "
        >
          {/* left / logo */}
          <div className="flex justify-between gap-8">
            {/* logo image */}
            <div className="">
              <img src="/img/logo.png" alt="" className="cursor-pointer" />
            </div>

            {/* github score */}
            <a
              href="#"
              onMouseEnter={handleHover}
              className="max-lg:hidden group
             flex items-center gap-2 text-sm text-white/60 
             *:transition *:delay-75 *:duration-150 *:ease-in-out"
            >
              <FaGithub className="text-lg group-hover:text-white" />
              <span className="pl-0.5 group-hover:text-white">101.2k</span>
              {/* star icon */}
              <TiStar className="-translate-x-0.5 text-sm group-hover:text-white" />
            </a>
          </div>

          {/* mid / navbar links */}
          <div className="max-lg:hidden mr-18">
            <ul className="flex justify-between gap-x-12 text-sm nav-effect *:hover:text-white/45">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* right / sign in */}
          <div className="flex justify-between items-center gap-x-8 text-sm">
            {/* sign in */}
            <div className="max-lg:hidden nav-effect *:hover:text-white/45">
              <a href="#">Sign In</a>
            </div>

            <BtnSales />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar