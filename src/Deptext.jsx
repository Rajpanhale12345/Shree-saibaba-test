import React from 'react'
import './Deptext.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Deptext({image,title,subtitle,description,description1,description2,description3,bullet,bullet1,bullet2,bullet3,bullet4,bullet5,bullet6,bullet7,bullet8,choose}) {
  return (
    <div>
      <>
      <img src={image} alt="" className='imagedep'/>
      <ul>
        <br />   <br />
       
            <h1>{title}</h1>
  
        <br />   <br />
        
            <h2 style={{color : 'black'}}>{subtitle}</h2>

        <br />   <br />
        
            {description}
   
        <br />   <br />
      
            {description1}
        
        <br />   <br />
            {description2}
       <br />   <br />
       
            {description3}
<br />   <br />
       
            {bullet}
            <i>
              <ul className='border1'>
                <li style={{color : 'red'}} className='list'>{bullet1}</li>
                <li style={{color : 'red'}} className='list'>{bullet2}</li>
                <li style={{color : 'red'}} className='list'>{bullet3}</li>
                <li style={{color : 'red'}} className='list'>{bullet4}</li>
                <li style={{color : 'red'}} className='list'>{bullet5}</li>
                <li style={{color : 'red'}} className='list'>{bullet6}</li>
                <li style={{color : 'red'}} className='list'>{bullet7}</li>
                <li style={{color : 'red'}} className='list'>{bullet8}</li>
                <br />
              </ul>
            </i>
        <br />
        
      </ul><br /><i>
<h2 className='choose'>Why Choose us</h2></i><br />
<p style={{color : 'black'}}>{choose}</p><br />
 <Link to='/contact'><Button variant="contained" color='primary'>Reach us out</Button></Link>
 <br /><br />
      </>
    </div>
  )
}
export default Deptext;
