import React from "react";
import { FaReact } from "react-icons/fa";
import './marquee.css';

function MarqueeText() {
  return (
    <div className="marquee  my-[60px]">
      <div className="marquee-inner">
        <div className="marquee-item">
          <FaReact className="icon" /> <span>REQUEST IT CONSULTATION</span> <FaReact className="icon" />
        </div>
        <div className="marquee-item">
          <FaReact className="icon" /> <span>EXPERIENCE SEAMLESS IT SOLUTIONS</span> <FaReact className="icon" />
        </div>
        <div className="marquee-item">
          <FaReact className="icon" /> <span>REQUEST IT CONSULTATION</span> <FaReact className="icon" />
        </div>
        <div className="marquee-item">
          <FaReact className="icon" /> <span>EXPERIENCE SEAMLESS IT SOLUTIONS</span> <FaReact className="icon" />
        </div>
      </div>
    </div>
  );
}

export default MarqueeText;
