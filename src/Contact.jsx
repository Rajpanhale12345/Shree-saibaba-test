import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "", // Changed from 'email' to 'mobile' to match the form input
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    // Correctly updates the state for any input by its 'name' attribute
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    fetch("https://sheetdb.io/api/v1/b2b8jtgt9q8gf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Your message has been sent successfully!"); // User feedback
        setFormData({ // Reset form after successful submission
          name: "",
          mobile: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again."); // User feedback
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>

      <br />
      <h1 className="reach" style={{ color: "blue" }}>Reach us out</h1><br /><br />

      <div className="address">
        📍 Shree Saibaba Heart Institute & Multispeciality Hospital,
            Mumbai-Agra Highway, Opp. Pillar No. 125-127, Bhaba Nagar, Dwarka,
            
            Nashik.- 422001 <br /><br />

        🚑 <span style={{ color: 'blue' }}>Cardiac Ambulance</span> : <a href="tel:9158887554">9158887554</a>
        <br /><br />

        🚨 <span style={{ color: 'blue' }}>Emergency Care</span> : <a href="tel:7041704114">7041704114</a> / <a href="tel:9158887554">9158887554</a>
        <br /><br />

        ☎️ <span style={{ color: 'blue' }}>Landline No</span> : <a href="tel:02533508000">0253 350 8000</a> <br /><br />

        📞 <span style={{ color: 'blue' }}>Mob. No</span>: <a href="tel:+919158887554">+91 9158887554</a> <br /><br />

        📩 <span style={{ color: 'blue' }}>Email</span>: <a href="mailto:saibabaheartinstitute@yahoo.com">saibabaheartinstitute@yahoo.com</a>
      </div>

      <br />

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required // Added validation
        />
        <input
          type="number"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required // Added validation
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="service-select"
        // Added validation
        >
          <option value="">Services</option>
          <option>Cardiology</option>
          <option>Cardiovascular Thoracic surgery</option>
          <option>urology</option>
          <option>neurology</option>
          <option>radiology</option>
          <option>orthopedic</option>
          <option>Interventional Radiology</option>
          <option>Neurosurgery and Spine Surgery</option>
          <option>Internal Medicine</option>
          <option>Dentistry</option>
          <option>General Surgery</option>
          <option>Plastic Surgery</option>
          <option>ophthalmology</option>
          <option>gastroenterology</option>
          <option>Nephrology</option>
        </select>
        <textarea
          style={{ backgroundColor: "white", borderRadius: "5px" }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required // Added validation
        ></textarea>
        <button type="submit">Send</button>
      </form>

      <hr />

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.014243581841!2d73.7873125076294!3d19.990288178980673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0030c799f9%3A0x8fae3232a01d138c!2sShree%20Saibaba%20Multispeciality%20Hospital%2C%20Nashik!5e1!3m2!1sen!2sin!4v1767699907105!5m2!1sen!2sin"
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