import React from 'react';
import img from './Images/orthopedicdep.jpg';
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

function Orthopedic() {
  return (
    <>
      <Helmet>
        <title>Orthopedic | Best Orthopedic Hospital in Nashik</title>
        <meta name="description" content="Orthopedics at Shree Saibaba Multispeciality Hospital, Nashik: joint replacement, fracture & trauma care, sports injuries, arthroscopy, spine care and rehabilitation with 24x7 emergency support." />
        <meta name="keywords" content="orthopedic hospital Nashik, orthopaedic doctor Nashik, joint replacement Nashik, knee replacement Nashik, hip replacement Nashik, fracture treatment Nashik, trauma care Nashik, arthroscopy Nashik, sports injury Nashik, spine surgery Nashik" />
        <link rel="canonical" href="https://shreesaibabamultispecialityhospital.com/ortho" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Orthopedics Department | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Advanced orthopedic care including joint replacement, fracture & trauma management, sports injuries, arthroscopy, spine care and rehabilitation at Shree Saibaba Multispeciality Hospital, Nashik." />
        <meta property="og:url" content="https://shreesaibabamultispecialityhospital.com/ortho" />
        <meta property="og:image" content={img} />
        <meta property="og:image:alt" content="Orthopedics Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orthopedics in Nashik | Shree Saibaba Multispeciality Hospital" />
        <meta name="twitter:description" content="Joint replacement, fracture & trauma care, sports injuries, arthroscopy, spine care and rehab with 24x7 emergency support." />
        <meta name="twitter:image" content={img} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Shree Saibaba Multispeciality Hospital",
            "url": "https://shreesaibabamultispecialityhospital.com/ortho",
            "department": {
              "@type": "MedicalBusiness",
              "name": "Orthopedics Department",
              "medicalSpecialty": "Orthopedic",
              "areaServed": { "@type": "City", "name": "Nashik" },
              "description":
                "Orthopedics and trauma care including joint replacement, fracture management, arthroscopy, sports injuries, spine care and rehabilitation."
            }
          })}
        </script>
      </Helmet>


      <div style={styles.page}>
        <div style={styles.container}> 
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img} 
                  alt="Orthopedics and Joint Replacement Department in Nashik"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Orthopedic Care</span>
                </div>
                <h1 style={styles.heroParagraph2}>Orthopedic Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive care for bones, joints and muscles to restore mobility and quality of life.
                </div>

                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital provides orthopedic specialists and expertise in
                  treating individuals with a variety of orthopedic conditions. We have a complete orthopedic
                  service offering that allows our patients to receive complete orthopedic care in one location.
                  To provide the most advanced orthopedic treatments available, we have only the highest skilled
                  and most experienced orthopedic surgeons on staff to provide you with all of your orthopedic
                  needs at our hospital, including how to care for your long-term orthopedic health.
                </p>
                <p style={styles.heroParagraph}>
                  Our staff consists of highly qualified orthopedic surgeons, orthopedists, and physicians
                  specializing in bone and joint conditions. The treatment of many orthopedic conditions or
                  injuries include; fractures, sports injuries, arthritis (joint disease), diseases or conditions
                  of the spine such as bulging discs and herniated discs, (the spinal cord being inside the
                  vertebrae) and joint pain due to overuse. The medical staff will focus on relieving pain,
                  restoring movement and returning patients back to active participation.
                </p>
                <p style={styles.heroParagraph}>
                  Our orthopedic department is also proficient in a variety of advanced surgical techniques,
                  including total knee replacement, knee arthroscopy, and hip replacement. The hospital's
                  experts are known for performing robotic knee replacements that provide greater accuracy,
                  shorter recovery times, and longer-lasting results. When it comes to choosing a top knee
                  replacement surgeon in Nashik, our team has the expertise and utilizes the most modern
                  techniques available.
                </p>
                <p style={styles.heroParagraph}>
                  Our orthopedic surgeons not only provide the most advanced orthopedic surgeries for adults,
                  but they also provide excellent pediatric orthopedic surgery. Our pediatric orthopedic surgeon
                  has years of experience providing pediatric orthopedic care to patients suffering from growth
                  disorders and/or deformities due to injury or abnormal development. We aim to improve our
                  patients' quality of life by using new technology, evidence based practices and patient
                  centered care to improve mobility, reduce pain and provide the best possible outcome.
                </p>
                <p style={styles.heroParagraph}>
                  Shree Saibaba Multispeciality Hospital has been recognised as one of the leading
                  organisations in the field of Orthopedics in the Nashik Region of India.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Joint replacement • Spine surgery • 24x7 trauma &amp; fracture care • Advanced rehab
                </div>
              </div>
            </div>
          </div>

    
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Services Offered
              </div>
            </div>

            <ul style={styles.list}>
          
              <li style={styles.listItem}>
                <strong>1. Orthopedic Surgeries:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Joint replacement surgeries (hip, knee).
                  </li>
                  <li style={styles.listItem}>
                    Fracture management and trauma care.
                  </li>
                  <li style={styles.listItem}>
                    Sports injury treatment and rehabilitation.
                  </li>
                  <li style={styles.listItem}>
                    Spine surgery for degenerative and ineffective spine pathologies.
                  </li>
                </ul>
              </li>

 
              <li style={styles.listItem}>
                <strong>2. Minimally Invasive Procedures:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Arthroscopy for joint disorders and ligament injuries.
                  </li>
                  <li style={styles.listItem}>
                    Joint injections for pain management.
                  </li>
                </ul>
              </li>

          
              <li style={styles.listItem}>
                <strong>3. Rehabilitation Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Physical therapy.</li>
                  <li style={styles.listItem}>Occupational therapy.</li>
                </ul>
              </li>

          
              <li style={styles.listItem}>
                <strong>4. Emergency Orthopedic Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    24x7 emergency services for fractures, dislocations, and other orthopedic injuries.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>
            <p style={styles.listItem}>
              Our Orthopedic department is equipped with advanced facilities and technology to support
              safe and effective orthopedic and spine surgeries:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Four spacious modular operation theatres with laminar airflow for joint replacement,
                spine and complex fracture fixation.
              </li>
              <li style={styles.listItem}>
                Septic OT for infectious cases.
              </li>
              <li style={styles.listItem}>
                3D CT scan for bone reconstruction.
              </li>
              <li style={styles.listItem}>
                Digital X-ray and MRI imaging systems.
              </li>
              <li style={styles.listItem}>
                Advanced rehabilitation equipment.
              </li>
            </ul>
          </section>

           
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>
            <p style={styles.listItem}>Meet our experienced Orthopedic:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Ajinkya Desale</strong>
                  <br />
                  OPD: 12:30 pm to 5:00pm
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Satyen Joshi</strong>
                  <br />
                  OPD: On Call
                </li>

              </ul>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Brijbhushan Mahajan</strong>
                  <br />
                  OPD: On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dr. Swapnil Mahale</strong>
                  <br />
                  OPD: On Call
                </li>
                <li style={styles.tagListItem}>
                  <strong>Emergency Services:</strong> 24 x 7
                </li>
              </ul>
            </div>
          </section>

  
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Achievements &amp; Highlights
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Our department has successfully performed numerous complex orthopedic surgeries,
                including joint replacements and spinal procedures.
              </li>
              <li style={styles.tagListItem}>
                We strive for excellence in patient care, early mobilization and long-term functional outcomes.
              </li>
            </ul>
          </section>

 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Patient Guidelines
              </div>
            </div>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Inform your doctor about any medications, allergies, or previous surgeries.
              </li>
              <li style={styles.listItem}>
                Follow pre- and post-operative instructions carefully, including fasting,
                wound care, medications and physiotherapy schedules as advised.
              </li>
            </ul>
          </section>

     
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
                  Q: When should I consult an orthopedic doctor?
                </div>
                <div style={styles.faqAnswer}>
                  Consult an orthopedic doctor for persistent joint or bone pain, swelling, stiffness, difficulty walking,
                  reduced range of motion, sports injuries, or after a fall/accident with suspected fracture or dislocation.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What conditions are treated in the Orthopedic Department?
                </div>
                <div style={styles.faqAnswer}>
                  We manage fractures and trauma, arthritis and joint pain, ligament/tendon injuries, sports injuries,
                  back/neck pain due to spine problems, joint degeneration, and pediatric orthopedic issues including
                  growth-related deformities (as advised by the specialist).
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: When is joint replacement surgery advised?
                </div>
                <div style={styles.faqAnswer}>
                  Joint replacement (knee/hip) may be advised when arthritis causes severe pain, deformity, or stiffness
                  that limits daily activities and does not improve with medicines, physiotherapy, injections, or lifestyle changes.
                  X-rays and clinical assessment help confirm the need.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What is arthroscopy and when is it done?
                </div>
                <div style={styles.faqAnswer}>
                  Arthroscopy is a minimally invasive “keyhole” procedure used to diagnose and treat joint problems such as
                  meniscus tears, ligament injuries (like ACL), cartilage damage, and some shoulder/ankle conditions.
                  It often helps reduce recovery time compared to open surgery.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What should I do if I suspect a fracture after an injury?
                </div>
                <div style={styles.faqAnswer}>
                  Immobilize the injured area, avoid putting weight on it, and seek medical attention promptly.
                  Apply ice if possible and do not attempt to straighten a deformed limb. Early evaluation and X-ray
                  help prevent complications and support proper healing.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What should I bring for my orthopedic consultation?
                </div>
                <div style={styles.faqAnswer}>
                  Bring previous reports (X-ray/MRI/CT), discharge papers if any, a list of current medications,
                  details of allergies, and relevant history like diabetes/BP or prior surgeries. Wear comfortable clothing
                  that allows easy examination of the affected joint/limb.
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </>
  );
}

export default Orthopedic;
