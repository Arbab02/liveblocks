'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.style.backgroundColor = "#050816"; // Change navbar background
        navRef.current.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Optional shadow
      } else {
        navRef.current.style.backgroundColor = "transparent"; // Reset background
        navRef.current.style.boxShadow = "none"; // Reset shadow
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="bg-[transparent] py-4 fixed w-full z-50 " ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
             <p className='text-indigo-500 text-2xl font-bold'>FMS</p>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {/* <Link href="/" className="text-indigo-900 font-normal text-lg hover:text-pink-700">Home</Link> */}
            <Link href="/Dashboard" className="text-indigo-900 font-normal text-lg hover:text-pink-700">Dashboard</Link>
            <Link href="/FinanceForm" className="text-indigo-900 font-normal text-lg hover:text-pink-700">FinanceForm</Link>
            
          </div>

          

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#050816] focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`menu bg-[#050816] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-500' : 'max-h-0'} md:hidden `}>
        {/* <Link href="/" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Home</Link> */}
        <Link href="/FinanceForm" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">FinanceForm</Link>
        <Link href="/Dashboard" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Dashboard</Link>
       
       
      </div>
    </nav>
  );
};

export default Navbar;