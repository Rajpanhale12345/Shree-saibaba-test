import React from 'react';
import Deptext from './Deptext';
import Internal from './Images/InternalMedicine.jpg';
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
const SITE_URL = "https://shreesaibabahospital.com"; // set your one canonical domain
const CANONICAL_URL = `${SITE_URL}/internalmedicine`;
const OG_IMAGE_URL = `${SITE_URL}/static/og/internal-medicine.jpg`; // create or change


function InternalMedicine() {
  return (
    <>
      <Helmet>
        <title>Internal Medicine | Best Internal Medicine Hospital in Nashik</title>
          <meta name="description" content="Internal Medicine care in Nashik for adults — diagnosis and management of complex multi-system conditions, diabetes and endocrine disorders, infections and fever, respiratory diseases, kidney and electrolyte disorders, GI and liver conditions, and critical care monitoring at Shree Saibaba Multispeciality Hospital." />
          <link rel="canonical" href={CANONICAL_URL} />
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content="Internal Medicine Department | Shree Saibaba Multispeciality Hospital, Nashik" />
          <meta property="og:description" content="Adult internal medicine care in Nashik: complex multi-organ disease management, diabetes, infections, respiratory disorders, kidney/electrolyte issues, GI/liver care and critical monitoring." />
          <meta property="og:url" content={CANONICAL_URL} />
          <meta property="og:image" content={OG_IMAGE_URL} />
          <meta property="og:image:alt" content="Internal Medicine Department - Shree Saibaba Multispeciality Hospital, Nashik" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Internal Medicine Department | Shree Saibaba Multispeciality Hospital, Nashik" />
          <meta name="twitter:description" content="Diagnosis and management of complex adult medical conditions with advanced diagnostics and multidisciplinary support in Nashik." />
          <meta name="twitter:image" content={OG_IMAGE_URL} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: SITE_NAME,
              url: CANONICAL_URL,
              department: {
                "@type": "MedicalBusiness",
                name: "Internal Medicine Department",
                medicalSpecialty: "InternalMedicine",
                description:
                  "Adult internal medicine focusing on prevention, diagnosis and treatment of complex multi-system medical conditions.",
                areaServed: { "@type": "City", name: "Nashik" },
                availableService: [
                  "Diabetes & endocrine disorder management",
                  "Hypertension & cardiovascular risk management",
                  "Infectious diseases & fever management",
                  "Respiratory disorders (asthma, COPD, pneumonia)",
                  "Chronic kidney disease & electrolyte imbalance",
                  "Gastrointestinal & liver disorders",
                  "Autoimmune & rheumatologic conditions",
                  "Critical care & intensive monitoring"
                ]
              }
            })}
          </script>
        </Helmet>



        <div>
          <Deptext
            image={Internal}
            title='Best Internal Medicine Hospital'
            imageAlt="Internal Medicine Department at Shree Saibaba Multispeciality Hospital in Nashik"
            subtitle='Nashik, Maharashtra'
            description="Internal Medicine is a core specialty in modern healthcare, focusing on the prevention, diagnosis, and management of a wide range of medical conditions affecting adults. This branch of medicine deals with complex illnesses involving multiple organs and systems, requiring expertise, precision, and a holistic approach to patient care."
            description1='Shree Saibaba Multispeciality Hospital stands as one of the leading centers for Internal Medicine in Nashik, offering comprehensive care delivered by an experienced team of physicians, intensivists, endocrinologists, infectious disease specialists, and rehabilitation experts. Our department is committed to clinical excellence, evidence-based practices, and compassionate patient care.'
            description2='With state-of-the-art diagnostic facilities, advanced monitoring systems, and access to multidisciplinary expertise, we manage a wide spectrum of acute and chronic medical conditions with the highest standards of safety and precision.'
            description3='From managing lifestyle-related disorders to treating complex multi-organ diseases, our team follows a patient-centric approach, focusing on personalized care, preventive health strategies, and long-term wellness.'
            bullet=''
            bullet1='Diabetes & Endocrine Disorder Management'
            bullet2='Hypertension & Cardiovascular Risk Management'
            bullet3='Infectious Diseases & Fever Management'
            bullet4='Respiratory Disorders (Asthma, COPD, Pneumonia)'
            bullet5='Chronic Kidney Disease & Electrolyte Imbalance'
            bullet6='Gastrointestinal & Liver Disorders'
            bullet7='Autoimmune & Rheumatologic Conditions'
            bullet8='Critical Care & Intensive Monitoring'
            choose='At Shree Saibaba Multispeciality Hospital, we integrate advanced technology with personalized medical care, ensuring accurate diagnosis, comprehensive treatment, and improved quality of life for our patients.'
          />
        </div>
      </>
      )
}
      export default InternalMedicine;
