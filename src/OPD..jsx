import React from "react";
import "./OPD.css";
import { Helmet } from 'react-helmet';

const opdData = [
  {
    department: "CARDIOLOGIST",
    doctors: [
      { name: "DR. ANIRUDDHA DHARMADHIKARI", timing: "2.00 pm to 6.00 pm" },
      { name: "DR. AMIT CHAUDHARI", timing: "4.00 pm to 5.00 pm" },
      { name: "DR. NILESH TAWADE", timing: "12.00 pm to 3.00 pm" },
      { name: "DR. GAURAV VARMA", timing: "9.00 am to 10.00 am" },
    ],
  },
  {
    department: "C.V.T.S.",
    doctors: [
      { name: "DR. KISHOR DEORE", timing: "Only Monday" },
      { name: "DR. KIRAN KURKURE", timing: "5.00 pm to 6.00 pm" },
      { name: "DR. KALE NIRAJ", timing: "5.00 pm to 6.00 pm" },
    ],
  },
  {
    department: "EP STUDY",
    doctors: [{ name: "DR. RAJESH DHOPESHWAR", timing: "Monthly" }],
  },
  {
    department: "ORTHOPAEDIC",
    doctors: [
      { name: "DR. SATYEN JOSHI", timing: "1.30 pm to 3.30 pm" },
      { name: "DR. BRIJBHUSHAN MAHAJAN", timing: "4.00 pm to 6.00 pm" },
      { name: "DR. MAHALE SWAPNIL", timing: "10.00 to 1.00 pm" },
    ],
  },
  {
    department: "RADIOLOGIST",
    doctors: [
      { name: "DR. PALLAVI DHARMADHIKARI", timing: "10.30 am to 7.00 pm" },
      { name: "DR. VAIBHAV NIMBHORE", timing: "12.30 pm to 8.00 pm" },
    ],
  },
  {
    department: "NEUROLOGIST",
    doctors: [{ name: "DR. RAHUL NAIK", timing: "10.00 am to 7.00 pm" }],
  },
  {
    department: "NEURO SURGEON",
    doctors: [
      { name: "DR. SUMIT HIRE", timing: "3.00 pm to 5.00 pm" },
      { name: "DR. SHIVPRASAD TARLE", timing: "1.00 pm to 3.00 pm" },
    ],
  },
  {
    department: "UROSURGEON",
    doctors: [{ name: "DR. AMEY PATIL", timing: "2.00 pm to 4.00 pm" }],
  },
  {
    department: "NEPHROLOGIST",
    doctors: [{ name: "DR. ABHIJEET MORE", timing: "11 to 12 and 5 to 6" }],
  },
  {
    department: "GASTROENTROLOGY",
    doctors: [
      { name: "DR. SUDARSHAN PATIL", timing: "On Call" },
      { name: "DR. MAHESH PATIL", timing: "3.00 pm to 5.00 pm" },
    ],
  },
  {
    department: "PLASTIC SURGEON",
    doctors: [{ name: "DR. SACHIN MAHADIK", timing: "12 to 2" }],
  },
  {
    department: "PHYSICIAN",
    doctors: [
      { name: "DR. KUNAL NIAKM", timing: "10.00 to 5.30" },
      { name: "DR. GANESH MOTWANI", timing: "4.00 to 9.00" },
      { name: "DR. BHARAT PATIL", timing: "10.00 to 5.00" },
    ],
  },
  {
    department: "SPINE SURGEON",
    doctors: [{ name: "DR. GAURAV GUJRATHI", timing: "On Call" }],
  },
  {
    department: "GENERAL SURGERY",
    doctors: [{ name: "DR. HEMANT DEORE", timing: "On Call" }],
  },
  {
    department: "DENTIST",
    doctors: [{ name: "DR. AMIT BORSE", timing: "10.00 to 5.00" }],
  },
  {
    department: "OPTHALMOLOGIST",
    doctors: [
      { name: "DR. MANJIRI LELE", timing: "12 to 3 pm (Tue/Thursday)" },
      { name: "DR. APURVA MANKARE", timing: "11.00 to 12.00" },
    ],
  },
  {
    department: "CHEST PHYSICIAN",
    doctors: [{ name: "DR. SAURABH BORGAONKAR", timing: "4.00 to 6.00" }],
  },
  {
    department: "PULMONOLOGIST",
    doctors: [{ name: "DR. PRASHANT SHINDE", timing: "On Call" }],
  },
  {
    department: "ONCOLOGIST",
    doctors: [{ name: "DR. AMBARISH CHATARJEE", timing: "On Call" }],
  },
  {
    department: "ENT",
    doctors: [{ name: "DR. DIVYA BANGAR (KALAL)", timing: "On Call" }],
  },
  {
    department: "GYNACOLOGIST",
    doctors: [{ name: "DR. FORAM PARIKH", timing: "11.00 TO 1.00" }],
  },
];

const OPD = () => {
  return (

    <>

    <div className="opd-container">
      <h1 className="opd-title" style={{color:"blue"}}>OPD Doctors & Timings</h1><br />
      {opdData.map((dept, index) => (
        <div key={index} className="opd-department">
          <h2 className="department-name">{dept.department}</h2>
          <table className="opd-table">
            <thead>
              <tr>
                <th style={{textAlign : "center"}}>Sr. No</th>
                <th>Doctor Name</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody>
              {dept.doctors.map((doc, i) => (
                <tr key={i}>
                  <td style={{textAlign : "center"}}>{i + 1}</td>
                  <td>{doc.name}</td>
                  <td>{doc.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>

</>
  );
};

export default OPD;
