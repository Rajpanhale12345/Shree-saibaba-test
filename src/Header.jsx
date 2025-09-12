import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Button from '@mui/material/Button';

function Header() {
  return (
    <>
  
    <header className="header">
         <div className="social-icons">
            <a href="https://www.facebook.com/ShreeSaibabaHeartInstituteAndResearchCentre/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/shreesaibabahospital/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@shreesaibabaheartinstitute"><i className="fab fa-youtube"></i></a>
          </div>
      <p className="header-text"> <a href="tel:02532507001" style={{color : "#ff0000ff", fontSize:'15px'}}>Book an Appointment : 0253 2507001</a></p>
    </header>
    </>
  );
}

export default Header;
