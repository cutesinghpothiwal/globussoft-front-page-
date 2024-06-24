import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#434E62] to-[#7B5C5D] text-white p-12 pb-7  rounded-2xl mt-6 text-center ">
      <div className="mb-8 flex flex-col md:flex-row border-b border-white border-opacity-10 items-start w-full  text-left">
        <div className="mb-8 md:mb-0 w-full md:w-[40%]">
          <button className="bg-blue-500 font-bold text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm">
            ABOUT US
          </button>
          <h1 className="text-5xl mt-5 mb-5">
            We Solve Technology Challenges.
          </h1>
        </div>
        <div className="w-full md:w-[60%] pl-0 md:pl-8 md:ml-5">
          <p className="text-base mb-4 font-semibold">
            Your IT Services Partner! We offer customized IT solutions, from
            managed services to cloud computing and cybersecurity. Empower your
            business with our expertise for growth and efficiency.
          </p>
          <a href="/" className="text-white font-bold underline cursor-pointer text-base hover:text-[#2a2930]">
            Join us today!
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row    justify-between ">
        <div className="text-center md:text-left border-l-0 md:border-l-2 pl-0 md:pl-4">
          <h2 className="text-5xl mb-2">20+</h2>
          <p className="text-base">Years experience</p>
        </div>
        <div className="text-center md:text-left border-l-0 md:border-l-2 pl-0 md:pl-4">
          <h2 className="text-5xl mb-2">18550+</h2>
          <p className="text-base">Happy customers</p>
        </div>
        <div className="text-center md:text-left border-l-0 md:border-l-2 pl-0 md:pl-4">
          <h2 className="text-5xl mb-2">3570+</h2>
          <p className="text-base">Projects completed</p>
        </div>
        <div className="text-center md:text-left border-l-0 md:border-l-2 pl-0 md:pl-4">
          <h2 className="text-5xl mb-2">15</h2>
          <p className="text-base">Awards achievement</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
