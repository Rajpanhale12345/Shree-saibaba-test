import React from 'react';
import Deptext from './Deptext';
import Neuro1 from './Images/Neurologydep.jpg';
import { Helmet } from "react-helmet-async";

 function Neurology() {
  return (
    <>

    <Helmet>
      <title>Neurology | Shree Saibaba Hospital</title>
    </Helmet>
  
    <div>
      <Deptext 
      image={Neuro1}
      title='Best Neurology Hospital'
      subtitle='Nashik, Maharashtra'
      description="Neurology is a specialized branch of medicine focused on diagnosing, treating, and managing disorders of the brain, spinal cord, nerves, and muscles. As the nervous system controls virtually every function in the body, neurological diseases can have profound impacts on mobility, cognition, and overall quality of life. Timely intervention, accurate diagnosis, and multidisciplinary care are essential to achieving the best outcomes in neurological health."
      description1='Shree Saibaba Multispeciality Hospital is recognized as one of the top hospitals in Nashik for Neurology, offering comprehensive neurological services backed by state-of-the-art diagnostic facilities, advanced neuro-interventions, and a team of expert neurologists and neurosurgeons. With a focus on early detection, personalized treatment plans, and long-term management, the hospital is committed to delivering high-quality care across a wide range of neurological conditions.'
      description2='Our Neurology Department is led by a team of highly skilled specialists with expertise in treating complex brain, spine, and nerve disorders. Supported by advanced neuroimaging, electrophysiology labs, and 24/7 emergency services, we are fully equipped to handle stroke, epilepsy, movement disorders, neurodegenerative diseases, spine conditions, and more—with precision and compassion.'
      description3='The department follows a multidisciplinary approach, working closely with neurosurgeons, rehabilitation experts, psychologists, and critical care specialists to ensure holistic care and optimal recovery.'
      bullet='OPDs'
      bullet1='1) CONSULTATION'
      bullet2='2) EEG'
      bullet3='3) EMG'
      bullet4='4) CT SCAN'
      bullet5='5) MRI'

         ipd="IPDs"
      detail1='1) STROKE MANAGEMENT'
      detail2='2) OTHER NEURLOGICAL PROBLEMS'
  

      choose='At Shree Saibaba Multispeciality Hospital, we are proud to be a center of excellence for Neurology in Nashik. Our neurology team is known for its diagnostic accuracy, patient-centric approach, and use of the latest technology to manage both acute and chronic neurological conditions. Equipped with advanced neuroimaging (MRI, CT, EEG), modular ICUs, and specialized stroke units, we ensure round-the-clock care for emergencies and long-term conditions alike.'
      />
    </div>
    </>
  )
}
export default Neurology;
