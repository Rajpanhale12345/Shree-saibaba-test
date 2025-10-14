import React from 'react';
import Deptext from './Deptext';
import img from './Images/urologydep.jpg';
import { Helmet } from "react-helmet-async";

 function Urology() {
  return (
    <>

    <Helmet>
      Urology | Shree Saibaba Hospital
    </Helmet>


    <div>
      <Deptext 
      image={img}
      title='Best Urology Hospital'
      subtitle='Nashik, Maharashtra'
      description='Urology is a critical branch of medical science that deals with diseases and conditions related to the urinary tract in both men and women, as well as the male reproductive system. As urological issues can significantly impact quality of life, timely diagnosis, precision treatment, and advanced surgical care are essential. Urologists play a vital role in managing a wide range of conditions, from kidney stones and prostate disorders to urinary incontinence and urologic cancers.'
      description1='Shree Saibaba Multispeciality Hospital is widely recognized as one of the best hospitals in Nashik for Urology, offering a unique blend of clinical excellence, cutting-edge technology, and compassionate care. The hospital is equipped with the latest diagnostic and surgical infrastructure, enabling high-accuracy treatments and faster patient recovery.'
      description2='Our Urology Department is led by a team of highly experienced urologists and surgeons with national and international training backgrounds. The team excels in treating both routine and complex urological disorders through minimally invasive and robotic-assisted procedures, as well as conventional surgical techniques when needed. From laser stone surgeries and prostate treatments to reconstructive urology and cancer care, we deliver comprehensive solutions tailored to each patient’s unique needs.'
      description3='We offer a fully integrated urology care experience, combining advanced diagnostics, evidence-based treatment plans, and round-the-clock critical care support. Our multidisciplinary approach involves collaboration with nephrologists, oncologists, radiologists, and physiotherapists to ensure complete and seamless care.'
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
      choose='At Shree Saibaba Multispeciality Hospital, our Urology Department is regarded as a center of excellence in Nashik, providing technologically advanced and minimally invasive solutions for a wide range of urological conditions. With a focus on early detection, precise intervention, and patient comfort, we ensure optimal outcomes in both inpatient and outpatient settings. Our hospital features modern modular operation theaters, high-definition imaging systems, and 24/7 intensive care support to handle complex urological cases with high success rates.'
      />
    </div>
    </>
  )
}
export default Urology;
