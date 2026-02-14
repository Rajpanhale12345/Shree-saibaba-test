import React from 'react';
import img from './Images/interventionaldep.jpg';
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
    background: "#ffffff",

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


const radiologyContent = {
  servicesOffered: [
    {
      title: "Imaging Services",
      items: [
        "X-ray",
        "Ultrasonography",
        "Peripheral Doppler study",
        "Carotid Doppler",
        "Fetal cardiac echo",
        "1st digital mammography in Nashik",
        "Computed Tomography (CT) scans",
        "Magnetic Resonance Imaging (MRI)",
      ],
    },
    {
      title: "Image-guided Procedures",
      items: ["Biopsies", "Drainage procedures", "Vascular interventions"],
    },
  ],

  facilitiesEquipment: [
    "State-of-the-art imaging equipment",
    "Advanced digital X-ray systems",
    "State-of-the-art ultrasonography machines",
    "High-field MRI machines",
    "CT Scan",
    "1st digital mammography in Nashik",
  ],

  specialisedImagingServices: ["Cardiac MRI"],

  achievementsHighlights: [
    "We specialise in cardiac MRI to assess viability of myocardium and evaluate cardiomyopathies, helping guide advanced cardiac treatment decisions.",
  ],

  patientGuidelines: [
    "Please arrive at least 10 minutes before your scheduled appointment.",
    "Inform your doctor about any medications, allergies, or previous medical conditions.",
    "Follow specific instructions for imaging procedures, including fasting or drinking water as advised for certain tests.",
  ],

  team: {
    doctors: [
      { name: "Dr. Pallavi Dharmadhikari", degree: "MD, DNB" },
      { name: "Dr. Vaibhav Nimbhore", degree: "DNB" },
    ],
    timings: [
      { label: "Imaging Services", value: "Monday to Saturday, 9:00 AM - 9:00 PM" },
      { label: "Emergency Services", value: "24 x 7" },
    ],
  },

  faqs: [
    {
      q: "What is Interventional Radiology (IR)?",
      a: "Interventional Radiology is a specialty that treats many conditions using minimally invasive, image-guided procedures (using ultrasound, CT, or fluoroscopy). Most treatments are done through a small needle puncture instead of open surgery.",
    },
    {
      q: "What conditions can be treated with Interventional Radiology?",
      a: "IR can help manage vascular and non-vascular conditions such as blocked or narrowed blood vessels, bleeding control, varicose veins, dialysis access issues, certain tumors (through image-guided therapies), abscess or fluid drainage, and targeted biopsies.",
    },
    {
      q: "Is Interventional Radiology safer than surgery?",
      a: "IR is often associated with lower risk compared to open surgery because it uses small punctures instead of large incisions. However, every procedure has risks, and your doctor will explain benefits and potential complications based on your case.",
    },
    {
      q: "How should I prepare for an IR procedure?",
      a: "Preparation depends on the procedure. You may be asked to fast for a few hours, stop certain medicines (like blood thinners) temporarily, and complete blood tests. Always share your medical history, allergies, kidney issues, and current medicines.",
    },
    {
      q: "When will I resume normal activities after IR treatment?",
      a: "Recovery is usually faster than surgery. Many patients return to routine activities within 24–72 hours, depending on the procedure. Your doctor will provide specific post-procedure instructions.",
    },
  ],
}

