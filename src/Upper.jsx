import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Upper.css";

const Upper = ({ text }) => {
  const scrollToDoctors = () => {
    const doctorsSection = document.querySelector(".doctors-container");
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: "smooth" });
    }
  };  

  return (
    <div className="upper-container">
      {/* Replace with your actual image */}
    

      {/* Overlay text */}
      <div className="upper-overlay">
        <h1>{text}</h1>
      </div>
<br /><br /><br /><br /><br /><br /><br />
      {/* Down Arrow */}
      <div className="down-arrow" onClick={scrollToDoctors}>
        <FaChevronDown />
      </div>
    </div>
  );
};
export default Upper;
