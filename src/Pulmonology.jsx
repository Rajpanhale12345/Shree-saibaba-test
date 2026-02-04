import React from 'react';
import img from './Images/pulmonologydep.webp';
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
const PAGE_URL = "https://shreesaibabamultispecialityhospital.com/pulmonology";

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
    fontSize: "30px",
    lineHeight: 1.2,
    color: "#1e293b",
    marginBottom: "10px",
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

  // Section styles
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
  // FAQ styles (were referenced but missing)
  faqList: {
    display: "grid",
    gap: "12px",
  },
  faqItem: {
    borderRadius: "14px",
    padding: "14px 14px 12px",
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(226,232,240,1)",
    boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
    textAlign: "left",
  },
  faqQuestion: {
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "6px",
    fontSize: "14px",
  },
  faqAnswer: {
    color: "#334155",
    fontSize: "14px",
    lineHeight: 1.7,
  },
  seoBlock: {
    marginTop: "20px",
    padding: "18px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    border: "1px solid rgba(203,213,225,0.9)",
  },
  seoHeading: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "8px",
  },
  seoText: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#334155",
    marginBottom: "8px",
  },
  seoList: {
    paddingLeft: "18px",
    margin: "6px 0",
  },
  seoListItem: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#1e293b",
  },

};

function Pulmonology() {
  const title =
    "Pulmonology | Shree Saibaba Multispeciality Hospital";
  const description =
    "Get complete respiratory care in Nashik with modern testing, chest specialist consultation, asthma & COPD management, infection care, oxygen support, and ICU respiratory services at Shree Saibaba Multispeciality Hospital.";
  const keywords =
    "pulmonology in nashik, chest specialist nashik, lung specialist nashik, respiratory clinic nashik, asthma treatment nashik, copd treatment nashik, pneumonia care, tuberculosis care, pulmonary function test nashik, sleep apnea test nashik, bronchoscopy, critical care respiratory";

  const jsonLdClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Shree Saibaba Multispeciality Hospital",
    url: PAGE_URL,
    image: `${SITE_URL}/assets/pulmonologydep.webp`,
    medicalSpecialty: "Pulmonary",
    description,
    areaServed: ["Nashik", "Maharashtra"],
    department: {
      "@type": "MedicalClinic",
      name: "Pulmonology Department",
      medicalSpecialty: "Pulmonary",
      url: PAGE_URL,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I visit a chest specialist?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you have a long-lasting cough, breathlessness, wheezing, chest tightness, repeated infections, or low oxygen levels, a respiratory evaluation can help find the cause early.",
        },
      },
      {
        "@type": "Question",
        name: "What tests are commonly used for lung evaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Common tests include pulmonary function testing (spirometry), chest imaging, oxygen monitoring, lab tests for infections, and sleep-related breathing assessment when required.",
        },
      },
      {
        "@type": "Question",
        name: "Can asthma and COPD be managed long-term?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. With the right inhaler plan, trigger control, regular follow-ups, and rehabilitation support, many patients improve breathing control and reduce flare-ups.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle emergency breathing problems?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. The hospital supports urgent respiratory care with oxygen therapy, monitoring, and ICU support for severe breathing difficulty when needed.",
        },
      },
    ],
  };


  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={PAGE_URL} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/assets/pulmonologydep.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/assets/pulmonologydep.webp`} />
        <script type="application/ld+json">{JSON.stringify(jsonLdClinic)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img}
                  alt="Pulmonology"
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

                <h1 style={styles.heroParagraph2}>Pulmonology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  Properly breathing is very important to achieving good health. Pulmonary health professionals
                  specialize in the care of lung tissue, trachea, lung muscles, etc. when someone is not feeling
                  well. Shree Saibaba Multispeciality Hospital provides modern technology for chest/breathing
                  care with accurate diagnostics/treatment, and we do this in a caring manner.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Respiratory Health and Well-Being</h2>

                <p style={styles.heroParagraph}>
                  Our outpatient pulmonology program resolves a wide variety of breathing disorders and illnesses.
                  Most of our patients are treated for chronic cough, dyspnea (shortness of breath), wheezing, chest
                  pain, and multiple episodes of pneumonia before they arrive at our facility. The evaluation of
                  their respiratory system involves using the newest technologies to diagnose each patient accurately.
                </p>
                <p style={styles.heroParagraph}>
                  We treat conditions such as asthma, chronic bronchitis, emphysema, pneumonia, TB, breathing problems
                  due to allergies, and occupational lung diseases. We also deal with more complicated conditions such
                  as interstitial lung disease, sleep-related breathing disorders, and lung infections requiring close
                  observation.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Diagnostic Support</h2>
                <p style={styles.heroParagraph}>
                  Accurate diagnosis is the first step towards a speedy recovery. We have equipment that helps doctors
                  assess the functional efficiency of your lungs. Our services include pulmonary function tests to assess
                  breathing capacity, imaging studies for a thorough examination of the chest, and laboratory tests to
                  detect infections. These diagnostic tools help detect diseases early and enable doctors to prescribe
                  effective treatment quickly.
                </p>
                <p style={styles.heroParagraph}>
                  We also conduct sleep studies (for evaluation of snoring and sleep apnea), allergy testing, and oxygen
                  levels testing for patients who want a complete assessment of their pulmonary function.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Modern Treatment Options</h2>
                <p style={styles.heroParagraph}>
                  Treatment for each patient is formulated specifically for the person's condition, age, and overall health.
                  The most common options for treatment will involve inhalation therapies, medications, nebulizing therapies,
                  allergy treatments, supplemental oxygen, and breathing exercises to help facilitate deep breaths and improved
                  ventilation. For more severe patients, we have access to acute care through ventilator support in the
                  intensive care unit.
                </p>
                <p style={styles.heroParagraph}>
                  If you have a chronic lung condition, this is something you can manage on a long-term basis. The hospital
                  staff will assist you in managing lifestyle shocks, breathing exercises, and prevention. They will also
                  teach you how to use inhalers, avoid triggers, and keep your lungs healthy.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Professional's Level of Knowledge in the Field of Respiratory Therapy</h2>
                <p style={styles.heroParagraph}>
                  The staff consists of experienced chest physicians as well as therapists who've acquired significant hands-on
                  experience providing treatment for patients with either common ailments, or serious conditions related to their
                  lungs. Our staff provides both evidence-based therapeutic care as well as compassionate, practical advice
                  regarding your condition(s). Staff will also provide you with written explanations as to "what's going on,"
                  as well as "the reason for the recommended treatments; which will assist you in making an informed decision
                  regarding your treatment options.
                </p>
                <p style={styles.heroParagraph}>
                  Our staff also works in conjunction with the patient's Specialist Doctor if the patient has cardiopulmonary
                  dysfunctions, diabetes, or immune-compromised conditions which may have an effect on patient respiration.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Safety and Comfort First</h2>
                <p style={styles.heroParagraph}>
                  Therefore, patient safety and comfort will always be the first concern of the facility's staff. The provision
                  of clean treatment areas, adequate infection control measures, and adherence to a strict emergency protocol,
                  all of which will result in the highest possible level of patient care. Should you need only a brief outpatient
                  evaluation or rapid life-saving assistance for acute respiratory failure, or may require long-term management
                  of your respiratory condition, the facilities are specifically designed to allow you to be seen as quickly as
                  possible, and without added stress.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Reasons to Choose Us at Specialized Respiratory Care</h2>
                <ul style={styles.heroParagraph}>
                  <li>Full assessment & treatment of respiratory disorders</li>
                  <li>Evaluation and diagnosis using advanced technology</li>
                  <li>Dedicated staff to treat your chest</li>
                  <li>Critical care support for your illness</li>
                  <li>Education for you and information on prevention</li>
                </ul>
                <p style={styles.heroParagraph}>
                  Having healthy, functional lungs allow you to have a more active, energetic lifestyle. Specialized Respiratory
                  Care provides comprehensive respiratory care from the latest technology and state-of-the-art facilities provided
                  by a highly skilled team of healthcare professionals, giving you the expert care you need for all kinds of
                  respiratory disorders, no matter if they are acute or chronic.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced brain &amp; spine surgeries • Minimally invasive techniques •
                  Neuro-navigation &amp; intraoperative neuromonitoring •
                  Dedicated neurocritical care • 24x7 emergency services
                </div>
              </div>
            </div>
          </div>

          {/* Pulmonology Services */}
          <section style={styles.section} aria-labelledby="pulmonology-services">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-services">
                <span style={styles.sectionAccentBar} />
                Pulmonology Services
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Evaluation for persistent cough, wheezing, and breathlessness</li>
              <li style={styles.listItem}>Asthma care with inhaler guidance and trigger control</li>
              <li style={styles.listItem}>COPD and chronic bronchitis management with follow-ups</li>
              <li style={styles.listItem}>Chest infection care including pneumonia monitoring</li>
              <li style={styles.listItem}>Tuberculosis screening support and treatment guidance</li>
              <li style={styles.listItem}>Sleep-related breathing evaluation (snoring and sleep apnea)</li>
              <li style={styles.listItem}>Allergy-related respiratory care and preventive advice</li>
            </ul>
          </section>

          {/* Diagnostics & Testing */}
          <section style={styles.section} aria-labelledby="pulmonology-diagnostics">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-diagnostics">
                <span style={styles.sectionAccentBar} />
                Diagnostics &amp; Testing
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Pulmonary function test (PFT) / spirometry for airflow measurement</li>
              <li style={styles.listItem}>Oxygen saturation assessment and respiratory monitoring</li>
              <li style={styles.listItem}>Chest imaging support (X-ray / CT as advised)</li>
              <li style={styles.listItem}>Laboratory testing to identify infections and inflammation</li>
              <li style={styles.listItem}>Sleep assessment for suspected sleep apnea</li>
              <li style={styles.listItem}>Allergy evaluation linked to breathing symptoms</li>
            </ul>
          </section>

          {/* Treatment & Procedures */}
          <section style={styles.section} aria-labelledby="pulmonology-treatment">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-treatment">
                <span style={styles.sectionAccentBar} />
                Treatment &amp; Respiratory Support
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Nebulization and inhalation therapy support</li>
              <li style={styles.listItem}>Personalized medication plans with follow-up reviews</li>
              <li style={styles.listItem}>Oxygen therapy guidance for low oxygen levels</li>
              <li style={styles.listItem}>Management of acute flare-ups with close monitoring</li>
              <li style={styles.listItem}>Breathing exercises and pulmonary rehabilitation advice</li>
              <li style={styles.listItem}>ICU respiratory support for severe breathing difficulty when needed</li>
            </ul>
          </section>

          {/* Achievements & Highlights */}
          <section style={styles.section} aria-labelledby="pulmonology-highlights">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-highlights">
                <span style={styles.sectionAccentBar} />
                Highlights of Our Respiratory Care
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Structured care plans for chronic breathing conditions with patient education and monitoring.
              </li>
              <li style={styles.tagListItem}>
                Quick assessment support for cough, breathlessness, and infection-related respiratory issues.
              </li>
              <li style={styles.tagListItem}>
                Strong coordination with internal medicine and critical care teams for high-risk patients.
              </li>
            </ul>
          </section>

          {/* Facilities & Equipment */}
          <section style={styles.section} aria-labelledby="pulmonology-facilities">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-facilities">
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Pulmonary function testing support for breathing assessment</li>
              <li style={styles.listItem}>Nebulization and oxygen support facilities</li>
              <li style={styles.listItem}>In-house diagnostic support for chest infections and respiratory illness</li>
              <li style={styles.listItem}>Monitoring and emergency response setup for respiratory distress</li>
              <li style={styles.listItem}>ICU support for advanced respiratory care when required</li>
            </ul>
          </section>

          {/* Patient Guidelines */}
          <section style={styles.section} aria-labelledby="pulmonology-guidelines">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-guidelines">
                <span style={styles.sectionAccentBar} />
                Patient Guidelines
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Arrive 10 minutes early for smooth registration and evaluation.</li>
              <li style={styles.listItem}>
                Bring previous reports such as chest X-ray/CT, PFT results, and prescription history (if available).
              </li>
              <li style={styles.listItem}>
                Inform the doctor about allergies, smoking history, dust exposure, and current medications.
              </li>
              <li style={styles.listItem}>
                If you use inhalers or nebulizers, bring them so technique can be checked and corrected.
              </li>
            </ul>
          </section>

          {/* Team Members & Department Timings */}
          <section style={styles.section} aria-labelledby="pulmonology-team-timings">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="pulmonology-team-timings">
                <span style={styles.sectionAccentBar} />
                Team &amp; OPD Timings
              </div>
            </div>

            <p style={styles.listItem}>
              Our respiratory care team includes chest physicians and trained respiratory support staff to guide
              diagnosis, treatment, and long-term breathing care.
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Chest / Respiratory Specialist</strong>
                  <br />
                  Dr. Saurabh Borgaonkar <br />
                  Dr. Prashant Shinde
                </li>
                <li style={styles.tagListItem}>
                  <strong>Respiratory Support Team</strong>
                  <br />
                  Trained technicians &amp; nursing staff
                </li>
              </ul>

              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>OPD Timings</strong>
                  <br />
                  Monday to Saturday, 3:00 PM - 5:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services</strong>
                  <br />
                  Available 24 x 7
                </li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default Pulmonology;
