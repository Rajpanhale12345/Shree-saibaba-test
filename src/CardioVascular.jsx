import React from 'react';
import thoracic from './Images/thoracicdep.jpg'; // change to CVTS-specific image if you have one
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
    marginBottom: '18px',
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
    textAlign: 'left'
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

  // Doctors
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

  // Achievements / Timings
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

  // FAQs (not used here, but kept for consistency if needed later)
  faqList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '12px',
  },
  faqItem: {
    borderRadius: '14px',
    padding: '14px 14px 12px',
    background: '#ffffffff',
    color: '#000000ff',
    boxShadow: '0 16px 30px rgba(15,23,42,0.4)',
    borderLeft: '4px solid #38bdf8',
  },
  faqQuestion: {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '6px',
  },
  faqAnswer: {
    fontSize: '13px',
    lineHeight: 1.6,
    color: '#000000ff',
  },
};

function CardioVascular() {
  return (
    <>
      <Helmet>
        <title>Cardiovascular Thoracic Surgery | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Cardiovascular Thoracic Surgery Department at Shree Saibaba Multispeciality Hospital offers advanced heart and thoracic surgeries including CABG, valve surgery, MICAS and post-surgical ICU and rehabilitation care."
        />
        <meta
          name="keywords"
          content="cardiovascular thoracic surgery Nashik, CABG Nashik, heart surgery Nashik, CT surgery Shree Saibaba Hospital"
        />
        <meta
          name="og:description"
          content="Advanced cardiovascular and thoracic surgical care with experienced surgeons, minimally invasive techniques, arterial graft CABG and dedicated ICU support."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={thoracic}
                  alt="Cardiovascular Thoracic Surgery Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Cardiovascular &amp; Thoracic Surgery</span>
                </div>
                <h1 style={styles.heroTitle}>Cardiovascular Thoracic Surgery Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Precision surgery, advanced technology and compassionate cardiac care.
                </div>

                <p style={styles.heroParagraph}>
                  Our Cardiovascular Thoracic Surgery team is at the forefront of innovation,
                  providing advanced surgical care for heart and thoracic conditions. From
                  cutting-edge minimally invasive procedures to complex bypass surgeries, our
                  experienced surgeons work closely with cardiologists and other specialists
                  to ensure comprehensive care for our patients.
                </p>
                <p style={styles.heroParagraph}>
                  We aim to improve heart health through precision surgery and compassionate
                  care, focusing on safety, faster recovery and better long-term outcomes.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  3375+ open heart surgeries • Awake &amp; redo CABG • Minimally invasive MICAS
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Services */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Advanced Services
              </div>
            </div>

            {/* Cardiac Surgeries */}
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Cardiac Surgeries:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Coronary artery bypass grafting (CABG) with advanced grafting techniques.
                  </li>
                  <li style={styles.listItem}>
                    Heart valve repair and replacement.
                  </li>
                </ul>
              </li>

              {/* MICAS */}
              <li style={styles.listItem}>
                <strong>Minimally Invasive Coronary Artery Surgery (MICAS):</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    MICAS valve replacement surgery.
                  </li>
                  <li style={styles.listItem}>
                    Surgery for congenital heart defects.
                  </li>
                </ul>
              </li>

              {/* Post-Surgical Care */}
              <li style={styles.listItem}>
                <strong>Post-Surgical Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    State-of-the-art Intensive Care Unit (ICU) services.
                  </li>
                  <li style={styles.listItem}>
                    Advanced rehabilitation and follow-up care.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Advanced Facilities & Equipment */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Advanced Facilities &amp; Equipment
              </div>
            </div>
            <p style={styles.listItem}>
              Our department is equipped with the latest technology and advanced surgical tools to
              support complex cardiovascular and thoracic procedures safely and effectively, including:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Heart–Lung machine.</li>
              <li style={styles.listItem}>Intra-aortic balloon pump (IABP).</li>
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
                Successfully performed over 3,375 open heart surgeries, including awake bypass
                surgery, redo procedures and minimally invasive surgeries.
              </li>
              <li style={styles.tagListItem}>
                We strive for excellence in patient care and outcomes with strict adherence to
                global surgical standards.
              </li>
              <li style={styles.tagListItem}>
                CABG is usually performed using arterial grafts, particularly the Left Internal
                Mammary Artery (LIMA) and Right Internal Mammary Artery (RIMA), considered the
                gold-standard method due to superior long-term patency compared to vein grafts.
              </li>
            </ul>
          </section>

          {/* Team Members / Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>
            <p style={styles.listItem}>
              Meet our experienced and super-specialized Cardiovascular and Thoracic Surgeons:
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Kishore Deore</strong>
                  <br />
                  OPD: Monday, Tuesday – 11:00 AM to 05:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Kiran Kurkure</strong>
                  <br />
                  OPD: Wednesday to Saturday – 5:00 PM to 07:00 PM
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Nilesh Purkar</strong>
                  <br />
                  Visiting Consultant
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
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
                Inform your surgeon about all medications you are taking, any known allergies,
                and details of previous surgeries or medical conditions.
              </li>
              <li style={styles.listItem}>
                Follow all pre-operative instructions carefully, including fasting guidelines
                and medication adjustments as advised.
              </li>
              <li style={styles.listItem}>
                Arrange for a family member or attendant to accompany you before and after
                surgery whenever possible.
              </li>
              <li style={styles.listItem}>
                Attend scheduled follow-up visits and rehabilitation sessions to support
                recovery and long-term heart health.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default CardioVascular;
