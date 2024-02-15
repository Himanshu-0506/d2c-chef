import React from "react";
import { useState } from "react";
import img from "../assets/img.jpg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full bg-slate-900 py-4 px-6 flex items-center justify-between border-b border-gray-700">
      <a href="/" className="flex items-center mr-34">
        <img src={img} alt="D2C Chef" className="w-16 h-16 rounded-full mr-4" />
        <h1 className="text-lg font-bold text-white">D2C CHEF</h1>
      </a>
      <ul className="hidden sm:flex items-center space-x-4">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="hover:text-gray-400">
            <a
              href={`${nav.id}`}
              className="text-white px-4 py-2 rounded-md font-medium"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden">
        <button
          onClick={handleMenuToggle}
          className="bg-slate-800 p-2 rounded-full text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {toggle ? (
            <img src={close} alt="Close Menu" className="w-6 h-6" />
          ) : (
            <img src={menu} alt="Open Menu" className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } fixed top-0 right-0 bg-slate-800 mt-2 rounded-lg shadow-md w-48 py-2 px-4 z-50`}
      >
        <button
          onClick={handleMenuToggle}
          className="absolute top-4 right-4 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img src={close} alt="Close Menu" className="w-6 h-6" />
        </button>
        <ul className="space-y-4">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="hover:bg-slate-700">
              <a
                href={`${nav.id}`}
                className="block text-white px-4 py-2 rounded-md font-medium"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
