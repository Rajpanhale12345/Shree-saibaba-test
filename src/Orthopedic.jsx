import React from 'react';
import Deptext from './Deptext';
import Ortho1 from './Images/orthopedicdep.jpg';
import { Helmet } from "react-helmet-async";

 function Ortho() {
  return (
    <>

    <Helmet>
      <title>Orthopedic | Shree Saibaba Hospital</title>
    </Helmet>


    <div>
      <Deptext 
      image={Ortho1}
      title='Best Orthopedic Hospital'
      subtitle='Nashik, Maharashtra'
      description="Orthopedics is a vital specialty in the healthcare system, focusing on the diagnosis, treatment, and prevention of disorders related to the bones, joints, ligaments, tendons, and muscles. Whether it's a fracture, joint pain, sports injury, or a degenerative condition like arthritis, orthopedic care plays a crucial role in restoring mobility, function, and overall quality of life."
      description1='Shree Saibaba Multispeciality Hospital is one of the best orthopedic hospitals in Nashik, equipped with modern infrastructure and a dedicated team of orthopedic surgeons who specialize in advanced surgical and non-surgical treatments. With a strong emphasis on precision, safety, and patient rehabilitation, the hospital delivers comprehensive orthopedic care under one roof.'
      description2='The orthopedic department is led by a team of highly experienced specialists trained in managing everything from simple fractures to complex joint replacements and spinal surgeries. Using minimally invasive techniques, robotic assistance, and advanced imaging, our experts ensure faster recovery, reduced pain, and improved outcomes for patients of all age groups.'
      description3='Our facilities include state-of-the-art operation theaters, a fully equipped physiotherapy and rehabilitation center, and in-house diagnostic services to ensure accurate evaluation and efficient treatment planning. The hospital caters to trauma cases, sports injuries, degenerative joint diseases, congenital deformities, and chronic orthopedic conditions. Below are some of the key services offered:'
      bullet='OPDs'
      bullet1='1) CONSULTATION'
      bullet2='2) RADIOGRAPHY'
      bullet3='3) MRI'
      bullet4='4) CT SCAN'
               ipd="IPDs"
      detail1='1) FRACTURE'
      detail2='2) ARTHOSCOPY SURGERY'
      detail3="3) SPINE SURGERY"
      choose='Shree Saibaba Multispeciality Hospital is a trusted destination for orthopedic care in Nashik, known for delivering precise, patient-focused, and technology-driven treatment. Our expert team of orthopedic surgeons and physiotherapists works collaboratively to ensure each patient receives a personalized treatment plan aimed at restoring movement and enhancing life quality. With advanced surgical techniques, post-operative rehab support, and round-the-clock trauma services, we are committed to achieving the best possible outcomes. Patients choose us for our clinical expertise, compassionate care, and a proven track record in treating both common and complex orthopedic conditions with excellence.'
      />
    </div>
    </>
  )
}
export default Ortho;
