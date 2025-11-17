import React from 'react';
import img from './Images/interventionaldep.jpg'; // replace with Interventional Radiology image if available
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
  sectionSubtext: {
    fontSize: '12px',
    color: '#94a3b8',
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
  doctorItem: {
    fontSize: '14px',
    color: '#0f172a',
    padding: '6px 10px',
    borderRadius: '999px',
    border: '1px solid rgba(148,163,184,0.5)',
    background: 'rgba(248,250,252,0.9)',
    display: 'inline-block',
    marginBottom: '6px',
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

function InterventionalRadiology() {
  return (
    <>
      <Helmet>
        <title>Interventional Radiology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Interventional Radiology Department at Shree Saibaba Multispeciality Hospital offers minimally invasive, image-guided procedures for vascular and non-vascular conditions with 24x7 emergency services."
        />
        <meta
          name="keywords"
          content="interventional radiology Nashik, IR procedures Nashik, angiography Nashik, tumour ablation Nashik"
        />
        <meta
          name="og:description"
          content="Advanced interventional radiology services including angiography, angioplasty, embolization, tumour ablation and emergency IR at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} // replace with Interventional Radiology-specific image if available
                  alt="Interventional Radiology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Interventional Radiology</span>
                </div>
                <h1 style={styles.heroTitle}>Interventional Radiology Department</h1>
                <div style={styles.heroSubtitle}>
                  HOD: Dr. Pallavi Dharmadhikari
                </div>
                <div style={styles.heroTagline}>
                  Minimally invasive, image-guided treatments for precise and effective care.
                </div>

                <p style={styles.heroParagraph}>
                  Our Interventional Radiology department provides minimally invasive procedures
                  for the diagnosis and treatment of various medical conditions. Our team of
                  experienced interventional radiologists utilizes advanced imaging guidance to
                  deliver precise and effective care.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Image-guided biopsies • Advanced vascular &amp; non-vascular procedures • 24x7 emergency IR
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
              {/* 1. Image guided procedures */}
              <li style={styles.listItem}>
                <strong>1. Image-guided Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Biopsies for cancer diagnosis.</li>
                  <li style={styles.listItem}>
                    Drainage of abscesses and fluid collections.
                  </li>
                </ul>
              </li>

              {/* 2. Vascular Procedures */}
              <li style={styles.listItem}>
                <strong>2. Vascular Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Peripheral angiography and angioplasty.</li>
                  <li style={styles.listItem}>
                    Intra-arterial thrombolysis for acute ischemic limbs.
                  </li>
                  <li style={styles.listItem}>
                    Bronchial artery embolisation in haemoptysis using PVA and micro catheter.
                  </li>
                  <li style={styles.listItem}>
                    Uterine artery embolisation in severe menorrhagia secondary to PPH or
                    uterine fibroids or AVM.
                  </li>
                  <li style={styles.listItem}>
                    Permanent tunnelled catheter placement as a substitute for AV fistula in
                    long-term dialysis.
                  </li>
                  <li style={styles.listItem}>Chemo-embolization for liver tumour.</li>
                  <li style={styles.listItem}>Embolization of AV malformation.</li>
                  <li style={styles.listItem}>Laser ablation for varicose veins.</li>
                </ul>
              </li>

              {/* 3. Non Vascular Procedures */}
              <li style={styles.listItem}>
                <strong>3. Non-vascular Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Tumour ablation (radiofrequency, microwave).
                  </li>
                  <li style={styles.listItem}>
                    Pain management procedures (nerve blocks, injections).
                  </li>
                </ul>
              </li>

              {/* 4. Emergency IR */}
              <li style={styles.listItem}>
                <strong>4. Emergency Interventional Radiology:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    24x7 emergency services for vascular and non-vascular interventions.
                  </li>
                </ul>
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
                Our department has successfully performed numerous complex interventional
                radiology procedures, including advanced vascular interventions and tumour
                ablations.
              </li>
              <li style={styles.tagListItem}>
                We strive for excellence in patient care, safety and clinical outcomes
                through protocol-driven, minimally invasive treatments.
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
              Our Interventional Radiology department is equipped with advanced facilities
              to support a wide range of image-guided procedures:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                State-of-the-art angiography suites.
              </li>
              <li style={styles.listItem}>
                Digital subtraction angiography (DSA) systems.
              </li>
              <li style={styles.listItem}>
                Ultrasound and CT guidance systems.
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
                Bring all your previous files and reports for review before the procedure.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about any medications, allergies, or previous surgeries.
              </li>
              <li style={styles.listItem}>
                Follow pre-procedure instructions carefully, including fasting or medication
                changes, as advised by your doctor.
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
              Meet our experienced Interventional Radiologists:
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Pallavi Dharmadhikari</strong>
                  <br />
                  Head of Department
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Ajit Patil</strong>
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Rushbh Chordiya</strong>
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Procedure Scheduling:</strong>
                  <br />
                  Monday to Friday, 9:00 AM – 9:00 PM
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

export default InterventionalRadiology;

