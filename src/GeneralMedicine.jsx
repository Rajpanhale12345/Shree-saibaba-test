import React from 'react';
import generalmedicine from './Images/generalmedicinedep.webp';
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
    color: '#ffffffff',
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
    background: '#ffffffff',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'left',
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
    textAlign: 'left',
  },
  listItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '6px',
    textAlign: 'left',
  },

  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px 32px',
  },

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

function GeneralMedicine() {
  return (
    <>
      <Helmet>
        <title>General Medicine | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers comprehensive General Medicine care including diagnosis, treatment, and long-term management of diabetes, hypertension, infections, respiratory disorders, and preventive health check-ups."
        />
        <meta
          name="keywords"
          content="general medicine hospital Nashik, general physician Nashik, diabetes care Nashik, hypertension clinic Nashik, preventive health checkup Nashik, Shree Saibaba Multispeciality Hospital general medicine"
        />
        <meta
          name="og:description"
          content="Holistic General Medicine services with experienced physicians, advanced diagnostics, ICU support, preventive screenings, and 24x7 emergency care at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={generalmedicine}
                  alt="General Medicine Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Comprehensive Medical Care</span>
                </div>

                <h1 style={styles.heroTitle}>General Medicine Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroTagline}>
                  Accurate diagnosis, effective treatment, and long-term management for acute &amp; chronic illnesses.
                </div>

                <p style={styles.heroParagraph}>
                  The General Medicine Department provides comprehensive evaluation, treatment, and long-term management
                  of a wide spectrum of medical conditions. Our team of experienced physicians is dedicated to delivering
                  accurate diagnosis, effective treatment, and holistic care.
                </p>

                <p style={styles.heroParagraph}>
                  We manage acute and chronic illnesses such as diabetes, hypertension, respiratory disorders,
                  gastrointestinal issues, and infectious diseases with a patient-first approach.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Preventive screenings • ICU support • Chronic disease clinics • 24×7 emergency services
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

            {/* Diagnostic Services */}
            <div style={{ marginBottom: '12px' }}>
              <div style={styles.tagListItem}><strong>Diagnostic Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Routine health check-ups and preventive screenings</li>
                <li style={styles.listItem}>Complete blood tests and laboratory investigations</li>
                <li style={styles.listItem}>Imaging studies including X-ray and ultrasound</li>
                <li style={styles.listItem}>ECG and other cardiac evaluations</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: '12px' }}>
              <div style={styles.tagListItem}><strong>Treatment Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Management of chronic diseases (Diabetes, Hypertension, Thyroid Disorders, etc.)</li>
                <li style={styles.listItem}>Treatment of acute medical conditions (fever, infections, dehydration, etc.)</li>
                <li style={styles.listItem}>Medication management and patient counselling</li>
                <li style={styles.listItem}>Lifestyle and diet guidance for long-term disease control</li>
              </ul>
            </div>

            {/* Specialized Services */}
            <div>
              <div style={styles.tagListItem}><strong>Specialized Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Comprehensive Diabetic Care &amp; Patient Education</li>
                <li style={styles.listItem}>Hypertension Clinic for systematic BP management</li>
                <li style={styles.listItem}>Respiratory Care Services</li>
                <li style={styles.listItem}>Evaluation of cough, asthma, COPD</li>
                <li style={styles.listItem}>Preventive and therapeutic management</li>
              </ul>
            </div>
          </section>

          {/* Facilities & Equipment */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>
            <div style={styles.listItem}>Our department is equipped with:</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Fully equipped Medical ICU</li>
              <li style={styles.listItem}>Modern and fully automated laboratory facilities</li>
              <li style={styles.listItem}>Advanced imaging systems (X-rays, ultrasound, etc.)</li>
              <li style={styles.listItem}>Dedicated procedure rooms for minor medical procedures</li>
              <li style={styles.listItem}>Comfortable and patient-friendly OPD and consultation areas</li>
            </ul>
          </section>

          {/* Team Members */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members
              </div>
            </div>
            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.doctorItem}>Dr. Kunal Nikam</li>
                <li style={styles.doctorItem}>Dr. Ganesh Motwani</li>
              </ul>
            </div>
          </section>

          {/* Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Department Timings
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}><strong>OPD:</strong> Monday to Saturday</li>
              <li style={styles.tagListItem}><strong>Timings:</strong> 10:00 AM – 9:30 PM</li>
              <li style={styles.tagListItem}><strong>Emergency Services:</strong> Available 24×7</li>
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
              <li style={styles.tagListItem}>Successfully managing a high volume of chronic disease patients</li>
              <li style={styles.tagListItem}>Expertise in early diagnosis and preventive care</li>
              <li style={styles.tagListItem}>Strong focus on patient safety, accurate treatment, and continuous monitoring</li>
              <li style={styles.tagListItem}>Proven results in managing complex diabetes and hypertension cases</li>
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
              <li style={styles.listItem}>Please arrive at least 30 minutes before your scheduled appointment.</li>
              <li style={styles.listItem}>Inform your doctor about any ongoing medications, allergies, or past medical history.</li>
              <li style={styles.listItem}>Follow specific preparation instructions for any diagnostic tests advised.</li>
              <li style={styles.listItem}>Carry previous reports, prescriptions, or health records for continuity of care.</li>
            </ul>
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
                <div style={styles.faqQuestion}>1. When should I visit a General Physician?</div>
                <div style={styles.faqAnswer}>
                  You should visit if you have fever, cough, fatigue, body pain, blood pressure issues, diabetes concerns,
                  digestive problems, or any persistent symptoms.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>2. Can the General Medicine department manage chronic diseases?</div>
                <div style={styles.faqAnswer}>
                  Yes. Conditions like diabetes, hypertension, thyroid disorders, and asthma are routinely managed with
                  regular follow-up and personalised treatment plans.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>3. Do I need an appointment beforehand?</div>
                <div style={styles.faqAnswer}>
                  Walk-ins are accepted, but a prior appointment helps reduce waiting time.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>4. Are routine blood tests available in the hospital?</div>
                <div style={styles.faqAnswer}>
                  Yes, all major blood investigations and screening tests are available in our laboratory.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>5. Will the doctor guide me on lifestyle and diet changes?</div>
                <div style={styles.faqAnswer}>
                  Absolutely. Our physicians provide complete lifestyle, dietary, and medication counselling for long-term
                  disease control.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default GeneralMedicine;
