import React from 'react';
import { Link } from 'react-router-dom';
import Upper from './Upper';
import './Departments.css';

import cardio from './Images/cardiodep.jpg'
import thoracic from './Images/thoracicdep.jpg';
import Urology from './Images/Urologydep.jpg';
import Neurology from './Images/Neurologydep.jpg';
import Radiology from './Images/Radiologydep.jpg';
import Neurosurgery from './Images/Neurosurgerydep.jpg';
import Interventional from './Images/Interventionaldep.jpg';
import Orthopedic from './Images/Orthopedicdep.jpg';
import Internal from './Images/InternalMedicine.jpg';
import Dentistry from './Images/Dentistry.jpg';
import General from './Images/GeneralSurgery.jpg';
import plastic from './Images/plastic.jpg';
import optha from './Images/optha.jpg';
import gastro from './Images/gastro.jpg';
import nephrology from './Images/nephrology.jpg';
import { Helmet } from 'react-helmet';

function Departments() {
  const departments = [
    { to: '/Cardiology', label: 'Cardiology', src: cardio },
    { to: '/CardioVascular', label: 'Cardio Thoracic', src: thoracic },
    { to: '/urology', label: 'Urology', src: Urology },
    { to: '/neurology', label: 'Neurology', src: Neurology },
    { to: '/radiology', label: 'Radiology', src: Radiology },
    { to: '/Ortho', label: 'Orthopaedic', src: Orthopedic },
    { to: '/interventionalradiology', label: 'Interventional Radiology', src: Interventional },
    { to: '/neurosurgery', label: 'Neurosurgery', src: Neurosurgery },
    { to: '/InternalMedicine', label: 'Internal Medicine', src: Internal },
    { to: '/Dentistry', label: 'Dentistry', src: Dentistry },
    { to: '/GeneralSurgery', label: 'General Surgery', src: General },
    { to: '/PlasticSurgery', label: 'Plastic Surgery', src: plastic },
    { to: '/Opthalmology', label: 'Ophthalmology', src: optha },
    { to: '/Gastroenterology', label: 'Gastroenterology', src: gastro },
    { to: '/nephrology', label: 'Nephrology', src: nephrology },
  ];

  return (
    <>

    <helmet>
      <title>Department Image | Shree Saibaba Hospital</title>
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
