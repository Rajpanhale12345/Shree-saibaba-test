import React from 'react';
import Deptext from './Deptext';
import Opthamology from './Images/optha.jpg';
import { Helmet } from "react-helmet-async";

 function Ophthalmology() {
  return (
    <>

    <Helmet>
      <title>Opthalmology | Shree Saibaba Hospital</title>
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
