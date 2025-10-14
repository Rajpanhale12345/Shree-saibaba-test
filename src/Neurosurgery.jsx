import React from 'react';
import Deptext from './Deptext';
import img from './Images/Neurosurgerydep.jpg';
import { Helmet } from "react-helmet-async";

 function Neurosurgery() {
  return (
    <>

    <Helmet>
      <title>Neurosurgery | Shree Saibaba Hospital</title>
    </Helmet>



    <div>
      <Deptext 
      image={img}
      title='Best Neurosurgery & Spine Surgery Hospital'
      subtitle='Nashik, Maharashtra'
      description="Neurosurgery is a highly specialized branch of medicine that deals with the diagnosis and surgical treatment of disorders affecting the brain, spine, and peripheral nerves. Among its key focus areas, Spine Surgery plays a critical role in treating degenerative, traumatic, congenital, and tumor-related spinal conditions that impact mobility, sensation, and quality of life."
      description1='Shree Saibaba Multispeciality Hospital is a premier destination for Neurosurgery and Spine Surgery in Nashik, offering advanced surgical techniques delivered by an expert team of neurosurgeons, spine surgeons, neuroanesthetists, and rehabilitation specialists. Our department is built on the foundation of surgical precision, clinical excellence, and compassionate care.'
      description2='Equipped with state-of-the-art operation theaters, high-resolution neuro-navigation systems, intraoperative imaging, and advanced neuro-monitoring technologies, we perform a full range of complex brain and spine procedures with enhanced safety and faster recovery.'
      description3='From life-saving brain surgeries to minimally invasive spinal procedures, our team adopts a patient-centric approach, ensuring personalized care, multidisciplinary planning, and long-term rehabilitation support.'
     bullet='OPDs'
      bullet1='1) CONSULTATION'
      bullet2='2) EEG'
      bullet3='3) EMG'
      bullet4='4) CT SCAN'
      bullet5='5) MRI'

         ipd="IPDs"
      detail1='1) STROKE MANAGEMENT'
      detail2='2) OTHER NEURLOGICAL PROBLEMS'
      choose="At Shree Saibaba Multispeciality Hospital, our Neurosurgery and Spine Surgery Department is known for tackling some of the most complex and delicate surgical challenges in the region. With a focus on early diagnosis, minimally invasive approaches, and advanced post-operative care, we ensure that patients recover faster with improved neurological outcomes."
      />
    </div>
    </>
  )
}
export default Neurosurgery;
