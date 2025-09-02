import React from 'react';
import './Home.css';

import founder1 from './Images/dr.pallavi.png';
import founder2 from './Images/dr.aniruddha.png';

import video from './Videos/video.mp4';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import spe1 from './Images/spe1.webp';
import spe15 from './Images/spe2.webp';
import spe2 from './Images/spe3.webp';
import spe3 from './Images/spe4.webp';
import spe4 from './Images/spe5.webp';
import spe5 from './Images/spe6.webp';
import spe6 from './Images/spe7.webp';
import spe7 from './Images/spe8.webp';
import spe8 from './Images/spe9.webp';
import spe9 from './Images/spe10.webp';
import spe10 from './Images/spe11.webp';
import spe11 from './Images/spe12.webp';
import spe12 from './Images/spe13.webp';
import spe13 from './Images/spe14.webp';
import spe14 from './Images/spe15.webp';

import OPD from './OPD.'; 
import Test from './Test';

function Home() {
  // Random/placeholder specialty labels for hover overlays
  const specialties = [
    { src: spe13, className: 'cardiology',   label: 'Pulmonology' },
    { src: spe14, className: 'neurology',    label: 'Cardiology' },
    { src: spe15, className: 'neurosurgery', label: 'Gastroenterology' },
    { src: spe12, className: 'orthopaedic',  label: 'Neurology' },
    { src: spe1,  className: 'cardiology',   label: 'Pulse Dynamics' },
    { src: spe2,  className: 'neurology',    label: 'Spine Care' },
    { src: spe3,  className: 'neurosurgery', label: 'General Surgery' },
    { src: spe4,  className: 'orthopaedic',  label: 'Orthopaedic' },
    { src: spe5,  className: 'radiology',    label: 'Dentistry' },
    { src: spe6,  className: 'radiology1',   label: 'Gynaecology' },
    { src: spe8,  className: 'urology',      label: 'Ophthalmology' },
    { src: spe9,  className: 'cardiology',   label: 'Plastic Surgery' },
    { src: spe10, className: 'neurology',    label: 'Nephrology' },
    { src: spe11, className: 'neurosurgery', label: 'Urology' },
  ];

  // Helper to render rows with overlay hover effect
  const renderRow = (items) => (
    <div className="specialty">
      {items.map((item, idx) => (
        <React.Fragment key={`${item.label}-${idx}`}>
          <div className="specialty-item">
            <div className="specialty-figure">
              <img
                src={item.src}
                alt={item.label}
                className={`specialty-img ${item.className}`}
                loading="lazy"
              />
              {/* shutter panel that slides from bottom to top */}
              <div className="overlay">
                <span className="overlay-text">{item.label}</span>
              </div>
            </div>
            {/* Always-visible, larger label below the image */}
            <div className="specialty-caption" aria-hidden>
              {item.label}
            </div>
          </div>
          {idx !== items.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div>
      <br />
      <div className="video-container">
        <video height="auto" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <br /><br />
      <div className="title"></div>
      <br /><br /><br />
      <br /><br />

      <p className="our" style={{ color: 'blue',fontSize:'25px', fontWeight: '500' }}>Our Specialities</p>
      <br /><br />

      {/* Keep your original 4 rows */}
      {renderRow(specialties.slice(0, 4))}
      <br /><br />
      {renderRow(specialties.slice(4, 8))}
      <br /><br />
      {renderRow(specialties.slice(8, 12))}
      <br /><br />
      {renderRow(specialties.slice(12, 15))}
      <br /><br />
      <br />

      <Link to="/departments"><Button variant="contained">View all Specialities</Button></Link>
  


      <br /><br /><hr /><br /><br /><br />

      <h2 className="titlemed" style={{ color: 'blue',fontSize:'25px', fontWeight:'500' }}>Take Charge of Your Health Today!</h2><br />
      <p className="desc">
        Book Your Complete Health Screening Package Now including
        <i> 2D Echo, ECG, X-Ray, Ultrasound, Lipid Profile, Thyroid &amp; Diabetes Tests</i>
        {''}and more all under one expert-guided checkup.
      </p>
      <br /><br />

      <Link to='/medical'><Button variant="contained" style={{fontFamily:"poppins"}}>Book an Appointment</Button></Link>

      <br /><br /><br /><hr /><br /><br />
      <Test/>
      <OPD />
    </div>
  );
}

export default Home;
