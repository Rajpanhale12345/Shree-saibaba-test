import React from "react";
import SpineCareImg from "./Images/spinecaredep.jpg";
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



const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
const PAGE_URL = `${SITE_URL}/spinecare`;
const ogImage = SpineCareImg.startsWith("http") ? SpineCareImg : `${SITE_URL}${SpineCareImg}`;


const jsonLdClinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Shree Saibaba Multispeciality Hospital",
  url: PAGE_URL,
  image: ogImage,
  medicalSpecialty: "Orthopedic",
  description:
    "Advanced spine care in Nashik with modern diagnostics and minimally invasive treatment options.",
  areaServed: ["Nashik", "Maharashtra"],
  department: {
    "@type": "MedicalClinic",
    name: "Spine Care Department",
    medicalSpecialty: "Orthopedic",
    url: PAGE_URL,
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I consult a spine specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Consult a spine specialist if you have back or neck pain lasting more than 2–3 weeks, pain radiating to the arm/leg, tingling or numbness, weakness, difficulty walking, or pain affecting daily activities or sleep.",
      },
    },
    {
      "@type": "Question",
      name: "What is a slipped (herniated) disc and what symptoms can it cause?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A slipped or herniated disc occurs when disc material presses on nearby nerves, causing back/neck pain, sciatica (leg pain), tingling, numbness, or weakness depending on the level affected.",
      },
    },
    {
      "@type": "Question",
      name: "Do all spine problems need surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Many spine conditions improve with medicines, physiotherapy, posture correction, and lifestyle changes. Surgery may be advised for significant nerve/spinal cord compression, instability, progressive weakness, severe pain not improving with conservative care, or certain fractures/tumors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide minimally invasive spine surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. When clinically suitable, minimally invasive procedures may be used to reduce muscle injury, blood loss, and recovery time. The approach depends on diagnosis and imaging findings.",
      },
    },
  ],
};




