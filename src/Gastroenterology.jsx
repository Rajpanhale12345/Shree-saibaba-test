import React from 'react';
import gastro from './Images/gastro.jpg';
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


function Gastroenterology() {

  const jsonLdDepartment = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    url: CANONICAL_URL,
    department: {
      "@type": "MedicalBusiness",
      name: "Gastroenterology Department",
      medicalSpecialty: "Gastroenterology",
      description:
        "Comprehensive gastroenterology care including endoscopy, colonoscopy, liver & pancreas care, IBD management and emergency support.",
      areaServed: { "@type": "City", name: "Nashik" }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I consult a gastroenterologist?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Consult a gastroenterologist for persistent acidity/heartburn, abdominal pain, bloating, constipation/diarrhea, blood in vomit or stool, jaundice, unexplained weight loss, or long-lasting digestive symptoms."
        }
      },
      {
        "@type": "Question",
        name: "Is endoscopy or colonoscopy painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "These procedures are generally well-tolerated. Your doctor will explain the process and use appropriate comfort measures so the test is safe and as comfortable as possible."
        }
      },
      {
        "@type": "Question",
        name: "Do I need an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Walk-ins may be accepted, but an appointment helps reduce waiting time—especially for procedures and follow-ups."
        }
      },
      {
        "@type": "Question",
        name: "What symptoms require emergency care?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Severe abdominal pain, vomiting blood, black stools, sudden jaundice with confusion, or suspected bowel obstruction require urgent evaluation."
        }
      },
      {
        "@type": "Question",
        name: "Will I get diet and lifestyle guidance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We provide dietary advice, lifestyle guidance, and preventive counselling tailored to your diagnosis for long-term symptom control and better gut health."
        }
      }
    ]
  };


  const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
  const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
  const CANONICAL_URL = `${SITE_URL}/gastroenterology`;
  const OG_IMAGE_URL = `https://shreesaibabamultispecialityhospital.com/assets/gastro-Bc8v_u3q.jpg`;


  return (
    <>
      <Helmet>
        <title>Gastroenterology | Best Gastroenterology Hospital in Nashik</title>
        <meta name="description" content="Comprehensive gastroenterology care in Nashik: endoscopy, colonoscopy, liver & pancreas care, IBD management, preventive screening, and 24x7 emergency support at Shree Saibaba Multispeciality Hospital." />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Gastroenterology Department | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Advanced gastroenterology services: endoscopy, colonoscopy, liver disease management, IBD care, and 24x7 emergency support in Nashik." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Gastroenterology Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gastroenterology Department | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:description" content="Expert digestive care: endoscopy, colonoscopy, liver & pancreas care, IBD management and emergency services in Nashik." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">{JSON.stringify(jsonLdDepartment)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>


      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={gastro}
                  alt="Gastroenterology Department at Shree Saibaba Multispeciality Hospital in Nashik"
                  loading="lazy"
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

                <h1 style={styles.heroParagraph2}>Gastroenterology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  The gastroenterology department is concerned with the diagnosis, treatment, and
                  management of digestive disorders. Ailments affecting the stomach, intestinal system,
                  liver, pancreas, gall bladder, and bile ducts are included in this category. The
                  ultimate objective is to achieve maximum health with digestion by providing
                  appropriate diagnostic tests and use of both medications and concern for the patient
                  via proper treatment methods.
                </p>
                <p style={styles.heroParagraph}>
                  Digestive issues can range from minor inconveniences such as heartburn, bloating,
                  constipation, and abdominal discomfort to more serious ones such as chronic bowel disease;
                  bleeding within the gastrointestinal system; liver diseases; and pancreatic issues. Our
                  skilled staff can address both routine and advanced healthcare issues related to digestive
                  health placing the patients at the forefront.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Diagnosis and Treatments</h2>

                <p style={styles.heroParagraph}>
                  Utilizing cutting-edge technology and evidence-based practice to determine the actual cause
                  of a person's digestive difficulty. Our department is outfitted with state-of-the-art
                  equipment for performing endoscopic imaging to allow physicians to accurately and safely
                  examine the digestive tract of patients. Through diagnostic studies, we can detect ulcerated,
                  inflammatory, or other pathological conditions earlier, enabling faster treatment and improved
                  outcomes.
                </p>
                <p style={styles.heroParagraph}>
                  Treatments are individualised to each patient to promote maximum long-term symptom relief while
                  improving quality of life. Depending upon the individual's diagnosis, this type of care may
                  include medication, dietary advice, lifestyle modification, minimally invasive procedures, as
                  well as, when necessary coordinated management with other specialties.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Emergency & Specialty Digestive Care</h2>
                <p style={styles.heroParagraph}>
                  The digestive emergency requires immediate and professional attention. We offer 24/7 support for
                  urgent issues: piercing belly pain, vomiting blood, bowel obstruction, or sudden liver problems.
                  Timely evaluation and intervention and a quick response from us are necessary to prevent
                  complications to the digestive system.
                </p>
                <p style={styles.heroParagraph}>
                  We offer pediatric digestion specialty care. Pediatric digestive problems usually require gentle,
                  personalized treatment, and the doctors make sure children receive safe, age-appropriate evaluation
                  and treatment in a comfortable setting.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Holistic and Preventive Approach</h2>
                <p style={styles.heroParagraph}>
                  At Shree Saibaba Multispeciality Hospital, gut health is serious business-affecting your overall
                  well-being. Our physicians are also focused on preventing future problems. Our team provides
                  education on diet, stress management, and how to make healthier lifestyle choices that will promote
                  good digestion and reduce the chances of future problems.
                </p>
                <p style={styles.heroParagraph}>
                  We are clear in our descriptions and explanations of your medical conditions and treatment options,
                  allowing you to make informed decisions regarding your health. This open communication creates a
                  trusting relationship and promotes confidence while you are on your path to receiving care.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>You Can Trust: Patient-Focused Care</h2>
                <p style={styles.heroParagraph}>
                  Our team strictly adheres to safety standards and ethical medical practices. Each patient is treated
                  with dignity, respect, and empathy. From the time you first visit us to the time you complete your
                  treatment, we want you to feel comfortable, understand everything, and receive consistent care.
                </p>
                <p style={styles.heroParagraph}>
                  Regardless of whether you present to our office with a chronic condition, need additional testing,
                  or require urgent medical attention, we strive to offer complete and appropriate digestive care
                  within one facility.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>There are many reasons to choose Shree Saibaba Multispeciality Hospital:</h2>
                <ul style={styles.heroParagraph}>
                  <li>We provide expertise and treatments for all aspects of your digestive health.</li>
                  <li>We offer access to cutting-edge diagnostic and treatment technologies.</li>
                  <li>We provide immediate emergency care for life-threatening conditions.</li>
                  <li>We work to provide comfort and support to our pediatric patients who have digestive concerns.</li>
                  <li>We develop a plan of care specific to the needs of each patient.</li>
                  <li>We listen to you and demonstrate honesty, compassion, and thoroughness when we discuss your care.</li>
                </ul>

                <p style={styles.heroParagraph}>Overall health is significantly affected by the health of the digestive system.</p>
                <br />
                <p style={styles.heroParagraph}>
                  If you would like to feel better, live with greater confidence, and lead a healthier lifestyle, please reach
                  out to Shree Saibaba Multispecialty Hospital.
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
            <div style={{ marginBottom: "12px" }}>
              <div style={styles.tagListItem}>
                <strong>Diagnostic Services</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Endoscopy (Upper GI endoscopy)</li>
                <li style={styles.listItem}>Colonoscopy &amp; biopsy evaluation</li>
                <li style={styles.listItem}>Evaluation of GI bleeding and anemia work-up</li>
                <li style={styles.listItem}>Liver function evaluation &amp; hepatitis screening support</li>
                <li style={styles.listItem}>Assessment for fatty liver, jaundice, and cirrhosis complications</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: "12px" }}>
              <div style={styles.tagListItem}>
                <strong>Treatment Services</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Acidity, GERD, gastritis, and ulcer management</li>
                <li style={styles.listItem}>IBS, chronic constipation, and digestive symptom care</li>
                <li style={styles.listItem}>Inflammatory Bowel Disease (IBD) management</li>
                <li style={styles.listItem}>Liver disease care (fatty liver, hepatitis, cirrhosis monitoring)</li>
                <li style={styles.listItem}>Pancreatitis and gall bladder disease support</li>
                <li style={styles.listItem}>Dietary guidance and lifestyle modification for long-term control</li>
              </ul>
            </div>

            {/* Specialized / Emergency Services */}
            <div>
              <div style={styles.tagListItem}>
                <strong>Emergency &amp; Specialized Care</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>24x7 management of vomiting blood / GI bleeding</li>
                <li style={styles.listItem}>Acute abdomen, bowel obstruction, and severe pain evaluation</li>
                <li style={styles.listItem}>Urgent liver-related complications and supportive care</li>
                <li style={styles.listItem}>Pediatric gastroenterology evaluation and treatment support</li>
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
            <ul style={styles.list}>
              <li style={styles.listItem}>Endoscopy setup for diagnostic evaluation</li>
              <li style={styles.listItem}>Support facilities for safe procedures and monitoring</li>
              <li style={styles.listItem}>Laboratory support for liver and digestive investigations</li>
              <li style={styles.listItem}>Imaging support (as required) for GI-related assessment</li>
              <li style={styles.listItem}>Comfortable OPD and patient-friendly consultation areas</li>
            </ul>
          </section>

          {/* Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={{ ...styles.listItem, textAlign: "center" }}>Meet our experienced Gastroentrology:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Soham Doshi</strong>
                  <br />
                  8:00 am to 9:00 am and 5:00 pm to 6:00 pm
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
                Strong focus on early diagnosis of digestive disorders
              </li>
              <li style={styles.tagListItem}>
                Patient-centered care for chronic GI conditions (GERD, IBS, IBD)
              </li>
              <li style={styles.tagListItem}>
                Comprehensive liver and pancreas care with supportive monitoring
              </li>
              <li style={styles.tagListItem}>
                24x7 readiness for digestive emergencies and urgent interventions
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
                Please arrive at least 30 minutes before your appointment.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about ongoing medicines, allergies, and past history.
              </li>
              <li style={styles.listItem}>
                Follow preparation instructions for endoscopy/colonoscopy if advised.
              </li>
              <li style={styles.listItem}>
                Carry previous reports, scans, prescriptions, and lab results for continuity of care.
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
                  Q. When should I consult a gastroenterologist?
                </div>
                <div style={styles.faqAnswer}>
                  If you have persistent acidity/heartburn, abdominal pain, bloating, constipation/diarrhea,
                  blood in vomit or stool, jaundice, unexplained weight loss, or long-lasting digestive symptoms.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Is endoscopy or colonoscopy painful?
                </div>
                <div style={styles.faqAnswer}>
                  These procedures are generally well-tolerated. Your doctor will explain the process and use
                  appropriate comfort measures so the test is safe and as comfortable as possible.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Do I need an appointment?
                </div>
                <div style={styles.faqAnswer}>
                  Walk-ins may be accepted, but an appointment helps reduce waiting time—especially for procedures
                  and follow-ups.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. What symptoms require emergency care?
                </div>
                <div style={styles.faqAnswer}>
                  Severe abdominal pain, vomiting blood, black stools, sudden jaundice with confusion, or suspected
                  bowel obstruction require urgent evaluation.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Will I get diet and lifestyle guidance?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. We provide dietary advice, lifestyle guidance, and preventive counselling tailored to your
                  diagnosis for long-term symptom control and better gut health.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Optional: simple responsive stacking without external CSS */}
      <style>{`
        @media (max-width: 900px) {
          .heroGridFix { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
export default Gastroenterology;
