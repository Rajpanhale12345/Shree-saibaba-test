import React from 'react';
import img from './Images/Neurosurgerydep.jpg'; // replace with neurosurgery-specific image if available
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
};

function Neurosurgery() {
  return (
    <>
      <Helmet>
        <title>Neurosurgery & Spine Surgery | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Neurosurgery & Spine Surgery Department at Shree Saibaba Multispeciality Hospital, Nashik offers advanced brain and spine surgeries with state-of-the-art technology and a multidisciplinary team."
        />
        <meta
          name="keywords"
          content="neurosurgery Nashik, spine surgery Nashik, brain tumor surgery Nashik, minimally invasive spine surgery Nashik"
        />
        <meta
          name="og:description"
          content="Comprehensive neurosurgery and spine surgery services including brain tumor surgery, aneurysm procedures, spinal fusion, minimally invasive spine surgery and neurocritical care."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} // replace with neurosurgery/spine-specific image if available
                  alt="Neurosurgery and Spine Surgery Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Neurosurgery &amp; Spine Surgery</span>
                </div>
                <h1 style={styles.heroTitle}>Best Neurosurgery &amp; Spine Surgery Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Advanced brain and spine surgery with precision, safety and compassionate care.
                </div>

                <p style={styles.heroParagraph}>
                  Neurosurgery is a highly specialized branch of medicine that deals with the
                  diagnosis and surgical treatment of disorders affecting the brain, spine,
                  and peripheral nerves. Among its key focus areas, spine surgery plays a
                  critical role in treating degenerative, traumatic, congenital, and
                  tumor-related spinal conditions that impact mobility, sensation, and quality
                  of life.
                </p>
                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital is a premier destination for
                  Neurosurgery and Spine Surgery in Nashik, offering advanced surgical
                  techniques delivered by an expert team of neurosurgeons, spine surgeons,
                  neuroanesthetists, and rehabilitation specialists. Our department is built
                  on the foundation of surgical precision, clinical excellence, and
                  compassionate care.
                </p>
                <p style={styles.heroParagraph}>
                  Equipped with state-of-the-art operation theaters, high-resolution
                  neuro-navigation systems, intraoperative imaging, and advanced
                  neuro-monitoring technologies, we perform a full range of complex brain and
                  spine procedures with enhanced safety and faster recovery.
                </p>
                <p style={styles.heroParagraph}>
                  From life-saving brain surgeries to minimally invasive spinal procedures,
                  our team adopts a patient-centric approach, ensuring personalized care,
                  multidisciplinary planning, and long-term rehabilitation support.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Complex brain &amp; spine surgeries • Neuro-navigation &amp; neuromonitoring • Dedicated neurocritical care
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered – Neurosurgical Procedures */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Neurosurgical Procedures
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Brain tumor surgery.</li>
              <li style={styles.listItem}>
                Aneurysm clipping and coiling and vascular neurosurgery.
              </li>
              <li style={styles.listItem}>Spinal tumor surgery.</li>
              <li style={styles.listItem}>Neuroendoscopic procedures.</li>
              <li style={styles.listItem}>Neurotrauma (brain and skull injury).</li>
              <li style={styles.listItem}>Pediatric neurosurgical procedures.</li>
            </ul>
          </section>

          {/* Services Offered – Spine Surgeries */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Spine Surgeries
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Spinal fusion and stabilization.</li>
              <li style={styles.listItem}>Surgical management of spinal trauma.</li>
              <li style={styles.listItem}>Artificial disc replacement.</li>
              <li style={styles.listItem}>Minimally invasive spine surgery.</li>
              <li style={styles.listItem}>Spinal deformity correction.</li>
              <li style={styles.listItem}>Treatment of congenital spinal problems.</li>
            </ul>
          </section>

          {/* Neurocritical Care */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Neurocritical Care
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Intensive care for critically ill neurological and neurosurgical patients.
              </li>
              <li style={styles.listItem}>
                Advanced monitoring and life support systems for post-operative and emergency cases.
              </li>
            </ul>
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
                Our department has successfully performed numerous complex neurosurgical and
                spinal procedures, including high-risk brain and spine surgeries.
              </li>
              <li style={styles.tagListItem}>
                We prioritize patient safety, early mobilization and improved functional
                outcomes through evidence-based protocols and multidisciplinary care.
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
              Our Neurosurgery and Spine Surgery department is equipped with advanced
              infrastructure and technology to support complex brain and spine procedures:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                State-of-the-art operation theaters.
              </li>
              <li style={styles.listItem}>
                Advanced neuroimaging systems (MRI, CT scans, etc.).
              </li>
              <li style={styles.listItem}>
                Modern neurocritical care facilities.
              </li>
              <li style={styles.listItem}>
                Intraoperative neuromonitoring systems.
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
                Please arrive at least 10 minutes before your scheduled appointment.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about any medications, allergies, or previous surgeries.
              </li>
              <li style={styles.listItem}>
                Follow pre-operative instructions carefully, including fasting guidelines
                and medication adjustments as advised.
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
              Meet our experienced Neurosurgeons and Spine Surgeons:
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Neurosurgeons:</strong>
                  <br />
                  Dr. Sumit Hire
                  <br />
                  Dr. Anil Jadhav
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Spine Surgeons:</strong>
                  <br />
                  Dr. Gaurav Kulshrestha
                  <br />
                  Dr. Gaurav Gujrathi
                </li>
                <li style={styles.tagListItem}>
                  <strong>OPD Timings:</strong>
                  <br />
                  Monday to Saturday, 3:00 PM – 5:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Neurosurgery;
