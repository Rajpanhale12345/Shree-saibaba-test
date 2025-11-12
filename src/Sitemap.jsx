import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Upper from "./Upper";
import { Helmet } from "react-helmet-async";

export default function Sitemap() {
  const styles = {
    page: { padding: "40px 24px", fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif" },
    title: { margin: "0 0 28px", fontSize: 38, color: "Red", fontWeight: 700 },
    grid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "40px 10px" },
    col: { minWidth: 0 },
    h2: { margin: "0 0 6px", fontSize: 22, fontWeight: 700, color: "Black" },
    ul: { listStyle: "none", padding: 0, margin: 0, marginLeft: "40px" },
    li: { display: "flex", gap: 6, alignItems: "flex-start", margin: "10px 0" },
    dot: { color: "#c40000", fontSize: 18, lineHeight: 1, marginTop: 2 },
    link: { color: "blue", textDecoration: "none", transition: "color 0.2s ease" },
    linkHover: { color: "#c40000", textDecoration: "none" },
  };

  const ListItemLink = ({ to, children }) => {
    const [hover, setHover] = React.useState(false);
    return (
      <li style={styles.li}>
        <span aria-hidden="true" style={styles.dot}>•</span>
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

  return (
    <>
      <Helmet>
        <title>Sitemap | Shree Saibaba Multispeciality Hospital</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:description" content="" />
      </Helmet>

      <div style={styles.page}>
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
              <ListItemLink to="/facilities">Facilities</ListItemLink>
              <ListItemLink to="/tieups">Tie Ups</ListItemLink>
              <ListItemLink to="/testimonials">Testimonials</ListItemLink>
              <ListItemLink to="/pr">Press Releases</ListItemLink>
              <ListItemLink to="/contact">Contact</ListItemLink>
              <ListItemLink to="/privacypolicy">Privacy Policy</ListItemLink>
              <ListItemLink to="/termsandconditions">Terms &amp; Conditions</ListItemLink>
              <ListItemLink to="/sitemap">Sitemap</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Packages</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/fullbodycheckup">Full Body Checkup</ListItemLink>
            </ul>
          </section>

          <section style={styles.col}>
            <h2 style={styles.h2}>Blogs</h2>
            <ul style={styles.ul}>
              <ListItemLink to="/cardio">Pacemaker Care</ListItemLink>
              <ListItemLink to="/kidney">Kidney Stone</ListItemLink>
              <ListItemLink to="/spine">Spine Health</ListItemLink>
              <ListItemLink to="/nutrition">Nutrition &amp; Sleep</ListItemLink>
              <ListItemLink to="/understanding">Understanding Stroke</ListItemLink>
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
              <ListItemLink to="/internalmedicine">Internal Medicine</ListItemLink>
              <ListItemLink to="/dentistry">Dentistry</ListItemLink>
              <ListItemLink to="/generalsurgery">General Surgery</ListItemLink>
              <ListItemLink to="/plasticsurgery">Plastic Surgery</ListItemLink>
              <ListItemLink to="/opthalmology">Opthalmology</ListItemLink>
              <ListItemLink to="/nephrology">Nephrology</ListItemLink>
              <ListItemLink to="/gastroenterology">Gastroenterology</ListItemLink>
              <ListItemLink to="/gynaecology">Gynecology</ListItemLink>
              <ListItemLink to="/pulmonology">Pulmonology</ListItemLink>
            </ul>
          </section>


        </div>
      </div>
    </>
  );
}
