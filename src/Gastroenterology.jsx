import React from 'react';
import Deptext from './Deptext';
import gastro from './Images/gastro.jpg';
import { Helmet } from "react-helmet-async";

 function Gastroenterology() {
  return (
    <>

    
      <Helmet>
        <title>Gastroenterology | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


    <div>
      <Deptext 
      image={gastro}
      title='Best Gastroenterology & Liver Care Hospital'
      subtitle='Nashik, Maharashtra'
      description="Gastroenterology is a vital medical specialty focusing on the diagnosis, treatment, and prevention of disorders affecting the digestive system, liver, pancreas, and biliary tract. Since these organs play a critical role in overall health and nutrition, timely evaluation and treatment are essential for improving quality of life."
      description1='Shree Saibaba Multispeciality Hospital is one of the leading centers for Gastroenterology and Liver Care in Nashik, offering advanced diagnostic and therapeutic services managed by an expert team of gastroenterologists, hepatologists, endoscopists, and GI surgeons. Our department is committed to evidence-based treatment, precision-driven procedures, and holistic patient care.'
      description2='Equipped with state-of-the-art endoscopy suites, high-definition imaging systems, and advanced interventional gastroenterology tools, we provide a full spectrum of care — from routine screenings to complex GI procedures — ensuring safety, comfort, and faster recovery.'
      description3='From managing common digestive complaints to treating life-threatening liver and pancreatic diseases, our approach is multidisciplinary and patient-centric, with a focus on long-term health and prevention.'
     bullet='Common precautions of Gastroenterology'
bullet1='1) Eat a balanced, fiber-rich diet.'
bullet2='2) Drink enough water daily.'
bullet3='3) Avoid spicy, oily, and junk foods.'
bullet4='4) Limit alcohol and quit smoking.'
bullet5='5) Take medicines as prescribed only.'
bullet6='6) Maintain healthy weight and exercise.'
bullet7='7) Report persistent pain, acidity, or bleeding.'

      choose='At Shree Saibaba Multispeciality Hospital, our Gastroenterology Department blends advanced technology, clinical expertise, and compassionate care to ensure optimal digestive health and improved quality of life.'
      />
    </div>
    </>
  )
}
export default Gastroenterology;
