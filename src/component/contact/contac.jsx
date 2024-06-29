import React from "react";
import { TiTick } from "react-icons/ti";
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#434E62] to-[#7B5C5D] text-white p-8 sm:p-12 pb-7 mt-6 text-center">
      <div className="mb-8 flex flex-col md:flex-row items-start w-full text-left">
        <div className="info w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <button className="bg-blue-500 font-bold text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm">
            CONTACT US
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-5xl mt-5 text-white">
            Free consultation - discover IT solutions for your business
          </h2>
          <p className="text-sm sm:text-base md:text-lg py-4 my-3">
            Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.
          </p>
          <div className="points pb-5 border-white border-opacity-10 border-b">
            {[
              "Confirmation of appointment details",
              "Research and preparation by the IT services company",
              "Consultation to discuss technology solutions",
              "Needs assessment for tailored solutions",
              "Presentation of proposed solutions",
              "Project execution and ongoing support",
              "Follow-up to evaluate effectiveness and satisfaction",
            ].map((point, index) => (
              <div className="flex my-2 sm:my-3 text-sm sm:text-lg" key={index}>
                <TiTick size={20} className="mr-3" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="address py-5">
            <div className="flex my-2 sm:my-3 text-sm sm:text-lg">
              <FaMessage size={26} className="mr-3" />
              <span>support@globussoft.com</span>
            </div>
            <div className="flex my-2 sm:my-3 text-sm sm:text-lg">
              <IoCall size={20} className="mr-3" />
              <span>+91 8767115115</span>
            </div>
            <div className="flex my-2 sm:my-3 text-sm sm:text-lg">
              <IoIosPin size={20} className="mr-3" />
              <span>Nehru Nagar Bhilai Chhattisgarh</span>
            </div>
          </div>
        </div>

        <div className="form w-full md:w-1/3 px-6 py-7 text-black bg-white rounded-lg flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Schedule a free consultation
          </h2>
          <form className="w-full">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "phone", label: "Phone", type: "text" },
              { id: "companyEmail", label: "Company Email", type: "email" },
              { id: "companyOrg", label: "Company/Organization", type: "text" },
            ].map((input) => (
              <div className="mb-4" key={input.id}>
                <label htmlFor={input.id} className="text-gray-500 block mb-1">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            ))}
            <div className="mb-4">
              <label htmlFor="message" className="text-gray-500 block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
