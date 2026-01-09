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
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "stretch",
    marginBottom: "32px",
  },
  heroImageWrapper: {
    flex: "1 1 320px",
    minWidth: "280px",
  },
  heroImageCard: {
    height: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 18px 45px rgba(15,23,42,0.16)",
    border: "1px solid rgba(148,163,184,0.4)",
    background: "#0f172a",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    display: "block",
    opacity: 0.95,
  },
  heroTextWrapper: {
    flex: "2 1 420px",
    minWidth: "280px",
  },
  heroTextCard: {
    height: "100%",
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
  heroTitle: {
    fontSize: "30px",
    fontWeight: 700,
    margin: "4px 0 4px",
    color: "#0f172a",
  },
  heroSubtitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#64748b",
    marginBottom: "18px",
  },
  heroTagline: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#0f766e",
    marginBottom: "14px",
  },
  heroParagraph: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#1e293b",
    marginBottom: "10px",
    textAlign: "left",
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
};

function SpineCare() {
  return (
    <>
      <Helmet>
        <title>Spine Care | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers advanced Spine Care in Nashik with expert specialists, modern diagnostics, minimally invasive procedures, and compassionate patient-centered treatment."
        />
        <meta
          name="keywords"
          content="Spine Care Hospital Nashik, Best Spine Hospital Nashik, Back Pain Treatment Nashik, Slip Disc Treatment Nashik, Minimally Invasive Spine Surgery Nashik, Spinal Fusion Nashik, Spine Surgeon Nashik"
        />
        <meta
          property="og:title"
          content="Spine Care | Shree Saibaba Multispeciality Hospital"
        />
        <meta
          property="og:description"
          content="World-class spine care in Nashik with advanced diagnostics, expert spine surgeons, and minimally invasive treatments for faster recovery."
        />
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
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Spine Care</span>
                </div>

                <h1 style={styles.heroTitle}>Best Spine Care Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>

                <div style={styles.heroTagline}>
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

            <p style={styles.listItem}>
              Meet our experienced Spine Care team (Orthopedics &amp; Neurosurgery) for
              complete spine evaluation and treatment planning.
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Spine OPD:</strong>
                  <br />
                  Monday to Saturday (By Appointment)
                </li>
              </ul>

              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SpineCare;
