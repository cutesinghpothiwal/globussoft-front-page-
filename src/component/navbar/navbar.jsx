import React, { useEffect, useState } from 'react';
import icon from './icon.png';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'navbar-sticky' : ''}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <a href="/" className="text-black text-xl font-bold">
              <img src={icon} className="h-[60px] w-auto" alt="Company Logo" />
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:justify-end">
            <div className="flex space-x-4 items-center">
              <a href="/services" className="text-gray-700 font-bold hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-bold">
                Home
              </a>
              <a href="/portfolio" className="text-gray-700  hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-bold">
                Portfolio
              </a>
              <a href="/about" className="text-gray-700  hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-bold">
                About
              </a>
              <a href="/contact" className="text-gray-700  hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-bold">
                Contact
              </a>
              <div className="search-container">
                <input type="text" placeholder="Search..." />
                <FaSearch size={20} className='font-bold text-black' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/services" className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a href="/portfolio" className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Portfolio
          </a>
          <a href="/about" className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
