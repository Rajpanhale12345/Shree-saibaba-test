import React from 'react';
import Deptext from './Deptext';
import cardio from './Images/cardiodep.jpg';
import { Helmet } from "react-helmet-async";

function Cardiology() {
  return (
    <>


      <Helmet>
        <title>Cardiology | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


      <div>
        <Deptext
          image={cardio}
          title='Best Cardiology Hospital'
          subtitle='Nashik, Maharashtra'
          description='Cardiology is one of the most crucial and key sectors in the healthcare system, as it deals with one of the most vital organs — the heart. Cardiologists, by default, play a significant role in monitoring and preserving overall body health.'
          description1='Shree Saibaba Multispeciality Hospital is one of the best Cardiology Hospitals in Nashik, designed with a deep understanding of the critical nature of cardiac care. The hospital has made significant investments in state-of-the-art, technology-driven medical equipment related to cardiology with a steadfast objective: to provide the highest quality cardiac services.'
          description2='Shree Saibaba Multispeciality Hospital stands as the best cardiac hospital in Nashik, where highly qualified and seasoned cardiologists—many of whom bring years of experience from leading institutions and have handled some of the most challenging cardiac cases—form the backbone of the cardiac care team. They are equipped to diagnose and treat a wide range of heart conditions, from common ailments like hypertension and chest pain to complex procedures like open-heart surgeries, CABG, and valve replacements.'
          description3='This leading heart hospital in Nashik is fully equipped with in-house diagnostic facilities, ensuring timely and efficient care for patients in cardiac distress. Below are some of the advanced cardiac services offered:'
          bullet='OPDs :'
          bullet1='1) Consultation'
          bullet2='2) ECHO'
          bullet3='3) STRESS TEST'
          bullet4='4) HOLTER MONITOR'
          bullet5='5) AMBULATORY  BLOOD PRESSURE'
          bullet6='6) CARDIAC MRI'
          bullet7='7) ECHO DOPPLER TEE'

          ipd="IPDs :"
          detail1='1) TREATMENT MIOCARDIAL INFRATION. '
          detail2='2) CAG'
          detail3='3) PTCA'
          detail4='4) PACEMAKER'
          detail5='5) ASD  VSD DEVICE CLOSURE'
          detail6='6) EP STUDY'

          choose='Shree Saibaba Multispeciality Hospital is widely recognized as a leading center for cardiac care in Nashik, offering a blend of advanced technology, experienced cardiologists, and compassionate, patient-focused treatment. Our expert team is equipped to handle everything from routine heart conditions to complex procedures like bypass surgeries, valve replacements, and heart transplants. With fully integrated diagnostic and surgical services under one roof, along with round-the-clock emergency care, we ensure rapid, accurate, and seamless cardiac treatment. Patients choose us for our clinical excellence, ethical practices, and unwavering commitment to delivering world-class heart care with a personal touch.'
        />
      </div>
    </>
  )
}
export default Cardiology;
