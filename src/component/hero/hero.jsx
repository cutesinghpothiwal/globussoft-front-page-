import React from "react";
import img from "./slider.jpeg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="w-full mx-auto py-8 mt-6 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2 md:mr-8 flex flex-col mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Expanding Possibilities For The Next Generation
          </h1>
          <p className="text-base md:text-lg mb-6">
            We provide custom software solutions for any industry. Creating
            high-value software and technology for your business.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Get A Free Assessment
            </button>
            <button className="bg-blue-100 hover:bg-blue-200 text-gray-700 py-2 px-4 rounded">
              Contact
            </button>
          </div>
        </div>
        <div className="md:w-1/2 h-auto relative">
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${img})`, opacity: '0.8' }}></div>
          <img
            src={img}
            alt="Team working"
            className="rounded-lg shadow-lg w-full object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
