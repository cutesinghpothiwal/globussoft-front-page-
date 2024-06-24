import React from "react";
import { TiTick } from "react-icons/ti";
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#434E62] to-[#7B5C5D] text-white p-12 pb-7   mt-6 text-center ">
      <div className="mb-8 flex flex-col md:flex-row   items-start w-full  text-left">
        <div className="info w-[70%]">
          <button className="bg-blue-500 font-bold text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm">
           CONTACT US
          </button>
          <h2 className="text-5xl mt-5 text-white w-[80%]">
            {" "}
            Free consultation - discover IT solutions for your business
          </h2>

          <p className="para py-4 my-3   w-[85%]">
            Unlock the full potential of your business with our free
            consultation. Our expert team will assess your IT needs, recommend
            tailored solutions, and chart a path to success. Book your
            consultation now and take the first step towards empowering your
            business with cutting-edge technology.
          </p>
          <div className="points pb-5 border-white border-opacity-10 border-b w-[80%]">
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span> Confirmation of appointment details</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span> Research and preparation by the IT services company</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span> Consultation to discuss technology solutions</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span> Needs assessment for tailored solutions</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span> Presentation of proposed solutions</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span>Project execution and ongoing support</span>
            </div>
            <div className="flex my-3 text-lg">
              <TiTick size={20} className="mr-3" />

              <span>Follow-up to evaluate effectiveness and satisfaction</span>
            </div>
          </div>

          <div className="address py-5">
            <div className="flex my-3 text-lg">
              <FaMessage size={26} className="mr-3 pt-2 bg-wh" />

              <span>support@globussoft.com</span>
            </div>

            <div className="flex my-3 text-lg">
              <IoCall size={20} className="mr-3" />

              <span>+91 8767115115</span>
            </div>
            <div className="flex my-3 text-lg">
              <IoIosPin size={20} className="mr-3" />

              <span>Nehru Nagar Bhilai Chhattisgarh</span>
            </div>
          </div>
        </div>

        <div className=" form  w-[35%] px-6 py-7 text-black bg-white h-full rounded-md flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            Schedule a free consultation
          </h2>

          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-500 block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="text-gray-500 block mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyEmail"
                className="text-gray-500 block mb-1"
              >
                Company Email
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="companyOrg" className="text-gray-500 block mb-1">
                Company/Organization
              </label>
              <input
                type="text"
                id="companyOrg"
                name="companyOrg"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

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
