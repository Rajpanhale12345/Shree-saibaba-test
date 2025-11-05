import React from 'react'
import Upper from './Upper';

import './Blogs.css'

import kidney from './Images/kidney.png';
import spine from './Images/spine.png';
import cardio from './Images/Cardio_blog.jpg';
import nutrition from './Images/nutrition.jpg'
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
          <h2><i style={{ color: 'red', }}>Spine Health</i></h2></div>
        </Link>


        

        





      </div><br /><br />
    </>
  )
}
export default Blogs;
