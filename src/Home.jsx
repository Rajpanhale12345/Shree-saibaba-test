import React from 'react';
import './Home.css';
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
import spe13 from './Images/spe13.webp';
import spe14 from './Images/spe14.webp';
import spe16 from './Images/spe15.webp';
import spe17 from './Images/spe17.webp';
import spe18 from './Images/spe18.webp';
import spe19 from './Images/spe19.webp';
import OPD from './OPD.';
import Test from './Test';
import { Helmet } from 'react-helmet';

function Home() {
  const specialties = [
    { src: spe2,  className: 'cardiology',            path: '/cardiology',               },
    { src: spe13, className: 'CVTS',                  path: '/CardioVascular',            },
    { src: spe4,  className: 'Neurology',             path: '/neurology',             },
    { src: spe5,  className: 'Spine Care',            path: '/spinecare',            },
    { src: spe14, className: 'Orthopaedic',           path: '/Ortho',             },
    { src: spe9,  className: 'Nephrology',            path: '/nephrology',               },
    { src: spe10, className: 'Urology',               path: '/urology',               },
    { src: spe16, className: 'General Medicine',      path: '/generalmedicine',        },
    { src: spe6,  className: 'radiology1',            path: '/generalsurgery',          },
    { src: spe3,  className: 'neurosurgery',          path: '/Gastroenterology',                  },
    { src: spe8,  className: 'urology',               path: '/plasticsurgery',          },
    { src: spe11, className: 'neurosurgery',          path: '/gynaecology',              },
    { src: spe18, className: 'neurosurgery',          path: '/interventionalradiology', },
    { src: spe19, className: 'neurosurgery',          path: '/radiology',                },
    { src: spe17, className: 'neurosurgery',          path: '/neurosurgery',             },
    { src: spe15, className: 'General Medicine',      path: '/',                        },
    { src: spe1,  className: 'neurology',             path: '/',                      },
  ];

  const renderRow = (items) => (
    <div className="specialty">
      {items.map((item, idx) => (
        <React.Fragment key={`${item.path}-${idx}`}>
          {/* Wrap the whole card with Link so the entire card is clickable */}
          <Link
            to={item.path}
            className="specialty-link"
            aria-label={item.label}
          >
            <div className="specialty-item">
              <div className="specialty-figure">
                <img
                  src={item.src}
                  alt={item.label}
                  className={`specialty-img ${item.className}`}
                  loading="lazy"
                />
                {/* overlay ignores pointer events so clicks pass through */}
                <div className="overlay" style={{ pointerEvents: 'none' }}>
                  <span className="overlay-text">{item.label}</span>
                </div>
              </div>
              <div className="specialty-caption" aria-hidden="true">
                {item.label}
              </div>
            </div>
          </Link>
          {idx !== items.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Best Multispeciality Hospital | Shree Saibaba</title>
      </Helmet>

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

        <p className="our" style={{ color: 'blue', fontSize: '25px', fontWeight: 500 }}>Our Specialities</p>
        <br /><br />

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

        <h2 className="titlemed" style={{ color: 'blue', fontSize: '25px', fontWeight: 500 }}>Take Charge of Your Health Today!</h2><br />
        <p className="desc">
          Book Your Complete Health Screening Package Now including
          <i> 2D Echo, ECG, X-Ray, Ultrasound, Lipid Profile, Thyroid &amp; Diabetes Tests</i>
          {' '}and more all under one expert-guided checkup.
        </p>
        <br /><br />

        <Link to="/medical"><Button variant="contained" style={{ fontFamily: 'poppins' }}>Book an Appointment</Button></Link>

        <br /><br /><br /><hr /><br /><br />
        <Test />
        <OPD />
      </div>
    </>
  );
}

export default Home;
