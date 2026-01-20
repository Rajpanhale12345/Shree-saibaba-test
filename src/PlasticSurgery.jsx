import React from 'react';
import gastro from './Images/plastic.jpg';
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


function PlasticSurgery() {


  const canonicalUrl = "https://shreesaibabamultispecialityhospital.com/plasticsurgery";

  const metaTitle =
    "Plastic Surgery | Shree Saibaba Multispeciality Hospital, Nashik";
  const metaDescription =
    "Expert cosmetic and reconstructive plastic surgery care in Nashik. Advanced OT setup, safety-focused protocols, and personalized consultations at Shree Saibaba Multispeciality Hospital.";
  const metaKeywords =
    "plastic surgery Nashik, cosmetic surgery, reconstructive surgery, tummy tuck, face fat removal, nose reconstruction, ear surgery, Shree Saibaba Multispeciality Hospital";


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

                <h1 style={styles.heroParagraph2}>Plastic Surgery Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  The Reconstructive and Plastic Surgery provides a method for improving the person's emotional
                  well-being, and overall appearance by using advanced medical technology. Plastic surgery
                  assists patients in regaining health following an injury, transforming the physical deformity
                  of an injury into a more typical condition, or creating a more beautiful appearance than what
                  was originally available.
                </p>
                <p style={styles.heroParagraph}>
                  The Shree Saibaba Multipurpose Hospital is known for its highly-skilled doctors and state-of-the-art
                  technological capabilities which provide the opportunity for cosmetic and reconstructive surgical
                  procedures to be performed on a wide variety of individuals. All surgical procedures conducted by the
                  hospital are conducted with great medical care, integrity, and safety measured by appropriate means.
                </p>
                <p style={styles.heroParagraph}>
                  The plastic surgery department is comprised of highly-trained plastic surgeons with extensive experience
                  in both the area of enhancing the beauty of the individual and reconstructive plastic surgery. The doctors
                  perform a wide variety of cosmetic procedures including facial reconstruction (), body contouring,
                  reconstructive surgery after the accident, and surgical corrective procedures for physical deformities
                  resulting from congenital or other causes. Upon initiation of any treatment plan, all patients must have
                  an in-depth consultation with one of the doctors and be encouraged to understand the treatment options,
                  the recovery process, and the projected outcomes.
                </p>
                <p style={styles.heroParagraph}>
                  A common request for aesthetic surgery is the tummy tuck. The purpose of a tummy tuck is to remove unwanted
                  fat and loose skin from your abdomen. Also, a tummy tuck can help improve your abdominal muscle tone. Many
                  individuals choose to have a tummy tuck after losing a large amount of weight, or after having a baby, due
                  to their desire to be back in shape and regain confidence. The tummy tuck is performed using refined surgical
                  techniques that allow patients to enjoy minimal scarring and natural-looking results after surgery.
                </p>
                <p style={styles.heroParagraph}>
                  Another procedure designed specifically to improve the look of your face is Face Fat Removal. Face Fat Removal
                  enhances the contours of your face by removing excess fat deposits, resulting in more defined facial features.
                  Patients wishing to have sharper facial definitions can benefit from Face Fat Removal procedures which ensure
                  that the balance and harmony of the features are maintained. Quick recovery and lasting results are provided.
                </p>
                <p style={styles.heroParagraph}>
                  Nose reconstruction surgery is performed on people who have nasal deformity resulting from injury (such as
                  delinquency), birth defect, or previous surgeries and has dual function (functional improvement, as well as
                  aesthetic improvement). This procedure focuses on restoring proper breathing along with facial symmetry. In
                  addition, nose plastic surgery is available for patients who wish to enhance the shape or proportion of the
                  nose while preserving a natural appearance that complements their facial structure.
                </p>
                <p style={styles.heroParagraph}>
                  Ear plastic surgery provides correction for ears that are prominent, abnormal in shape, or have been injured
                  by accident. Ear plastic surgery can be done for patients of all ages, including children, because it can
                  positively affect the way someone looks and improve the way they feel about themselves. The result of surgery
                  is typically a continued improvement in appearance over time.
                </p>
                <p style={styles.heroParagraph}>
                  The Practice also has advance technology such as state-of-the-art operating rooms, modern anesthesia systems,
                  laser technology, and a wide variety of very precise instruments used for surgery, to make every step of the way
                  safer, more efficient, and to minimize post-operative discomfort. All aspects of surgical care, from the initial
                  consultation through recovery, follow strict protocols and procedures for delivery of the best possible surgical
                  outcomes.
                </p>
                <p style={styles.heroParagraph}>
                  The Hospital in Nashik is recognized as the Centre of Excellence for Cosmetic Surgery, offering patients the
                  best surgical care available in accordance with International Standards of Care. Our first priority is to provide
                  each of our patients with personal service, which includes open and honest communication between our medical team
                  and each of our patients before, during, and after a surgical procedure.
                </p>
                <p style={styles.heroParagraph}>
                  Our patients achieve their desired plastic surgery results by receiving an integrated approach that includes
                  clinical knowledge, cutting-edge technology and caring professionalism. Regardless of the reason (i.e., accident,
                  physical reasons or cosmetic desires) for the need for plastic surgery, we will be able to provide each of our
                  patients with a reliable and proven solution.
                </p>
                <p style={styles.heroParagraph}>
                  Through a commitment to excellence, safety, and natural results, Shree Saibaba Multispeciality Hospital continues
                  to be a trusted source of high-quality plastic and reconstructive surgical care.
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
                <strong>Cosmetic Procedures</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Tummy tuck (abdominoplasty)</li>
                <li style={styles.listItem}>Face fat removal / contouring</li>
                <li style={styles.listItem}>Nose reshaping (rhinoplasty)</li>
                <li style={styles.listItem}>Ear correction (otoplasty)</li>
                <li style={styles.listItem}>Body contouring procedures</li>
              </ul>
            </div>

            <div>
              <div style={styles.tagListItem}>
                <strong>Reconstructive &amp; Corrective Care</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Post-accident reconstruction</li>
                <li style={styles.listItem}>Facial reconstruction</li>
                <li style={styles.listItem}>Correction of congenital deformities</li>
                <li style={styles.listItem}>Revision procedures (as advised)</li>
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
              <li style={styles.listItem}>Modern OT with advanced monitoring</li>
              <li style={styles.listItem}>Safe anesthesia systems</li>
              <li style={styles.listItem}>Precision surgical instruments</li>
              <li style={styles.listItem}>Post-op monitoring and recovery support</li>
              <li style={styles.listItem}>Patient-friendly consultation areas</li>
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
                <li style={styles.doctorItem}><b>DR. LALIT DERLE</b> <br /><span style={{fontSize : "11px"}}>MBBS, DNB, MS</span></li>
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
                <strong>Timings:</strong> On Call
              </li>
              <li style={styles.tagListItem}>
                <strong>Emergency Services:</strong> Available 24x7
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
              <li style={styles.tagListItem}>Safety-first surgical protocols</li>
              <li style={styles.tagListItem}>Cosmetic + reconstructive expertise</li>
              <li style={styles.tagListItem}>Personalized consultation & planning</li>
              <li style={styles.tagListItem}>Supportive recovery and follow-up care</li>
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
                Follow pre-procedure instructions as advised by your doctor.
              </li>
              <li style={styles.listItem}>
                Carry previous reports, scans, prescriptions, and lab results.
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
                  1. When should I consult a plastic surgeon?
                </div>
                <div style={styles.faqAnswer}>
                  If you want cosmetic improvement, have scars/deformities, need
                  reconstruction after an injury, or require correction of congenital
                  or acquired conditions, a consultation can help you understand
                  options and outcomes.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  2. Is cosmetic surgery safe?
                </div>
                <div style={styles.faqAnswer}>
                  When performed by qualified surgeons in a properly equipped hospital
                  with appropriate screening and safety protocols, cosmetic procedures
                  are generally safe. Your doctor will evaluate your individual risk.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  3. Do I need an appointment?
                </div>
                <div style={styles.faqAnswer}>
                  Walk-ins may be accepted, but an appointment helps reduce waiting time
                  and allows better planning for consultation and investigations.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  4. How long does recovery take?
                </div>
                <div style={styles.faqAnswer}>
                  Recovery depends on the procedure and your health. Your surgeon will
                  guide you on downtime, wound care, activity restrictions, and follow-ups.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  5. Will results look natural?
                </div>
                <div style={styles.faqAnswer}>
                  The aim is balanced, natural-looking improvement. Your consultation will
                  cover realistic expectations, technique options, and projected outcomes.
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

export default PlasticSurgery;