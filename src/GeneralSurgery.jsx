import React from 'react';
import Deptext from './Deptext';
import general from './Images/GeneralSurgery.jpg';
import { Helmet } from 'react-helmet';

 function GeneralSurgery() {
  return (
    <>

            
    <helmet>
      <title>General Surgery | Saibaba Multispeciality Hospital</title>
    </helmet>
    
    <div>
      <Deptext 
      image={general}
      title='Best General Surgery Hospital'
      subtitle='Nashik, Maharashtra'
      description="General Surgery is one of the most vital medical specialties, dealing with the diagnosis, surgical treatment, and post-operative management of a wide range of diseases and conditions affecting various organs and tissues. It plays a crucial role in managing emergencies, trauma cases, and elective procedures, ensuring safe and effective outcomes for patients."
      description1='Shree Saibaba Multispeciality Hospital is recognized as one of the leading centers for General Surgery in Nashik, offering comprehensive surgical care backed by cutting-edge technology, skilled surgeons, and personalized patient management. Our expert team of general surgeons, anesthetists, intensivists, and nursing specialists ensures precision, safety, and comfort at every step of the treatment process.'
      description2='Equipped with advanced modular operation theaters, high-definition laparoscopic systems, and modern anesthesia technologies, our hospital specializes in minimally invasive techniques that enable faster recovery, reduced complications, and shorter hospital stays.'
      description3='From managing lifestyle-related disorders to treating complex multi-organ diseases, our team follows a patient-centric approach, focusing on personalized care, preventive health strategies, and long-term wellness.'
      bullet='Common precautions of General Surgery'
      bullet1='1) Follow fasting rules before surgery (no food or drink as instructed).'
      bullet2='2) Inform your doctor about all medicines, past illnesses & allergies.'
      bullet3='3) Stop smoking and alcohol — they slow healing and increase risks.'
      bullet4='4) Control blood pressure, sugar, and other chronic conditions.'
      bullet5='5) Keep the surgical wound clean, dry, and covered as advised.'
      bullet6='6) Take medicines (painkillers, antibiotics) exactly as prescribed.'
      bullet7='7) Avoid strenuous activity until your surgeon allows.'
      bullet8=''
      choose='At Shree Saibaba Multispeciality Hospital, our General Surgery Department combines clinical excellence, modern surgical advancements, and compassionate care to ensure safe, effective, and reliable treatment for every patient.'
      />
    </div>
    </>
  )
}
export default GeneralSurgery;
