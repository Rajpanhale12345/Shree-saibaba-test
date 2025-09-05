import React from "react";
import "./DoctorCard.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const DoctorCard = ({ name, color, icon, doctors }) => {
  return (

    <>
        <helmet>
          <title>Our Doctors | Saibaba Multispeciality Hospital</title>
        </helmet>
    
    <div className="doctor-card">
      
      <div
        className="doctor-card-header"
        style={{ backgroundColor: color }}
      >  
        <span className="doctor-icon">{icon}</span>
        <h3>{name}</h3>
      
      </div>
      <div className="doctor-list">
        {doctors.map((doc, idx) => (
          <div className="doctor-item" key={idx}>
            <div
              className="avatar"
              style={{ backgroundColor: color }}
            >
              
              {doc.name
                .split(" ")
                .filter((w) => w[0].toUpperCase() === w[0]) // take capital letters
                .map((w) => w[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()}
            </div>
            <p>
              <strong>{doc.name}</strong>
              <br /> {doc.degree} <br />
            </p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default DoctorCard;
