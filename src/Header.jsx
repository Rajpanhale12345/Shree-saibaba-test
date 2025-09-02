import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Button from '@mui/material/Button';

function Header() {
  return (
    <header className="header">
      <p className="header-text"> <a href="tel:02532507001" style={{color : "#ff0000ff", fontSize:'15px'}}>Book an Appointment : 0253 2507001</a></p>

    </header>
  );
}

export default Header;
