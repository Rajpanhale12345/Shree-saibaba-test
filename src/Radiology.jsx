import React from 'react'
import Deptext from './Deptext'
import img from './Images/Radiologydep.jpg'
import { Helmet } from 'react-helmet';

 function Radiology() {
  return (
    <>

    
    <helmet>
      <title>Radiology | Saibaba Multispeciality Hospital</title>
    </helmet>



    <div>
      <Deptext 
      image={img}
      title='Best Radiology & Imaging Center'
      subtitle='Nashik, Maharashtra'
      description="Radiology is the cornerstone of modern diagnostics, enabling early detection, accurate diagnosis, and effective treatment planning across all medical specialties. With advancements in imaging technology, radiology now plays a pivotal role in minimally invasive interventions, cancer screening, trauma care, neurological mapping, and cardiovascular assessments—making it an essential part of patient care pathways."
      description1='At Shree Saibaba Multispeciality Hospital, our Radiology Department is one of the most advanced in Nashik, combining high-end diagnostic equipment with a team of expert radiologists, technicians, and support staff. We are committed to delivering fast, accurate, and reliable imaging services that support clinical decision-making and enhance patient outcomes.'
      description2='Our department is equipped with cutting-edge modalities including 128-slice CT, 3 Tesla MRI, Digital X-Ray, High-Resolution Ultrasound, Color Doppler, Mammography, DEXA Bone Densitometry, and Interventional Radiology suites. Every scan is reviewed by experienced radiologists with subspecialty expertise, ensuring precise interpretation and timely reporting.'
      description3='We also offer image-guided procedures that reduce the need for invasive surgeries, including biopsies, drainages, and vascular access placements, making radiology not just a diagnostic but also a therapeutic tool.'
      bullet=''
      bullet1='128-Slice CT Scan with 3D Reconstruction'
      bullet2='3 Tesla MRI with Functional and Neuroimaging Capabilities'
      bullet3='Digital X-Ray and Portable Radiography'
      bullet4='Color Doppler and High-Resolution Ultrasonography'
      bullet5='Breast Imaging & Digital Mammography'
      bullet6='Bone Mineral Density (DEXA) Scans'
      bullet7='Interventional Radiology (Biopsy, FNAC, Drainage Procedures)'
      bullet8='Neuroimaging and Spine Imaging'
      choose='At Shree Saibaba Multispeciality Hospital, our Radiology Department stands at the forefront of medical imaging in Nashik. We combine advanced technology with skilled professionals to deliver diagnostic precision in a safe and patient-friendly environment. With real-time imaging, rapid turnaround times, and seamless integration with other departments, we play a critical role in comprehensive care delivery.'
      />
    </div>
    </>
  )
}
export default Radiology;
