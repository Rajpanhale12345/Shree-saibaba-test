import React from 'react';
import Deptext from './Deptext';
import Opthamology from './Images/optha.jpg';
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
const SITE_URL = "https://shreesaibabamultispecialityhospital.com";

// ✅ Use your real route slug here
const CANONICAL_URL = `${SITE_URL}/ophthalmology`;

// ✅ Put an OG image at this public URL (recommended), or replace with a real hosted image
const OG_IMAGE_URL = `${SITE_URL}/static/og/ophthalmology.jpg`;

function Ophthalmology() {
  const pageTitle = "Opthalmology | Best Opthalmology Hospital in Nashik";
  const pageDescription = "Shree Saibaba Multispeciality Hospital, Nashik offers comprehensive ophthalmology and eye care—cataract surgery, glaucoma screening, retina services, diabetic eye care, cornea care, refractive surgery and pediatric ophthalmology with advanced diagnostics.";

  const metaKeywords = "ophthalmology Nashik, eye hospital Nashik, eye specialist Nashik, cataract surgery Nashik, phaco surgery Nashik, glaucoma treatment Nashik, retina specialist Nashik, diabetic retinopathy treatment Nashik, cornea specialist Nashik, LASIK Nashik, pediatric eye doctor Nashik";

  const jsonLdDepartment = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    url: CANONICAL_URL,
    department: {
      "@type": "MedicalBusiness",
      name: "Ophthalmology & Eye Care Department",
      medicalSpecialty: "Ophthalmology",
      areaServed: { "@type": "City", name: "Nashik" },
      description:
        "Comprehensive eye care services including cataract surgery, glaucoma screening and management, retina and diabetic eye care, cornea services, refractive surgery and pediatric ophthalmology."
    }
  };

  const faqItems = [
    {
      q: "When should I consult an ophthalmologist?",
      a: "If you have blurred vision, eye pain, redness, frequent headaches, watering, sudden vision changes, diabetes-related eye concerns, or need routine screening (especially after age 40)."
    },
    {
      q: "Is cataract surgery safe?",
      a: "Cataract surgery is one of the most common and safe procedures. Your doctor will evaluate your eye, explain lens options, and guide you on the best approach for your case."
    },
    {
      q: "How often should I get an eye check-up?",
      a: "Adults should consider routine check-ups every 1-2 years, or sooner if you have diabetes, high blood pressure, glaucoma risk, or vision problems."
    },
    {
      q: "Do you treat diabetic retinopathy?",
      a: "Yes. Diabetic eye evaluation and retina care are provided, and treatment is planned based on the stage of retinopathy and overall eye health."
    },
    {
      q: "Do you provide pediatric eye care?",
      a: "Yes. We evaluate children for vision issues, squint, lazy eye, infections and other pediatric eye concerns with age-appropriate, child-friendly care."
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${SITE_NAME} | Ophthalmology & Eye Care`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Ophthalmology & Eye Care Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} | Ophthalmology & Eye Care`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">{JSON.stringify(jsonLdDepartment)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <div>
        <Deptext
          image={Opthamology}
          title='Best Ophthalmology & Eye Care Hospital'
          subtitle='Nashik, Maharashtra'
          description="Ophthalmology is a specialized branch of medicine dedicated to the diagnosis, treatment, and prevention of diseases and disorders affecting the eyes and visual system. With vision being one of our most vital senses, early detection and precise treatment are crucial to maintaining eye health and overall quality of life."
          description1='Shree Saibaba Multispeciality Hospital is among the leading centers for advanced eye care in Nashik, offering comprehensive services ranging from routine eye check-ups to complex microsurgeries. Our expert team of ophthalmologists, retinal specialists, glaucoma experts, and optometrists provides personalized, precision-driven care for patients of all ages.'
          description2='Equipped with state-of-the-art diagnostic facilities, advanced operating microscopes, high-resolution imaging systems, and laser-assisted surgical technologies, we ensure safe, effective, and minimally invasive eye treatments with faster recovery.'
          description3='From corrective procedures that improve vision to sight-saving surgeries, our department focuses on patient-centric care, combining clinical expertise, modern technology, and compassionate support.'
          bullet=''
          bullet1='Comprehensive Eye Examinations & Vision Testing'
          bullet2='Cataract Surgery (Conventional & Advanced Phacoemulsification)'
          bullet3='Hand & Microsurgery'
          bullet4='Glaucoma Screening & Management'
          bullet5='Retinal Disorders & Diabetic Retinopathy Treatment'
          bullet6='Corneal Diseases & Keratoplasty (Corneal Transplant)'
          bullet7='Refractive Surgeries (LASIK, SMILE, PRK)'
          bullet8='Pediatric Eye Care & Squint Correction'

          choose='At Shree Saibaba Multispeciality Hospital, our Ophthalmology Department combines advanced technology, highly skilled specialists, and patient-focused care to deliver the best possible vision outcomes for every individual.'
        />
      </div>
    </>
  )
}
export default Ophthalmology;
