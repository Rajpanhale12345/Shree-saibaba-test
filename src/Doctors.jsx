import React from "react";
import DoctorCard from "./DoctorCard";
import {
  FaHeartbeat,
  FaUserMd,
  FaXRay,
  FaProcedures,
  FaBrain
} from "react-icons/fa";
import "./Doctors.css";
import Upper from "./Upper";
import OPD from "./OPD.";

const specialties = [
  {
    name: "Cardiology",
    color: "#0a9396",
    icon: FaHeartbeat,
    doctors: [
      { name: "DR. ANIRUDDHA DHARMADHIKARI", degree: "MBBS, MD, DM, FACC, FESC" },
      { name: "DR. AMIT CHAUDHARI", degree: "MBBS, MD, DM" },
      { name: "DR. NILESH TAWADE", degree: "MBBS, MD, DM" }
    ]
  },
  {
    name: "Urology",
    color: "#0a9396",
    icon: FaUserMd,
    doctors: [
      { name: "DR. AMEY PATIL", degree: "MBBS, MS, MCh" }
    ]
  },
  {
    name: "Orthopaedic",
    color: "#0a9396",
    icon: FaXRay,
    doctors: [
      { name: "DR. SATYEN JOSHI", degree: "MBBS, MD, MCh" }
    ]
  },
  {
    name: "Radiology",
    color: "#0a9396",
    icon: FaXRay,
    doctors: [
      { name: "DR. PALLAVI DHARMADHIKARI", degree: "MBBS, MD, DNB" },
      { name: "DR. VAIBHAV NIMBHORE", degree: "MBBS, DMRD, DNB" }
    ]
  },
  {
    name: "Interventional Radiology",
    color: "#0a9396",
    icon: FaProcedures,
    doctors: [
      { name: "DR. AJIT PATIL", degree: "MBBS, MD, FVIR" }
    ]
  },
  {
    name: "Nephrologist",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. SAURABH BORGAONKAR", degree: "MBBS, MCh" }
    ]
  },
  {
    name: "Gastroenterology",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. SUDARSHAN PATIL", degree: "MBBS, DNB" },
      { name: "DR. MAHESH PATIL", degree: "MBBS, DNB" }
    ]
  },
  {
    name: "Plastic Surgeon",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. LALIT DERLE", degree: "MBBS, DNB, MS" }
    ]
  },
  {
    name: "Physician",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. KUNAL NIKAM", degree: "MBBS, MD" },
      { name: "DR. GANESH MOTWANI", degree: "MBBS, MD" },
      { name: "DR. SUDARSHANA PATIL", degree: "MBBS, MD" }
    ]
  },
  {
    name: "Spine Surgeon",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. GAURAV GUJRATHI", degree: "MBBS, MCh" },
      { name: "DR. SUMIT HIRE", degree: "MBBS, MCh" },
      { name: "DR. GAURAV KULSHRESTHA", degree: "MBBS, MS" }
    ]
  },
  {
    name: "General Surgery",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. AMIT KELE", degree: "MBBS, DNB" }
    ]
  },
  {
    name: "Dentist",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. AMIT BORSE", degree: "BDS" }
    ]
  },
  {
    name: "Ophthalmologist",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. MANJIRI LELE", degree: "MBBS, MS" }
    ]
  },
  {
    name: "Chest Physician",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. ANIRBAN BANDOPADHYAY", degree: "MBBS, DNB" }
    ]
  },
  {
    name: "Neurosurgery & Spine Surgery",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. SUMIT HIRE", degree: "MBBS, MCh" },
      { name: "DR. ANIL JADHAV", degree: "MBBS, MCh" }
    ]
  },
  {
    name: "Gynecologist",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. FORAM PARIKH" , degree: "MBBS, MD" }
    ]
  },
  {
    name: "Neurologist",
    color: "#0a9396",
    icon: FaBrain,
    doctors: [
      { name: "DR. RAHUL NAIK" , degree: "MBBS, DM" }
    ]
  },
   {
    name: "Cardiovascular Thoracic Surgery",
    color: "#0a9396",
    icon: FaHeartbeat,
    doctors: [
      { name: "DR. KISHOR DEORE", degree: "MBBS, MS, MCh" }
    ]
  },
];

const Doctors = () => {
  return (
    <>
    <Upper
      text="Our Doctors"
    />
    <div className="doctors-container">
      {specialties.map((specialty, index) => (
        <DoctorCard
          key={index}
          name={specialty.name}
          color={specialty.color}
          Icon={specialty.icon}
          doctors={specialty.doctors}
        />
        
      ))}
    </div><br /><br />
    <hr /><br /><br />
    <OPD/>  
    </>
  );
};

export default Doctors;
