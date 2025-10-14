import React from "react";
import "./Home.css";
import video from "./Videos/video.mp4";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import spe1 from "./Images/spe1.webp";
import spe15 from "./Images/spe2.webp";
import spe2 from "./Images/spe3.webp";
import spe3 from "./Images/spe4.webp";
import spe4 from "./Images/spe5.webp";
import spe5 from "./Images/spe6.webp";
import spe6 from "./Images/spe7.webp";
import spe7 from "./Images/spe8.webp";
import spe8 from "./Images/spe9.webp";
import spe9 from "./Images/spe10.webp";
import spe10 from "./Images/spe11.webp";
import spe11 from "./Images/spe12.webp";
import spe13 from "./Images/spe13.webp";
import spe14 from "./Images/spe14.webp";
import spe16 from "./Images/spe15.webp";
import spe17 from "./Images/spe17.webp";
import spe18 from "./Images/spe18.webp";
import spe19 from "./Images/spe19.webp";
import OPD from "./OPD.";
import Test from "./Test";
import { Helmet } from "react-helmet-async";

function Home() {
  const { pathname } = useLocation();
  const canonical = `https://www.your-domain.com${pathname}`;

  const specialties = [
    { src: spe2,  label: "Cardiology",               className: "cardiology",        path: "/cardiology" },
    { src: spe13, label: "Cardio Thoracic",          className: "cvts",              path: "/cardiovascular" },
    { src: spe4,  label: "Neurology",                className: "neurology",         path: "/neurology" },
    { src: spe5,  label: "Spine Care",               className: "spine-care",        path: "/spinecare" },
    { src: spe14, label: "Orthopaedic",              className: "orthopaedic",       path: "/ortho" },
    { src: spe9,  label: "Nephrology",               className: "nephrology",        path: "/nephrology" },
    { src: spe10, label: "Urology",                  className: "urology",           path: "/urology" },
    { src: spe16, label: "General Medicine",         className: "general-medicine",  path: "/generalmedicine" },
    { src: spe6,  label: "General Surgery",          className: "general-surgery",   path: "/generalsurgery" },
    { src: spe3,  label: "Gastroenterology",         className: "gastro",            path: "/gastroenterology" },
    { src: spe8,  label: "Plastic Surgery",          className: "plastic-surgery",   path: "/plasticsurgery" },
    { src: spe11, label: "Gynaecology",              className: "gynaecology",       path: "/gynaecology" },
    { src: spe18, label: "Interventional Radiology", className: "ir",                path: "/interventionalradiology" },
    { src: spe19, label: "Radiology",                className: "radiology",         path: "/radiology" },
    { src: spe17, label: "Neurosurgery",             className: "neurosurgery",      path: "/neurosurgery" },
    { src: spe15, label: "Full Body Checkup",        className: "checkup",           path: "/fullbodycheckup" },
    { src: spe1,  label: "Facilities",               className: "facilities",        path: "/facilities" },
  ];

  const renderRow = (items) => (
    <div className="specialty">
      {items.map((item, idx) => (
        <React.Fragment key={`${item.path}-${idx}`}>
          <Link to={item.path} className="specialty-link" aria-label={item.label}>
            <div className="specialty-item">
              <figure className="specialty-figure">
                <img
                  src={item.src}
                  alt={`${item.label} department`}
                  className={`specialty-img ${item.className}`}
                  loading="lazy"
                />
                <figcaption className="overlay" style={{ pointerEvents: "none" }}>
                  <span className="overlay-text">{item.label}</span>
                </figcaption>
              </figure>
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
        <title>Best Multispeciality Hospital in Nashik | Shree Saibaba Hospital</title>
        <meta
          name="description"
          content="Trusted multispeciality hospital in Nashik for cardiology, neurology, nephrology, orthopaedics, radiology, spine care, general medicine and more. Book an appointment online."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Comprehensive specialty care and advanced diagnostics." />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <div className="video-container">
          <video height="auto" autoPlay loop muted playsInline poster="/video-poster.jpg">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="our" style={{ color: "blue", fontSize: "25px", fontWeight: 500 }}>
          Our Specialities
        </p>

        {renderRow(specialties.slice(0, 4))}
        {renderRow(specialties.slice(4, 8))}
        {renderRow(specialties.slice(8, 12))}
        {renderRow(specialties.slice(12, 16))}

        <Link to="/departments">
          <Button variant="contained">View all Specialities</Button>
        </Link>

        <hr />
        <h2 className="titlemed" style={{ color: "blue", fontSize: "25px", fontWeight: 500 }}>
          Take Charge of Your Health Today!
        </h2>
        <p className="desc">
          Book your complete health screening package now — 2D Echo, ECG, X-Ray, Ultrasound, Lipid Profile, Thyroid &amp; Diabetes tests and more.
        </p>

        <Link to="/medical">
          <Button variant="contained" style={{ fontFamily: "poppins" }}>
            Book an Appointment
          </Button>
        </Link>

        <hr />
        <Test />
        <OPD />
      </div>
    </>
  );
}

export default Home;
