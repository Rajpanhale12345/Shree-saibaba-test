import React from 'react';
import nephrology from './Images/nephrology.jpg';
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
    background: "#0f172a",

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
    textAlign: 'left',
  },
};

function Nephrology() {
  return (
    <>
      <Helmet>
        <title>Nephrology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers specialized nephrology care including kidney function evaluation, CKD & AKI management, dialysis services, renal biopsy, electrolyte imbalance care, and 24x7 renal emergency support."
        />
        <meta
          name="keywords"
          content="nephrology hospital Nashik, kidney specialist Nashik, dialysis Nashik, CKD treatment Nashik, AKI treatment Nashik, renal biopsy Nashik, Shree Saibaba Multispeciality Hospital nephrology"
        />
        <meta
          name="og:description"
          content="Comprehensive kidney care with advanced dialysis facilities, CKD/AKI management, renal biopsy, and 24x7 renal emergencies at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={nephrology}
                  alt="Nephrology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Specialized Kidney Care</span>
                </div>

                <h1 style={styles.heroParagraph2}>Nephrology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroParagraph1}>
                  <b>Comprehensive Kidney Care</b>
                </div>

                <p style={styles.heroParagraph}>
                  It is vital for you to maintain a healthy kidney function in order to be healthy overall. The
                  nephrology department at Shree Saibaba Multispeciality Hospital aims to increase prevention and
                  early diagnosis of kidney diseases and to help patients successfully treat their conditions. This
                  hospital provides service to the entire community, regardless of their age, who have problems
                  related to kidneys. These conditions may be mild, serious, acute or chronic.
                </p>

                <p style={styles.heroParagraph}>
                  Our nephrology team consists of experienced board-certified nephrologists who are highly qualified
                  and experienced in their field, allowing them to accurately diagnose and effectively manage all types
                  of renal disorders. A lot of patients will search for a quote like "nephrologist near me" when they
                  start experiencing symptoms such as swelling, fatigue, abnormal urine output, and/or high blood pressure.
                  Each patient will have the ability to receive their nephrology consultation, evaluation, and treatment
                  plan(s) promptly, all under one roof.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Diagnosis and Personalized Treatment</h2>

                <p style={styles.heroParagraph}>
                  Kidney diseases can progress silently, which is why early diagnosis is essential. Our specialists
                  carefully assess each patient using modern diagnostic tools such as blood investigations, urine analysis,
                  imaging studies, and kidney function tests. These evaluations help identify conditions like acute kidney
                  injury, long-term renal damage, and electrolyte imbalance at an early stage.
                </p>
                <p style={styles.heroParagraph}>
                  In addition to the nephrology doctor providing ongoing treatment and guidance for patients with long-term
                  kidney disease conditions, we also have a chronic kidney disease doctor who will monitor their condition
                  continuously to slow their progression, improve their quality of life, and develop customized treatment
                  plans based on the patients' stage of disease progression and overall health and lifestyle.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>A collaborative effort between the Nephrologists and Urologists</h2>

                <p style={styles.heroParagraph}>
                  At our facility, we utilize the services of urologists and nephrologists and take a team approach to
                  ensuring our patients receive a standard of care from all specialists. A nephrologist and urologist treat
                  urinary tract infections and/or kidney damage from hypertension and/or other related conditions.
                </p>
                <p style={styles.heroParagraph}>
                  Those who are seeking nephrologists will find that they will receive comprehensive support. This includes
                  compassion, simple solutions, and several ways to treat their kidney disease. As many nephrology patients
                  will need to be monitored for months or years, educating the patient about their kidney condition, how to
                  change their diet, and how to take preventive measures to avoid complications is a major focus.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Expertise Close to Home</h2>

                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital is a quality source of nephrology services within the community for
                  those looking for a local nephrologist to provide expert services. We are recognized as a trusted center for
                  renal care, serving patients from Nashik and nearby regions. Those seeking a kidney disease specialist in Nashik
                  benefit from accessible consultations, emergency support, and continuity of care.
                </p>
                <p style={styles.heroParagraph}>
                  Our hospital is also known as a dependable stone specialist hospital, providing evaluation and medical management
                  for kidney stones, along with preventive advice to reduce recurrence. Patients commonly refer to our specialists
                  as the kidney ka doctor due to their approachable nature and clear communication.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>A Patient-Centered Approach to Managing Kidney Disease</h2>

                <p style={styles.heroParagraph}>
                  The care team provides each of their patients with the attention of a kidney disease specialist who emphasizes
                  patient safety, comfort, and long-term health. The team works with patients on diet, medications, and lifestyle
                  changes throughout the entire treatment process.
                </p>
                <p style={styles.heroParagraph}>
                  Patients who do online searches for "the best nephrologist near me" or "top nephrology doctor near me" are often
                  looking for credible and competent help with their kidney issues. The Shree Saibaba Multispeciality Hospital is
                  different from other hospitals by maintaining an unwavering commitment to ethical practices, cutting-edge treatment
                  options, and patient satisfaction.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>What Makes Shree Saibaba Multispeciality Hospital An Excellent Choice?</h2>

                <ul style={{textAlign: 'left'}}>
                  <li>Our renal care specialists offer you years of expertise.</li>
                  <li>We provide advanced diagnostic and treatment options.</li>
                  <li>We take a personal approach to every patient we treat.</li>
                  <li>Our team will coordinate with all your specialist doctors as they care for your complex kidney health.</li>
                  <li>Our team is focused on preventing and managing long term health issues.</li>
                </ul>
                <br />

                <p style={styles.heroParagraph}>
                  If you or a member of your family have kidney problems, we will support you in your journey back to health and confident 
                  and in charge of your kidney health.
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  CKD &amp; AKI care • Hemodialysis • Renal biopsy • 24x7 dialysis unit (as required)
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
                <li style={styles.listItem}>Kidney function tests (KFT)</li>
                <li style={styles.listItem}>Urine analysis and culture</li>
                <li style={styles.listItem}>Ultrasound and imaging for kidney evaluation</li>
                <li style={styles.listItem}>Renal biopsy (if required)</li>
                <li style={styles.listItem}>Evaluation of proteinuria and haematuria</li>
                <li style={styles.listItem}>Assessment of electrolyte and fluid imbalances</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: '12px' }}>
              <div style={styles.tagListItem}><strong>Treatment Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Management of Chronic Kidney Disease (CKD)</li>
                <li style={styles.listItem}>Treatment of Acute Kidney Injury (AKI)</li>
                <li style={styles.listItem}>Management of nephrotic and nephritic syndromes</li>
                <li style={styles.listItem}>Treatment of kidney infections and kidney stone-related issues</li>
                <li style={styles.listItem}>Hypertension management related to renal disorders</li>
                <li style={styles.listItem}>Long-term follow-up and counselling for renal patients</li>
              </ul>
            </div>

            {/* Specialised Services */}
            <div>
              <div style={styles.tagListItem}><strong>Specialised Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Hemodialysis services</li>
                <li style={styles.listItem}>Vascular access care for dialysis patients</li>
                <li style={styles.listItem}>Specialized CKD and renal diet counseling</li>
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
              <li style={styles.listItem}>Advanced haemodialysis machines</li>
              <li style={styles.listItem}>RO water purification system for dialysis</li>
              <li style={styles.listItem}>Dedicated dialysis unit with trained technicians</li>
              <li style={styles.listItem}>Ultrasound and imaging support for renal evaluation</li>
              <li style={styles.listItem}>Procedure room for kidney biopsies</li>
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
            <p style={{...styles.listItem, textAlign : "center"}}>Meet our experienced Orthopedic:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Abhijeet More</strong>
                  <br />
                  OPD: 	11:00 am to 12:00 pm and 5:00 pm to 6:00 pm
                </li>
              </ul>
              <ul style={styles.doctorList}>               
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

              <li style={styles.tagListItem}>
                <strong>Dr. Abhijeet More (DM Nephrology):</strong> Morning 8:00 AM - 9:00 AM &nbsp; | &nbsp; Evening 6:00 PM - 7:00 PM
              </li>

              <li style={styles.tagListItem}>
                <strong>Dialysis Unit:</strong> Functional 24x7 (as per patient requirement)
              </li>

              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> 24x7 availability for renal emergencies
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
                Successful management of complex renal conditions, including advanced CKD and AKI cases
              </li>
              <li style={styles.tagListItem}>
                High-quality dialysis care with trained staff and advanced machines
              </li>
              <li style={styles.tagListItem}>
                Expertise in renal biopsy
              </li>
              <li style={styles.tagListItem}>
                Strong focus on patient safety, infection control, and evidence-based treatment
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
              <li style={styles.listItem}>Arrive at least 30 minutes before your appointment.</li>
              <li style={styles.listItem}>Bring previous medical records, dialysis notes, or kidney-related investigation reports.</li>
              <li style={styles.listItem}>
                Inform your doctor about any blood pressure medications, diuretics, or anticoagulants you are taking.
              </li>
              <li style={styles.listItem}>
                Follow dietary guidelines and fluid restrictions advised by the nephrologist.
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
                <div style={styles.faqQuestion}>Q. When should I see a Nephrologist?</div>
                <div style={styles.faqAnswer}>
                  If you have high creatinine, swelling, decreased urine output, uncontrolled BP, kidney stones, or persistent
                  abnormalities in urine tests.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. What is Chronic Kidney Disease (CKD)?</div>
                <div style={styles.faqAnswer}>
                  A long-term condition where kidneys gradually lose function. Early diagnosis helps slow progression.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Is dialysis painful?</div>
                <div style={styles.faqAnswer}>
                  No, dialysis is generally not painful. Some discomfort may occur during needle insertion.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. How often is dialysis required?</div>
                <div style={styles.faqAnswer}>
                  Most patients need dialysis 2-3 times a week, based on medical advice.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>Q. Can kidney disease be prevented?</div>
                <div style={styles.faqAnswer}>
                  Yes. Controlling diabetes, BP, staying hydrated, and regular health checks help prevent kidney disease.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Nephrology;
