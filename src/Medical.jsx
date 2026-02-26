import React from 'react'
import Upper from './Upper'; 
import './Medical.css'; 
import { Link } from 'react-router-dom';
import fullbodycheckup from "./Images/fullbodycheckup.jpg"

import Checkup from './CheckCard';
import fullbody from './Images/fullbody.jpg'
import { alignItems, justifyContent, justifyItems } from '@mui/system'; 
import { Helmet } from "react-helmet-async"; 


function Medical() {
  return (
    <>

      <Helmet>
        <title>Packages | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>

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
          image={fullbodycheckup}
          title='Full body Check up'
          text='A full-body check-up is a complete health screening that evaluates all major body systems. It helps detect hidden conditions, establishes your overall health baseline, and guides preventive care, ensuring you stay ahead of potential risks.
'       
          share='Book an appointment'
          learn={<Link to='/fullbodycheckup' style={{}}>Learn More</Link>}
        />
         
      </div>
      <br /><br />
      
    </>
  )
}
export default Medical;
