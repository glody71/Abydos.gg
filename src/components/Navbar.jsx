import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // Initialize state with current pathname

  useEffect(() => {
    setActiveLink(location.pathname); // Update state when the pathname changes
  }, [location.pathname]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className={`${containerStyles}`}>
      <Link 
        to="/"
        onClick={() => handleClick("/")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          activeLink === "/"
            ? "bg-slate-950 text-white"
            : "text-white hover:bg-slate-950"
        }`}
      >
        Students
      </Link>

      <Link
        to="/about"
        onClick={() => handleClick("/about")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          activeLink === "/about"
            ? "bg-slate-950 text-white"
            : "text-white hover:bg-slate-950"
        }`}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
