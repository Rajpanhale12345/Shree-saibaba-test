import React from 'react';
import gastro from './Images/gastro.jpg'; // <-- update image filename if different
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

function Gastroenterology() {
  return (
    <>
      <Helmet>
        <title>Gastroenterology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers comprehensive gastroenterology care with expert gastroenterologists, advanced endoscopy, colonoscopy, liver & pancreas disease management, and 24x7 emergency services."
        />
        <meta
          name="keywords"
          content="gastroenterology hospital Nashik, best gastro doctor Nashik, endoscopy Nashik, colonoscopy Nashik, liver specialist Nashik, Shree Saibaba Multispeciality Hospital gastroenterology"
        />
        <meta
          name="og:description"
          content="Advanced diagnostic and therapeutic gastroenterology services including endoscopy, colonoscopy, liver disease management, IBD care, and 24x7 emergency support at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={gastro}
                  alt="Gastroenterology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Digestive Care</span>
                </div>

                <h1 style={styles.heroTitle}>Gastroenterology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroTagline}>
                  Comprehensive evaluation & treatment for digestive system, liver, pancreas, and biliary tract disorders.
                </div>

                <p style={styles.heroParagraph}>
                  The Gastroenterology Department provides comprehensive evaluation and treatment for disorders of the
                  digestive system, liver, pancreas, and biliary tract. Our expert team offers advanced diagnostic and
                  therapeutic services supported by state-of-the-art technology.
                </p>
                <p style={styles.heroParagraph}>
                  We are committed to delivering patient-centred care with accuracy, safety, and compassion.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Endoscopy • Colonoscopy • Liver &amp; pancreas care • 24×7 emergency services
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
                <li style={styles.listItem}>Upper GI Endoscopy</li>
                <li style={styles.listItem}>Colonoscopy</li>
                <li style={styles.listItem}>Ultrasound for abdominal conditions</li>
                <li style={styles.listItem}>CT scan for GI and liver evaluation</li>
                <li style={styles.listItem}>Liver function tests (LFTs) and comprehensive GI-related laboratory investigations</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: '12px' }}>
              <div style={styles.tagListItem}><strong>Treatment Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Management of liver diseases (Hepatitis, Fatty Liver, Cirrhosis, etc.)
                </li>
                <li style={styles.listItem}>
                  Treatment of gastrointestinal disorders (GERD, Gastritis, IBS, Acid Peptic Disease, etc.)
                </li>
                <li style={styles.listItem}>
                  Management of pancreatic disorders (Pancreatitis, Pancreatic insufficiency)
                </li>
              </ul>
            </div>

            {/* Specialised Services */}
            <div>
              <div style={styles.tagListItem}><strong>Specialised Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Therapeutic Endoscopy (polypectomy, stenting, band ligation, etc.)
                </li>
                <li style={styles.listItem}>
                  Comprehensive Inflammatory Bowel Disease (IBD) management (Ulcerative Colitis, Crohn’s Disease)
                </li>
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
              <li style={styles.listItem}>Spacious, well-designed Endoscopy Room</li>
              <li style={styles.listItem}>Advanced high-definition endoscopy systems</li>
              <li style={styles.listItem}>Modern ultrasound, CT scan and MRI facilities</li>
              <li style={styles.listItem}>Dedicated recovery area for post-procedure monitoring</li>
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
                <li style={styles.doctorItem}>Dr. Soham Doshi</li>
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
              <li style={styles.tagListItem}>
                <strong>OPD:</strong> Monday to Saturday
              </li>
              <li style={styles.tagListItem}>
                <strong>Dr. Soham Joshi (DM Gastroenterology):</strong> Morning 8:30 AM – 9:30 AM &nbsp; | &nbsp; Evening 5:00 PM – 6:00 PM
              </li>
              <li style={styles.tagListItem}>
                <strong>Dr. Kunal Nikam (MD Medicine):</strong> 10:00 AM – 5:00 PM
              </li>
              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> Available 24×7
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
              <li style={styles.tagListItem}>Successful management of complex GI and liver disease cases</li>
              <li style={styles.tagListItem}>Expertise in advanced therapeutic endoscopy</li>
              <li style={styles.tagListItem}>High success rate in minimally invasive GI procedures</li>
              <li style={styles.tagListItem}>Focus on patient comfort, safety, and clinical excellence</li>
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
                Please arrive 30 minutes before your appointment for registration and evaluation.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about any ongoing medications, allergies, surgeries, or past medical history.
              </li>
              <li style={styles.listItem}>
                Follow specific preparation instructions for diagnostic tests such as endoscopy or colonoscopy.
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
                <div style={styles.faqQuestion}>1. What is an endoscopy, and is it painful?</div>
                <div style={styles.faqAnswer}>
                  Endoscopy is a procedure where a thin flexible tube with a camera is used to examine your digestive tract.
                  It is usually done under mild sedation and is not painful.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>2. How do I prepare for a colonoscopy?</div>
                <div style={styles.faqAnswer}>
                  Your doctor will provide a bowel-cleansing preparation. You may need to follow a liquid diet and take prescribed laxatives.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>3. When should I see a gastroenterologist?</div>
                <div style={styles.faqAnswer}>
                  If you experience symptoms like persistent abdominal pain, acidity, bloating, vomiting, rectal bleeding,
                  change in bowel habits, jaundice, or unexplained weight loss.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>4. Are the procedures safe?</div>
                <div style={styles.faqAnswer}>
                  Yes. They are performed by experienced specialists using advanced equipment with strict safety protocols.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>5. Do I need someone to accompany me for an endoscopy?</div>
                <div style={styles.faqAnswer}>
                  Yes, as sedation may be used, you should have someone to take you home safely after the procedure.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Gastroenterology;
