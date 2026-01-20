import React from 'react';
import cardio from './Images/cardiodep.jpg';
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
    textAlign: 'left',
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
  sectionSubtext: {
    fontSize: '12px',
    color: '#94a3b8',
  },
  list: {
    paddingLeft: '18px',
    margin: 0,
    textAlign: 'left',   // ADD THIS LINE
  },

  listItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '6px',
    textAlign: 'left',   // ADD THIS LINE
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

  // FAQs
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

function Cardiology() {
  return (
    <>
      <Helmet>
        <title>Cardiology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers advanced cardiology care in Nashik, Maharashtra, with experienced cardiologists, 24x7 cardiac emergency services, cath labs, cardiac ICU, and comprehensive heart check-up packages."
        />
        <meta
          name="keywords"
          content="cardiology hospital Nashik, best heart hospital Nashik, cardiac care Nashik, Shree Saibaba Multispeciality Hospital cardiology"
        />
        <meta
          name="og:description"
          content="Shree Saibaba Multispeciality Hospital is a leading center for advanced cardiac care in Nashik, offering interventional cardiology, cardiac surgery, diagnostics, rehabilitation, and 24x7 emergency services."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={cardio}
                  alt="Cardiology Department"
                  style={styles.heroImage}

                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Cardiac Care</span>
                </div>
                <h1 style={styles.heroTitle}>Best Cardiology Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive heart care backed by technology, expertise, and compassion.
                </div>

                <p style={styles.heroParagraph}>
                  Cardiology is a medical specialty that helps to heal the heart. The heart
                  is the most vital organ in our body, and thus, if you have any kind of
                  issue, you must go to a doctor promptly. Untreated, these problems could
                  become serious and have a negative impact on your daily life. This includes
                  the conditions of heart disease, cardiovascular disease and all of their
                  related disorders.
                </p>
                <p style={styles.heroParagraph}>
                  The Shree Saibaba Multispeciality Hospital is the leading cardiology hospital
                  in Nashik, with state-of-the-art, reliable, advanced cardiac services. It is
                  also one of the best hospitals to find heart specialists (doctors) in Nashik.
                  Patients choose Shree Saibaba Multispeciality Hospital for its accurate
                  diagnosis, up-to-date treatment techniques and caring attitudes of about
                  patients.
                </p>
                <p style={styles.heroParagraph}>
                  The cardiology department at Shree Saibaba Multispeciality Hospital is comprised
                  of well-trained cardiologists including specialists in heart failure. This
                  comprehensive approach allows us to treat a variety of cardiovascular issues,
                  such as hypertension (high blood pressure), chest pain, arrhythmias (irregular
                  heartbeats), blocked arteries, and chronic heart disease.
                </p>
                <p style={styles.heroParagraph}>
                  We provide complete care for patients facing cardiovascular emergencies, ensuring
                  fast response and lifesaving treatment. With advanced diagnostic facilities available
                  in-house, heart conditions are identified quickly, allowing immediate and effective
                  treatment.
                </p>
                <p style={styles.heroParagraph}>
                  As one of the best heart hospitals in the region, our goal is to prevent, diagnose,
                  and manage heart-related conditions with precision and care. Every patient receives
                  a personalized approach to their heart health through routine examinations and extensive
                  procedures and treatment.
                </p>
                <p style={styles.heroParagraph}>
                  The focus is on enhancing long term heart health and providing improved quality of 
                  life to all patients. Individuals seeking a qualified specialist or patient care provider 
                  for cardiovascular disease will find the Shree Saibaba Multispeciality Hospital to be the 
                  place to go for all types of cardiovascular care in Nashik.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  2 cath labs • 30-bed intensive cardiac care • 24x7 cardiac emergency services
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
              <li style={styles.listItem}>
                Life-saving interventional procedures like rescue angioplasty, permanent
                pacemaker, AICD, ASD, VSD, PDA, and BMV – cardiac catheterization and
                angiography.
              </li>
              <li style={styles.listItem}>Preventive cardiology and risk assessment.</li>
              <li style={styles.listItem}>
                Management of hypertension, heart failure, arrhythmias, and heart attacks.
              </li>
              <li style={styles.listItem}>Electrophysiological study.</li>
              <li style={styles.listItem}>24x7 emergency cardiac services.</li>
              <li style={styles.listItem}>30-bed intensive cardiac care unit (ICCU).</li>
              <li style={styles.listItem}>
                Comprehensive cardiac check-up packages designed to detect potential issues early.
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
            <ul style={styles.list}>
              <li style={styles.listItem}>
                2 Cath labs: State-of-the-art Philips Azurion 7 ceiling-mounted cath lab,
                intravascular ultrasound (IVUS), fractional flow reserve (FFR), OCT, and
                rotablator machines for advanced angioplasty procedures.
              </li>
              <li style={styles.listItem}>
                Echocardiography and trans-oesophageal echocardiography.
              </li>
              <li style={styles.listItem}>Cardiac MRI.</li>
              <li style={styles.listItem}>
                Stress test, Holter monitoring, ambulatory BP monitoring.
              </li>
              <li style={styles.listItem}>Cardiac monitoring and telemetry units.</li>
              <li style={styles.listItem}>Dedicated cardiac rehabilitation gym.</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Why Choose Us
              </div>

            </div>
            <p style={styles.listItem}>
              Shree Saibaba Multispeciality Hospital is widely recognized as a leading center
              for cardiac care in Nashik, offering a blend of advanced technology, experienced
              cardiologists, and compassionate, patient-focused treatment. Our expert team is
              equipped to handle everything from routine heart conditions to complex procedures
              like bypass surgeries, valve replacements, and heart transplants.
            </p>
            <p style={styles.listItem}>
              With fully integrated diagnostic and surgical services under one roof, along with
              round-the-clock emergency care, we ensure rapid, accurate, and seamless cardiac
              treatment. Patients choose us for our clinical excellence, ethical practices, and
              unwavering commitment to delivering world-class heart care with a personal touch.
            </p>
          </section>

          {/* Doctors */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Meet Our Experienced Cardiologists
              </div>

            </div>
            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.doctorItem}>Dr. Aniruddha Dharmadhikari</li> <br />
                <li style={styles.doctorItem}>Dr. Amit Chaudhary</li><br />
                <li style={styles.doctorItem}>Dr. Nilesh Tawade</li>
              </ul>
            </div>
          </section>

          {/* Achievements */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Achievements &amp; Highlights
              </div>

            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Successfully performed over 50,000 cardiac catheterization procedures.
              </li>
              <li style={styles.tagListItem}>
                Recognized for excellence in cardiology by the Times of India.
              </li>
              <li style={styles.tagListItem}>
                Conducted multiple community awareness programs on heart health and prevention.
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
                Bring all previous medical records, prescriptions, and investigation reports
                for your consultation.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about all ongoing medications, allergies, and any previous
                heart procedures or surgeries.
              </li>
              <li style={styles.listItem}>
                Follow fasting or preparation instructions carefully for tests like stress
                tests, angiography, or other procedures, if advised.
              </li>
              <li style={styles.listItem}>
                Do not stop or change any cardiac medicines without your cardiologist&apos;s guidance.
              </li>
              <li style={styles.listItem}>
                Attend regular follow-up visits and cardiac rehabilitation sessions as recommended.
              </li>
            </ul>
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
              <li style={styles.tagListItem}>
                <strong>OPD Timings:</strong> 12:00 PM - 9:00 PM
              </li>
              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> 24 x 7
              </li>
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
                <div style={styles.faqQuestion}>
                  1. What should I expect during a cardiac stress test?
                </div>
                <div style={styles.faqAnswer}>
                  A cardiac stress test monitors your heart&apos;s activity while you walk
                  on a treadmill or ride a stationary bike. It helps diagnose heart
                  conditions and assess your heart&apos;s response to physical activity.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  2. How do I prepare for an echocardiogram?
                </div>
                <div style={styles.faqAnswer}>
                  No special preparation is usually required. You may need to remove
                  clothing from the waist up and wear a gown during the procedure.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  3. What are the early symptoms of heart problems?
                </div>
                <div style={styles.faqAnswer}>
                  Common early symptoms include chest pain or discomfort, shortness of
                  breath, fatigue, palpitations, dizziness, and swelling in the legs. If
                  you notice these symptoms, you should seek medical advice promptly.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  4. Can I exercise after a heart attack or surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Yes, but only under your doctor&apos;s guidance. Cardiac rehabilitation
                  programs are often recommended to help you return to safe levels of
                  physical activity.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  5. What foods should I avoid for better heart health?
                </div>
                <div style={styles.faqAnswer}>
                  It is advisable to limit fried foods, processed meats, excess salt, sugary
                  drinks, and trans fats. Focus on a balanced diet rich in fruits,
                  vegetables, whole grains, lean proteins, and healthy fats.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Cardiology;
