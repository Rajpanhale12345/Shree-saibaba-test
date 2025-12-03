import React from "react";
import "./OPD.css";

const opdData = [
  {
    department: "CARDIOLOGIST",
    doctors: [
      { name: "DR. ANIRUDDHA DHARMADHIKARI", timing: "2.00 pm to 6.00 pm" },
      { name: "DR. AMIT CHAUDHARI", timing: "4.00 pm to 9.00 pm" },
      { name: "DR. NILESH TAWADE", timing: "12.00 pm to 3.00 pm" },
     
    ],
  },
  {
    department: "C.V.T.S.",
    doctors: [
      { name: "DR. KISHOR DEORE", timing: "Only Monday" },
      { name: "DR. KIRAN KURKURE", timing: "5.00 pm to 6.00 pm" },
      { name: "DR. THAKARE NITIN", timing: "5.00 pm to 6.00 pm" },
    ],
  },
  {
    department: "EP STUDY",
    doctors: [{ name: "DR. RAJESH DHOPESHWAR", timing: "Monthly" }],
  },
  {
    department: "ORTHOPAEDIC",
    doctors: [
         { name: "DR. AJINKYA DESALE", timing: "12:30 pm to 3:00pm" },
      { name: "DR. SATYEN JOSHI", timing: "On Call" },
      { name: "DR. SANDEEP PANGAVHANE", timing: "On Call" },
      { name: "DR. BRIJBHUSHAN MAHAJAN", timing: "On Call" },
      { name: "DR. SWAPNIL MAHALE", timing: "On Call" },
   
    ],
  },
  {
    department: "RADIOLOGIST",
    doctors: [
      { name: "DR. PALLAVI DHARMADHIKARI", timing: "10:30 am to 7:00 pm" },
      { name: "DR. VAIBHAV NIMBHORE", timing: "12:30 pm to 8:00 pm" },
    ],
  },
   {
    department: "INTERVENTIONAL RADIOLOGIST",
    doctors: [
      { name: "DR. AJIT PATIL", timing: "On Call" },
     
    ],
  },
  {
    department: "NEUROLOGIST",
    doctors: [{ name: "DR. RAHUL NAIK", timing: "10:00 am to 5:00 pm" }],
  },
  {
    department: "NEURO SURGEON",
    doctors: [
      { name: "DR. SUMIT HEERE", timing: "3:00 pm to 5:00 pm" },
      { name: "DR. ANIL JADHAV", timing: "On Call" },
    ],
  },
  {
    department: "UROSURGEON",
    doctors: [
      { name: "DR. AMEY PATIL", timing: "12:30 pm to 1:30 pm" },
       { name: "DR. AMIT SINGAL", timing: "1:30 pm to 2:30 pm" },
       { name: "DR. PRANAV CHHAJED", timing: "On Call" }
    ],
  },
  {
    department: "NEPHROLOGIST",
    doctors: [{ name: "DR. ABHIJEET MORE", timing: "11 am to 12 pm and 5pm to 6 pm" }],
  },
  {
    department: "GASTROENTROLOGY",
    doctors: [
    
          { name: "DR. SOHAM DOSHI", timing: "8:00 am to 9:00 am and 5:00 pm to 6:00 pm" }
    ],
  },
  {
    department: "PLASTIC SURGEON",
    doctors: [{ name: "DR. LALIT DERLE", timing: "On Call" }],
  },
  {
    department: "PHYSICIAN",
    doctors: [
      { name: "DR. KUNAL NIKAM", timing: "10:00 am to 5:30 pm" },
      { name: "DR. GANESH MOTWANI", timing: "4:00 pm to 9:00 pm" },
      { name: "DR. BHARAT PATIL", timing: "10:00 am to 5:00 pm" },
         { name: "DR. RAHUL BARHATE", timing: "9:00 am to 2:00 pm" }
    ],
  },
  {
    department: "SPINE SURGEON",
    doctors: [{ name: "DR. GAURAV GUJRATHI", timing: "On Call" },
        { name: "DR. SUMIT HIRE", timing: "3:00 pm to 5:00 pm" },
          { name: "DR. ANIL JADHAV", timing: "On Call" },
           { name: "DR. GAURAV KULSHRESTHA", timing: "On Call" }
    ],
  },
  {
    department: "GENERAL SURGERY",
    doctors: [
      { name: "DR. AMIT KELE", timing: "On Call" },
        { name: "DR. TOSHIT LODHA", timing: "On Call" },
         { name: "DR. HEMANT DEORE", timing: "1:00 pm to 2:00 pm" }


    ],
  },
  {
    department: "DENTIST",
    doctors: [{ name: "DR. AMIT BORSE", timing: "10:00 am  to 5:00 pm" }],
  },
  {
    department: "OPTHALMOLOGIST",
    doctors: [
      { name: "DR. MANJIRI LELE", timing: "12:00 pm to 3:00 pm (Tue/Thursday)" },
      { name: "DR. APURVA MANKARE", timing: "11:00 am to 12:00 pm" },
    ],
  },
  {
    department: "CHEST PHYSICIAN",
    doctors: [{ name: "DR. SAURABH BORGAONKAR", timing: "4:00 pm to 6:00 pm" },
      { name: "DR. PRASHANT SHINDE", timing: "On Call" }
    ],
  },
  
  {
    department: "ONCOLOGIST",
    doctors: [{ name: "DR. AMBARISH CHATARJEE", timing: "On Call" },
      { name: "DR. SULABCHANDRA BHAMARE", timing: "On Call" },
    ],
  },
  {
    department: "ENT",
    doctors: [{ name: "DR. DIVYA BANGERA", timing: "On Call" }],
  },
    {
    department: "Anesthetic",
    doctors: [{ name: "DR. SUMAN KESHAV", timing: "On Call" }],
  },
  
];

const OPD = () => {
  return (
    <>
    <div className="opd-container">
      <h2 className="opd-title" style={{color:"blue", fontWeight : "500", fontSize : 25}}>OPD Doctors & Timings</h2><br />
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
