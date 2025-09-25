import React from 'react';
import './Footer.css';
import logo from './Images/Shreesaibabalogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>  
    <hr />
      <footer className="footer">
      <div className="footer-top">

        {/* Logo + Address */}
        <div className="footer-logo">
        <Link to="/">  <img src={logo} alt="Shree Saibaba Logo" /></Link>
          <p>
            Shree Saibaba Heart Institute & Multispeciality Hospital, <br />
            Opp. Wani House, Mumbai Naka, Mirajkar Nagar, <br />
            Nashik, Maharashtra 422001
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/ShreeSaibabaHeartInstituteAndResearchCentre/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/shreesaibabahospital/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@shreesaibabaheartinstitute"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        {/* Resources */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/sitemap">Site Map</Link></li>
          </ul>
        </div>

        {/* Discover */}
        <div className="footer-col">
          <h3>Discover</h3>
          <ul>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/pr">Media</Link></li>
             <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <Link to='https://brandbanao.ai'>BrandBanao.Ai</Link>. All Rights Reserved.</p>
      </div>
    </footer>
    </>

  );
};

export default Footer;
