import React, { useState } from "react";
import Upper from "./Upper";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service:"",
    message: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your backend/API call here
  };

  return (
    <>

    
    <helmet>
      <title>Contact | Saibaba Multispeciality Hospital</title>
    </helmet>
     
<br />
<h1  className= "reach" style={{color : "blue"}}>Reach us out</h1><br /><br />
<div className="address">📍 Shree Saibaba Heart Institute & Multispeciality Hospital,
Opp. Wani House, Mumbai Naka, Mirajkar Nagar,
Nashik, Maharashtra 422001 <br /><br />
🚑 <span ><i style={{color : 'blue'}}>Cardiac Ambulance</i></span> : <a href="tel:9158887554">9158887554</a>
<br /><br />
🚨 <span ><i style={{color : 'blue'}}>Emergency Care</i></span> : <a href="tel:9158880987">9158880987</a> / <a href="tel:8767021810">8767021810</a>
<br /><br />
☎️ <span ><i style={{color : 'blue'}}>Landline No</i></span> :  <a href="tel:02532507001">0253 250 7001</a> <br /><br /><span ><i style={{color : 'blue'}}>📞 Mob. No</i></span>: <a href="tel:+919158887554">+91 9158887554</a> <br /><br />
<span ><i style={{color : 'blue'}}>📩 Email </i></span>: <a href="mailto:saibabaheartinstitute@yahoo.com">saibabaheartinstitute@yahoo.com</a>

 </div>



      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobile"
          placeholder="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
       <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="service-select"
>
  <option value="">Services</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="ENT">ENT</option>
  <option value="Gynecology">Gynecology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="General Surgery">General Surgery</option>
  <option value="Psychiatry">Psychiatry</option>
</select>

        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      <hr />
      <br />
       <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.0053737370768!2d73.78895077376413!3d19.990777322621646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb07ede2c1c3%3A0x5ad06fdbb92738a5!2sShree%20Saibaba%20Heart%20Institute%20And%20Research%20Centre!5e1!3m2!1sen!2sin!4v1754135060237!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shree Saibaba Hospital Location"
      ></iframe>
    </div>
        </>
  );
}

export default Contact;
