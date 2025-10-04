import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';
import logo from './Images/Shreesaibabalogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(o => !o);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
        <img src={logo} alt="Shree Saibaba Hospital" />
      </NavLink>

      {/* Desktop links */}
      <ul className="navbar__links navbar__links--desktop">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/doctors">Doctors</NavLink></li>
        <li><NavLink to="/departments">Departments</NavLink></li>
        <li><NavLink to="/medical">Packages</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        {/* <li><NavLink to="/facilities">Facilities</NavLink></li> */}
        <li><NavLink to="/tieups">Tie-ups</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Hamburger */}
      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={toggleMenu}
      >
        <span className={isOpen ? 'bar open' : 'bar'} />
        <span className={isOpen ? 'bar open' : 'bar'} />
        <span className={isOpen ? 'bar open' : 'bar'} />
      </button>

      {/* Mobile slide-out */}
      <ul
        id="mobile-nav"
        className={`navbar__links navbar__links--mobile ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
      >
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/doctors">Doctors</NavLink></li>
        <li><NavLink to="/departments">Departments</NavLink></li>
        <li><NavLink to="/medical">Packages</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
         {/* <li><NavLink to="/blogs">Facilities</NavLink></li> */}
          <li><NavLink to="/tieups">Tie-ups</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
