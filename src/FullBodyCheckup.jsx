import React from "react";
import "./FullBodyCheckup.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const tests = [
  "2D Echocardiography (Screening)",
  "ECG",
  "Stress Test",
  "X-Ray Chest (Screening)",
  "USG Abdomen (Screening)",
  "Lipid Profile",
  "BSL Fasting & Postprandial",
  "CBC (18 parameters: Hemoglobin, WBC, Platelet Count, etc.)",
  "Urine Routine",
  "Serum Uric Acid",
  "Serum Creatinine",
  "Physician Check-up",
  "Body Mass Index (BMI)",
  "Thyroid Function Test (T3, T4, TSH)",
  "Eye-Check up",
  "Dental Check up",

];

function CheckIcon({ className }) {
  return (

    <>

    
      <Helmet>
        <title>Full Body Check-up | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      role="img"
      aria-label="included"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm-1.1 14.2-4.2-4.2 1.4-1.4 2.8 2.8 5.8-5.8 1.4 1.4-7.2 7.2z"
      />
    </svg>

    </>
  );
}

/**
 * FullBodyCheckup
 * - Single-page brochure-style component
 * - Print-ready (A4), responsive, no external deps
 *
 * Props (optional):
 * - clinicName: string
 * - packageName: string
 * - subtitle: string
 * - price: string (e.g., "₹3,999")
 * - note: string (small footer note)
 * - onBook: () => void
 * - contact: { phone?: string, email?: string, address?: string }
 */
export default function FullBodyCheckup({
  clinicName = "Shree Saibaba Heart Institute and Research Center",
  packageName = "Full body Checkup",
  subtitle = "A comprehensive preventive package for early detection & peace of mind.",
  price,
  note = "",

  contact = {
    
  },
}) {
  const handlePrint = () => window.print();
  // const handleBook = () => {
  //   if (onBook) onBook();
  //   else alert("Thank you! Our team will contact you shortly.");
  // };

  return (
    <main className="fbc-page" aria-label="Full Body Health Checkup">
      <header className="fbc-hero">
        <div className="fbc-hero__badge">{clinicName}</div>
        <h1 className="fbc-hero__title">{packageName}</h1>
        <p className="fbc-hero__subtitle">{subtitle}</p>

        <div className="fbc-hero__meta">
          <span className="fbc-hero__pill">
            
          </span>
          {price ? <span className="fbc-hero__pill fbc-hero__pill--accent">Starting at {price}</span> : null}
        </div>

        <div className="fbc-actions no-print">
          <Link to="/contact">
            <button className="fbc-btn fbc-btn--primary" aria-label="Book package">
              Schedule your Health Check today!
            </button>
          </Link>
          <button className="fbc-btn fbc-btn--ghost" onClick={handlePrint} aria-label="Print this page">
            Print 
          </button>
        </div>
      </header>

      <section className="fbc-card" aria-labelledby="tests-heading">
        <h2 id="tests-heading" className="fbc-card__title">What’s Included</h2>
        <h2 id="tests-heading" className="fbc-card__title">Total Cost : Rs.4000/-</h2>
        <ul className="fbc-list" role="list">
          {tests.map((item, idx) => (
            <li className="fbc-list__item" key={idx}>
              <CheckIcon className="fbc-list__icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="fbc-grid">
        <div className="fbc-card">
          <h3 className="fbc-card__title">Preparation</h3>
          <ul className="fbc-bullets">
            <li>10–12 hours fasting recommended for lipid profile & fasting sugar.</li>
            <li>Carry previous reports if available—for continuity of care.</li>
            <li>Wear comfortable clothing for scans (USG/X-Ray).</li>
          </ul>
        </div>

        <div className="fbc-card">
          <h3 className="fbc-card__title">Why This Package</h3>
          <ul className="fbc-bullets">
            <li>Heart screening (2D Echo & ECG)</li>
            <li>Metabolic health (HbA1c, Lipid, Thyroid)</li>
            <li>Kidney & general health (Creatinine, Uric Acid, CBC, Urine)</li>
          </ul>
        </div>
      </section>

      <footer className="fbc-footer">
        <p className="fbc-note">{note}</p>
        <address className="fbc-contact" aria-label="Clinic contact">
          {contact.phone && <span>📞 {contact.phone}</span>}
          {contact.email && <span>✉️ {contact.email}</span>}
          {contact.address && <span>📍 {contact.address}</span>}
        </address>
      </footer>
    </main>

    
  );
}