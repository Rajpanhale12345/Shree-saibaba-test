import React from 'react';
import Deptext from './Deptext';
import nephrology from './Images/nephrology.jpg';
import { Helmet } from "react-helmet-async";

function Nephrology() {
  return (
    <>


      <Helmet>
        <title>Nephrology | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


      <div>
        <Deptext
          image={nephrology}
          title='Best Nephrology & Kidney Care Hospital'
          subtitle='Nashik, Maharashtra'
          description="Nephrology is a highly specialized branch of medicine that deals with the diagnosis and treatment of kidney-related diseases and disorders. Since kidneys play a vital role in filtering toxins, regulating blood pressure, and maintaining overall body balance, expert care is essential for protecting long-term health."
          description1='Shree Saibaba Multispeciality Hospital is one of the leading centers for Nephrology and Renal Care in Nashik, offering comprehensive services delivered by an experienced team of nephrologists, urologists, dialysis experts, and transplant specialists. Our department is dedicated to providing advanced, evidence-based treatments with a patient-first approach.'
          description2='With state-of-the-art dialysis units, advanced diagnostic labs, interventional nephrology tools, and critical care support, we ensure precise diagnosis, effective management, and compassionate care for all forms of kidney diseases — from acute conditions to chronic renal failure.'
          description3='Our focus extends beyond treatment to preventive care, long-term management, and patient education, ensuring better health outcomes and improved quality of life.'
          bullet='OPDs'
          bullet1='1) CONSULTATION'
          bullet2='2) USG'
          bullet3='3) RADIOGRAPH'
          bullet4='4) CT SCAN'
          bullet5='5) DIALYSIS'

          ipd="IPDs"
          detail1='1) PCNL'
          detail2='2) URSL'
          detail3="3) TURP"
          detail4="4) NEPHROCTOMY"
          choose='At Shree Saibaba Multispeciality Hospital, our Nephrology Department combines cutting-edge technology, specialized expertise, and compassionate care to deliver world-class kidney care tailored to each patient’s needs.'
        />
      </div>
    </>
  )
}
export default Nephrology;
