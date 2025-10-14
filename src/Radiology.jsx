import React from 'react'
import Deptext from './Deptext'
import img from './Images/Radiologydep.jpg'
import { Helmet } from "react-helmet-async";

 function Radiology() {
  return (
    <>

    <Helmet>
      <title>Radiology | Shree Saibaba Hospital</title>
    </Helmet>


    <div>
      <Deptext 
      image={img}
      title='Best Radiology & Imaging Center'
      subtitle='Nashik, Maharashtra'
      description="Radiology is the cornerstone of modern diagnostics, enabling early detection, accurate diagnosis, and effective treatment planning across all medical specialties. With advancements in imaging technology, radiology now plays a pivotal role in minimally invasive interventions, cancer screening, trauma care, neurological mapping, and cardiovascular assessments—making it an essential part of patient care pathways."
      description1='At Shree Saibaba Multispeciality Hospital, our Radiology Department is one of the most advanced in Nashik, combining high-end diagnostic equipment with a team of expert radiologists, technicians, and support staff. We are committed to delivering fast, accurate, and reliable imaging services that support clinical decision-making and enhance patient outcomes.'
      description2='Our department is equipped with cutting-edge modalities including 128-slice CT, 3 Tesla MRI, Digital X-Ray, High-Resolution Ultrasound, Color Doppler, Mammography, DEXA Bone Densitometry, and Interventional Radiology suites. Every scan is reviewed by experienced radiologists with subspecialty expertise, ensuring precise interpretation and timely reporting.'
      description3='We also offer image-guided procedures that reduce the need for invasive surgeries, including biopsies, drainages, and vascular access placements, making radiology not just a diagnostic but also a therapeutic tool.'
      bullet='OPD :'
      bullet1='1) USG'
      bullet2='2) Digital mammography'
      bullet3='3) CT Scan'
      bullet4='4) MRI'
      bullet5='5) Radiograph'
      bullet6='6) Doppler'

ipd="IPD : "
detail1="1) USG"
detail2="2) Digital mammography"
detail3="3) CT Scan"
detail4="4) MRI"
detail5="5) Radiograph"
detail6="6) Doppler"

      choose='At Shree Saibaba Multispeciality Hospital, our Radiology Department stands at the forefront of medical imaging in Nashik. We combine advanced technology with skilled professionals to deliver diagnostic precision in a safe and patient-friendly environment. With real-time imaging, rapid turnaround times, and seamless integration with other departments, we play a critical role in comprehensive care delivery.'
      />
    </div>
    </>
  )
}
export default Radiology;
