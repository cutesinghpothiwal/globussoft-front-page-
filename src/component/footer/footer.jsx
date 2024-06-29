import React from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaGlobeAsia } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <FaGlobeAsia size={25} />
                        <span className="font-bold text-lg sm:text-xl md:text-2xl">Globussoft</span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">
                        Welcome to Bytewave! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">Mon - Fri: 9:00 - 19:00</p>
                    <p className="text-sm sm:text-base md:text-lg">Closed on Weekends</p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Company</h3>
                    <ul className='space-y-2 sm:space-y-4'>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">About Us</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Team</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Reviews</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Blog</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Services</h3>
                    <ul className='space-y-2 sm:space-y-4'>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Managed IT Services</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">IT Consulting</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Cloud Computing</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Cybersecurity Solutions</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Data Analytics</a></li>
                        <li><a href="/" className="hover-link text-sm sm:text-base md:text-lg">Software Development</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Newsletter</h3>
                    <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <FiMail className="h-6 w-6 text-gray-400" />
                        <input type="email" placeholder="Enter your email" className="bg-gray-200 text-black border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 flex-1" />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center">
                            <FiSend className="h-4 w-4" />
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
                        <a href="/" className="hover-link"><CiTwitter className="h-6 w-6 text-gray-400 hover:text-black transition duration-200" /></a>
                        <a href="/" className="hover-link"><CiLinkedin className="h-6 w-6 text-gray-400 hover:text-black transition duration-200" /></a>
                        <a href="/" className="hover-link"><CiFacebook className="h-6 w-6 text-gray-400 hover:text-black transition duration-200" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
