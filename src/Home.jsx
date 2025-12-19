import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import carousel1 from "./Images/carousel1.webp";
import carousel2 from "./Images/carousel2.webp";

// ✅ Mobile hero images (add your mobile banner files here)
import carousel1m from "./Images/mobilecarousel1.webp";
import carousel2m from "./Images/mobilecarousel2.webp";

import OPD from "./OPD.";
import Test from "./Test";

// ✅ Swiper (ONLY for hero carousel)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Specialities images
import spe1 from "./Images/spe1.webp";
import spe15 from "./Images/spe2.webp";
import spe2 from "./Images/spe3.webp";
import spe3 from "./Images/spe4.webp";
import spe4 from "./Images/spe5.webp";
import spe5 from "./Images/spe6.webp";
import spe6 from "./Images/spe7.webp";
import spe8 from "./Images/spe9.webp";
import spe9 from "./Images/spe10.webp";
import spe10 from "./Images/spe11.webp";
import spe11 from "./Images/spe12.webp";
import spe13 from "./Images/spe13.webp";
import spe14 from "./Images/spe14.webp";
import spe16 from "./Images/spe15.webp";
import spe17 from "./Images/spe17.webp";
import spe18 from "./Images/spe18.webp";
import spe19 from "./Images/spe19.webp";

function Home() {
  const { pathname } = useLocation();
  const canonical = `https://shreesaibabamultispecialityhospital.com${pathname}`;

  // ✅ Hero carousel slides (desktop + mobile)
  const heroSlides = [
    {
      src: carousel1,
      mobileSrc: carousel1m,
      title: "Advanced Cardiac Care",
      desc: "Expert cardiology & diagnostics under one roof.",
      ctaText: "Book Appointment",
      ctaLink: "/medical",
    },
    {
      src: carousel2,
      mobileSrc: carousel2m,
      title: "Neurology & Stroke Care",
      desc: "Timely care, experienced specialists, modern facilities.",
      ctaText: "Explore Neurology",
      ctaLink: "/neurology",
    },
  ];

  // ✅ Specialities (same as before)
  const specialties = [
    { src: spe2, className: "cardiology", path: "/cardiology", label: "Cardiology" },
    { src: spe13, className: "cvts", path: "/cardiovascular", label: "CVTS" },
    { src: spe4, className: "neurology", path: "/neurology", label: "Neurology" },
    { src: spe5, className: "spine-care", path: "/spinecare", label: "Spine Care" },
    { src: spe14, className: "orthopaedic", path: "/ortho", label: "Orthopaedics" },
    { src: spe9, className: "nephrology", path: "/nephrology", label: "Nephrology" },
    { src: spe10, className: "urology", path: "/urology", label: "Urology" },
    { src: spe16, className: "general-medicine", path: "/generalmedicine", label: "General Medicine" },
    { src: spe6, className: "general-surgery", path: "/generalsurgery", label: "General Surgery" },
    { src: spe3, className: "gastro", path: "/gastroenterology", label: "Gastroenterology" },
    { src: spe8, className: "plastic-surgery", path: "/plasticsurgery", label: "Plastic Surgery" },
    { src: spe11, className: "gynaecology", path: "/gynaecology", label: "Gynaecology" },
    { src: spe18, className: "ir", path: "/interventionalradiology", label: "Interventional Radiology" },
    { src: spe19, className: "radiology", path: "/radiology", label: "Radiology" },
    { src: spe17, className: "neurosurgery", path: "/neurosurgery", label: "Neurosurgery" },
    { src: spe15, className: "checkup", path: "/fullbodycheckup", label: "Full Body Checkup" },
    { src: spe1, className: "facilities", path: "/facilities", label: "Facilities" },
  ];

  const renderRow = (items) => (
    <div className="specialty">
      {items.map((item, idx) => (
        <React.Fragment key={`${item.path}-${idx}`}>
          <Link to={item.path} className="specialty-link" aria-label={item.label}>
            <div className="specialty-item">
              <figure className="specialty-figure">
                <img
                  src={item.src}
                  alt={`${item.label} department`}
                  className={`specialty-img ${item.className}`}
                  loading="lazy"
                />
               
              </figure>
              <div className="specialty-caption" aria-hidden="true">
                {item.label}
              </div>
            </div>
          </Link>
          {idx !== items.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Best Multispecialty Hospital in Nashik | Shree Saibaba</title>
        <meta
          name="description"
          content="Trusted multispeciality hospital in Nashik for cardiology, neurology, nephrology, orthopaedics, radiology, spine care, general medicine and more. Book an appointment online."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Comprehensive specialty care and advanced diagnostics." />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <br />

      <div>
        {/* ✅ Hero Carousel (desktop + mobile images) */}
        <div className="hero-carousel-wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={700}
            slidesPerView={1}
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={`hero-${idx}`}>
                <div className="hero-slide">
                  {/* ✅ picture tag switches image based on screen width */}
                  <picture>
                    <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="hero-img"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </picture>

                  {/* Optional overlay */}
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <br /><br />
        <div className="title"></div>
        <br /><br /><br />
        <br /><br />

        {/* ✅ Specialities stays as before */}
        <p className="our" style={{ color: "blue", fontSize: "25px", fontWeight: 500 }}>
          Our Specialities
        </p>

        <br /><br />

        {renderRow(specialties.slice(0, 4))}
        <br /><br />
        {renderRow(specialties.slice(4, 8))}
        <br /><br />
        {renderRow(specialties.slice(8, 12))}
        <br /><br />
        {renderRow(specialties.slice(12, 15))}
        <br /><br />
        <br />

        <Link to="/departments">
          <Button variant="contained">View all Specialities</Button>
        </Link>

        <br /><br /><hr />

        <div className="book">
          <br /><br /><br />
          <h2 className="titlemed" style={{ color: "blue", fontSize: "25px", fontWeight: 500 }}>
            Take Charge of Your Health Today!
          </h2>

          <br />

          <p className="desc">
            Book your complete health screening package now — 2D Echo, ECG, X-Ray, Ultrasound,
            Lipid Profile, Thyroid &amp; Diabetes tests and more.
          </p>

          <br />

          <Link to="/medical">
            <Button variant="contained" style={{ fontFamily: "poppins" }}>
              Book an Appointment
            </Button>
          </Link>

          <br /><br /><br />
        </div>

        <hr />

        <div className="testimonials-container">
          <br /><br />
          <Test />
        </div>

        <OPD />
      </div>
    </>
  );
}

export default Home;
