import React, { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map((link) => (
          <li key={link.id} className="nav-li">
            <a
              href={link.href}
              className="nav-li_a"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEFBE8] shadow-md shadow-[#D9AF4F] ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
            className="text-[#2966AC] font-bold text-xl hover:text-[#FECE21] transition-colors"
          >
            {/* <img src="assets/star.png" alt="logo" className="h-8 w-8 waving-hand" /> */}
            KYI
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#567c8d] hover:text-white focus-outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6"
            ></img>
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5" aria-label="Items">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
