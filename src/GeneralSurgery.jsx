import React from 'react';
import generalmedicine from './Images/GeneralSurgery.jpg';
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


function GeneralMedicine() {
  return (
    <>
      <Helmet>
        <title>General Surgery | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Shree Saibaba Multispeciality Hospital offers comprehensive General Medicine care including diagnosis, treatment, and long-term management of diabetes, hypertension, infections, respiratory disorders, and preventive health check-ups."
        />
        <meta
          name="keywords"
          content="general medicine hospital Nashik, general physician Nashik, diabetes care Nashik, hypertension clinic Nashik, preventive health checkup Nashik, Shree Saibaba Multispeciality Hospital general medicine"
        />
        <meta
          name="og:description"
          content="Holistic General Medicine services with experienced physicians, advanced diagnostics, ICU support, preventive screenings, and 24x7 emergency care at Shree Saibaba Multispeciality Hospital."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={generalmedicine}
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

                <h1 style={styles.heroParagraph2}>General Medicine Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <h2 style={styles.heroParagraph1}>Comprehensive Surgical Care</h2>

                <p style={styles.heroParagraph}>
                  <b>Surgical care requires:</b>
                </p>
                <ul style={styles.heroParagraph}>
                  <li>The ability to obtain quality diagnosis on the condition (healthcare)</li>
                  <li>A timely plan of action for treatment (surgical)</li>
                  <li>An effective recovery plan (rehabilitation)</li>
                </ul>
                <p style={styles.heroParagraph}>
                  Patients who seek reliable surgical care options can trust that their care is being
                  performed in accordance with evidence based medicine and also supported by an ongoing
                  commitment to the health and well being of the individual patient.
                </p>
                <p style={styles.heroParagraph}>
                  The goal of all surgical practitioners is to return you to full health and wellness,
                  decrease your pain, and give you back the ability to live normally (with renewed
                  self-confidence).
                </p>
                <p style={styles.heroParagraph}>
                  Our Nashik facility offers complete surgical care for common, unusual and emergencies
                  of the abdomen, soft tissues, gastrointestinal tract and other body systems. Whether
                  it's for planned or urgent surgical intervention, our OR team follows standardization
                  protocols (accepted globally) for maximizing patient safety and optimizing the success
                  of surgical procedures.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Expert Surgeons & Multidisciplinary Support</h2>
                <p style={styles.heroParagraph}>
                  The surgical department is led by a team of highly qualified Surgeons, and is complemented
                  by Anesthetists, Critical Care Doctors, Nurses and Rehabilitation Specialists. Each case is
                  thoroughly examined with comprehensive clinical assessment and testing, so the treatment
                  team can tailor a plan specifically for you. Coordinated care helps minimize complications,
                  optimizes pain management, and accelerates recovery.
                </p>
                <p style={styles.heroParagraph}>
                  Our specialty care team performs both routine surgical procedures as well as complex surgical
                  procedures using minimally invasive techniques. Our surgical procedures are performed on an out
                  patient basis to provide you with comfort while undergoing surgical treatment, and provide you
                  with support after your surgery through pre-operative education and post-operative care.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Technologies and Minimally Invasive Techniques</h2>
                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital has modern operating theatres at par with international
                  standards. Precise surgical instruments, as well as high-definition imaging and advanced
                  anesthesia technology allow doctors to perform high quality surgical procedures. Whenever
                  feasible, we prefer minimally invasive procedures as they imply smaller incisions, less blood
                  loss, lesser pain, and faster recovery.
                </p>
                <p style={styles.heroParagraph}>
                  We also provide access to modern robotic-assisted techniques for selected procedures. By improving
                  both the accuracy of surgery itself, as well as providing better control over the surgical environment,
                  these tools have created a new standard of excellence in minimally invasive surgeries. In addition,
                  we support patients in their recovery through the introduction and incorporation of these cutting-edge
                  technologies into their surgical procedures, allowing for enhanced comfort and security.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Surgical Service Offerings</h2>
                <p style={styles.heroParagraph}>
                  The surgical services offered by our department include procedures that address stomach and gut diseases;
                  conditions involving the gallbladder; issues related to a hernia; conditions that affect the intestines;
                  growths on soft tissue; and infections. We are available 24 hours/day and respond to urgent emergencies
                  promptly; our staff interacts with patients experiencing symptoms of sudden abdominal pain, or other
                  emergency injuries or illness.
                </p>
                <p style={styles.heroParagraph}>
                  We schedule elective surgical procedures with a lot of thoughtfulness, to ensure patients obtain
                  excellent results with the least amount of discomfort.
                </p>
                <p style={styles.heroParagraph}>
                  When it is possible, we always advocate for non-surgical options. All of our treatment plans include
                  recommendations for patients to adopt healthier lifestyles after their surgical treatment and incorporate
                  protective measures to prevent future surgical complications.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>It Is Not Just About Surgery; It Is About Recovery</h2>
                <p style={styles.heroParagraph}>
                  We understand that the treatment of a patient involves more than just the surgery itself. From the moment
                  a patient walks through our doors, we make every effort to provide the most caring environment possible for
                  our patients by offering: comfort; support; providing the patients and their families with clear,
                  straightforward information; and being able to express our commitment to providing this level of patient care.
                  By maintaining honest communication between the patient and the patient's family, we can assist patients in
                  making informed decisions. Also, our nursing staff closely monitors recovery.
                </p>
                <p style={styles.heroParagraph}>
                  We provide patients with the greatest potential for complete recovery following surgery by providing each
                  patient with postoperative rehabilitation, nutritional guidance, and aftercare. By combining our Clinical
                  Skill with Compassionate Care, we create an environment that promotes Healing; an environment where patients
                  will be at ease and cared for throughout their entire experience.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Quality and Trust Commitment</h2>
                <p style={styles.heroParagraph}>
                  With an increasing number of individuals choosing to use Shree Saibaba Multispeciality Hospital in Nashik
                  for their surgical needs, we are confident that our commitment to quality care will continue to strengthen
                  our reputation. We are continually working to provide safe, innovative, and ethical surgical solutions that
                  meet the expectations of our patients and to provide a better quality of life for the people within our
                  communities.
                </p>
                <p style={styles.heroParagraph}>
                  We will work to position us as one of the premier places in Nashik to locate the best and most responsible
                  Surgical Service Providers, by combining Conceptual Surgical Professionals, Contemporary Facility, and
                  Patient-Centered Care.
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
                <li style={styles.listItem}>
                  Routine health check-ups and preventive screenings
                </li>
                <li style={styles.listItem}>
                  Complete blood tests and laboratory investigations
                </li>
                <li style={styles.listItem}>
                  Imaging studies including X-ray and ultrasound
                </li>
                <li style={styles.listItem}>ECG and other cardiac evaluations</li>
              </ul>
            </div>

            {/* Treatment Services */}
            <div style={{ marginBottom: "12px" }}>
              <div style={styles.tagListItem}>
                <strong>Treatment Services</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Management of chronic diseases (Diabetes, Hypertension, Thyroid
                  Disorders, etc.)
                </li>
                <li style={styles.listItem}>
                  Treatment of acute medical conditions (fever, infections,
                  dehydration, etc.)
                </li>
                <li style={styles.listItem}>
                  Medication management and patient counselling
                </li>
                <li style={styles.listItem}>
                  Lifestyle and diet guidance for long-term disease control
                </li>
              </ul>
            </div>

            {/* Specialized Services */}
            <div>
              <div style={styles.tagListItem}>
                <strong>Specialized Services</strong>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Comprehensive Diabetic Care &amp; Patient Education
                </li>
                <li style={styles.listItem}>
                  Hypertension Clinic for systematic BP management
                </li>
                <li style={styles.listItem}>Respiratory Care Services</li>
                <li style={styles.listItem}>Evaluation of cough, asthma, COPD</li>
                <li style={styles.listItem}>
                  Preventive and therapeutic management
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
              <li style={styles.listItem}>Fully equipped Medical ICU</li>
              <li style={styles.listItem}>
                Modern and fully automated laboratory facilities
              </li>
              <li style={styles.listItem}>
                Advanced imaging systems (X-rays, ultrasound, etc.)
              </li>
              <li style={styles.listItem}>
                Dedicated procedure rooms for minor medical procedures
              </li>
              <li style={styles.listItem}>
                Comfortable and patient-friendly OPD and consultation areas
              </li>
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

            <p style={{...styles.listItem, textAlign : "center"}}>Meet our experienced General Surgery:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Amit Kele</strong>
                  <br />
                  On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Toshit Lodha</strong>
                  <br />
                  On Call
                </li>
              </ul>
              <ul style={styles.doctorList}>                
                <li style={styles.tagListItem}>
                  <strong>Dr. Hemant Deore</strong>
                  <br />
                  1:00 pm to 2:00 pm
                </li>
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
              <li style={styles.tagListItem}>
                <strong>OPD:</strong> Monday to Saturday
              </li>
              <li style={styles.tagListItem}>
                <strong>Timings:</strong> 10:00 AM – 9:30 PM
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
              <li style={styles.tagListItem}>
                Successfully managing a high volume of chronic disease patients
              </li>
              <li style={styles.tagListItem}>
                Expertise in early diagnosis and preventive care
              </li>
              <li style={styles.tagListItem}>
                Strong focus on patient safety, accurate treatment, and
                continuous monitoring
              </li>
              <li style={styles.tagListItem}>
                Proven results in managing complex diabetes and hypertension
                cases
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
                Please arrive at least 30 minutes before your scheduled
                appointment.
              </li>
              <li style={styles.listItem}>
                Inform your doctor about any ongoing medications, allergies, or
                past medical history.
              </li>
              <li style={styles.listItem}>
                Follow specific preparation instructions for any diagnostic
                tests advised.
              </li>
              <li style={styles.listItem}>
                Carry previous reports, prescriptions, or health records for
                continuity of care.
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
                  Q. When should I visit a General Physician?
                </div>
                <div style={styles.faqAnswer}>
                  You should visit if you have fever, cough, fatigue, body pain,
                  blood pressure issues, diabetes concerns, digestive problems,
                  or any persistent symptoms.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Can the General Medicine department manage chronic diseases?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. Conditions like diabetes, hypertension, thyroid
                  disorders, and asthma are routinely managed with regular
                  follow-up and personalised treatment plans.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Do I need an appointment beforehand?
                </div>
                <div style={styles.faqAnswer}>
                  Walk-ins are accepted, but a prior appointment helps reduce
                  waiting time.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Are routine blood tests available in the hospital?
                </div>
                <div style={styles.faqAnswer}>
                  Yes, all major blood investigations and screening tests are
                  available in our laboratory.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q. Will the doctor guide me on lifestyle and diet changes?
                </div>
                <div style={styles.faqAnswer}>
                  Absolutely. Our physicians provide complete lifestyle,
                  dietary, and medication counselling for long-term disease
                  control.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default GeneralMedicine;