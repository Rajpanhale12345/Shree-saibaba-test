import React from 'react';
import './About.css';
import Upper from './Upper';
import mission from './Images/mission.jpg';
import vision from "./Images/Vision.jpg";
import founder1 from './Images/dr.pallavi.png';
import founder2 from './Images/dr.aniruddha.png';
import { Helmet } from "react-helmet-async";
import quality from './Images/qualitypolicy.webp'


function About() {


  return (
    <>

      <Helmet>
        <title>About | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content=''/>
        <meta name='keywords' content=''/>
        <meta name='og:description' content=''/>
      </Helmet>

      <Upper text="About Us" />

      <div className='main1'>

        <br /><br />

        <ul>

          <div className='title'>
            {/* <i> Our <span style={{color : 'blue'}}>Vision </span>and<span  style={{color : 'blue'}}> Mission</span></i> */}
          </div><br /><br /><br />
          <h2 className='medical' style={{ color: 'blue', fontSize: '35px', fontWeight: '500' }}>Visionary Leaders</h2><br /><br /><br />
          <div className='founders'>
            <div className='founder1'>
              <img src={founder2} alt="founder2" /><br />
              <p>Dr. Aniruddha Dharmadhikari </p>
              <span style={{ color: 'blue' }}>M.B.B.S., M.D. (Internal Medicine), D.M. (Cardiology)</span><br /><br />
            </div>
            <div className='founder'>
              <img src={founder1} alt="founder1" /><br />
              <p>Dr. Pallavi Dharmadhikari</p>
              <span style={{ color: 'blue' }}>M.B.B.S., M.D. And D.N.B. (Radiodiagnosis)</span>
            </div>
          </div><br /><br />
          <hr />
        </ul>

      </div>
      <br /><br />
      <div className='misvis'>
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}> <i style={{ color: 'blue' }}>Vision </i> </span> <br />
          To be a Center of excellence in healthcare delivering ethical and advanced medical services to improve community.        </p>
        <img src={vision} alt="vision" />
        <h3>
        </h3>
      </div>
      <br /><br />
      <div className='misvis2'>
        <img src={mission} alt="" />
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}> <i style={{ color: 'blue' }}> Mission </i></span> <br />
          Our Mission is to provide patient-centric affordable, and high quality health care. </p>
      </div>
       <div className='misvis'>
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}> <i style={{ color: 'blue' }}>Quality Policy </i> </span> <br />
        We are commited to providing safe, ethical, patient-centered healthcare of the highest quality.     </p>
        <img src={quality} alt="quality" />
        <h3>
        </h3>
      </div> <br /><br />


      <br />
      <hr /><br /><br />
      <div className='service'>
        <p ><i style={{ color: 'blue', fontSize: '30px', fontWeight: '500' }}>Services and Working Time</i></p><br /><br />
        <div className='service-sec'>
          <div className='service-section'>
            <span><gen style={{ color: 'red' }}>General OPD</gen> <br />
              <nm style={{ color: 'white' }}>Mon-Sat : 10:00AM - 08:00PM <br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br /><br />
            </span><br /></div>
          <div className='service-section1'>
            <span><gen style={{ color: 'red' }}>Ambulance</gen><br />
              <nm style={{ color: 'white' }}>Mon-Sat : 10:00AM - 08:00PM <br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br /><br />
            </span> <br /></div>
          <div className='service-section2'>
            <span><gen style={{ color: 'red', }}>Emergency Care</gen><br />
              <nm style={{ color: 'white' }}>Mon-Sat : 10:00AM - 08:00PM <br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br />
            </span> <br /></div>
          <div className='service-section3'>
            <span><gen style={{ color: 'red', }}>Consultation No.</gen> <br />
              <nm style={{ color: 'white' }}>Mon-Sat : 10:00AM - 08:00PM <br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm><br /><br />
            </span> </div>
        </div>
      </div><br /><br />


    </>

  )
}
export default About;