function SpineCare() {
  return (
    <>
      <Helmet>
        <title>Spine Care | Best Spine Care Hospital in Nashik</title>
        <meta name="description" content="Shree Saibaba Multispeciality Hospital offers advanced Spine Care in Nashik with expert specialists, modern diagnostics, minimally invasive procedures, and compassionate patient-centered treatment." />
        <meta name="keywords" content="Spine Care Hospital Nashik, Best Spine Hospital Nashik, Back Pain Treatment Nashik, Slip Disc Treatment Nashik, Minimally Invasive Spine Surgery Nashik, Spinal Fusion Nashik, Spine Surgeon Nashik" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Spine Care | Shree Saibaba Multispeciality Hospital" />
        <meta property="og:description" content="World-class spine care in Nashik with advanced diagnostics, expert spine surgeons, and minimally invasive treatments for faster recovery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Spine Care Department - Shree Saibaba Multispeciality Hospital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spine Care | Best Spine Care Hospital in Nashik" />
        <meta name="twitter:description" content="Advanced spine care in Nashik with modern diagnostics and minimally invasive treatment options." />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Spine Care Department - Shree Saibaba Multispeciality Hospital" />

        <script type="application/ld+json">{JSON.stringify(jsonLdClinic)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>

      </Helmet>


      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={SpineCareImg}
                  alt="Spine Care Department"
                  style={styles.heroImage}
                  loading="lazy"
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Spine Care</span>
                </div>

                <h1 style={styles.heroParagraph2}>Best Spine Care Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroParagraph1}>
                  Good spine health is imperative for overall health.
                </div>

                <p style={styles.heroParagraph}>
                  An individual's spine provides structure to their body, allows
                  them to move, and protects the brain and nerve system. Spine
                  specialists diagnose, manage, and treat spine conditions so that
                  their patients can continue to move and live pain-free, maintaining
                  good quality of life.
                </p>

                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital is an early adopter of spine
                  specialist treatment in Nashik and offers the community its wealth
                  of expertise and quality of spine care with a commitment to
                  state-of-the-art technology and innovative methods of treatment.
                </p>

                <p style={styles.heroParagraph}>
                  The physicians who provide the best spinal care at Shree Saibaba
                  Multispeciality Hospital include top-notch spine surgeons, orthopaedic
                  physicians, and neurosurgeons from the vicinity of Nashik. These
                  physicians have been specifically trained to diagnose and treat all
                  types of spinal conditions. The physicians can assist their patients
                  in controlling pain, returning to their daily activities, and regaining
                  their range of motion.
                </p>

                <p style={styles.heroParagraph}>
                  This top spine hospital in Nashik is fully equipped with advanced imaging
                  and in-house diagnostic facilities, offering quick assessment and
                  accurate management of spinal disorders. Following are some of the
                  services provided under advanced spine care.
                </p>

                <p style={styles.heroParagraph}>
                  The physicians at Shree Saibaba Multispeciality Hospital are fully
                  committed to each patient, providing a high level of patient care by
                  utilizing their expertise, training, and resources to provide the best
                  treatment available so that patients can return to enjoying their lives
                  without suffering from the pain of their spinal condition.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced Imaging • Minimally Invasive Spine Surgery • 24x7
                  Emergency Support
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
              <li style={styles.listItem}>
                <strong>Spine Diagnostics:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Advanced imaging support for accurate spine evaluation (X-ray,
                    MRI, CT as advised).
                  </li>
                  <li style={styles.listItem}>
                    In-house diagnostics for timely reporting and faster treatment
                    decisions.
                  </li>
                </ul>
              </li>

              <li style={styles.listItem}>
                <strong>Non-Surgical Spine Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Back & neck pain management for chronic and acute conditions.
                  </li>
                  <li style={styles.listItem}>
                    Physiotherapy & rehabilitation guidance to improve mobility and
                    strength.
                  </li>
                  <li style={styles.listItem}>
                    Lifestyle and posture counseling to prevent recurrence and
                    support long-term spine health.
                  </li>
                </ul>
              </li>

              <li style={styles.listItem}>
                <strong>Advanced & Surgical Spine Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Minimally invasive spine procedures (where suitable) for less
                    pain and faster recovery.
                  </li>
                  <li style={styles.listItem}>
                    Slipped disc management including surgical options when required.
                  </li>
                  <li style={styles.listItem}>
                    Spinal fusion and stabilization procedures for complex spine
                    conditions.
                  </li>
                  <li style={styles.listItem}>
                    Deformity correction and complex spine surgery planning with
                    specialist care.
                  </li>
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

            <ul style={styles.list}>
              <li style={styles.listItem}>
                Advanced imaging and in-house diagnostics for timely evaluation.
              </li>
              <li style={styles.listItem}>
                Technology-driven surgical support for complex spine procedures.
              </li>
              <li style={styles.listItem}>
                Patient-focused rehabilitation guidance to support long-term
                outcomes.
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
                Trusted spine care destination in Nashik with advanced technology
                and specialist expertise.
              </li>
              <li style={styles.tagListItem}>
                Strong focus on minimally invasive interventions and faster
                recovery whenever clinically appropriate.
              </li>
              <li style={styles.tagListItem}>
                Ethical, patient-centered care backed by modern diagnostics and
                surgical excellence.
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
                Please arrive at least 10 minutes before your scheduled appointment.
              </li>
              <li style={styles.listItem}>
                Carry previous reports (X-ray/MRI/CT), prescriptions, and a list of
                current medicines.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about allergies, diabetes, BP, or any previous
                surgeries.
              </li>
              <li style={styles.listItem}>
                Follow test instructions (fasting / medication adjustments) if advised.
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
            <p style={styles.listItem}>Meet our spine specialists:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Gaurav Gujrathi</strong>
                  <br />
                  OPD: On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Sumit Hire</strong>
                  <br />
                  OPD: 3:00 pm to 5:00 pm
                </li>

              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Anil Jadhav</strong>
                  <br />
                  OPD: On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Gaurav Kulshrestha</strong>
                  <br />
                  OPD: On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>{/* FAQs */}
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
                  Q: When should I consult a spine specialist?
                </div>
                <div style={styles.faqAnswer}>
                  Consult a spine specialist if you have back or neck pain lasting more than 2–3 weeks, pain radiating to the arm/leg,
                  tingling or numbness, weakness, difficulty walking, or pain that affects daily activities or sleep.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What is a slipped (herniated) disc and what symptoms can it cause?
                </div>
                <div style={styles.faqAnswer}>
                  A slipped or herniated disc happens when the disc presses on nearby nerves. It can cause back/neck pain, sciatica
                  (pain down the leg), tingling, numbness, or weakness in the arms/legs depending on the affected level.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Do all spine problems need surgery?
                </div>
                <div style={styles.faqAnswer}>
                  No. Many spine conditions improve with medicines, physiotherapy, posture correction, and lifestyle changes.
                  Surgery is considered when there is significant nerve/spinal cord compression, instability, progressive weakness,
                  severe pain not improving with conservative care, or certain fractures/tumors.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Do you provide minimally invasive spine surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. When clinically suitable, minimally invasive procedures may be used to reduce muscle injury, blood loss,
                  and recovery time. The final approach depends on your diagnosis and imaging findings.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What tests are commonly used for spine evaluation?
                </div>
                <div style={styles.faqAnswer}>
                  Spine evaluation may include X-ray and, when required, MRI or CT scans to assess discs, nerves, spinal cord,
                  alignment, and fractures. Your doctor will recommend the appropriate test based on symptoms and examination.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What symptoms need urgent medical attention?
                </div>
                <div style={styles.faqAnswer}>
                  Seek urgent care for loss of bladder/bowel control, sudden severe weakness in arms/legs, severe trauma,
                  fever with back pain, or rapidly worsening numbness or walking difficulty.
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </>
  );
}

export default SpineCare;
