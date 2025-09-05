import React from 'react';
import { Link } from 'react-router-dom';
import Upper from './Upper';
import './Departments.css';

import cardio from './Images/cardiodep.png';
import thoracic from './Images/thoracicdep.png';
import Urology from './Images/Urologydep.png';
import Neurology from './Images/Neurologydep.png';
import Radiology from './Images/Radiologydep.png';
import Neurosurgery from './Images/Neurosurgerydep.png';
import Interventional from './Images/Interventionaldep.png';
import Orthopedic from './Images/Orthopedicdep.png';
import Internal from './Images/InternalMedicine.png';
import Dentistry from './Images/Dentistry.png';
import General from './Images/GeneralSurgery.png';
import plastic from './Images/plastic.png';
import optha from './Images/optha.png';
import gastro from './Images/gastro.png';
import nephrology from './Images/nephrology.png';
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
