import React from 'react';
import './About.css';
import Upper from './Upper';
import mission from './Images/mission.jpg';
import vision from './Images/vision.jpg';
import founder1 from './Images/dr.pallavi.png';
import founder2 from './Images/dr.aniruddha.png'; 
import { Helmet } from 'react-helmet';


 function About() {
  return (
    <>

    <helmet>

      <title>About | Shree Saibaba Hospital</title>

    </helmet>

<Upper text="About Us" />

     <div className='main1'>

     <br /><br />
     
     <ul>

  <div className='title'>
        {/* <i> Our <span style={{color : 'blue'}}>Vision </span>and<span  style={{color : 'blue'}}> Mission</span></i> */}
      </div><br /><br /><br />
      <h2 className='medical' style={{color:'blue', fontSize:'35px',fontWeight:'500'}}>Visionary Leaders</h2><br /><br /><br />
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
          Our vision is to offer international standards of cardio-thoracic treatment and care to everyone in society. We aim to provide care that goes beyond mere medicine, but is inclusive of the patient'soverall well-being.
        </p>
        <img src={vision} alt="vision" />
        <h3>
        </h3>
      </div>
      <br /><br />
      <div className='misvis2'>
        <img src={mission} alt="" />
        <p>
          <span style={{ color: 'blue', fontSize: '40px' }}> <i style={{ color: 'blue' }}> Mission </i></span> <br />
          Our purpose is to deliver the highest quality healthcare. We aim to adopt advanced technology and uphold the highest ethical standards, while respecting the dignity of our patients, doctors, and medical staff.
        </p>
      </div> <br /><br />


    <br />
   <hr /><br /><br />
    <div className='service'>
        <p ><i style={{color: 'blue',fontSize : '30px', fontWeight : '500'}}>Services and Working Time</i></p><br /><br />
        <div className='service-sec'>
<div className='service-section'>
        <span><gen style={{color : 'red' }}>General OPD</gen> <br />
    <nm style={{color:'white'}}>Mon-Sat : 10:00AM - 08:00PM <br />
    <a href='tel:9158887554'>Call on: 9158887554</a></nm> <br /><br />
    </span><br /></div>
    <div className='service-section1'>
      <span><gen style={{color : 'red'}}>Ambulance</gen><br />
     <nm style={{color:'white'}}>Mon-Sat : 10:00AM - 08:00PM <br />
    <a href='tel:9158887554'>Call on: 9158887554</a></nm> <br /><br />
    </span> <br /></div>
    <div className='service-section2'>
      <span><gen style={{color : 'red', }}>Emergency Care</gen><br />
    <nm style={{color:'white'}}>Mon-Sat : 10:00AM - 08:00PM <br />
    <a href='tel:9158887554'>Call on: 9158887554</a></nm> <br />
    </span> <br /></div>
    <div className='service-section3'>
<span><gen style={{color : 'red', }}>Consultation No.</gen> <br />
     <nm style={{color:'white'}}>Mon-Sat : 10:00AM - 08:00PM <br />
    <a href='tel:9158887554'>Call on: 9158887554</a></nm><br /><br />
    </span> </div>
  </div>
</div><br /><br />

 
  </>
 
  )
}
export default About;