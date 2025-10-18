import React from 'react'
import './Deptext.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Deptext({ image, title, subtitle, description, description1, description2, description3, bullet, bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, choose, ipd, detail1, detail2, detail3, detail4, detail5, detail6, detail7 }) {
  return (

    <>


      <div>

        <img src={image} alt="" className='imagedep' />
        <ul>
          <br />   <br />

          <h1>{title}</h1>

          <br />   <br />

          <h2 style={{ color: 'black' }}>{subtitle}</h2>

          <br />   <br />

          {description}

          <br />   <br />

          {description1}

          <br />   <br />
          {description2}
          <br />   <br />

          {description3}
          <br />   <br />
          <br />
          <h1 style={{ textAlign: "left" }}>{bullet} </h1><br />
          <i>
            <ul className='border1' style={{ textAlign: 'left' }}>
              <lil style={{ color: 'red' }} className='list'>{bullet1}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet2}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet3}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet4}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet5}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet6}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{bullet7}</lil><br />
            </ul>
          </i>
          <br />

        </ul><br /><i>

          <h1 style={{ textAlign: "left" }}>{ipd} </h1><br />
          <i>
            <ul className='border2' style={{ textAlign: 'left' }}>
              <lil style={{ color: 'red' }} className='list'>{detail1}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail2}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail3}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail4}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail5}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail6}</lil><br />
              <lil style={{ color: 'red' }} className='list'>{detail7}</lil><br />
            </ul>
          </i>
          <br /><br />

          <h2 className='choose'>Why Choose us</h2></i><br />
        <p style={{ color: 'black' }}>{choose}</p><br />
        <Link to='/contact'><Button variant="contained" color='primary'>Reach us out</Button></Link>
        <br /><br />

      </div>

    </>
  )
}
export default Deptext;
