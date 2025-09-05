import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Images/Shreesaibabalogo.png';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
 <nav className="navbar">
        <Link to="/"> <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div></Link>

      {/* Hamburger Icon */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? "navbar__links open" : "navbar__links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>    
        <li><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
        <li><Link to="/departments" onClick={() => setIsOpen(false)}>Departments</Link></li>
        <li><Link to="/medical" onClick={() => setIsOpen(false)}>Preventive Health Packages</Link></li>
        <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
        <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>

        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
