import React from 'react';
import img from './Images/urologydep.jpg'; // replace with urology-specific image if available
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
    textAlign: "left"
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
    textAlign: "left",
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
    textAlign: "left"
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

  // Doctors / tags
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

function Urology() {
  return (
    <>
      <Helmet>
        <title>Urology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Urology Department at Shree Saibaba Multispeciality Hospital provides comprehensive care for kidney stones, prostate problems, urinary infections and other urological conditions with advanced surgeries and minimally invasive procedures."
        />
        <meta
          name="keywords"
          content="urology hospital Nashik, kidney stone surgery Nashik, prostate surgery Nashik, TURP, laser prostatectomy"
        />
        <meta
          name="og:description"
          content="Advanced urology care including kidney and ureteric stone removal, prostate surgery, laparoscopic and endoscopic procedures at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} // replace with urology-specific image if available
                  alt="Urology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Comprehensive Urology Care</span>
                </div>
                <h1 style={styles.heroTitle}>Urology Department - Best Urology Hospital in Nashik</h1>
                <br />

                <p style={styles.heroParagraph}>
                  The Center for Urology at Shree Saibaba Multispeciality Hospital provides patients with
                  the highest level of advanced and compassionate care available for all types of urological
                  diseases. recognized as one of the top hospitals for Urology in Nashik, we offer complete
                  diagnostic services, treatment options and surgical procedures for both men and women
                  suffering from urological conditions.
                </p>
                <p style={styles.heroParagraph}>
                  Our highly trained and experienced urology doctors and urology specialists lead our department.
                  Highly trained and experienced urosurgeons on staff are well-known for providing patients with
                  Excellent outcomes using minimally invasive modern techniques.
                </p>
                <p style={styles.heroParagraph}>
                  In our department, we treat many urological conditions, such as kidney stones, prostate disorders,
                  Urinary Tract Infections (UTIs), bladder disorders, and many other complex urological Issues using
                  minimally invasive methods.
                </p>
                <p style={styles.heroParagraph}>
                  To provide the best care possible to Women in need of Urological issues, we provide access to the
                  expertise of our urologist doctor for Women, and we take care of Women's Urology issues with Privacy
                  and Accuracy.
                </p>
                <p style={styles.heroParagraph}>
                  For critical cases, we provide round-the-clock access to an Emergency Urologist, so we can get
                  Patients in need of timely intervention and life-saving care.
                </p>
                <p style={styles.heroParagraph}>
                  With an emphasis on the use of State-of-the-art technologies, the implementation of Patient-Centric
                  Treatment Protocols, and with some of the best-trained urologists in Nashik on our Staff, our Team
                  is here to provide safe, effective, long-lasting Solutions for our patients' urological health issues.
                </p>
                <p style={styles.heroParagraph}>
                  If you are looking for Urology Consultants you can trust, advanced Urology surgery, or highly-skilled 
                  Urosurgeons in Nashik, Shree Saibaba Multispeciality Hospital is your one-stop-shop for complete 
                  Urology Care.
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Kidney &amp; ureteric stone surgery • Advanced prostate procedures • Minimally invasive urology
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
              {/* Urological Surgeries */}
              <li style={styles.listItem}>
                <strong>Urological Surgeries:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Kidney and ureteric stone removal.</li>
                  <li style={styles.listItem}>
                    Prostate surgery (TURP, laser prostatectomy).
                  </li>
                  <li style={styles.listItem}>
                    Bladder and urethral surgeries.
                  </li>
                </ul>
              </li>

              {/* Minimally Invasive Procedures */}
              <li style={styles.listItem}>
                <strong>Minimally Invasive Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Laparoscopic surgery for kidney and bladder conditions.
                  </li>
                  <li style={styles.listItem}>
                    Endoscopic procedures for urinary tract issues.
                  </li>
                </ul>
              </li>

              {/* Diagnostic Services */}
              <li style={styles.listItem}>
                <strong>Diagnostic Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Ultrasound and urodynamic studies.</li>
                  <li style={styles.listItem}>Cystoscopy and ureteroscopy.</li>
                  <li style={styles.listItem}>CT Scan.</li>
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
              Our Urology department is equipped with advanced infrastructure and
              technology to support safe and effective surgical and diagnostic care:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>State-of-the-art operating theaters.</li>
              <li style={styles.listItem}>Advanced endoscopic equipment.</li>
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
                Inform your doctor about any medications, allergies, or previous surgeries.
              </li>
              <li style={styles.listItem}>
                Follow specific instructions for diagnostic tests and procedures, including
                fasting or stopping certain medicines if advised.
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

            <p style={styles.listItem}>Meet our experienced Urologists:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Amey Patil</strong>
                  <br />
                  12:30 pm to 1:30 pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Amit Singal</strong>
                  <br />
                  1:30 pm to 2:30 pm
                </li>
              </ul>
              <ul style={styles.doctorList}>                
                <li style={styles.tagListItem}>
                  <strong>Dr. Pranav Chhajed</strong>
                  <br />
                  On Call
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
                <div style={styles.faqQuestion}>
                  Q1: What is a kidney stone removal surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Kidney stone removal surgery involves removing a stone from the kidney or
                  ureter to alleviate pain and restore normal urinary function. The approach
                  may vary from endoscopic procedures to minimally invasive surgery based on
                  stone size and location.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q2: What are the symptoms of prostate issues?
                </div>
                <div style={styles.faqAnswer}>
                  Common symptoms include difficulty urinating, frequent urination (especially
                  at night), weak urine flow, straining while passing urine and a feeling of
                  incomplete emptying of the bladder.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q3: What causes kidney stones?
                </div>
                <div style={styles.faqAnswer}>
                  Dehydration, high salt or protein intake, certain dietary factors,
                  recurrent urinary infections and genetic predisposition are common causes
                  of kidney stone formation.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q4: How are kidney stones treated?
                </div>
                <div style={styles.faqAnswer}>
                  Treatment depends on the size, location and symptoms, and may include:
                  <br />• Increased fluid intake
                  <br />• Medications to help pass or dissolve stones
                  <br />• Shock wave lithotripsy (breaking up stones)
                  <br />• Ureteroscopy
                  <br />• Surgery in severe or complex cases
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q5: What are the symptoms of bladder issues?
                </div>
                <div style={styles.faqAnswer}>
                  Symptoms may include pain or burning during urination, blood in the urine,
                  frequent urge to urinate, urgency, and incontinence (loss of bladder
                  control). Persistent symptoms should be evaluated by a urologist.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Urology;
