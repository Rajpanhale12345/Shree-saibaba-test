import React from 'react';
import img from './Images/orthopedicdep.jpg'; // replace with orthopedic-specific image if available
import { Helmet } from "react-helmet-async";

const styles = {
  page: {
    background: 'linear-gradient(135deg, #f4f7fb, #e5edf9)',
    padding: '40px 16px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    color: '#0f172a',
  },
  hero: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    alignItems: 'stretch',
    marginBottom: '32px',
  },
  heroImageWrapper: {
    flex: '1 1 320px',
    minWidth: '280px',
  },
  heroImageCard: {
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 18px 45px rgba(15,23,42,0.16)',
    border: '1px solid rgba(148,163,184,0.4)',
    background: '#0f172a',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    display: 'block',
    opacity: 0.95,
  },
  heroTextWrapper: {
    flex: '2 1 420px',
    minWidth: '280px',
  },
  heroTextCard: {
    height: '100%',
    borderRadius: '20px',
    padding: '28px 28px 24px',
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 18px 45px rgba(15,23,42,0.08)',
    border: '1px solid rgba(148,163,184,0.4)',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    background: 'rgba(37,99,235,0.08)',
    color: '#1d4ed8',
    marginBottom: '10px',
  },
  pillDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  heroTitle: {
    fontSize: '30px',
    fontWeight: 700,
    margin: '4px 0 4px',
    color: '#0f172a',
  },
  heroSubtitle: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#64748b',
    marginBottom: '6px',
  },
  heroTagline: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f766e',
    marginBottom: '14px',
  },
  heroParagraph: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '10px',
  },
  highlightStrip: {
    marginTop: '16px',
    padding: '10px 14px',
    borderRadius: '12px',
    background: 'linear-gradient(90deg, rgba(37,99,235,0.08), rgba(56,189,248,0.10))',
    fontSize: '13px',
    color: '#0f172a',
    border: '1px solid rgba(129,140,248,0.4)',
  },
  highlightLabel: {
    fontWeight: 600,
    marginRight: '6px',
  },

  // Section styles
  section: {
    borderRadius: '18px',
    padding: '22px 22px 20px',
    marginBottom: '20px',
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 14px 35px rgba(15,23,42,0.06)',
    border: '1px solid rgba(203,213,225,0.8)',
  },
  sectionHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '10px',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionAccentBar: {
    width: '3px',
    height: '18px',
    borderRadius: '999px',
    background: 'linear-gradient(180deg, #2563eb, #22c55e)',
  },
  list: {
    paddingLeft: '18px',
    margin: 0,
    textAlign : "left"
  },
  listItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '6px',
  },

  // Grid / layout helpers
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px 32px',
  },

  // Doctors / tags
  doctorList: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
  },
  tagListItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#0f172a',
    padding: '6px 10px',
    borderRadius: '10px',
    background: 'rgba(239,246,255,0.9)',
    border: '1px solid rgba(191,219,254,1)',
    marginBottom: '6px',
  },

  // FAQs can reuse existing styles from other pages if needed later
};

