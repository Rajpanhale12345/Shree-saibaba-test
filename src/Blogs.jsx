import React from 'react'
import Upper from './Upper';
import dd from './Images/2d.png';
import './Blogs.css'
import alchohol from './Images/alchohol.png';
import kidney from './Images/kidney.png';
import spine from './Images/spine.png';
import cardio from './Images/Cardio_blog.jpg';
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
        <Link to='/Cardio'><div className="imageblog"><img src={cardio} alt="" /><br />
          <br />
          <h2><i style={{ color: 'red', }}>Pacemaker Care</i></h2></div>
        </Link>
        <Link to='/kidney'><div className="imageblog">
          <img src={kidney} alt="" />   <br />  <br />
          <h2><i style={{ color: 'red' }}>Kidney Stone</i> </h2></div>
        </Link>

        <Link to='/spine'><div className="imageblog"><img src={spine} alt="" /><br />
          <br />
          <h2><i style={{ color: 'red', }}>Spine Health</i></h2></div>
        </Link>




      </div><br /><br />
    </>
  )
}
export default Blogs;
