import React from "react";
import { PiMedal } from "react-icons/pi";
import { GrCurrency } from "react-icons/gr";
import { FaFingerprint } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

function Qualities() {
  return (
    <div className="qualities-container my-[90px]  pl-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="expertise flex flex-col ">
          <div className="-ml-2 my-4">
            <PiMedal size={35} />
          </div>

          <h2 className="text-xl mb-1 font-semibold">Expertise</h2>
          <p className="text-lg text-gray-500 ">
            {" "}
            Access to specialized knowledge and technology expertise for
            effective IT solutions.
          </p>
        </div>

        <div className="expertise flex flex-col ">
          <div className=" my-4">
            <GrCurrency size={30} />
          </div>

          <h2 className="text-xl font-semibold mb-1">Cost Savings</h2>
          <p className="text-lg text-gray-500 ">
            {" "}
            Avoiding expenses associated with maintaining an in-house IT
            department.
          </p>
        </div>

        <div className="expertise flex flex-col ">
          <div className=" my-4">
          <FaFingerprint size={30} />
          </div>

          <h2 className="text-xl mb-1 font-semibold">Enhanced Security</h2>
          <p className="text-lg text-gray-500 ">
            {" "}
            Robust measures to protect against cyber threats and ensure data
            security.
          </p>
        </div>

        <div className="expertise flex flex-col ">
          <div className=" my-4">
          <BsGraphUpArrow  size={30}/>
          </div>

          <h2 className="text-xl mb-1 font-semibold">Expertise</h2>
          <p className="text-lg text-gray-500 ">
            {" "}
            Streamlined operations, automation, and proactive monitoring for
            improved productivity.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