function Orthopedic() {
  return (
    <>
      <Helmet>
        <title>Orthopedic | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Orthopedic Department at Shree Saibaba Multispeciality Hospital offers comprehensive care for bone, joint and muscle disorders including joint replacement, fracture management, sports injury care and spine surgery."
        />
        <meta
          name="keywords"
          content="orthopedic hospital Nashik, joint replacement Nashik, fracture treatment Nashik, sports injury Nashik, spine surgery Nashik"
        />
        <meta
          name="og:description"
          content="Advanced orthopedic services including joint replacement, trauma care, sports injury management, spine surgery and rehabilitation at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} // replace with orthopedic-specific image if available
                  alt="Orthopedic Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Orthopedic Care</span>
                </div>
                <h1 style={styles.heroTitle}>Orthopedic Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive care for bones, joints and muscles to restore mobility and quality of life.
                </div>

                <p style={styles.heroParagraph}>
                  Our Orthopedic department is committed to providing comprehensive care for bone, joint,
                  and muscle disorders. Our team of experienced orthopedic surgeons and specialists
                  work together to diagnose and treat a wide range of conditions, from fractures and
                  sports injuries to degenerative diseases like arthritis.
                </p>
                <p style={styles.heroParagraph}>
                  We aim to restore mobility, alleviate pain, and improve the overall quality of life
                  for our patients through evidence-based surgical and non-surgical treatments.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Joint replacement • Spine surgery • 24x7 trauma &amp; fracture care • Advanced rehab
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Services Offered
              </div>
            </div>

            <ul style={styles.list}>
              {/* 1. Orthopedic Surgeries */}
              <li style={styles.listItem}>
                <strong>1. Orthopedic Surgeries:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Joint replacement surgeries (hip, knee).
                  </li>
                  <li style={styles.listItem}>
                    Fracture management and trauma care.
                  </li>
                  <li style={styles.listItem}>
                    Sports injury treatment and rehabilitation.
                  </li>
                  <li style={styles.listItem}>
                    Spine surgery for degenerative and ineffective spine pathologies.
                  </li>
                </ul>
              </li>

              {/* 2. Minimally Invasive Procedures */}
              <li style={styles.listItem}>
                <strong>2. Minimally Invasive Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Arthroscopy for joint disorders and ligament injuries.
                  </li>
                  <li style={styles.listItem}>
                    Joint injections for pain management.
                  </li>
                </ul>
              </li>

              {/* 3. Rehabilitation Services */}
              <li style={styles.listItem}>
                <strong>3. Rehabilitation Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Physical therapy.</li>
                  <li style={styles.listItem}>Occupational therapy.</li>
                </ul>
              </li>

              {/* 4. Emergency Orthopedic Care */}
              <li style={styles.listItem}>
                <strong>4. Emergency Orthopedic Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    24x7 emergency services for fractures, dislocations, and other orthopedic injuries.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Facilities & Equipment */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>
            <p style={styles.listItem}>
              Our Orthopedic department is equipped with advanced facilities and technology to support
              safe and effective orthopedic and spine surgeries:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Four spacious modular operation theatres with laminar airflow for joint replacement,
                spine and complex fracture fixation.
              </li>
              <li style={styles.listItem}>
                Septic OT for infectious cases.
              </li>
              <li style={styles.listItem}>
                3D CT scan for bone reconstruction.
              </li>
              <li style={styles.listItem}>
                Digital X-ray and MRI imaging systems.
              </li>
              <li style={styles.listItem}>
                Advanced rehabilitation equipment.
              </li>
            </ul>
          </section>

          {/* Team Members & Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={styles.listItem}>
              Meet our experienced Orthopedic Surgeons:
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Satyen Joshi</strong>
                  <br />
                  OPD Time: 01:30 PM to 03:30 PM (Monday to Saturday)
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Swapnil Mahale</strong>
                  <br />
                  OPD Time: 10:00 AM to 12:00 PM (Monday to Saturday)
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Brijbhushan Mahajan</strong>
                  <br />
                  OPD Time: 04:00 PM to 06:00 PM (Monday to Saturday)
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>

          {/* Achievements & Highlights */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Achievements &amp; Highlights
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Our department has successfully performed numerous complex orthopedic surgeries,
                including joint replacements and spinal procedures.
              </li>
              <li style={styles.tagListItem}>
                We strive for excellence in patient care, early mobilization and long-term functional outcomes.
              </li>
            </ul>
          </section>

          {/* Patient Guidelines */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Patient Guidelines
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Inform your doctor about any medications, allergies, or previous surgeries.
              </li>
              <li style={styles.listItem}>
                Follow pre- and post-operative instructions carefully, including fasting,
                wound care, medications and physiotherapy schedules as advised.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Orthopedic;
