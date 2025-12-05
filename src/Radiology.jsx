import React from 'react';
import img from './Images/Radiologydep.jpg'; // replace with radiology-specific image if available
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

  // Doctors / tags / FAQs
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

function Radiology() {
  return (
    <>
      <Helmet>
        <title>Radiology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Radiology Department at Shree Saibaba Multispeciality Hospital offers comprehensive imaging services including X-ray, ultrasound, Doppler, CT, MRI, cardiac MRI and digital mammography with 24x7 emergency support."
        />
        <meta
          name="keywords"
          content="radiology Nashik, CT scan Nashik, MRI Nashik, ultrasound Nashik, digital mammography Nashik, cardiac MRI Nashik"
        />
        <meta
          name="og:description"
          content="Advanced radiology and imaging services including X-ray, ultrasonography, CT, MRI, Doppler studies, digital mammography and image-guided procedures at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} // replace with radiology-specific image if available
                  alt="Radiology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Radiology</span>
                </div>
                <h1 style={styles.heroTitle}>Radiology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive imaging and image-guided procedures for accurate diagnosis and treatment.
                </div>

                <p style={styles.heroParagraph}>
                  Our Radiology department provides comprehensive imaging services to diagnose
                  and help treat a wide range of medical conditions. Our team of experienced
                  radiologists and technicians work together to deliver high-quality imaging
                  with a focus on accuracy, safety and patient comfort.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  X-ray • USG &amp; Doppler • CT &amp; MRI • 1st Digital Mammography in Nashik • Cardiac MRI
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered – Imaging Services */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Services Offered
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Imaging Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>X-ray.</li>
                  <li style={styles.listItem}>Ultrasonography.</li>
                  <li style={styles.listItem}>Peripheral Doppler study.</li>
                  <li style={styles.listItem}>Carotid Doppler.</li>
                  <li style={styles.listItem}>Fetal cardiac echo.</li>
                  <li style={styles.listItem}>1st digital mammography in Nashik.</li>
                  <li style={styles.listItem}>Computed Tomography (CT) scans.</li>
                  <li style={styles.listItem}>Magnetic Resonance Imaging (MRI).</li>
                </ul>
              </li>

              <li style={styles.listItem}>
                <strong>Image-guided Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Biopsies.</li>
                  <li style={styles.listItem}>Drainage procedures.</li>
                  <li style={styles.listItem}>Vascular interventions.</li>
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
              Our department is equipped with state-of-the-art imaging technology to
              support a wide range of diagnostic and interventional procedures:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>State-of-the-art imaging equipment.</li>
              <li style={styles.listItem}>Advanced digital X-ray systems.</li>
              <li style={styles.listItem}>State-of-the-art ultrasonography machines.</li>
              <li style={styles.listItem}>High-field MRI machines.</li>
              <li style={styles.listItem}>CT Scan.</li>
              <li style={styles.listItem}>1st digital mammography in Nashik.</li>
            </ul>
          </section>

          {/* Specialised Imaging Services */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Specialised Imaging Services
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Cardiac MRI.</li>
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
                We specialise in cardiac MRI to assess viability of myocardium and evaluate
                cardiomyopathies, helping guide advanced cardiac treatment decisions.
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
                Inform your doctor about any medications, allergies, or previous medical conditions.
              </li>
              <li style={styles.listItem}>
                Follow specific instructions for imaging procedures, including fasting or
                drinking water as advised for certain tests.
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

            <p style={styles.listItem}>Meet our experienced Radiologists:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Pallavi Dharmadhikari</strong> (MD, DNB)
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Vaibhav Nimbhore</strong> (DNB)
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Imaging Services:</strong>
                  <br />
                  Monday to Saturday, 9:00 AM – 9:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                FAQs
              </div>
            </div>

            <div style={styles.faqList}>
              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q1: What is a CT scan?</div>
                <div style={styles.faqAnswer}>
                  A CT scan is a non-invasive imaging test that uses X-rays and a rotating
                  scanner to create detailed cross-sectional images of internal organs,
                  bones, blood vessels and tissues.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q2: What is MRI?</div>
                <div style={styles.faqAnswer}>
                  MRI is a non-invasive imaging test that uses strong magnetic fields and
                  radio waves to create detailed images of internal organs and tissues. It
                  is particularly useful for brain, spine, joint and soft tissue evaluation.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q3: How do I prepare for my scan?</div>
                <div style={styles.faqAnswer}>
                  Preparation depends on the type of scan:
                  <br />• <strong>Chest X-rays:</strong> Usually no preparation is needed.
                  <br />• <strong>CT / MRI:</strong> You may be asked not to eat or drink
                  for a few hours before the scan; some tests may require contrast injection.
                  <br />• <strong>Ultrasound:</strong> Some tests may require a full bladder
                  or fasting.
                  <br />
                  You will receive specific instructions when you book your appointment.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q4: How long will the procedure take?</div>
                <div style={styles.faqAnswer}>
                  Average procedure times are:
                  <br />• X-ray: 10–15 minutes
                  <br />• Ultrasound: 20–45 minutes
                  <br />• CT scan: 15–30 minutes
                  <br />• MRI: 30–60 minutes
                  <br />
                  These are approximate and can vary depending on the body part being imaged
                  and the complexity of the study.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q5: Is the procedure painful or dangerous?
                </div>
                <div style={styles.faqAnswer}>
                  Most radiology tests are painless and non-invasive. Some may involve
                  contrast injections, which can cause mild discomfort or, rarely, allergic
                  reactions. Our team follows strict safety protocols and monitors you
                  closely during and after the procedure.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q6: Are there risks from radiation exposure?
                </div>
                <div style={styles.faqAnswer}>
                  Some imaging tests (X-ray, CT) use ionizing radiation. The amount used
                  for diagnostic tests is generally low, and we always use the minimum dose
                  necessary. MRI and ultrasound do not involve any radiation. We avoid
                  repeat scans unless absolutely required.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q7: How do I get my results?</div>
                <div style={styles.faqAnswer}>
                  In most cases, reports are available within 1–2 hours. Some specialised
                  studies may take up to 24 hours. Your doctor will review the report with
                  you and explain the findings and next steps.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Radiology;
