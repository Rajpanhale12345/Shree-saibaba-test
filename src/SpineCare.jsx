import React from 'react';
import Deptext from './Deptext';
import spinecare from './Images/spinecaredep.jpg';
import { Helmet } from "react-helmet-async";

function SpineCare() {
  return (
    <>

      <Helmet>
        <title>Spine Care | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='Learn how sitting affects your spine and practical steps to protect your back at work and home. Tips from Saibaba Multispeciality Hospital.' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


      <div>
        <Deptext
          image={spinecare}
          title='Best Spine Care Hospital'
          subtitle='Nashik, Maharashtra'
          description='Spine health is a critical pillar of overall well-being, as the spine supports the body’s structure, enables movement, and protects the central nervous system. Spine specialists play a pivotal role in diagnosing, managing, and treating spinal disorders to preserve mobility, alleviate pain, and maintain quality of life.'

          description1='Shree Saibaba Multispeciality Hospital is one of the best Spine Care Hospitals in Nashik, designed with a deep understanding of the complexities of spinal health. The hospital has invested in cutting-edge, technology-driven diagnostic and surgical equipment with a steadfast goal: to provide world-class spine care and ensure optimal outcomes for every patient.'

          description2='Shree Saibaba Multispeciality Hospital stands as the best spine hospital in Nashik, where highly skilled and experienced spine surgeons, orthopedic specialists, and neurosurgeons—many with years of expertise from renowned institutions—form the backbone of the spine care team. They specialize in diagnosing and treating a wide spectrum of spine-related issues, from common problems like chronic back pain and slipped discs to complex procedures such as spinal fusion, deformity corrections, and minimally invasive spine surgeries.'

          description3='This leading spine hospital in Nashik is fully equipped with advanced imaging and in-house diagnostic facilities, ensuring timely evaluation and precise treatment for spinal conditions. Below are some of the advanced spine care services offered:'

          bullet='OPDs'
          bullet1='1) CONSULTATION'
          bullet2='2) EEG'
          bullet3='3) EMG'
          bullet4='4) CT SCAN'
          bullet5='5) MRI'

          ipd="IPDs"
          detail1='1) STROKE MANAGEMENT'
          detail2='2) OTHER NEURLOGICAL PROBLEMS'

          choose='Shree Saibaba Multispeciality Hospital is widely recognized as a premier destination for spine care in Nashik, offering a seamless blend of advanced technology, highly experienced specialists, and compassionate, patient-centered treatment. Our expert team excels in managing everything from chronic back pain to complex spinal deformities and injuries. With state-of-the-art diagnostic and surgical facilities under one roof, along with 24/7 emergency support, we ensure precise diagnosis, minimally invasive interventions, and faster recovery. Patients choose us for our clinical excellence, ethical medical practices, and unwavering dedication to restoring spinal health and enhancing quality of life.'
        />
      </div>
    </>
  )
}
export default SpineCare;
