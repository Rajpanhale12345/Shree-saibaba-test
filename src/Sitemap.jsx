import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Sitemap() {
  const styles = {
    page: {
      padding: "40px 24px",
      fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif",
      maxWidth: 1200,
      margin: "0 auto",
    },
    title: {
      margin: "0 0 28px",
      fontSize: "clamp(26px, 4vw, 38px)",
      color: "Red",
      fontWeight: 700,
      letterSpacing: 0.2,
    },

    // ✅ Responsive Grid (auto-fit)
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "28px 18px",
      alignItems: "start",
    },

    col: { minWidth: 0 },

    h2: {
      margin: "0 0 10px",
      fontSize: "clamp(18px, 2.2vw, 22px)",
      fontWeight: 700,
      color: "Black",
    },

    // ✅ No fixed left margin — use padding for consistent spacing
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    li: {
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
      margin: "10px 0",
    },

    dot: {
      color: "#c40000",
      fontSize: 18,
      lineHeight: 1,
      marginTop: 4,
      flexShrink: 0,
    },

    // ✅ Better tap target on mobile
    link: {
      color: "blue",
      textDecoration: "none",
      transition: "color 0.2s ease",
      padding: "2px 0",
      lineHeight: 1.5,
      display: "inline-block",
      wordBreak: "break-word",
    },

    linkHover: { color: "#c40000", textDecoration: "none" },

    // ✅ Small-screen tweaks
    mobileWrap: {
      padding: "28px 14px",
    },
  };

  const ListItemLink = ({ to, children }) => {
    const [hover, setHover] = React.useState(false);
    return (
      <li style={styles.li}>
        <span aria-hidden="true" style={styles.dot}>
          •
        </span>
        <RouterLink
          to={to}
          style={hover ? { ...styles.link, ...styles.linkHover } : styles.link}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </RouterLink>
      </li>
    );
  };

  // ✅ Simple responsive padding (no CSS file needed)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | Shree Saibaba Multispeciality Hospital</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:description" content="" />
      </Helmet>

      <div style={isMobile ? { ...styles.page, ...styles.mobileWrap } : styles.page}>
        <h1 style={styles.title}>SITEMAP</h1>

        <div style={styles.grid}>
          <section style={styles.col}>
            <h2 style={styles.h2}>Home</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/">Home</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>About</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/about">About</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Other</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/tieups">Tie Ups</ListItemLink>
              <ListItemLink to="/testimonials">Testimonials</ListItemLink>
              <ListItemLink to="/pr">Press Releases</ListItemLink>
              <ListItemLink to="/contact">Contact</ListItemLink>
              <ListItemLink to="/privacypolicy">Privacy Policy</ListItemLink>
              <ListItemLink to="/termsandconditions">Terms &amp; Conditions</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Packages</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/fullbodycheckup">Full Body Checkup</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Departments</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/cardiology">Cardiology</ListItemLink>
              <ListItemLink to="/urology">Urology</ListItemLink>
              <ListItemLink to="/neurology">Neurology</ListItemLink>
              <ListItemLink to="/radiology">Radiology</ListItemLink>
              <ListItemLink to="/ortho">Orthopedic</ListItemLink>
              <ListItemLink to="/interventionalradiology">IR</ListItemLink>
              <ListItemLink to="/neurosurgery">Neurosurgery</ListItemLink>
              <ListItemLink to="/dentistry">Dentistry</ListItemLink>
              <ListItemLink to="/generalsurgery">General Surgery</ListItemLink>
              <ListItemLink to="/plasticsurgery">Plastic Surgery</ListItemLink>
              <ListItemLink to="/nephrology">Nephrology</ListItemLink>
              <ListItemLink to="/gastroenterology">Gastroenterology</ListItemLink>
              <ListItemLink to="/gynaecology">Gynecology</ListItemLink>
              <ListItemLink to="/pulmonology">Pulmonology</ListItemLink>
              <ListItemLink to="/spinecare">Spine Care</ListItemLink>
              <ListItemLink to="/cardiovascular">Cardiovascular Thoracic Surgery</ListItemLink>
              <ListItemLink to="/generalmedicine">General Medicine</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Blogs</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/Robotic_Joint">Robotic Joint Replacememnt Surgery</ListItemLink>
              <ListItemLink to="/Robotic_Surgery">Advance Robotic Surgery</ListItemLink>
              <ListItemLink to="/cardio">Pacemaker Care</ListItemLink>
              <ListItemLink to="/kidney">Kidney Stone</ListItemLink>
              <ListItemLink to="/spine">Spine Health</ListItemLink>
              <ListItemLink to="/nutrition">Nutrition &amp; Sleep</ListItemLink>
              <ListItemLink to="/understanding">Understanding Stroke</ListItemLink>
              <ListItemLink to="/Cardiac_Surgery">कार्डियाक सर्जरी</ListItemLink>
              <ListItemLink to="/Dengue">Dengue Disease</ListItemLink>
              <ListItemLink to="/Vitamin_B12">Vitamin B12</ListItemLink>
              <ListItemLink to="/Heart_Attack">Heart Attack</ListItemLink>
              <ListItemLink to="/Heart_Disease">Heart Disease</ListItemLink>
              <ListItemLink to="/Interventional_Radiology">Interventional Radiology</ListItemLink>
              <ListItemLink to="/Pneumonia">Pneumonia</ListItemLink>
              <ListItemLink to="/Lifestyle">Lifestyle</ListItemLink>
              <ListItemLink to="/Understanding_CABG">Understanding CABG</ListItemLink>
              <ListItemLink to="/Kidney_Health">Kidney Health</ListItemLink>
              <ListItemLink to="/Spine_Joint">Spine & Joint Replacement</ListItemLink>
              <ListItemLink to="/Varicose">Varicose Veins</ListItemLink>
              <ListItemLink to="/Angiographies">Angioplasty</ListItemLink>
              <ListItemLink to="/Holter">Holter Monitors</ListItemLink>
              <ListItemLink to="/Angiography">Benefits of Radial Angiography</ListItemLink>
              <ListItemLink to="/Angiographiess">Types of Angiographies</ListItemLink>
              <ListItemLink to="/Heart_Healthy">Heart Healthy Nutrition</ListItemLink>
              <ListItemLink to="/Stress_Anxiety">Stress & Anxiety</ListItemLink>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Sitemap;
