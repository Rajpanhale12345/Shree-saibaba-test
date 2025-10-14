import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="social-icons" aria-label="Follow us">
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/ShreeSaibabaHeartInstituteAndResearchCentre/"
          rel="noopener nofollow"
          target="_blank"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/shreesaibabahospital/"
          rel="noopener nofollow"
          target="_blank"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          aria-label="YouTube"
          href="https://www.youtube.com/@shreesaibabaheartinstitute"
          rel="noopener nofollow"
          target="_blank"
        >
          <i className="fab fa-youtube" aria-hidden="true"></i>
        </a>
      </div>

      <p className="header-text">
        <a href="tel:+912532507001" style={{ color: "#ff0000ff", fontSize: "15px" }}>
          Book an Appointment : 0253 2507001
        </a>
      </p>
    </header>
  );
}

export default Header;
