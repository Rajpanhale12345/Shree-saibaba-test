import React from "react";
import { Link } from "react-router-dom";
import Upper from "./Upper";
import { Helmet } from 'react-helmet';

export default function SitemapKimsTwoRows() {
  const styles = {
    page: { padding: "40px 24px", fontFamily: "system-ui, Segoe UI, Roboto, Arial, sans-serif" },
    title: { margin: "0 0 28px", fontSize: 38, color: "#0b7da3", fontWeight: 700 },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)", // 4 columns per row
      gap: "40px 10px", // row gap, column gap
    },
    col: { minWidth: 0 },
    h2: { margin: "0 0px 6px", marginLeft:"-60%"  ,fontSize: 22, fontWeight: 700, color: "#0b7da3" },
    ul: { listStyle: "none", padding: 0, margin: 0 },
    li: { display: "flex", gap: 6, alignItems: "flex-start", margin: "10px 0" },
    dot: { color: "#c40000", fontSize: 18, lineHeight: 1, marginTop: 2 },
    link: { color: "#0b7da3", textDecoration: "none", transition: "color 0.2s ease" },
    linkHover: { color: "#c40000", textDecoration: "none" }, // hover red, no underline
  };

  const Link = ({ children, href }) => {
    const [hover, setHover] = React.useState(false);
    return (

<>


    <helmet>
      <title>Sitemap | Saibaba Multispeciality Hospital</title>
    </helmet>    
    

      <li style={styles.li}>
        <span aria-hidden="true" style={styles.dot}>•</span>
        {href ? (
          <a
            href={href}
            style={hover ? { ...styles.link, ...styles.linkHover } : styles.link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {children}
          </a>
        ) : (
          <span>{children}</span>
        )}
      </li>
    </>
    );
  };

  return (
    <> 
    <Upper text="Site-Map"/>

    <div style={styles.page}>
      <h1 style={styles.title}>SITEMAP</h1>

      <div style={styles.grid}>

        <section style={styles.col}>
          <h2 style={styles.h2}>Home</h2>
          <ul style={styles.ul}>
            <Link to="/">Home</Link> 
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>ABOUT</h2>
          <ul style={styles.ul}>
            <Link to="/About.jsx">About</Link>            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Doctors</h2>
          <ul style={styles.ul}>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Departments</h2>
          <ul style={styles.ul}>
            <Link to="">Cardiology</Link>
            <Link to="">Urology</Link>
            <Link to="">Neurology</Link>
            <Link to="">Radiology</Link>
            <Link to="">Orthopedic</Link>
            <Link to="">Interventional Radiology</Link>
            <Link to="">Neurosurgery Spine Surgery</Link>            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Medical Check Up</h2>
          <ul style={styles.ul}>
            <Link to="">Cardiology</Link>
            <Link to="">Urology</Link>
            <Link to="">Neurology</Link>
            <Link to="">Radiology</Link>
            <Link to="">Orthopedic</Link>
            <Link to="">Interventional Radiology</Link>
            <Link to="">Neurosurgery Spine Surgery</Link>            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Testimonials</h2>
          <ul style={styles.ul}>
            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Blogs</h2>
          <ul style={styles.ul}>
            
          </ul>
        </section>

        <section style={styles.col}>
          <h2 style={styles.h2}>Press Releases</h2>
          <ul style={styles.ul}>
            
          </ul>
        </section>


        <section style={styles.col}>
          <h2 style={styles.h2}>Contact</h2>
          <ul style={styles.ul}>
            
          </ul>
        </section>


      </div>
    </div>
</> 
  );
}
