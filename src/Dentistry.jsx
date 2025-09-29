import React from 'react';
import Deptext from './Deptext';
import dentistry from './Images/Dentistry.jpg';
import { Helmet } from 'react-helmet';

 function Dentistry() {
  return (
    <>

    
    <helmet>
      <title>Dentistry | Saibaba Multispeciality Hospital</title>
    </helmet>


    <div>
      <Deptext 
      image={dentistry}
      title='Best Dentistry & Oral Care Hospital'
      subtitle='Nashik, Maharashtra'
      description="Dentistry is a specialized branch of medicine that focuses on the diagnosis, prevention, and treatment of diseases and conditions affecting the teeth, gums, jaws, and overall oral health. Good oral care is essential not only for maintaining a healthy smile but also for overall well-being, as dental health is closely linked to heart, digestive, and systemic health."
      description1='Shree Saibaba Multispeciality Hospital is one of the leading centers for advanced dental and oral care in Nashik, offering a comprehensive range of treatments delivered by an experienced team of dentists, oral surgeons, orthodontists, periodontists, and prosthodontists. Our department combines cutting-edge technology with a patient-centric approach to ensure safe, precise, and pain-free dental care.'
      description2='Equipped with state-of-the-art dental units, digital X-ray systems, intraoral scanners, laser dentistry tools, and advanced sterilization techniques, we provide world-class care for routine dental issues as well as complex oral and maxillofacial procedures.'
      description3='From preventive dental care to cosmetic enhancements and full-mouth rehabilitations, our team focuses on delivering personalized treatment plans designed to restore function, aesthetics, and confidence'
     bullet='Common precautions of Dentistry'
bullet1='1) Brush and floss regularly.'
bullet2='2) Take prescribed medicines or mouth rinses on time.'
bullet3='3) Avoid hard or sticky foods after dental procedures.'
bullet4='4) Attend follow-up dental checkups.'
bullet5='5) Do not smoke or chew tobacco.'
bullet6='6) Report pain, swelling, or bleeding immediately.'
bullet7='7) Maintain overall oral hygiene.'

      choose='At Shree Saibaba Multispeciality Hospital, our Dentistry Department integrates modern technology, skilled expertise, and compassionate care to ensure healthier smiles and improved quality of life.'
      />
    </div>
    </>
  )
}
export default Dentistry;
