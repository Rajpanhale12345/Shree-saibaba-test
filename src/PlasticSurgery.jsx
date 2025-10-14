import React from 'react';
import Deptext from './Deptext';
import Ortho1 from './Images/plastic.jpg';
import { Helmet } from "react-helmet-async";

 function PlasticSurgery() {
  return (
    <>

    <Helmet>
      <title>Plastic Surgery | Shree Saibaba Hospital</title>
    </Helmet>


    <div>
      <Deptext 
      image={Ortho1}
      title='Best Plastic Surgery Hospital'
      subtitle='Nashik, Maharashtra'
      description="Plastic Surgery is a highly specialized branch of medicine that focuses on restoring, reconstructing, and enhancing the form and function of the body. It encompasses both reconstructive procedures, which correct defects caused by trauma, birth conditions, or medical diseases, and cosmetic procedures, which enhance appearance and boost self-confidence."   
      description1='Shree Saibaba Multispeciality Hospital is one of the leading centers for Plastic & Reconstructive Surgery in Nashik, offering state-of-the-art techniques delivered by an expert team of plastic surgeons, microsurgeons, anesthetists, and rehabilitation specialists. Our department is committed to precision, safety, and aesthetics, ensuring the best possible outcomes for every patient.'
      description2='With advanced modular operation theaters, high-powered microscopes, laser-assisted systems, and cutting-edge reconstructive tools, we provide a full spectrum of cosmetic and reconstructive surgeries using the latest global techniques.'
      description3='From correcting deformities and repairing trauma injuries to enhancing appearance with minimally invasive aesthetic procedures, our team delivers personalized, patient-centric care with complete attention to safety and recovery.'
     bullet='Common precautions of Plastic Surgery'
bullet1='1) Follow your surgeon’s instructions carefully.'
bullet2='2) Avoid smoking and alcohol before and after surgery.'
bullet3='3) Take prescribed medicines on time.'
bullet4='4) Keep the operated area clean and dry.'
bullet5='5) Avoid strenuous activity or heavy lifting.'
bullet6='6) Attend all follow-up appointments.'
bullet7='7) Report swelling, redness, or unusual pain immediately.'

      
      choose='At Shree Saibaba Multispeciality Hospital, our Plastic & Reconstructive Surgery Department blends art and science to deliver life-changing results with clinical excellence, advanced technology, and compassionate care.'
      />
    </div>
    </>
  )
}
export default PlasticSurgery;