function Interventional_Radiology() {
  const c = radiologyContent;

  const pageTitle = "Interventional Radiology | Best Interventional Radiology Hospital in Nashik";
  const pageDescription = "Interventional Radiology Department at Shree Saibaba Multispeciality Hospital offers minimally invasive, image-guided procedures for vascular and non-vascular conditions with 24x7 emergency services.";

  const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
  const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
  const CANONICAL_URL = `${SITE_URL}/interventionalradiology`;
  const OG_IMAGE_URL = `${SITE_URL}/assets/interventionaldep-DOQq9WTi.jpg`;

  const jsonLdDepartment = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    url: CANONICAL_URL,
    department: {
      "@type": "MedicalBusiness",
      name: "Interventional Radiology Department",
      medicalSpecialty: "Radiology",
      description: "Minimally invasive, image-guided procedures for vascular and non-vascular conditions using ultrasound, CT and fluoroscopy.",
      areaServed: { "@type": "City", name: "Nashik" }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Interventional Radiology Department - Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">{JSON.stringify(jsonLdDepartment)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>



      <div style={styles.page}>
        <div style={styles.container}> 
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img}
                  alt="Interventional Radiology"
                  style={styles.heroImage}
                  loading="lazy"
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Comprehensive Medical Care</span>
                </div>

                <h1 style={styles.heroParagraph2}>Interventional Radiology</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  Interventional Radiology provides cutting-edge, minimally invasive diagnostic and therapeutic
                  treatments through a range of advanced imaging techniques and technologies at Shree Saibaba
                  Multispeciality Hospital in Nashik.
                </p>
                <p style={styles.heroParagraph}>
                  Utilising real-time imaging modalities like ultrasound, CT and fluoroscopy to help validate
                  and target the diseased area with minimal disturbance to surrounding healthy tissue has created
                  a significant reduction in the amount of open surgery, and consequently, pain, complication
                  rates and time taken to recover from surgical procedures. Interventional Radiologists are
                  involved in the treatment a broad range of vascular and non-vascular diseases across nearly
                  all areas of medicine.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Scope of Interventional Radiology Services</h2>
                <p style={styles.heroParagraph}>
                  Our department provides image-guided services for conditions related to blood vessels, tumors,
                  infections, and organ-related diseases. Vascular interventions are employed for the diagnosis
                  and treatment of stenosed or occluded blood vessels, dialysis access, and circulation-related
                  disorders. These procedures are carried out with the help of small punctures using catheters,
                  ensuring accuracy and comfort to the patient.
                </p>
                <p style={styles.heroParagraph}>
                  Non-vascular interventional procedures include image-guided biopsies, drainage of fluid collections
                  like abscesses, and focused therapies for selected tumors. Interventional Radiology is also employed
                  in the treatment of certain cancers with focused therapies that help manage the disease while
                  preserving the healthy tissue.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Women's Health Conditions</h2>
                <p style={styles.heroParagraph}>
                  Uterine fibroids and vascular causes of pelvic pain can be effectively treated with non-surgical
                  interventional procedures. Similarly, minimally invasive interventional procedures for varicose
                  veins provide relief with shorter recovery periods.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Benefits of Minimally Invasive Image-Guided Care</h2>
                <p style={styles.heroParagraph}>
                  Compared to traditional surgical techniques, interventional radiology offers patients a number
                  of advantages; most notably: procedures can be performed with relatively small incisional wounds
                  leading to decreased scarring and less risk of excessive bleeding; and many can also be done using
                  only local anesthetic - making them ideal for older adults or patients with medical issues
                  increasing their risk from surgery.
                </p>
                <p style={styles.heroParagraph}>
                  Patients can expect shorter lengths of hospitalisation, faster return to daily activities, and much
                  higher levels of comfort during the recovery phase. Similarly, the ability to use real-time imaging
                  techniques during procedures provides for accurate placement of instruments and precise targeting of
                  treatments resulting in increased procedural safety and efficacy.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Expertise and Technology</h2>
                <p style={styles.heroParagraph}>
                  Experienced experts perform interventional treatments using cutting-edge imaging technology in a
                  specialized clinical space at Shree Saibaba Multispecialty Hospital and as per stringent guidelines
                  designed for the safety, accuracy and cleanliness of all patients during their treatment.
                </p>
                <p style={styles.heroParagraph}>
                  In addition, the Interventional Radiology Department is integrated with supporting departments including
                  Cardiology, Oncology, Nephrology and Surgery, allowing for comprehensive evaluation and development of
                  an individualised treatment plan for each patient.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Patient-Centered Care</h2>
                <p style={styles.heroParagraph}>
                  Before undergoing any interventional procedure, all patients undergo a comprehensive evaluation.
                  Information about the treatment options, benefits, and potential risks is also discussed with patients
                  and their families to enable them to make informed decisions. After the procedure, patients receive
                  monitoring and follow-up care.
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
 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Services Offered
              </div>
            </div>

            <ul style={styles.list}>
              {c.servicesOffered.map((block) => (
                <li key={block.title} style={styles.listItem}>
                  <strong>{block.title}:</strong>
                  <ul style={styles.list}>
                    {block.items.map((item) => (
                      <li key={item} style={styles.listItem}>
                        {item}.
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section> 

          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>

            <p style={styles.listItem}>{c.facilitiesEquipmentIntro}</p>
            <ul style={styles.list}>
              {c.facilitiesEquipment.map((item) => (
                <li key={item} style={styles.listItem}>
                  {item}.
                </li>
              ))}
            </ul>
          </section>
 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Specialised Imaging Services
              </div>
            </div>

            <ul style={styles.list}>
              {c.specialisedImagingServices.map((item) => (
                <li key={item} style={styles.listItem}>
                  {item}.
                </li>
              ))}
            </ul>
          </section>
 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Achievements &amp; Highlights
              </div>
            </div>

            <ul style={styles.list}>
              {c.achievementsHighlights.map((item) => (
                <li key={item} style={styles.tagListItem}>
                  {item}
                </li>
              ))}
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
              {c.patientGuidelines.map((item) => (
                <li key={item} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={styles.listItem}>Meet our Interventional Radiologist:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                {c.team.doctors.map((d) => (
                  <li key={d.name} style={styles.tagListItem}>
                    <strong>{d.name}</strong> ({d.degree})
                  </li>
                ))}
              </ul>

              <ul style={styles.doctorList}>
                {c.team.timings.map((t) => (
                  <li key={t.label} style={styles.tagListItem}>
                    <strong>{t.label}:</strong>
                    <br />
                    {t.value}
                  </li>
                ))}
              </ul>
            </div>
          </section>
 
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                FAQs
              </div>
            </div>

            <div style={styles.faqList}>
              {c.faqs.map((f, idx) => (
                <div key={`${idx}-${f.q}`} style={styles.faqItem}>
                  <div style={styles.faqQuestion}>{`Q: ${f.q}`}</div>
                  <div style={styles.faqAnswer}>{f.a}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Interventional_Radiology;