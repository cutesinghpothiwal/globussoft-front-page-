import React, { useEffect, useState } from 'react';
import icon from './icon.png';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && window.innerWidth >= 640) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white border-gray-200 ${isSticky ? 'navbar-sticky' : ''}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={icon} className="h-8" alt="Flowbite Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`hidden w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse w-full md:w-auto mt-4 md:mt-0 border border-gray-100 rounded-lg md:border-0 bg-white">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">About</a>
            </li>
            <li>
              <a href="/services" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Services</a>
            </li>
            <li>
              <a href="/pricing" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Pricing</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Contact</a>
            </li>
            <li className="flex items-center space-x-2 md:ml-auto">
              <input type="text" placeholder="Search..." className="px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-gray-400" />
              <FaSearch size={20} className="text-gray-700" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
