import React from 'react';
import nephrology from './Images/nephrology.jpg';
import { Helmet } from "react-helmet-async";

// ✅ Same structure + layout + styling pattern as Cardiology
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

                <h1 style={styles.heroTitle}>Nephrology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroTagline}>
                  Comprehensive diagnosis, treatment, and long-term management for kidney disorders with advanced dialysis support.
                </div>

                <p style={styles.heroParagraph}>
                  The Nephrology Department provides specialized care for patients with kidney-related diseases and disorders.
                  Our expert nephrologists offer comprehensive diagnosis, treatment, and long-term management of chronic kidney
                  disease, acute kidney injuries, electrolyte imbalances, and hypertension related to kidney disorders.
                </p>

                <p style={styles.heroParagraph}>
                  With advanced facilities and a dedicated care team, we ensure accurate evaluation and personalized treatment plans.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  CKD &amp; AKI care • Hemodialysis • Renal biopsy • 24×7 dialysis unit (as required)
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
                <li style={styles.listItem}>Treatment of kidney infections and kidney stone–related issues</li>
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
                Team Members
              </div>
            </div>
            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.doctorItem}>Dr. Abhijeet More</li>
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
                <strong>Dr. Abhijeet More (DM Nephrology):</strong> Morning 8:00 AM – 9:00 AM &nbsp; | &nbsp; Evening 6:00 PM – 7:00 PM
              </li>

              <li style={styles.tagListItem}>
                <strong>Dr. Kunal Nikam (MD Medicine):</strong> 10:00 AM – 5:00 PM
              </li>

              <li style={styles.tagListItem}>
                <strong>Dialysis Unit:</strong> Functional 24×7 (as per patient requirement)
              </li>

              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> 24×7 availability for renal emergencies
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
                <div style={styles.faqQuestion}>1. When should I see a Nephrologist?</div>
                <div style={styles.faqAnswer}>
                  If you have high creatinine, swelling, decreased urine output, uncontrolled BP, kidney stones, or persistent
                  abnormalities in urine tests.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>2. What is Chronic Kidney Disease (CKD)?</div>
                <div style={styles.faqAnswer}>
                  A long-term condition where kidneys gradually lose function. Early diagnosis helps slow progression.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>3. Is dialysis painful?</div>
                <div style={styles.faqAnswer}>
                  No, dialysis is generally not painful. Some discomfort may occur during needle insertion.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>4. How often is dialysis required?</div>
                <div style={styles.faqAnswer}>
                  Most patients need dialysis 2–3 times a week, based on medical advice.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>5. Can kidney disease be prevented?</div>
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
