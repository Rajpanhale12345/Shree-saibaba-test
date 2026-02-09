import React from 'react';
import img from './Images/Neurosurgerydep.jpg';
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
  seoBlock: {
    marginTop: "20px",
    padding: "18px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    border: "1px solid rgba(203,213,225,0.9)",
  },
  seoHeading: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "8px",
  },
  seoText: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#334155",
    marginBottom: "8px",
  },
  seoList: {
    paddingLeft: "18px",
    margin: "6px 0",
  },
  seoListItem: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#1e293b",
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




function Neurosurgery() {
  return (
    <>
      <Helmet>
        <title>Neuro & Spine Surgery | Shree Saibaba Multispeciality Hospital</title>
        <meta name="description" content="Shree Saibaba Multispeciality Hospital, Nashik offers advanced neurosurgery and spine surgery including brain tumor surgery, minimally invasive spine surgery, neurotrauma and neurocritical care." />
        <meta name="keywords" content="neurosurgery Nashik, spine surgery Nashik, brain tumor surgery Nashik, best neurosurgeon in Nashik, spine specialist Maharashtra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What conditions are treated in the Neuro & Spine Surgery Department at Shree Saibaba Multispeciality Hospital, Nashik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We treat brain, spine and nerve disorders including brain tumors, head injury and brain hemorrhage, slipped/herniated disc, sciatica, spinal cord compression, spinal tumors, scoliosis/kyphosis, aneurysms and other cerebrovascular conditions, and congenital neurological/spinal disorders."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer minimally invasive spine surgery in Nashik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Whenever suitable, we use minimally invasive spine surgery techniques for conditions such as slipped disc, sciatica and nerve compression to reduce pain, blood loss and recovery time."
                }
              },
              {
                "@type": "Question",
                "name": "What neurosurgical procedures are available here?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our neurosurgical services include brain tumor surgery, cerebrovascular procedures (such as aneurysm clipping/coiling and vascular neurosurgery), neuroendoscopic procedures, neurotrauma surgery, pediatric neurosurgery and surgery for spinal/intradural tumors."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide neurocritical care after surgery or for emergencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We provide specialized neurocritical care with advanced monitoring, ventilatory support and post-operative/emergency neurological ICU care for trauma and complex neurosurgical cases."
                }
              },
              {
                "@type": "Question",
                "name": "Which imaging and facilities support neurosurgery and spine surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support treatment with MRI and CT imaging, high-tech modular operating theatres, neuro-navigation, intraoperative imaging and neuromonitoring for improved surgical accuracy and safety."
                }
              },
              {
                "@type": "Question",
                "name": "When should I consult a neurosurgeon or spine surgeon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You should consult urgently for severe headache with vomiting, sudden weakness/numbness, seizures, loss of consciousness, head injury, loss of bladder/bowel control, or rapidly worsening back/neck pain with radiating pain, weakness or numbness. For chronic symptoms like persistent back/neck pain, sciatica or tingling/numbness, evaluation helps decide whether medicines, physiotherapy or surgery is needed."
                }
              },
              {
                "@type": "Question",
                "name": "What are the OPD timings for Neuro & Spine Surgery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OPD timings are Monday to Saturday, 3:00 PM to 5:00 PM. Emergency services are available 24×7."
                }
              },
              {
                "@type": "Question",
                "name": "Which doctors are available in the Neurosurgery and Spine Surgery team?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Neurosurgeons: Dr. Sumit Hire and Dr. Anil Jadhav. Spine Surgeons: Dr. Gaurav Kulshrestha and Dr. Gaurav Gujrathi."
                }
              },
              {
                "@type": "Question",
                "name": "What should I bring for my neurosurgery/spine consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Please bring previous reports (MRI/CT/X-rays), a list of current medications, details of allergies, and any past surgery or medical history. Arrive at least 10 minutes before your appointment."
                }
              },
              {
                "@type": "Question",
                "name": "How do you decide whether surgery is necessary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our specialists evaluate symptoms, examination findings and imaging. Many conditions improve with medicines/physiotherapy, while surgery may be advised when there is significant nerve/spinal cord compression, instability, tumors, bleeding, or when conservative care fails."
                }
              }
            ]
          })}
        </script>

      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img}
                  alt="Neurosurgery and Spine Surgery Department"
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

                <h1 style={styles.heroParagraph2}>Neuro & Spine Surgery Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  The function of our whole body revolves around the functions of our nervous system.
                  The ability to take breaths, the ability to think, the ability to interact with others,
                  and all the things that we can do are possible because of the function of our nervous
                  system. When a disruption occurs in the brain, spine or nerves, an individual may need
                  to seek specialised medical care and surgical treatment for the disorder. The Department
                  of Neurosurgery and Spine Care at Shree Saibaba Multispeciality Hospital provides multiple
                  state-of-the-art options for individuals who have complex neurological disorders in a safe
                  and caring environment.
                </p>
                <p style={styles.heroParagraph}>
                  The neurosurgery centre in Nashik focuses on the combination of expertise and advanced
                  technologies for the treatment of head, spine, and nervous system conditions. Whether
                  you have a condition of the brain, a herniated disc, a spinal cord injury, a compressed
                  nerve, or have a tumour, our neurosurgeons and clinical staff provide you with all your
                  treatment options at one location.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Comprehensive Treatment for All Types of Neurological
                  Conditions</h2>

                <p style={styles.heroParagraph}>
                  Our multi-disciplinary team consists of neurologists, surgeons, neuro-anesthesiologists,
                  and rehabilitation professionals who come together to create the best possible treatment
                  plans for each patient. Neurological disorders can be treated with medications or may
                  require surgery. Every patient is evaluated by our specialists to determine the safest
                  course of action based on their needs.
                </p>
                <p style={styles.heroParagraph}>
                  Patients looking for a neurologist often come to us from their communities for conditions
                  related to brain tumours, head trauma, stroke complications, epilepsy requiring surgery,
                  nerve disorders or congenital malformations of the brain.
                </p>
                <p style={styles.heroParagraph}>Not only do we treat the condition at hand, but focus on recovery,
                  patient's comfort and quality of life after receiving treatment.</p>
                <br />

                <h2 style={styles.heroParagraph1}>Specialised Spine Treatment</h2>
                <p style={styles.heroParagraph}>
                  Affected performance in daily activities due to pain from an injury or condition, resulting in
                  pain in the back or neck. We provide state-of-the-art surgical options for treatment of any
                  patient with these conditions: slipped or herniated disc(s); sciatica; fracture(s) of vertebrae;
                  degenerative change(s) throughout the entire spine; spinal tumour(s); scoliosis.
                </p>
                <p style={styles.heroParagraph}>
                  Our approach to surgery is minimally invasive whenever possible, removing a portion of the brain
                  without disturbing the surrounding structures. By utilizing this surgical approach, our surgical
                  team has significantly reduced the amount of time spent recovering from surgery, reducing the total
                  hours spent recovering, the amount of pain and blood loss, as well as hospital length-of-stay. The
                  combination of faster recovery time means that our patients return to their normal activity levels
                  sooner than expected. In addition to providing hospital-based and outpatient neurological surgeries,
                  we treat the entire neurological system and spine at the same time to obtain the best results.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Modern Technology, Safer Procedures</h2>
                <p style={styles.heroParagraph}>
                  As a leading neurosurgery hospital in the region, we use advanced medical equipment to improve accuracy
                  and safety during operations. Our facilities include:
                </p>
                <ul style={styles.heroParagraph}>
                  <li>High-tech modular operating theatres</li>
                  <li>Neuro-navigation systems for precise surgery</li>
                  <li>Intraoperative imaging</li>
                  <li>Advanced neuro-monitoring technology</li>
                </ul>
                <p style={styles.heroParagraph}>
                  These tools help surgeons operate with greater precision while protecting important nerves and brain
                  structures.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Patient-Focused Approach</h2>
                <p style={styles.heroParagraph}>
                  Every patient is different. Our doctors spend time explaining the condition, treatment options, and
                  expected recovery process in simple language. From diagnosis to surgery and rehabilitation, we provide
                  continuous guidance and support.
                </p>
                <p style={styles.heroParagraph}>
                  Post-surgery rehabilitation is an important part of recovery. Our physiotherapy and neuro-rehabilitation
                  services help patients regain strength, balance, and independence after procedures involving the brain
                  or spine.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Reasons to select Shree Saibaba Multispeciality Hospital:</h2>
                <ul style={styles.heroParagraph}>
                  <li>Expert neurosurgeons and/or physicians (medical/surgical) with many years of experience.</li>
                  <li>Advanced state-of-the-art infrastructure and technology.</li>
                  <li>Extensive comprehensive care for patients with brain or spinal injuries.</li>
                  <li>Renewed emphasis is placed on patient safety, comfort, and expeditious recovery.</li>
                  <li>Individual personalised development plan for patients.</li>
                </ul>

                <p style={styles.heroParagraph}>
                  Timely and appropriate intervention can have very positive effects on your life and the lives of those
                  in your support system when living with a neurological and/or spinal disorder. At Shree Saibaba
                  Multispeciality Hospital, we strive to provide quality care with love, accuracy, and honesty.
                </p>
                <br />

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced brain &amp; spine surgeries • Minimally invasive techniques •
                  Neuro-navigation &amp; intraoperative neuromonitoring •
                  Dedicated neurocritical care • 24×7 emergency services
                </div>
              </div>
            </div>
          </div>

          <section style={styles.section} aria-labelledby="neurosurgical-procedures">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="neurosurgical-procedures">
                <span style={styles.sectionAccentBar} />
                Neurosurgical Procedures
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Surgical management of brain tumors (benign and malignant).
              </li>
              <li style={styles.listItem}>
                Cerebrovascular surgeries including aneurysm clipping, coiling, and vascular
                neurosurgery.
              </li>
              <li style={styles.listItem}>
                Surgery for spinal and intradural tumors.
              </li>
              <li style={styles.listItem}>
                Neuroendoscopic procedures for minimally invasive brain and ventricular conditions.
              </li>
              <li style={styles.listItem}>
                Neurotrauma care for head injuries, skull fractures, and brain hemorrhage.
              </li>
              <li style={styles.listItem}>
                Pediatric neurosurgical procedures for congenital and acquired neurological disorders.
              </li>
            </ul>
          </section>

          {/* Services Offered – Spine Surgeries */}
          <section style={styles.section} aria-labelledby="spine-surgeries">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="spine-surgeries">
                <span style={styles.sectionAccentBar} />
                Spine Surgeries
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Spinal fusion and stabilization for degenerative and traumatic spine conditions.
              </li>
              <li style={styles.listItem}>
                Surgical treatment of spinal trauma, fractures, and spinal cord injuries.
              </li>
              <li style={styles.listItem}>
                Artificial disc replacement and motion-preserving spine procedures.
              </li>
              <li style={styles.listItem}>
                Minimally invasive spine surgery for slipped disc, sciatica, and nerve compression.
              </li>
              <li style={styles.listItem}>
                Spinal deformity correction including scoliosis and kyphosis.
              </li>
              <li style={styles.listItem}>
                Treatment of congenital spinal disorders and developmental spine conditions.
              </li>
            </ul>
          </section>

          {/* Neurocritical Care */}
          <section style={styles.section} aria-labelledby="neurocritical-care">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="neurocritical-care">
                <span style={styles.sectionAccentBar} />
                Neurocritical Care
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Specialized intensive care for critically ill neurological and neurosurgical patients.
              </li>
              <li style={styles.listItem}>
                Advanced monitoring, ventilatory support, and life-support systems for post-operative,
                trauma, and emergency neurological cases.
              </li>
            </ul>
          </section>

          {/* Achievements & Highlights */}
          <section style={styles.section} aria-labelledby="achievements-highlights">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="achievements-highlights">
                <span style={styles.sectionAccentBar} />
                Achievements &amp; Highlights
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Successfully managing a wide range of complex and high-risk brain and spine surgeries
                with a focus on patient safety and clinical excellence.
              </li>
              <li style={styles.tagListItem}>
                Multidisciplinary, evidence-based approach aimed at early mobilization, faster recovery,
                and improved functional outcomes.
              </li>
            </ul>
          </section>

          {/* Facilities & Equipment */}
          <section style={styles.section} aria-labelledby="facilities-equipment">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="facilities-equipment">
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                High-tech modular operation theatres designed for neurosurgical procedures.
              </li>
              <li style={styles.listItem}>
                Advanced neuroimaging facilities including MRI and CT scanning.
              </li>
              <li style={styles.listItem}>
                Dedicated neurocritical care units with continuous patient monitoring.
              </li>
              <li style={styles.listItem}>
                Intraoperative neuromonitoring and precision-guided surgical systems.
              </li>
            </ul>
          </section>

          {/* Patient Guidelines */}
          <section style={styles.section} aria-labelledby="patient-guidelines">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="patient-guidelines">
                <span style={styles.sectionAccentBar} />
                Patient Guidelines
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Patients are advised to arrive at least 10 minutes before their scheduled appointment.
              </li>
              <li style={styles.listItem}>
                Please inform the doctor about current medications, allergies, and any previous
                surgeries or medical conditions.
              </li>
              <li style={styles.listItem}>
                Follow all pre-operative and post-operative instructions carefully, including fasting,
                medications, and rehabilitation advice.
              </li>
            </ul>
          </section>

          {/* Team Members & Department Timings */}
          <section style={styles.section} aria-labelledby="team-timings">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="team-timings">
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={styles.listItem}>
              Our department is led by experienced neurosurgeons and spine surgeons providing
              comprehensive neurological care in Nashik.
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Neurosurgeons</strong>
                  <br />
                  Dr. Sumit Hire
                  <br />
                  Dr. Anil Jadhav
                </li>
              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Spine Surgeons</strong>
                  <br />
                  Dr. Gaurav Kulshrestha
                  <br />
                  Dr. Gaurav Gujrathi
                </li>
                <li style={styles.tagListItem}>
                  <strong>OPD Timings</strong>
                  <br />
                  Monday to Saturday, 3:00 PM - 5:00 PM
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services</strong>
                  <br />
                  Available 24 x 7
                </li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
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
                  Q: What conditions are treated in the Neuro &amp; Spine Surgery Department?
                </div>
                <div style={styles.faqAnswer}>
                  We treat brain, spine and nerve disorders including brain tumors, head injuries and brain
                  hemorrhage, slipped/herniated disc, sciatica, spinal cord compression, spinal tumors,
                  scoliosis/kyphosis, and congenital neurological/spinal conditions.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: When should I consult a neurosurgeon or spine surgeon?
                </div>
                <div style={styles.faqAnswer}>
                  Consult urgently for severe headache with vomiting, seizures, sudden weakness/numbness,
                  loss of consciousness, head injury, loss of bladder/bowel control, or rapidly worsening
                  back/neck pain with radiating pain, numbness or weakness. For persistent back/neck pain
                  or sciatica, evaluation helps plan the right treatment.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Do you offer minimally invasive spine surgery?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. Whenever suitable, we use minimally invasive techniques for slipped disc, sciatica
                  and nerve compression to reduce pain, blood loss and recovery time.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What neurosurgical procedures are available at your hospital?
                </div>
                <div style={styles.faqAnswer}>
                  Services include brain tumor surgery, neurotrauma care, neuroendoscopic procedures,
                  cerebrovascular procedures (such as aneurysm clipping/coiling), and surgery for spinal
                  and intradural tumors based on specialist evaluation.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Do you provide neurocritical care after surgery or for emergencies?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. We provide specialized neurocritical care with advanced monitoring and ventilatory
                  support for post-operative, trauma and emergency neurological cases.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What are the OPD timings and emergency availability?
                </div>
                <div style={styles.faqAnswer}>
                  OPD timings are Monday to Saturday, 3:00 PM - 5:00 PM. Emergency services are available 24x7.
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </>
  );
}

export default Neurosurgery;
