import React from 'react';
import cardio from './Images/cardiodep.jpg';
import { Helmet } from "react-helmet-async";

const styles = {
  page: {
    background: "linear-gradient(135deg, #f4f7fb, #e5edf9)",
    padding: "40px 16px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily:
      '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    color: "#0f172a",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(280px, 420px) 1fr",
    gap: "24px",
    alignItems: "start",
    marginBottom: "32px",
  },

  heroImageWrapper: {
    minWidth: "280px",
  },
  heroImageCard: {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 18px 45px rgba(15,23,42,0.16)",
    border: "1px solid rgba(148,163,184,0.4)",
    background: "#0f172a",

    height: "clamp(220px, 32vw, 420px)",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    opacity: 0.95,
  },

  heroTextWrapper: {
    minWidth: "280px",
  },
  heroTextCard: {
    borderRadius: "20px",
    padding: "28px 28px 24px",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
    border: "1px solid rgba(148,163,184,0.4)",
  },

  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    background: "rgba(37,99,235,0.08)",
    color: "#1d4ed8",
    marginBottom: "10px",
  },
  pillDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22c55e",
  },

  heroSubtitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#64748b",
    marginBottom: "18px",
  },

  heroParagraph: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#1e293b",
    marginBottom: "10px",
    textAlign: "left",
  },
  heroParagraph1: {
    fontSize: "24px",
    lineHeight: 1.7,
    color: "#1e293b",
    marginBottom: "10px",
    textAlign: "left",
  },
  heroParagraph2: {
    fontSize: "40px",
    lineHeight: 1.2,
    color: "#1e293b",
    marginBottom: "10px",
    textAlign: "center",
  },

  highlightStrip: {
    marginTop: "16px",
    padding: "10px 14px",
    borderRadius: "12px",
    background:
      "linear-gradient(90deg, rgba(37,99,235,0.08), rgba(56,189,248,0.10))",
    fontSize: "13px",
    color: "#0f172a",
    border: "1px solid rgba(129,140,248,0.4)",
  },
  highlightLabel: {
    fontWeight: 600,
    marginRight: "6px",
  },

  section: {
    borderRadius: "18px",
    padding: "22px 22px 20px",
    marginBottom: "20px",
    background: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 14px 35px rgba(15,23,42,0.06)",
    border: "1px solid rgba(203,213,225,0.8)",
  },
  sectionHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: "10px",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f172a",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  sectionAccentBar: {
    width: "3px",
    height: "18px",
    borderRadius: "999px",
    background: "linear-gradient(180deg, #2563eb, #22c55e)",
  },

  list: {
    paddingLeft: "18px",
    margin: 0,
    textAlign: "left",
  },
  listItem: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#1e293b",
    marginBottom: "6px",
  },

  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px 32px",
  },

  doctorList: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  },

  tagListItem: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#0f172a",
    padding: "6px 10px",
    borderRadius: "10px",
    background: "rgba(239,246,255,0.9)",
    border: "1px solid rgba(191,219,254,1)",
    marginBottom: "6px",
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
    textAlign: 'left',
  },
};

const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
const PAGE_TITLE = "Cardiology | Best Cardiology Hospital in Nashik";
const PAGE_DESCRIPTION = "Advanced cardiology care in Nashik, Maharashtra - experienced cardiologists, 24x7 cardiac emergency, cath labs, cardiac ICU (ICCU), diagnostics, and heart check-up packages at Shree Saibaba Multispeciality Hospital.";
const CANONICAL_URL = "https://shreesaibabamultispecialityhospital.com/cardiology";
const OG_IMAGE_URL = "https://shreesaibabamultispecialityhospital.com/assets/cardiodep-Db5VvU1f.jpg";


