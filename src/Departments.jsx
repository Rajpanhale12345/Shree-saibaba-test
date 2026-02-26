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
  const canonical = `https://shreesaibabamultispecialityhospital.com/${pathname}`;

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

  const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
  const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
  const OG_IMAGE_URL = `https://shreesaibabamultispecialityhospital.com/assets/Shreesaibabalogo-D9LTGZox.png`;


  return (
    <>

      <Helmet>
        <title>Departments | Best Healthcare Services in Nashik</title>
        <meta name="description" content="Explore our hospital departments in Nashik: Cardiology, Cardiovascular & Thoracic Surgery, Neurology, Spine Care, Orthopaedics, Nephrology, Urology, General Medicine, General Surgery, Gastroenterology, Gynaecology, Radiology, Interventional Radiology, Neurosurgery, Pulmonology, Dentistry and more." />
        <link rel="canonical" href={`${SITE_URL}${pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Departments | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Browse specialties and super-specialities with expert doctors and modern facilities." />
        <meta property="og:url" content={`${SITE_URL}${pathname}`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Hospital departments at Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Departments | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:description" content="Explore specialties and super-specialities including cardiology, neurology, orthopaedics, nephrology, radiology, and more." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Hospital Departments",
            itemListOrder: "https://schema.org/ItemListUnordered",
            numberOfItems: departments.length,
            itemListElement: departments.map((d, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: d.label,
              url: `${SITE_URL}${d.to}`
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Departments",
                item: `${SITE_URL}${pathname}`
              }
            ]
          })}
        </script>
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
