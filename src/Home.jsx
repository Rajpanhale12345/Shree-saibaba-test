import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import carousel1 from "./Images/carousel3.webp";
import carousel2 from "./Images/carousel4.webp";
import carousel1m from "./Images/neuromob1.webp";
import carousel2m from "./Images/neuromob3.webp";
import OPD from "./OPD.";
import Test from "./Test";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
  const SITE_URL = "https://shreesaibabahospital.com"; // IMPORTANT: set your one canonical domain
  const OG_IMAGE_URL = `${SITE_URL}/static/og/home.jpg`; // create or change
  const canonical = `${SITE_URL}${pathname}`;


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
        <title>Best Multispeciality Hospital in Nashik | Shree Saibaba Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital in Nashik offers advanced care in cardiology, neurology, nephrology, orthopaedics, radiology, spine care, general medicine and more. Book an appointment online."
        />
        <link rel="canonical" href={canonical} />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta
          property="og:description"
          content="Comprehensive specialty care, advanced diagnostics and 24x7 emergency services in Nashik."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Shree Saibaba Multispeciality Hospital in Nashik" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta
          name="twitter:description"
          content="Advanced specialty care, diagnostics and emergency services in Nashik. Book an appointment online."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: SITE_NAME,
            url: SITE_URL,
            image: OG_IMAGE_URL,
            areaServed: { "@type": "City", name: "Nashik" },
            telephone: "+91-02533508000",
            address: { "@type": "PostalAddress", streetAddress: "Mumbai-Agra Highway, Opp. Pillar No. 125-127, Bhaba Nagar, Dwarka", addressLocality: "Nashik", addressRegion: "MH", postalCode: "422001", addressCountry: "IN" },
            geo: { "@type": "GeoCoordinates", latitude: 19.990762462001626, longitude: 73.79159702351707 },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Hospital Specialities",
            itemListOrder: "https://schema.org/ItemListUnordered",
            numberOfItems: specialties.length,
            itemListElement: specialties.map((s, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: s.label,
              url: `${SITE_URL}${s.path}`
            }))
          })}
        </script>
      </Helmet>


      <br />

      <div>
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
