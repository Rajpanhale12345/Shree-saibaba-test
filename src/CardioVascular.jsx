import React from "react";
import thoracic from "./Images/thoracicdep.jpg";
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

const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
const PAGE_TITLE = "Cardiovascular Thoracic Surgery  | Best Cardiovascular Hospital in Nashik";
const PAGE_DESCRIPTION = "Cardiovascular & Thoracic Surgery Department in Nashik — CABG (bypass), valve repair/replacement, minimally invasive cardiac surgery (MICAS), ICU care and rehabilitation at Shree Saibaba Multispeciality Hospital.";
const CANONICAL_URL = "https://shreesaibabamultispecialityhospital.com/cardiovascular";
const OG_IMAGE_URL = "https://shreesaibabamultispecialityhospital.com/assets/thoracicdep-Dt7W-j3u.jpg"; 


function CardioVascular() {
  return (
    <>
      <Helmet>
        <title>Cardiovascular Thoracic Surgery  | Best Cardiovascular Hospital in Nashik</title>
        <meta
          name="description"
          content="Cardiovascular Thoracic Surgery Department at Shree Saibaba Multispeciality Hospital offers advanced heart and thoracic surgeries including CABG, valve surgery, MICAS and post-surgical ICU and rehabilitation care."
        />
        <meta
          name="keywords"
          content="cardiovascular thoracic surgery Nashik, CABG Nashik, heart surgery Nashik, CT surgery Shree Saibaba Hospital"
        />
        <meta
          name="og:description"
          content="Advanced cardiovascular and thoracic surgical care with experienced surgeons, minimally invasive techniques, arterial graft CABG and dedicated ICU support."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={thoracic}
                  alt="Cardiovascular Thoracic Surgery Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Cardiovascular &amp; Thoracic Surgery</span>
                </div>
                <h1 style={styles.heroParagraph2}>Cardiovascular Thoracic Surgery</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <h1 style={styles.heroParagraph1}>Cardiovascular & Thoracic Surgery Care You Can Trust</h1>

                <p style={styles.heroParagraph}>
                  At Shree Saibaba Multispeciality Hospital, our cardiovascular and thoracic surgery
                  department is dedicated to providing advanced, safe, and reliable surgical care for
                  patients with heart and chest-related conditions. We combine modern medical technology
                  with experienced surgical expertise to deliver treatment that improves both quality
                  of life and long-term heart health.
                </p>
                <p style={styles.heroParagraph}>
                  Cardiothoracic surgery is a specialized area of medicine that involves the surgical
                  treatment of the heart, lungs, chest cavity, and large blood vessels. Many people have
                  heard of cardiothoracic surgery, but they may not know exactly what it means. Simple
                  definition of cardiothoracic surgery simply describes it as a procedure to fix or
                  restore the normal functioning of these essential organs, such as the heart and lungs,
                  so that patients can again live a more active and healthy lifestyle.
                </p>
                <p style={styles.heroParagraph}>
                  At our hospital, we are fortunate to have an excellent team of cardiothoracic surgery
                  specialists working together with other medical professionals such as cardiologists,
                  anesthesiologists, critical care doctors, and nursing staff to provide comprehensive
                  care to all of our patients, everything from diagnosis and surgery through recovery and
                  rehabilitation.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Advanced Surgical Services for Heart & Chest Disorders</h2>

                <p style={styles.heroParagraph}>
                  We provide a wide variety of traditional and minimally invasive surgical techniques for
                  heart and chest disorders. Our surgical procedures include, but are not limited to, coronary
                  artery disease, heart valve disease, congenital heart defects, lung conditions, and other
                  heart or chest-related disorder treatments. Compared to traditional open-heart surgery,
                  minimally invasive surgical techniques typically use smaller incisions and result in less
                  pain, fewer complications, and an earlier return to normal function.
                </p>
                <p style={styles.heroParagraph}>
                  Our team of cardiovascular and cardiothoracic surgeons offers care for all patients requiring
                  complex surgical treatment, with the goal of ensuring a safe and accurate surgical procedure.
                  Each patient receives his/her own individualized treatment plan based upon his/her specific
                  medical conditions, age, and complete medical history. This will lead to increased opportunities
                  for patients to experience great success with their surgical procedure.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Professional Guidance for Cardiac Surgery</h2>

                <p style={styles.heroParagraph}>
                  Your choice of surgeons is an important decision regarding your cardiac health. All of our
                  surgeons have years of experience, but each has been specifically trained to care for both
                  routine and complicated surgical procedures. The surgeons in our department perform their
                  surgical procedures with the utmost accuracy and precision, while also incorporating the
                  latest information and technology available, as well as complying with various international
                  guidelines and standards for safety.
                </p>
                <p style={styles.heroParagraph}>
                  Patients seeking a cardiothoracic surgeon should consider both experience and technological
                  skill. Our hospital is dedicated to providing both a technologically advanced and a compassionate
                  level of care. Our surgeons are recognized throughout the region for their exceptional clinical
                  abilities, as well as for their commitment to providing care that is centered on the patient,
                  making our hospital is a trusted place to go for heart and thoracic care in the area.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Coordinated Care Before and After Surgery</h2>

                <p style={styles.heroParagraph}>
                  An operation alone is not enough to ensure the success of a surgical procedure. A patient's
                  preparation prior to surgery and their recovery after surgery both have a significant impact on
                  the overall outcome of the procedure. Prior to surgery, each patient receives an extensive
                  pre-operative evaluation, which includes imaging studies, blood tests, and a comprehensive
                  risk assessment. Following their operation, patients are closely monitored in one of the most
                  sophisticated intensive care units and they will receive an individualized postoperative care
                  and rehabilitation plan.
                </p>
                <p style={styles.heroParagraph}>
                  We place great emphasis on providing patient education and support so that patients and their
                  families are informed about what is occurring with their condition and the treatment provided.
                  By offering patients complete transparency and a high level of support, patients will have more
                  confidence going through the treatment process and will experience less anxiety.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>A Trusted Center in Maharashtra</h2>

                <p style={styles.heroParagraph}>Shree Saibaba Multi-Speciality Hospital is developing into the top
                  facility to visit for cardiac thoracic surgery in the state of Maharashtra. Our facility has
                  advanced technology and modern facilities; therefore, we are committed to providing access to
                  globally recognized quality thoracic and heart care at a reasonable price for all Americans.</p>
                <p style={styles.heroParagraph}>
                  We at Shree Saibaba Multi-Speciality Hospital provide a complete range of medical services for the
                  treatment of diseases of the heart and lungs. We believe that there should be no limit to how quickly
                  a patient recovers from surgery. Shree Saibaba Multi-Speciality Hospital will be here to help you
                  stay on the path to a healthy heart and strong heart for a lifetime. Every heartbeat counts!
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  3375+ open heart surgeries • Awake &amp; redo CABG • Minimally invasive MICAS
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Services */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Advanced Services
              </div>
            </div>

            {/* Cardiac Surgeries */}
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Cardiac Surgeries:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Coronary artery bypass grafting (CABG) with advanced grafting techniques.
                  </li>
                  <li style={styles.listItem}>
                    Heart valve repair and replacement.
                  </li>
                </ul>
              </li>

              {/* MICAS */}
              <li style={styles.listItem}>
                <strong>Minimally Invasive Coronary Artery Surgery (MICAS):</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    MICAS valve replacement surgery.
                  </li>
                  <li style={styles.listItem}>
                    Surgery for congenital heart defects.
                  </li>
                </ul>
              </li>

              {/* Post-Surgical Care */}
              <li style={styles.listItem}>
                <strong>Post-Surgical Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    State-of-the-art Intensive Care Unit (ICU) services.
                  </li>
                  <li style={styles.listItem}>
                    Advanced rehabilitation and follow-up care.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Advanced Facilities & Equipment */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Advanced Facilities &amp; Equipment
              </div>
            </div>
            <p style={styles.listItem}>
              Our department is equipped with the latest technology and advanced surgical tools to
              support complex cardiovascular and thoracic procedures safely and effectively, including:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Heart-Lung machine.</li>
              <li style={styles.listItem}>Intra-aortic balloon pump (IABP).</li>
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
                Successfully performed over 3,375 open heart surgeries, including awake bypass
                surgery, redo procedures and minimally invasive surgeries.
              </li>
              <li style={styles.tagListItem}>
                We strive for excellence in patient care and outcomes with strict adherence to
                global surgical standards.
              </li>
              <li style={styles.tagListItem}>
                CABG is usually performed using arterial grafts, particularly the Left Internal
                Mammary Artery (LIMA) and Right Internal Mammary Artery (RIMA), considered the
                gold-standard method due to superior long-term patency compared to vein grafts.
              </li>
            </ul>
          </section>

          {/* Team Members / Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>
            <p style={styles.listItem}>
              Meet our experienced and super-specialized Cardiovascular and Thoracic Surgeons:
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Kishore Deore</strong>
                  <br />
                  OPD: Monday, Tuesday - 11:00 AM to 05:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Kiran Kurkure</strong>
                  <br />
                  OPD: Wednesday to Saturday - 5:00 PM to 07:00 PM
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Nitin Thakare</strong>
                  <br />
                  5.00 pm to 6.00 pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
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
                Inform your surgeon about all medications you are taking, any known allergies,
                and details of previous surgeries or medical conditions.
              </li>
              <li style={styles.listItem}>
                Follow all pre-operative instructions carefully, including fasting guidelines
                and medication adjustments as advised.
              </li>
              <li style={styles.listItem}>
                Arrange for a family member or attendant to accompany you before and after
                surgery whenever possible.
              </li>
              <li style={styles.listItem}>
                Attend scheduled follow-up visits and rehabilitation sessions to support
                recovery and long-term heart health.
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
                  Q: When should I consult a cardiovascular thoracic surgeon?
                </div>
                <div style={styles.faqAnswer}>
                  You may be referred when tests suggest coronary artery disease needing surgery (like CABG), valve disease
                  requiring repair or replacement, certain congenital heart defects, or chest/lung conditions that need surgical
                  treatment. Referral is typically done after evaluation by a cardiologist or physician.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What is CABG (bypass surgery) and when is it advised?
                </div>
                <div style={styles.faqAnswer}>
                  CABG (Coronary Artery Bypass Grafting) improves blood flow to the heart by bypassing blocked coronary arteries
                  using grafts. It may be advised when blockages are significant, symptoms are severe, or when angiography shows
                  disease patterns better treated with bypass than stenting.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What heart valve surgeries are done in CT surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Valve repair or replacement may be performed for valve narrowing (stenosis) or leakage (regurgitation).
                  The best option depends on echocardiography findings, symptoms, and overall health—your surgeon will explain
                  the recommended approach.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What is minimally invasive cardiac surgery (MICAS)?
                </div>
                <div style={styles.faqAnswer}>
                  MICAS uses smaller incisions than traditional open-heart surgery in suitable cases. It may reduce pain and
                  support faster recovery. Eligibility depends on the condition and the surgeon’s assessment.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What care is provided after heart surgery?
                </div>
                <div style={styles.faqAnswer}>
                  After surgery, patients are monitored in a dedicated ICU with continuous monitoring and life-support systems
                  when needed. Once stable, the team guides step-down recovery, rehabilitation, medications, and follow-up plans
                  to support long-term heart health.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What should I bring for a cardiac/thoracic surgery consultation?
                </div>
                <div style={styles.faqAnswer}>
                  Bring your current medication list, allergy history, and any previous reports such as ECG, ECHO, angiography,
                  CT/MRI or blood tests (if done), plus details of diabetes/BP and prior surgeries. Follow any pre-test or fasting
                  instructions given by your doctor.
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </>
  );
}

export default CardioVascular;
