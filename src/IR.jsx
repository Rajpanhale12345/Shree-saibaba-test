import React from 'react'
import Deptext from './Deptext'
import img from './Images/Interventionaldep.png'

 function InterventionalRadiology() {
  return (
    <>
    <div>
      <Deptext 
      image={img}
      title='Best Interventional Radiology Center'
      subtitle='Nashik, Maharashtra'
      description="Interventional Radiology (IR) is a revolutionary subspecialty of radiology that uses real-time imaging guidance—such as ultrasound, CT, or fluoroscopy—to perform minimally invasive diagnostic and therapeutic procedures. These techniques often replace traditional open surgeries, leading to faster recovery, fewer complications, and significantly less pain for patients. IR has transformed the management of many complex conditions in fields like oncology, neurology, urology, hepatology, and vascular surgery."
      description1='Shree Saibaba Multispeciality Hospital is proud to be one of the leading centers for Interventional Radiology in Nashik, offering advanced image-guided treatments delivered by a team of expert interventional radiologists with extensive training and experience. Our hospital is equipped with state-of-the-art imaging systems, dedicated cath labs, and hybrid operating rooms to perform a wide range of procedures with high precision and safety.'
      description2='The IR team works closely with specialists across departments—including oncology, nephrology, gynecology, cardiology, and surgery—to provide comprehensive, multidisciplinary care.'
      bullet=''
      bullet1='Vascular Interventions'
      bullet2='Oncology Interventions'
      bullet3='FNeurology & Stroke Management'
      bullet4='Hepatobiliary and Gastrointestinal IR'
      bullet5='Urological & Gynecological IR'
      bullet6='Emergency & Trauma IR'
      choose="At Shree Saibaba Multispeciality Hospital, Interventional Radiology is not just a support service—it's a frontline specialty redefining how complex medical conditions are treated. With minimally invasive techniques, reduced hospital stays, and high patient safety standards, our IR team delivers cutting-edge care with a human touch."
      />
    </div>
    </>
  )
}
export default InterventionalRadiology;
