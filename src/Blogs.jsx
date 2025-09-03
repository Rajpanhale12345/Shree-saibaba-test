import React from 'react'
import Upper from './Upper';
import dd from './Images/2d.png';
import './Blogs.css'
import alchohol from './Images/alchohol.png';
import kidney from './Images/kidney.png';
import spine from './Images/spine.png';
import { Link } from 'react-router-dom';
 


function Blogs() {
  return (
    <>

    
    <helmet>
      <title>Blogs | Saibaba Multispeciality Hospital</title>
    </helmet>


    <Upper 
    text="Blogs"/>
        <br /><br />
   <div className="imageblog1">    
   <Link to='/kidney'><div className="imageblog"><img src={kidney} alt="" /><br />
<br />
 <h2><i style={{color :'red' }}>Kidney Stone</i> </h2></div></Link>
  <Link to='/spine'><div className="imageblog"><img src={spine} alt="" /><br />
   <br />
  <h2><i style={{color :'blue', }}> Spine Health</i></h2></div></Link>
  </div><br /><br />
  </>
  )
}
export default Blogs;
