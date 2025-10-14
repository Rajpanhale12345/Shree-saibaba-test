import React from 'react'
import Upper from './Upper';
import { Helmet } from "react-helmet-async";

function Doctors() {
  return (

    <>

    <Helmet>
      Gallery | Shree Saibaba Hospital
    </Helmet>
    
    
    <Upper 
    text="Gallery"/>

    
    </>
  )
}
export default Doctors;
