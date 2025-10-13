import React from 'react';
import { Link } from 'react-router-dom';
import Upper from './Upper';
import './Departments.css';

import cardio from './Images/cardiodep.jpg'
import thoracic from './Images/thoracicdep.jpg';
import Urology from './Images/urologydep.jpg';
import Neurology from './Images/Neurologydep.jpg';
import Radiology from './Images/Radiologydep.jpg';
import Neurosurgery from './Images/Neurosurgerydep.jpg';
import Interventional from './Images/interventionaldep.jpg';
import Orthopedic from './Images/orthodep.webp';
import Internal from './Images/InternalMedicine.jpg';
import Dentistry from './Images/Dentistry.jpg';
import General from './Images/GeneralSurgery.jpg';
import plastic from './Images/plastic.jpg';
import optha from './Images/optha.jpg';
import gastro from './Images/gastro.jpg';
import nephrology from './Images/nephrology.jpg';
import { Helmet } from 'react-helmet';
import generalmedicine from './Images/generalmedicinedep.webp'
import spinecare from './Images/spinecaredep.jpg';
import gynacology from './Images/gynacdep.webp'
import pulmonology from './Images/pulmonologydep.webp'

function Departments() {
  const departments = [
    { to: '/Cardiology', label: 'Cardiology', src: cardio },
    { to: '/CardioVascular', label: 'Cardio Thoracic', src: thoracic },
    { to: '/neurology', label: 'Neurology', src: Neurology },
    { to: '/SpineCare', label: 'Spine Care', src: spinecare },
    { to: '/Ortho', label: 'Orthopaedic', src: Orthopedic },
    { to: '/nephrology', label: 'Nephrology', src: nephrology },
    { to: '/urology', label: 'Urology', src: Urology },
    { to: '/generalmedicine', label: 'General Medicine', src: generalmedicine },
    { to: '/GeneralSurgery', label: 'General Surgery', src: General },
    { to: '/Gastroenterology', label: 'Gastroenterology', src: gastro },
    { to: '/PlasticSurgery', label: 'Plastic Surgery', src: plastic },
    { to: '/Gynaecology', label: 'Gynacology', src: gynacology },
    { to: '/radiology', label: 'Radiology', src: Radiology },
    { to: '/interventionalradiology', label: 'Interventional Radiology', src: Interventional },
    { to: '/neurosurgery', label: 'Neurosurgery', src: Neurosurgery },
    { to: '/pulmonology', label: 'Pulmonology', src: pulmonology },
    { to: '/Dentistry', label: 'Dentistry', src: Dentistry },
  ];

  return (
    <>

      <helmet>
        <title>Department | Shree Saibaba Hospital</title>
      </helmet>



      <Upper text="Departments" />

      <div className="departments-wrap">
        <div className="departments-grid">
          {departments.map((d, i) => (
            <Link
              to={d.to}
              className="dep-card"
              key={`${d.label}-${i}`}
              aria-label={`${d.label} — read more`}
            >
              <img src={d.src} alt={d.label} loading="lazy" />
              <div className="dep-overlay" aria-hidden="true">
                <span className="dep-overlay-text">Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Departments;
