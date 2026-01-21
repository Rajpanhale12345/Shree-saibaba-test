import React from 'react';
import gastro from './Images/gynacdep.webp';
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

  // ✅ HERO: grid on desktop, stacks on mobile via CSS class + media query below
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
    background: "#ffffff",

    // ✅ responsive height for the image card
    height: "clamp(220px, 32vw, 420px)",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ✅ prevents stretching
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
};


function Gynecology() {


  const canonicalUrl = "https://shreesaibabamultispecialityhospital.com/gynaecology";

  const metaTitle =
    "Gynecology | Shree Saibaba Multispeciality Hospital, Nashik";
  const metaDescription =
    "Comprehensive gynecology care in Nashik — consultations, PCOS, menstrual disorders, fibroids, infections, screening, and minimally invasive procedures at Shree Saibaba Multispeciality Hospital.";
  const metaKeywords =
    "gynecology in nashik, gynaecologist nashik, PCOS treatment nashik, menstrual disorder treatment, fibroid treatment, pelvic pain clinic, women's health, pap smear nashik";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Shree Saibaba Multispeciality Hospital",
    department: {
      "@type": "MedicalClinic",
      name: "Gastroenterology Department",
      medicalSpecialty: "Gastroenterology",
      areaServed: "Nashik, Maharashtra",
    },
  };


  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={gastro}
                  alt="Cardiovascular Thoracic Surgery Department"
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

                <h1 style={styles.heroParagraph2}>Gynecology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  The Gynaecology Department at Shree Saibaba Multispeciality Hospital is dedicated to supporting Women's
                  Health needs throughout their entire lifespan. Our department specialises in women's health only and is
                  designed to offer our patients the highest level of professional care in a secure and respectful environment
                  that is focused on comfort.
                </p>
                <p style={styles.heroParagraph}>
                  We have a team of qualified gynaecologists, skilled nursing staff, and modern medical equipment to ensure
                  that you receive the right diagnosis and treatment. From puberty to the end of menstrual periods (menopause)
                  and beyond, the Gynaecology Department has a dedicated focus on meeting each woman's unique healthcare needs
                  with professionalism and compassion.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>All Women's Health Services</h2>
                <p style={styles.heroParagraph}>
                  We provide care by diagnosing and treating women with many gynaecological concerns, such as Menstrual Disorders,
                  Pelvic Pain, Hormonal Disorders, Ovarian/Uterine Disorders and common Gynecological Infections. Our providers
                  will spend time listening to the reasons why you are coming to see them and gathering information from your
                  past medical history in order to develop a treatment plan.
                </p>
                <p style={styles.heroParagraph}>
                  We focus particularly on PCOS, irregular bleeding, fibroids, cysts, and endometriosis. Early diagnosis and
                  treatment can help you avoid complications and improve your quality of life.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Preventive Care & Early Diagnosis</h2>
                <p style={styles.heroParagraph}>
                  When it comes to your total health, Prevention is a BIG WORD! We advocate for women to receive periodic routine
                  examinations (gynecologic exams), regular screening tests, and counselling services to identify health risks
                  early, before they become serious medical issues. By using routine gynecologic appointments to screen for
                  potential issues, a woman has the ability to make educated decisions related to her health and well-being.
                </p>
                <p style={styles.heroParagraph}>
                  Additionally, we provide support on an overall basis to help you stay healthy throughout your entire menstrual
                  cycle through recommendations on diet, exercise and alleviate your symptoms when you experience hormonal
                  fluctuations.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Diagnostic and Treatment Facilities</h2>
                <p style={styles.heroParagraph}>
                  Our facility is fully equipped with the latest technology for diagnosing and assessing gynecologic conditions.
                  If surgical interventions become necessary, we will utilise minimally invasive technologies as well as the
                  most current surgical techniques available to you, assisting your recovery as quickly and effectively as possible.
                </p>
                <p style={styles.heroParagraph}>
                  We combine solid medical expertise with the best treatment options to ensure that care remains safe and effective.
                  We want to ensure that each procedure is thoroughly explained so you understand what is going to happen and feel
                  comfortable with what is about to occur.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Menopause and Midlife Care</h2>
                <p style={styles.heroParagraph}>
                  This is a period of major physical and emotional changes. Our gynaecology specialists provide specialised care
                  for menopause-related issues such as hormonal changes, bone health, and general well-being. With the right
                  advice, care, and counselling, we assist you in maintaining an active and healthy life during this stage.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Patient-Centred & Confidential Care</h2>
                <p style={styles.heroParagraph}>
                  Women's Health issues are highly sensitive. Our Department has stringent policies regarding confidentiality,
                  privacy, and respect for our patients. The objective of our Department is to provide you with a kind and
                  nurturing place to feel that you are being respected, listened to and cared for by providers who will assist
                  you in all aspects of your Women's Health.
                </p>
                <p style={styles.heroParagraph}>
                  Our doctors have a great desire to communicate with you and answer any questions you may have, as well as
                  to equip you with knowledge about your Women's Health to enable you to feel empowered.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Commitment to Quality Healthcare</h2>
                <p style={styles.heroParagraph}>
                  The Gynaecology Department at Shree Saibaba Multispeciality Hospital is dedicated to providing credible,
                  ethical, and quality care. With a combination of medical expertise, state-of-the-art facilities, and caring
                  staff, we strive to be your trusted destination for all gynaecological needs.
                </p>
                <p style={styles.heroParagraph}>
                  We're about more than just treatment; we want long-term health, confidence, and well-being for every woman
                  who walks through our doors.
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced OT • Safety-first protocols • Cosmetic & Reconstructive
                  expertise • 24x7 emergency support
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

            <div style={{ marginBottom: "12px" }}>
              <div style={styles.tagListItem}>
                <strong>Outpatient Gynecology</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Gynecology consultations</li>
                <li style={styles.listItem}>Menstrual disorders management</li>
                <li style={styles.listItem}>PCOS/PCOD evaluation & guidance</li>
                <li style={styles.listItem}>Pelvic pain assessment</li>
                <li style={styles.listItem}>Vaginal discharge & infection care</li>
              </ul>
            </div>

            <div style={{ marginBottom: "12px" }}>
              <div style={styles.tagListItem}>
                <strong>Screening & Diagnostics</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Routine gynecological examination</li>
                <li style={styles.listItem}>Ultrasound guidance (as advised)</li>
                <li style={styles.listItem}>Cervical screening (Pap smear, as advised)</li>
                <li style={styles.listItem}>Evaluation for fibroids/cysts</li>
              </ul>
            </div>

            <div>
              <div style={styles.tagListItem}>
                <strong>Procedures & Surgical Support</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Minor procedures (as advised)</li>
                <li style={styles.listItem}>Minimally invasive options (as indicated)</li>
                <li style={styles.listItem}>Pre-op and post-op care coordination</li>
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
              <li style={styles.listItem}>Modern consultation rooms</li>
              <li style={styles.listItem}>Diagnostic support & imaging access</li>
              <li style={styles.listItem}>Safe procedure and OT support (as needed)</li>
              <li style={styles.listItem}>Patient-friendly counseling environment</li>
              <li style={styles.listItem}>Post-procedure monitoring and follow-up</li>
            </ul>
          </section>

          {/* Team Members */}


          {/* <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members
              </div>
            </div>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <b>DR. ________</b> <br />
                  <span style={{ fontSize: "11px" }}>
                    MBBS, MS (ObGyn) / DGO (Update as applicable)
                  </span>
                </li>
              </ul>
            </div>
          </section> */}




          {/* Department Timings */}

          
          {/* <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Department Timings
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                <strong>Timings:</strong> On Call
              </li>
              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> Available 24x7
              </li>
            </ul>
          </section> */}

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
                Share prior reports, scans, prescriptions, and lab results.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about ongoing medicines, allergies, and past history.
              </li>
              <li style={styles.listItem}>
                Follow any test or pre-procedure instructions given by your doctor.
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
                  1. When should I visit a gynecologist?
                </div>
                <div style={styles.faqAnswer}>
                  If you have irregular periods, pelvic pain, unusual discharge,
                  heavy bleeding, concerns like PCOS, or need preventive checkups
                  and screening, a consultation is recommended.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  2. What should I bring to my appointment?
                </div>
                <div style={styles.faqAnswer}>
                  Carry previous reports, ultrasound/scans, lab results,
                  prescriptions, and a list of current medicines and allergies.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  3. Do you provide screening tests?
                </div>
                <div style={styles.faqAnswer}>
                  Yes, screening and diagnostic evaluation (like Pap smear or
                  ultrasound guidance) may be advised depending on your symptoms
                  and age.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  4. Can PCOS be managed?
                </div>
                <div style={styles.faqAnswer}>
                  PCOS is commonly managed with individualized guidance including
                  lifestyle measures and medicines when needed. Your doctor will
                  plan treatment based on symptoms and goals.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  5. Is my visit confidential?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. We follow strict privacy and confidentiality practices so
                  you can discuss sensitive concerns comfortably.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Responsive stacking */}
      <style>{`
        @media (max-width: 900px) {
          .heroGridFix {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export default Gynecology;