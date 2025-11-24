import React from "react";
import "./Header.css";

function Header() {
  return (
    <>

      <header className="header">
        <div className="social-icons">
          <a href="https://www.facebook.com/ShreeSaibabaHeartInstituteAndResearchCentre/"><i style={{ color: "white" }} className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/shreesaibabahospital/"><i style={{ color: "white" }} className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@shreesaibabaheartinstitute"><i style={{ color: "white" }} className="fab fa-youtube"></i></a>
        </div>
        <p className="header-text"> <a href="tel:02533508000" style={{ color: "#ffffffff", fontSize: '15px' }}><button style={{ backgroundColor: "#E63946" }} className='appointment'>Book an Appointment : 02533508000</button></a></p>
      </header>
    </>
  );
}

export default Header;
