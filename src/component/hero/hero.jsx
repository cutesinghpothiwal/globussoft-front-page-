import React from "react";
import img from "./slider.jpeg";
import './hero.css'



const Hero = () => {
  return (
    <div className="w-full mx-auto  py-8 mt-[30px] ">
      <div className="flex flex-col md:flex-row  items-start h-full">
        <div className="md:w-[35%]   mr-[60px]  flex flex-col   h-full">
          <h1 className="text-[50px]  font-bold leading-tight mb-4">
            Expanding Possibilities For The Next Generation
          </h1>
          <p className="text-lg mb-8">
            We provide custom software solutions for any industry. Creating
            high-value software and technology for your business.
          </p>
          <div className="flex space-x-4">
            <button className=" bg-blue-500 hover:bg-[#1533B4] text-white py-2 px-4 rounded">
              Get A Free Assessment
            </button>
            <button className="bg-blue-100 hover:bg-[#1533B4] hover:text-white text-gray-700 py-2 px-4 rounded">
              Contact
            </button>
          </div>
        </div>
        <div className="md:w-[65%] h-full">
          <img
            src={img}
            alt="Team working"
            className="rounded-lg shadow-lg h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
