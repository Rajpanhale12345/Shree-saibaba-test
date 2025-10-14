import React from "react";
import { Link, useLocation } from "react-router-dom";
import Upper from "./Upper";
import "./Departments.css";

import cardio from "./Images/cardiodep.jpg";
import thoracic from "./Images/thoracicdep.jpg";
import urologyImg from "./Images/urologydep.jpg";
import neurologyImg from "./Images/Neurologydep.jpg";
import radiologyImg from "./Images/Radiologydep.jpg";
import neurosurgeryImg from "./Images/Neurosurgerydep.jpg";
import interventionalImg from "./Images/interventionaldep.jpg";
import orthopedicImg from "./Images/orthodep.webp";
import internalImg from "./Images/InternalMedicine.jpg";
import dentistryImg from "./Images/Dentistry.jpg";
import generalSurgeryImg from "./Images/GeneralSurgery.jpg";
import plasticImg from "./Images/plastic.jpg";
import optha from "./Images/optha.jpg";
import gastroImg from "./Images/gastro.jpg";
import nephrologyImg from "./Images/nephrology.jpg";
import generalmedicine from "./Images/generalmedicinedep.webp";
import spinecareImg from "./Images/spinecaredep.jpg";
import gynacologyImg from "./Images/gynacdep.webp";
import pulmonologyImg from "./Images/pulmonologydep.webp";

import { Helmet } from "react-helmet-async";

function Departments() {
  const { pathname } = useLocation();
  const canonical = `https://www.your-domain.com${pathname}`;

  const departments = [
    { to: "/cardiology", label: "Cardiology", src: cardio },
    { to: "/cardiovascular", label: "Cardio Thoracic", src: thoracic },
    { to: "/neurology", label: "Neurology", src: neurologyImg },
    { to: "/spinecare", label: "Spine Care", src: spinecareImg },
    { to: "/ortho", label: "Orthopaedic", src: orthopedicImg },
    { to: "/nephrology", label: "Nephrology", src: nephrologyImg },
    { to: "/urology", label: "Urology", src: urologyImg },
    { to: "/generalmedicine", label: "General Medicine", src: generalmedicine },
    { to: "/generalsurgery", label: "General Surgery", src: generalSurgeryImg },
    { to: "/gastroenterology", label: "Gastroenterology", src: gastroImg },
    { to: "/plasticsurgery", label: "Plastic Surgery", src: plasticImg },
    { to: "/gynaecology", label: "Gynaecology", src: gynacologyImg },
    { to: "/radiology", label: "Radiology", src: radiologyImg },
    { to: "/interventionalradiology", label: "Interventional Radiology", src: interventionalImg },
    { to: "/neurosurgery", label: "Neurosurgery", src: neurosurgeryImg },
    { to: "/pulmonology", label: "Pulmonology", src: pulmonologyImg },
    { to: "/dentistry", label: "Dentistry", src: dentistryImg },
  ];

  return (
    <>
      <Helmet>
        <title>Departments | Shree Saibaba Multispeciality Hospital, Nashik</title>
        <meta
          name="description"
          content="Explore departments: Cardiology, Neurology, Cardiothoracic Surgery, Nephrology, Radiology, Spine Care, General Medicine, Dentistry and more."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Departments | Shree Saibaba Hospital" />
        <meta property="og:description" content="Explore our specialties and expert teams." />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Upper text="Departments" />

      <div className="departments-wrap">
        <div className="departments-grid">
          {departments.map((d, i) => (
            <Link to={d.to} className="dep-card" key={`${d.label}-${i}`} aria-label={`${d.label} — read more`}>
              <img src={d.src} alt={`${d.label} department`} loading="lazy" />
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
