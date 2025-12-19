import React from 'react';
import gyn from './Images/gynacdep.webp'; 
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
    background: '#ffffffff',
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

function Gynecology() {
  return (
    <>
      <Helmet>
        <title>gynaecology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers comprehensive gynaecology care (excluding obstetrics) including screenings, ultrasound, Pap smear, PCOS management, minimally invasive procedures, menopause care, and family planning counselling."
        />
        <meta
          name="keywords"
          content="gynaecology hospital Nashik, best gynecologist Nashik, pap smear Nashik, PCOS treatment Nashik, laparoscopy hysteroscopy Nashik, menopause clinic Nashik, Shree Saibaba Multispeciality Hospital gynaecology"
        />
        <meta
          name="og:description"
          content="Expert gynaecology services (excluding obstetrics) including preventive screening, Pap smear, PCOS care, menopause clinic, and minimally invasive laparoscopy & hysteroscopy at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={gyn}
                  alt="gynaecology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Women’s Health Care</span>
                </div>

                <h1 style={styles.heroTitle}>Gynaecology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroTagline}>
                  Comprehensive care for female reproductive health (excluding obstetrics), delivered with privacy and compassion.
                </div>

                <p style={styles.heroParagraph}>
                  The gynaecology Department provides comprehensive care for women across all age groups, focusing exclusively
                  on female reproductive health (excluding obstetrics). Our experienced gynecologists offer expert
                  consultations, diagnostic evaluations, preventive screenings, and advanced treatment for a wide range of
                  gynecological conditions.
                </p>

                <p style={styles.heroParagraph}>
                  We aim to provide compassionate, confidential, and patient-centered care.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Pap smear screening • PCOS care • Laparoscopy &amp; hysteroscopy • Women’s wellness counselling
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
                <li style={styles.listItem}>Pelvic examinations and gynaecological assessments</li>
                <li style={styles.listItem}>Ultrasound for pelvic and reproductive system evaluation</li>
                <li style={styles.listItem}>Pap smear and cervical cancer screening</li>
                <li style={styles.listItem}>Hormonal profile and laboratory investigations</li>
                <li style={styles.listItem}>Colposcopy and biopsy (if required)</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: '12px' }}>
              <div style={styles.tagListItem}><strong>Treatment Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Management of menstrual disorders (irregular periods, heavy bleeding, PCOS, etc.)</li>
                <li style={styles.listItem}>Treatment of vaginal infections, pelvic pain, and reproductive tract infections</li>
                <li style={styles.listItem}>Management of menopausal symptoms</li>
                <li style={styles.listItem}>
                  Treatment of fibroids, ovarian cysts, endometriosis, and other gynaecological conditions
                </li>
                <li style={styles.listItem}>Family planning and contraception counseling (non-obstetric)</li>
              </ul>
            </div>

            {/* Specialized Services */}
            <div>
              <div style={styles.tagListItem}><strong>Specialized Services</strong></div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Minimal invasive gynecological procedures (Laparoscopy &amp; Hysteroscopy)</li>
                <li style={styles.listItem}>Comprehensive PCOS management</li>
                <li style={styles.listItem}>Menopause clinic and hormonal therapy guidance</li>
                <li style={styles.listItem}>Preventive gynecological health check-ups</li>
                <li style={styles.listItem}>Breast examination and women’s wellness counseling</li>
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
              <li style={styles.listItem}>Modern ultrasound systems for gynecological imaging</li>
              <li style={styles.listItem}>Dedicated gynaecology examination rooms</li>
              <li style={styles.listItem}>Colposcopy and minor procedure facilities</li>
              <li style={styles.listItem}>Well-equipped operation theatres for gynecological surgeries</li>
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
                <li style={styles.doctorItem}>Dr. Shraddha Walvekar</li>
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
              <li style={styles.tagListItem}><strong>Timings:</strong> 2:00 PM – 4:00 PM</li>
              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> 24×7 (for gynaecology-related emergencies only)
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
              <li style={styles.tagListItem}>Successful management of complex gynecological disorders</li>
              <li style={styles.tagListItem}>Expertise in advanced laparoscopic and hysteroscopic procedures</li>
              <li style={styles.tagListItem}>Strong focus on preventive screening and early diagnosis</li>
              <li style={styles.tagListItem}>High patient satisfaction through personalized and confidential care</li>
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
              <li style={styles.listItem}>Please arrive at least 30 minutes prior to your appointment.</li>
              <li style={styles.listItem}>Inform your doctor about any ongoing medications, allergies, or previous surgeries.</li>
              <li style={styles.listItem}>Carry previous reports, ultrasound findings, or test results.</li>
              <li style={styles.listItem}>Follow preparation instructions for diagnostic procedures like ultrasound or Pap smear.</li>
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
                <div style={styles.faqQuestion}>1. What conditions does the gynaecology department treat?</div>
                <div style={styles.faqAnswer}>
                  All reproductive health issues except pregnancy-related care, including menstrual problems, infections,
                  fibroids, ovarian cysts, PCOS, and menopause-related issues.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>2. How often should I get a routine gynecological check-up?</div>
                <div style={styles.faqAnswer}>
                  Once a year is recommended, or as advised by your doctor.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>3. Is a Pap smear painful?</div>
                <div style={styles.faqAnswer}>
                  It may be slightly uncomfortable but is generally painless and very quick.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>4. Do you provide family planning and contraception counseling?</div>
                <div style={styles.faqAnswer}>
                  Yes, we offer guidance on safe and effective contraception methods (non-obstetric).
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>5. Can menopausal symptoms be treated?</div>
                <div style={styles.faqAnswer}>
                  Yes. Our specialists provide medical therapy, lifestyle guidance, and hormonal management for menopause-related concerns.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Gynecology;
