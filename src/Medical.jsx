import React from 'react'
import Upper from './Upper';
import Card1 from './Card1';
import './Medical.css';
import dd from './Images/2d.png'
import BMI from './Images/BMI.png'
import BSL from './Images/BSL.png'
import CBC from './Images/CBC.png'
import creatinine from './Images/creatinine.png'
import ECG from './Images/ECG.png'
import lipid from './Images/lipid.png'
import physician from './Images/physician.png'
import uric from './Images/uric.png'
import urine from './Images/urine.png'
import usg from './Images/usg.png'
import xray from './Images/Xray.png'
import thyroid from './Images/Thyroid.png'
import hb from './Images/hb.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import orthomed from './Images/orthomed.png'
import Checkup from './CheckCard';
import fullbody from './images/fullbody.jpg'
import { alignItems, justifyContent, justifyItems } from '@mui/system';
import stress from './Images/stress.jpg';
import gynac from './Images/gynac.jpg';
import mammography from './Images/mammography.jpg';
import pulmonary from './Images/pulmonary.jpg';
import liver from './Images/liver.jpg';
import ortho from './Images/ortho.jpg';
import { Helmet } from 'react-helmet';
import cardiology from "./Images/cardiology.jpg"


function Medical() {
  return (
    <>


      <helmet>
        <title>Speciality | Saibaba Multispeciality Hospital</title>
      </helmet>


      <Upper
        text="Preventive Health Packages" /><br />
      <div className='checkup-container'>
        <Checkup
          image={fullbody}
          title='Cardiac Check up'
          text='A cardiac check-up is a focused but comprehensive evaluation of your heart and blood-vessel health.
It goes beyond a routine full-body assessment by concentrating on risk factors, early signs of heart disease, and the efficiency of your cardiovascular system.'
          share='Book an appointment'
          
        />
         <Checkup
          image={fullbody} 
          title='Full body Check up'
          text='A full-body check-up is a complete health screening that evaluates all major body systems. It helps detect hidden conditions, establishes your overall health baseline, and guides preventive care, ensuring you stay ahead of potential risks.
'
          share='Book an appointment'
          learn={<Link to='/fullbodycheckup' style={{}}>Learn More</Link>}
        />
        {/* <Checkup
    image={stress}
    title='Stress Check-up'
    text='A Gynac check-up is a comprehensive health assessment for women that includes various tests and screenings to evaluate reproductive health and detect potential issues early.'
    share='Book an appointment'
  
  />
  <Checkup
    image={gynac}
    title='Gynac Check-up'
    text='A Gynac check-up is a comprehensive health assessment for women that includes various tests and screenings to evaluate reproductive health and detect potential issues early.'
    share='Book an appointment'
  
  />
  <Checkup className='checkup'
    image={pulmonary}
    title='Pulmonary Function test'
    text='A pulmonary function test is a group of tests that measure how well your lungs work. These tests can help diagnose lung diseases and monitor your lung health.'
    share='Book an appointment'
 
  /> 
<Checkup
    image={mammography}
    title='Mammography'
    text="A mammogram is an X-ray of the breast used to detect early signs of breast cancer, often before symptoms appear. It is a crucial screening tool for women's health, especially after age 40."
    share='Book an appointment'
 
  /> 
  <Checkup
    image={liver}
    title='Liver Function Test'
    text='A liver function test is a blood test that measures various enzymes, proteins, and substances produced by the liver to assess its health and function.'
    share='Book an appointment'
  
  /> 
  <Checkup
    image={ortho}
    title='Ortho Consultation Test'
    text='A pulmonary function test is a group of tests that measure how well your lungs work. These tests can help diagnose lung diseases and monitor your lung health.'
    share='Book an appointment'
  
  />  */}
      </div>
      <br /><br />
      {/* <h1 className='titlemed1'>Optional Tests :</h1><br /><br />
       <div className='card123'>
     <Card1
    image={stress}
    text='Stress Test'
    text2='A stress test evaluates how your heart performs under physical exertion, often using a treadmill or medication to simulate exercise. It helps detect heart conditions like coronary artery disease.'
    />
     <Card1
    image={gynac1}
    text='Gynac Check Up'
    text2="A gynecological check-up includes a pelvic exam, breast exam, and possibly a Pap smear to screen for cervical cancer. It's essential for monitoring reproductive health and detecting early signs of gynecological issues."
    />
     <Card1
    image={pulmonary}
    text='Pulmonary Function test'
    text2="This test measures how well your lungs are working by assessing airflow, lung volume, and gas exchange. It's commonly used to diagnose conditions like asthma, COPD, and other respiratory disorders."
    />
    <Card1
    image={mammography}
    text='Mammography'
    text2="A mammogram is an X-ray of the breast used to detect early signs of breast cancer, often before symptoms appear. It's a crucial screening tool for women's health, especially after age 40."
    />
    <Card1
    image={liver}
    text='Liver Function test'
    text2="This blood test checks for levels of enzymes and proteins in the blood that indicate how well the liver is working. It helps detect liver inflammation, infection, or damage."
    />
    <Card1
    image={orthomed}
    text='	Ortho Consultation'
    text2="An orthopedic consultation evaluates the musculoskeletal system to diagnose and treat issues related to bones, joints, muscles, and ligaments. It's recommended for pain, injury, or mobility concerns."
    />
    </div> */}
    </>
  )
}
export default Medical;
