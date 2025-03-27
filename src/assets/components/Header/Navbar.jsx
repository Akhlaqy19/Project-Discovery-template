import React, { useState } from "react";
import BtnSales from "./../BtnSales";
import Menu from './Menu';
import { FaGithub } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import confetti from "canvas-confetti";
import { usersRated } from "../../datas";
import BurgerMenu from "/icons/menu/burger.svg";
import CloseMenu from "/icons/menu/close.svg";


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHover = () => {
    confetti({
      particleCount: 400,
      spread: 40,
      origin: { y: 0.075, x: 0.18 },
      colors: ["#ffff00", "#ff0000"], // رنگ‌های دلخواه
      scalar: 0.3,
      startVelocity: 20,
      gravity: 0.8,
      ticks: 90, // تعداد فریم‌های انیمیشن (تقریباً 0.5 ثانیه در 60fps)
    });
  };

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* wrapper */}

      <nav className="mx-auto">
        {/* navbar */}
        <div
          className="custom-container top-0 left-0 right-0 
        flex justify-between items-center mx-auto
        px-8 py-4 leading-5 bg-midnight/80 backdrop-blur-lg text-white lg:py-5
        "
        >
          {/* left / logo */}
          <div className="relative z-50 flex items-center gap-8 lg:flex-1">
            {/* logo image */}

            <a className="-m-1.5 p-1.5" href="/">
              <img
                src="/img/logo.png"
                alt="ProjectDiscovery Logo"
                className="w-40 h-6 text-transparent"
              />
            </a>

            {/* github score */}

            <div className="hidden lg:flex">
              <a
                href="#"
                onMouseEnter={handleHover}
                className="leading-5 font-normal text-white hover:text-gray cursor-pointer sm:text-gray sm:hover:text-white max-lg:hidden group
                flex items-center gap-2 text-sm *:transition *:delay-75 *:duration-150 *:ease-in-out"
              >
                <FaGithub className="scale-95 text-lg group-hover:text-white" />
                <span className="pl-0.5 group-hover:text-white">
                  {usersRated.toFixed(1)}k
                </span>
                {/* star icon */}
                <TiStar className="scale-90 -translate-x-0.5 text-sm group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* mid / navbar links */}

          <div className="">
            <ul
              className="hidden lg:flex lg:gap-x-12 justify-between text-sm nav-effect **:capitalize *:*:block *:*:leading-5 *:*:font-normal 
            *:*:text-white *:*:hover:text-gray"
            >
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="https://docs.projectdiscovery.io/cloud/introduction">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://projectdiscovery.io/pricing">Pricing</a>
              </li>
            </ul>
          </div>

          {/* right / sign in */}
          <div className="z-50 flex justify-end items-center w-full gap-4 sm:gap-8 lg:flex-1 text-sm">
            {/* sign in */}
            <div className="hidden lg:flex nav-effect">
              <a
                href="https://cloud.projectdiscovery.io/sign-in"
                className="block text-sm leading-5 font-normal text-white hover:text-gray cursor-pointer"
              >
                Sign in
              </a>
            </div>

            <BtnSales height={""} />
            <button
              type="button"
              onClick={handleToggleMenu}
              className="lg:hidden"
            >
              <img
                src={isMenuOpen ? CloseMenu : BurgerMenu}
                alt="Menu Icon in Mobile Screen"
              />
            </button>
          </div>
          {isMenuOpen && <Menu />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