function Cardiology() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Cardiology Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": SITE_NAME,
            "url": CANONICAL_URL,
            "department": {
              "@type": "MedicalBusiness",
              "name": "Cardiology Department",
              "description": PAGE_DESCRIPTION,
              "medicalSpecialty": "Cardiovascular"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nashik"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What should I expect during a cardiac stress test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A cardiac stress test monitors your heart’s activity while you walk on a treadmill or ride a stationary bike. It helps diagnose heart conditions and assess your heart’s response to physical activity."
                }
              },
              {
                "@type": "Question",
                "name": "How do I prepare for an echocardiogram?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Usually no special preparation is required. You may need to remove clothing from the waist up and wear a gown during the procedure."
                }
              },
              {
                "@type": "Question",
                "name": "What are the early symptoms of heart problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Common early symptoms include chest pain or discomfort, shortness of breath, fatigue, palpitations, dizziness, and swelling in the legs. Seek medical advice promptly if you notice these symptoms."
                }
              },
              {
                "@type": "Question",
                "name": "Can I exercise after a heart attack or surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, but only under your doctor’s guidance. Cardiac rehabilitation programs are often recommended to help you return to safe levels of physical activity."
                }
              },
              {
                "@type": "Question",
                "name": "What foods should I avoid for better heart health?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Limit fried foods, processed meats, excess salt, sugary drinks, and trans fats. Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats."
                }
              }
            ]
          })}
        </script>
      </Helmet>


      <div style={styles.page}>
        <div style={styles.container}>

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
                <h1 style={styles.heroParagraph2}>Best Cardiology Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive heart care backed by technology, expertise, and compassion.
                </div>

                <p style={styles.heroParagraph}>
                  To ensure heart health, individuals must select the best cardiology hospital
                  in Nashik, where they can receive accurate diagnosis, timely treatments, and
                  long-term health and well-being. In addition to providing heart care services,
                  cardiology is a specialised field that revolves around diagnosing, preventing,
                  and treating diseases affecting the heart and blood vessels. As the most important
                  organ within our bodies, even minor symptoms like chest pain, difficulty breathing,
                  palpitations and/or elevated blood pressure levels should be taken seriously.
                </p>
                <p style={styles.heroParagraph}>
                  There are many hospitals in Nashik that can provide quality cardiac care; however,
                  Shree Saibaba Multispeciality Hospital has been consistently recognised as one of
                  the leading cardiology hospitals in Nashik and the northern part of Maharashtra
                  and is providing a comprehensive cardiac care experience through modern technologies,
                  skilled professionals and patient-centric care. Because of their expertise, patients
                  have confidence in receiving an accurate diagnosis, evidence-based treatment options
                  and compassionate medical service from some of Nashik's top cardiology specialists
                  while receiving treatment at Shree Saibaba Multispeciality Hospital.
                </p>
                <br />
                <p style={styles.heroParagraph}>
                  <b>Expert Cardiology Specialists and Advanced Treatment</b>
                </p>
                <ul style={styles.heroParagraph}>
                  <li>coronary artery disease</li>
                  <li>hypertension (high blood pressure)</li>
                  <li>arrhythmia or irregular heart rhythms</li>
                  <li>Heart valve disorders</li>
                  <li>congestive heart failure</li>
                  <li>angina or chest pain</li>
                  <li>congenital heart defects</li>
                  <li>preventive cardiology and assessment of your heart disease risk</li>
                </ul>
                <p style={styles.heroParagraph}>
                  The multidisciplinary nature of our approach allows us to provide individualised treatment
                  plans based on each patient's needs that will help improve their heart health and quality of life.
                </p>
                <br />
                <p style={styles.heroParagraph}>
                  <b>Emergency Cardiac Care & Rapid Diagnosis</b>
                </p>
                <p style={styles.heroParagraph}>
                  The top heart hospital in Nashik is available around the clock for emergency cardiac services
                  related to heart attacks, severe chest pain, and other forms of acute cardiovascular emergencies.
                  Our advanced in-house diagnostic equipment ECG, 2D Echo, stress testing, cardiac monitoring, and
                  imaging, allows for quick detection of heart-related problems and immediate treatment at the most
                  crucial moment when seconds count.
                </p>
                <br />
                <p style={styles.heroParagraph}>
                  <b>Complete Cardiovascular Care Offered in One Location</b>
                </p>
                <p style={styles.heroParagraph}>
                  We offer cardiovascular preventive screenings as well as provide a wide range of treatment options
                  for all types of heart disease, including advanced techniques to treat many different types of cardiac
                  problems. We not only want to help you with your current cardiac issue but also reduce the chances of
                  having another heart problem by providing advice about healthy lifestyle changes, managing risk factors,
                  and having regular follow-up visits with the best cardiologists in Nashik.
                </p>
                <br />
                <p style={styles.heroParagraph}>
                  <b>Trusted Heart Hospital in Nashik</b>
                </p>
                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital is the preferred place for patients who are seeking the best cardiologist in Nashik or who need a trusted or reliable source of cardiac care. Our goal is to promote long-term cardiac health, improve the quality of life, and ultimately serve our community as the most trusted provider of cardiac medicine and health care in Nashik and North Maharashtra.
                </p>
                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  2 cath labs • 30-bed intensive cardiac care • 24x7 cardiac emergency services
                </div>
              </div>
            </div>
          </div>

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
                pacemaker, AICD, ASD, VSD, PDA, and BMV - cardiac catheterization and
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
                  Q. What should I expect during a cardiac stress test?
                </div>
                <div style={styles.faqAnswer}>
                  A cardiac stress test monitors your heart&apos;s activity while you walk
                  on a treadmill or ride a stationary bike. It helps diagnose heart
                  conditions and assess your heart&apos;s response to physical activity.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. How do I prepare for an echocardiogram?
                </div>
                <div style={styles.faqAnswer}>
                  No special preparation is usually required. You may need to remove
                  clothing from the waist up and wear a gown during the procedure.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. What are the early symptoms of heart problems?
                </div>
                <div style={styles.faqAnswer}>
                  Common early symptoms include chest pain or discomfort, shortness of
                  breath, fatigue, palpitations, dizziness, and swelling in the legs. If
                  you notice these symptoms, you should seek medical advice promptly.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Can I exercise after a heart attack or surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Yes, but only under your doctor&apos;s guidance. Cardiac rehabilitation
                  programs are often recommended to help you return to safe levels of
                  physical activity.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. What foods should I avoid for better heart health?
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
