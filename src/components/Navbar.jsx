import React, { useState, useEffect, useRef } from 'react';
import { BiSun } from 'react-icons/bi';
import { FaDownload,  FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for dark mode preference
    if (typeof window !== "undefined") {
      return localStorage.getItem('darkMode') === 'true' || false;
    }
    return false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Store preference in localStorage
      return newMode;
    });
  };

  // Apply dark mode to the document when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-red-700 font-bold' : 'text-red-400 font-bold hover:text-red-700'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'text-red-700 font-bold' : 'text-red-400 font-bold hover:text-red-700'
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink     
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-red-700 font-bold' : 'text-red-400 font-bold hover:text-red-700'
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-red-700 font-bold' : 'text-red-400 font-bold hover:text-red-700'
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 py-2 z-50 flex w-full md:w-11/12 mx-auto shadow-md bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="w-28 text-xl text-center pt-2 h-10 text-red-400 bg-black font-bold rounded-lg">Farhana</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-3">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-yellow-300">
          {darkMode ? <BiSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Resume Button */}
        <a className="btn bg-red-400">Resume <FaDownload size={16} /></a>
      </div>
    </div>
  );
};

export default Navbar;
