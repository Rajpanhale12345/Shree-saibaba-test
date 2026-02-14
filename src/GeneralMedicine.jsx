import React from 'react';
import generalmedicine from './Images/generalmedicinedep.webp';
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
    background: "white",

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
const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
const CANONICAL_URL = `${SITE_URL}/generalmedicine`;
const OG_IMAGE_URL = `${SITE_URL}/assets/generalmedicinedep-DwsdZENh.webp`;


function GeneralMedicine() {
  return (
    <>
      <Helmet>
        <title>General Medicine | Best General Medicine Hospital in Nashik</title>
        <meta name="description" content="General Medicine care in Nashik at Shree Saibaba Multispeciality Hospital: diagnosis and long-term management of diabetes, hypertension, infections, respiratory disorders, preventive health check-ups, ICU support and 24x7 emergency services." />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="General Medicine Department | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Comprehensive general medicine services in Nashik: diabetes and hypertension clinics, infection and respiratory care, preventive check-ups, ICU support and 24x7 emergency services." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="General Medicine Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="General Medicine Department | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:description" content="Physicians and general medicine care in Nashik: diabetes, hypertension, infections, respiratory disorders, preventive check-ups, ICU support and emergency services." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: SITE_NAME,
            url: CANONICAL_URL,
            department: {
              "@type": "MedicalBusiness",
              name: "General Medicine Department",
              medicalSpecialty: "InternalMedicine",
              description:
                "Diagnosis, treatment and long-term management of chronic and acute medical conditions including diabetes, hypertension, infections and respiratory disorders, with preventive check-ups and emergency support.",
              areaServed: { "@type": "City", name: "Nashik" }
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When should I visit a General Physician?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Visit if you have fever, cough, fatigue, body pain, blood pressure issues, diabetes concerns, digestive problems, or any persistent symptoms."
                }
              },
              {
                "@type": "Question",
                name: "Can the General Medicine department manage chronic diseases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Conditions like diabetes, hypertension, thyroid disorders, and asthma are routinely managed with regular follow-up and personalised treatment plans."
                }
              },
              {
                "@type": "Question",
                name: "Do I need an appointment beforehand?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Walk-ins are accepted, but a prior appointment helps reduce waiting time."
                }
              },
              {
                "@type": "Question",
                name: "Are routine blood tests available in the hospital?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, major blood investigations and screening tests are available in our laboratory."
                }
              },
              {
                "@type": "Question",
                name: "Will the doctor guide me on lifestyle and diet changes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Physicians provide lifestyle, dietary, and medication counselling for long-term disease control."
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
                  src={generalmedicine}
                  alt="General Medicine Department"
                  style={styles.heroImage}
                  loading="lazy"
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Comprehensive Medical Care</span>
                </div>

                <h1 style={styles.heroParagraph2}>General Medicine Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <h2 style={styles.heroParagraph1}>Comprehensive Medical Care in Nashik</h2>

                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital provides advanced Patient-Centric General
                  Medicine department in Nashik, with comprehensive medical care available to help diagnose,
                  prevent and treat a variety of health problems. Our qualified and experienced General
                  Medicine specialists have years of experience in treating chronic & acute medical problems,
                  and have extensive knowledge of how to best care for patients.
                </p>
                <p style={styles.heroParagraph}>
                  Our dedicated team of expert General Medicine physicians are recognized as some of the
                  top General Medicine physicians in Nashik and offer the highest standard of General
                  Medicine care in Nashik, across a wide range of specialties. Our General Medicine services
                  include Family Medicine, Acute and Chronic Disease Management, Emergency Medicine, and
                  Preventative Health Care.
                </p>
                <p style={styles.heroParagraph}>
                  The General Medicine Department also treats both acute and chronic diseases, and also
                  provides services to cover lifestyle-related diseases. The General Medicine Department
                  treats the following conditions.
                </p>

                <p style={styles.heroParagraph}>
                  We treat acute and chronic disease, and lifestyle-related disease, which include:
                </p>

                <ul style={{ color: "#1e293b", textAlign: "left" }}>
                  <li>Metabolic Diseases, Diabetes & Metabolic Syndrome</li>
                  <li>Heart Disease, High Blood Pressure & Hypertension</li>
                  <li>Respiratory Disease & Respiratory Infection</li>
                  <li>Gastrointestinal Disease & Liver Disease</li>
                  <li>Infectious Disease, Viral Disease, Fever</li>
                  <li>Long-Term Disease Management & Comprehensive Health Assessment</li>
                </ul> <br />

                <p style={styles.heroParagraph}>
                  Our general internal medicine group will create your own personalised treatment plan
                  created with a specific goal of diagnosing early, preventing disease through preventative
                  measures and ultimately increasing your overall health and wellness.
                </p>
                <p style={styles.heroParagraph}>
                  Our physicians at the Shree Saibaba Multispeciality Hospital focus on total healing using
                  only the best available medical evidence for their recommendations. Our continual approach
                  to health gives us a unique place in Nashik as a provider of general medicine services.
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Preventive screenings • ICU support • Chronic disease clinics • 24x7 emergency services
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
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={{ ...styles.listItem, textAlign: "center" }}>Meet our experienced General Medicine:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Kunal Nikam</strong>
                  <br />
                  10:00 am to 5:30 pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Ganesh Motwani</strong>
                  <br />
                  4:00 pm to 9:00 pm
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Bharat Patil</strong>
                  <br />
                  10:00 am to 5:00 pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Rahul Barhate</strong>
                  <br />
                  9:00 am to 2:00 pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
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
                <div style={styles.faqQuestion}>Q. When should I visit a General Physician?</div>
                <div style={styles.faqAnswer}>
                  You should visit if you have fever, cough, fatigue, body pain, blood pressure issues, diabetes concerns,
                  digestive problems, or any persistent symptoms.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Can the General Medicine department manage chronic diseases?</div>
                <div style={styles.faqAnswer}>
                  Yes. Conditions like diabetes, hypertension, thyroid disorders, and asthma are routinely managed with
                  regular follow-up and personalised treatment plans.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Do I need an appointment beforehand?</div>
                <div style={styles.faqAnswer}>
                  Walk-ins are accepted, but a prior appointment helps reduce waiting time.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Are routine blood tests available in the hospital?</div>
                <div style={styles.faqAnswer}>
                  Yes, all major blood investigations and screening tests are available in our laboratory.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Will the doctor guide me on lifestyle and diet changes?</div>
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
