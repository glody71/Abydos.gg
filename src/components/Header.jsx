import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from '../assets/BAlogo.png'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-10 transition-all duration-300 flex justify-between md:justify-around bg-slate-900 p-4 px-8 opacity-90 items-center">
      {/*logo*/}
      <Link to={'/'}>
        <h1 className="font-semibold text-xl text-white">
          <span className="text-blue-500">A</span>bydos.gg
        </h1>
      </Link>

      {/* navbar */}
      <div className="flex justify-between gap-x-20">
        {/* navbar-desktop */}
        <Navbar
          containerStyles={
            "hidden md:flex gap-x-5 xl:gap-x-8 medium-15 items-center"
          }
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-10 p-12 bg-slate-800 rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        <div className="flex justify-between sm:gap-x-8 gap-x-3">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer text-2xl text-white"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer text-2xl text-white"
            />
          )}
        </div>
      </div>
      <div className="md:block hidden">
        <img src={logo} alt="BAlogo" className="w-24" />
      </div>
    </header>
  );
};

export default Header;
