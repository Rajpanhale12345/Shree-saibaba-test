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
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>

      <Upper text="About Us" />

      <div className='main1'>

        <ul>

          <div className='title'>

            <p style={{ textAlign: "left", fontSize: "15px" }}>The Saibaba Heart Institute & Multispeciality Hospital leads the 
              industry in high-end cardiac services as well as a well-established, reputable centre with total Orthopaedic care. 
              The Institute has built an impressive reputation in many areas of healthcare delivery by providing patient-focused 
              and ethical healthcare that is affordable, with the specific vision to be a Centre of Excellence in the healthcare 
              Community, providing state-of-the-art infrastructure and technology to medical professionals, along with a 
              compassionate and healing environment for patients. Our mission includes a commitment to both excellence and 
              accountability for all health care services.</p> <br />

            <p style={{ textAlign: "left", fontSize: "15px" }}>Saibaba Heart Institute & Multispeciality Hospital combines 
              cutting-edge medical technology with personal devotion to provide local patients with an easy-to-access, 
              comprehensive facility where they can receive consistently superior and exceptional care. In addition to 
              being nationally recognised leaders in cardiology and heart disease care, we provide comprehensive Orthopaedic 
              services for all external injuries, as well as comprehensive care and repair of the spine, robotic arthroscopy, 
              complex osteosynthesis, and many other procedures for increased speed of recovery, precision-guided-motion results, 
              and enhanced long-term mobility.</p>  <br />

            <p style={{ textAlign: "left", fontSize: "15px" }}>The Saibaba Heart Institute and Multispeciality Hospital offers a 
              complete and total Healthcare Package. This means that all of our services are included and delivered in one location; 
              cardiac, orthopaedic, robotic joint replacement, highly accurate diagnostic imaging service, and 24x7 emergency 
              services are all available at one location, ensuring the best possible outcomes for each patient. Our staff embraces 
              an environment of Integrity and Innovation while serving the best health interests of each patient in their community.</p>
            {/* <i> Our <span style={{color : 'blue'}}>Vision </span>and<span  style={{color : 'blue'}}> Mission</span></i> */}
          </div>

          <br /><br /><br />


          <h2 className='medical' style={{ color: 'blue', fontSize: '35px', fontWeight: '500' }}>Visionary Leaders</h2><br /><br /><br />
          <div className='founders'>
            <div className='founder1'>
              <img src={founder2} alt="founder2" /><br />
              <p>Dr. Aniruddha Dharmadhikari </p>
              <span style={{ color: 'blue' }}>M.B.B.S., M.D. (Internal Medicine), D.M. (Cardiology)</span><br /><br />
              <p style={{ textAlign: "left", fontSize: "15px" }}>Dr. Dharmadhikari is a cardiologist who has performed thousands of
                successful cardiac procedures and has shaped a hospital into one of the leading hospitals for heart treatment and
                advanced cardiac care in Nashik. He is a highly respected physician who practices interventional cardiology and
                evidence-based medicine. His dedication to patient care has made the hospital the preferred choice for cardiac
                treatment, angiograms, and other advanced cardiac services in Nashik and beyond.</p>
            </div>
            <div className='founder'>
              <img src={founder1} alt="founder1" /><br />
              <p>Dr. Pallavi Dharmadhikari</p>
              <span style={{ color: 'blue' }}>M.B.B.S., M.D. And D.N.B. (Radiodiagnosis)</span> <br />  <br />
              <p style={{ textAlign: "left", fontSize: "15px" }}>Dr. Pallavi has created one of the most reputable radiology
                departments in the region by ensuring that patients receive timely and accurate diagnoses through high-quality
                imaging equipment and interpretation. As a trusted physician, Dr. Pallavi is committed to providing the best
                possible care to her patients.</p>
            </div>
          </div><br /><br />
          <hr />
        </ul>
      </div>
      <br /><br />
      <div className='misvis'>
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}> <i style={{ color: 'blue' }}>Vision </i> </span> <br />
          To be a Center of excellence in healthcare delivering ethical and advanced medical services to improve community.</p>
        <img src={vision} alt="vision" />
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
      </div> <br /><br />


      <br />
      <hr /><br /><br />
      <div className='service'>
        <p ><i style={{ color: 'blue', fontSize: '30px', fontWeight: '500' }}>Services and Working Time</i></p><br /><br />
        <div className='service-sec'>
          <div className='service-section'>
            <span><gen style={{ color: 'red' }}>General OPD</gen> <br />
              <nm style={{ color: 'white' }}>24 x 7<br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br /><br />
            </span><br /></div>
          <div className='service-section1'>
            <span><gen style={{ color: 'red' }}>Ambulance</gen><br />
              <nm style={{ color: 'white' }}>24 x 7<br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br /><br />
            </span> <br /></div>
          <div className='service-section2'>
            <span><gen style={{ color: 'red', }}>Emergency Care</gen><br />
              <nm style={{ color: 'white' }}>24 x 7<br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm> <br />
            </span> <br /></div>
          <div className='service-section3'>
            <span><gen style={{ color: 'red', }}>Consultation No.</gen> <br />
              <nm style={{ color: 'white' }}>24 x 7<br />
                <a href='tel:7041704114'>Call on: 7041 7041 14</a></nm><br /><br />
            </span> </div>
        </div>
      </div><br /><br />


    </>

  )
}
export default About;