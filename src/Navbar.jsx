import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Images/Shreesaibabalogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(o => !o);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <img src={logo} alt="Shree Saibaba Hospital" />
      </Link>

      {/* Desktop links */}
      <ul className="navbar__links navbar__links--desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/medical">Packages</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/pr">Media</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/medical">Packages</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
