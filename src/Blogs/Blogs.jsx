import React from 'react'
import Upper from '../Upper';

import './Blogs.css'

import kidney from './Images/kidney.png';
import spine from './Images/spinemain.jpg';
import cardio from './Images/Cardio_blog.jpg';
import nutrition from './Images/nutrition.jpg';
import understanding from './Images/understanding_stroke.png';
import Cardiac_Surgery from './Images/Cardia_Surgery1.jpg';
import Dengue from './Images/Dengue.png';
import Vitamin_B12 from './Images/Vitamin_B.png';
import Heart_Attack1 from './Images/Heart_Attack.png';
import Heart_Disease from './Images/Heart_Disease.png';
import InterR from './Images/IR.png';
import Pneumoniaa from './Images/Pneumonia.png';
import CABG from './Images/CABG.png';
import Understanding_CABGG from './Images/Understanding_CABG.png';
import Kidney_Healthh from './Images/Kidney_Health.jpg';
import holter from './Images/Holterr.png';
import SpineJ from './Images/Spine_Joint1.png';
import Varicose from './Images/Varicose_Veins.png';
import Angiographiess from './Images/Angioplasty.png';
import Angiographyy from './Images/Angiography.png';
import Angiographies from './Images/Angiographies.png';
import Heart_healthy from './Images/Heart_healthy.jpg';
import Stress_Anxiety from './Images/Stress_Anxiety.png';
import Robotic_Surgery from './Images/Advanced_Robotic_Surgery.jpg';
import Robotic_Joint from './Images/Robotic Joint Replacement.jpg';
import Neurology_blog from "./Images/Neurology_Blog.jpg"
import Asthma from "./Images/Asthma.webp";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";




function Blogs() {
  return (
    <>

      <Helmet>
        <title>Blogs | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>

      <Upper
        text="Blogs" />
      <br /><br />
      <div className="imageblog1">
        

<Link to='/Asthma'><div className="imageblog">
          <img src={Asthma} alt="Asthma" /> <br /> <br />
          <h2><i style={{ color: 'red', }}>Asthma</i></h2></div>
        </Link>

        <Link to='/Neurology_Blog'><div className="imageblog">
          <img src={Neurology_blog} alt="Cardio" /> <br /> <br />
          <h2><i style={{ color: 'red', }}>Neurology Brain Disorders</i></h2></div>
        </Link>
        
        <Link to='/Robotic_Joint'><div className="imageblog">
          <img src={Robotic_Joint} alt="Cardio" /> <br /> <br />
          <h2><i style={{ color: 'red', }}>Robotic Joint Replacement Surgery</i></h2></div>
        </Link>
        
        <Link to='/Robotic_Surgery'><div className="imageblog">
          <img src={Robotic_Surgery} alt="Cardio" /> <br /> <br />
          <h2><i style={{ color: 'red', }}>Robotic Surgery</i></h2></div>
        </Link>

        <Link to='/Cardio'><div className="imageblog">
          <img src={cardio} alt="Cardio" /> <br /> <br />
          <h2><i style={{ color: 'red', }}>Pacemaker Care</i></h2></div>
        </Link>

        <Link to='/kidney'><div className="imageblog">
          <img src={kidney} alt="Kidney" />   <br />  <br />
          <h2><i style={{ color: 'red' }}>Kidney Stone</i> </h2></div>
        </Link>

        <Link to='/spine'><div className="imageblog">
          <img src={spine} alt="Spine" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Spine Health</i></h2></div>
        </Link>

        <Link to='/nutrition'><div className="imageblog">
          <img src={nutrition} alt="Nurtition, Sleep & Lifestyle" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Healthy Life</i></h2></div>
        </Link>

        <Link to='/understanding'><div className="imageblog">
          <img src={understanding} alt="Understanding Stroke" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Understanding Stroke</i></h2></div>
        </Link>

        <Link to='/Cardiac_Surgery'><div className="imageblog">
          <img src={Cardiac_Surgery} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>कार्डियाक सर्जरी</i></h2></div>
        </Link>

        <Link to='/Dengue'><div className="imageblog">
          <img src={Dengue} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Dengue Disease</i></h2></div>
        </Link>

        <Link to='/Vitamin_B12'><div className="imageblog">
          <img src={Vitamin_B12} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Vitamin B12</i></h2></div>
        </Link>

        <Link to='/Heart_Attack'><div className="imageblog">
          <img src={Heart_Attack1} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Heart Attack</i></h2></div>
        </Link>

        <Link to='/Heart_Disease'><div className="imageblog">
          <img src={Heart_Disease} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Heart Disease</i></h2></div>
        </Link>

        <Link to='/Interventional_Radiology'><div className="imageblog">
          <img src={InterR} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>IR</i></h2></div>
        </Link>

        <Link to='/Pneumonia'><div className="imageblog">
          <img src={Pneumoniaa} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Pneumonia</i></h2></div>
        </Link>

        <Link to='/Lifestyle'><div className="imageblog">
          <img src={CABG} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Lifestyle</i></h2></div>
        </Link>

        <Link to='/Understanding_CABG'><div className="imageblog">
          <img src={Understanding_CABGG} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Understanding CABG</i></h2></div>
        </Link>

        <Link to='/Kidney_Health'><div className="imageblog">
          <img src={Kidney_Healthh} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Kidney Health</i></h2></div>
        </Link>

        <Link to='/Spine_Joint'><div className="imageblog">
          <img src={SpineJ} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Spine & Joint Replacement</i></h2></div>
        </Link>

        <Link to='/Varicose'><div className="imageblog">
          <img src={Varicose} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Varicose Veins</i></h2></div>
        </Link>

        <Link to='/Angiographies'><div className="imageblog">
          <img src={Angiographiess} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Angioplasty</i></h2></div>
        </Link>

        <Link to='/Holter'><div className="imageblog">
          <img src={holter} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Holter Monitors</i></h2></div>
        </Link>

        <Link to='/Angiography'><div className="imageblog">
          <img src={Angiographyy} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Benefits of Radial Angiography</i></h2></div>
        </Link>

        <Link to='/Angiographiess'><div className="imageblog">
          <img src={Angiographies} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Types of Angiographies</i></h2></div>
        </Link>

        <Link to='/Heart_Healthy'><div className="imageblog">
          <img src={Heart_healthy} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Heart-Healthy Nutrition</i></h2></div>
        </Link>

        <Link to='/Stress_Anxiety'><div className="imageblog">
          <img src={Stress_Anxiety} alt="Cardiac Surgery" /><br /> <br />
          <h2><i style={{ color: 'red', }}>Stress & Anxiety</i></h2></div>
        </Link>


      </div><br /><br />
    </>
  )
}
export default Blogs;
