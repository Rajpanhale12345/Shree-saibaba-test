import React from 'react';
import img from './Images/Radiologydep.jpg';
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

  facilitiesEquipmentIntro:
    "Our department is equipped with state-of-the-art imaging technology to support a wide range of diagnostic and interventional procedures:",
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
      q: "What is Radiology?",
      a: "Radiology is a medical specialty that uses imaging technologies such as X-rays, Ultrasound, CT scans, and MRI to diagnose and monitor diseases inside the body without surgery.",
    },
    {
      q: "What types of imaging services are available in the Radiology Department?",
      a: "We provide X-ray, Ultrasound, Doppler studies, CT scans, MRI, Digital Mammography, and image-guided procedures such as biopsies and drainage.",
    },
    {
      q: "Do radiology tests cause pain?",
      a: "Most radiology tests are completely painless. Some procedures that involve contrast injections or biopsies may cause mild discomfort, but our team ensures your safety and comfort at all times.",
    },
    {
      q: "Are CT scans and X-rays safe?",
      a: "Yes. These tests use controlled doses of radiation. We follow strict safety protocols and always use the lowest radiation dose necessary for accurate diagnosis.",
    },
    {
      q: "Is MRI safe for everyone?",
      a: "MRI does not use radiation, but it may not be suitable for patients with pacemakers, metal implants, or certain medical devices. Always inform the staff about any implants before your scan.",
    },
  ]
};




const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
const PAGE_URL = `${SITE_URL}/radiology`;
const ogImage = img.startsWith("http") ? img : `${SITE_URL}${img}`;
const metaTitle = "Radiology | Best Radiology Hospital in Nashik";
const metaDescription = "Radiology Department at Shree Saibaba Multispeciality Hospital offers comprehensive imaging services including X-ray, ultrasound, Doppler, CT, MRI, cardiac MRI and digital mammography with 24x7 emergency support.";




function Radiology() {
  const c = radiologyContent;


  const jsonLdClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Shree Saibaba Multispeciality Hospital",
    url: PAGE_URL,
    image: ogImage,
    medicalSpecialty: "Radiology",
    description: metaDescription,
    areaServed: ["Nashik", "Maharashtra"],
    department: {
      "@type": "MedicalClinic",
      name: "Radiology Department",
      medicalSpecialty: "Radiology",
      url: PAGE_URL,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="radiology Nashik, CT scan Nashik, MRI Nashik, ultrasound Nashik, digital mammography Nashik, cardiac MRI Nashik" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Radiology Department - Shree Saibaba Multispeciality Hospital" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Radiology Department - Shree Saibaba Multispeciality Hospital" />

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
                  src={img}
                  alt="Radiology Department"
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

                <h1 style={styles.heroParagraph2}>Radiology Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  Shree Saibaba Multi-speciality Hospital is a premier hospital in Nashik, offering state-of-the-art Radiology
                  Services for accurate Diagnosis, Treatment Planning and Disease Monitoring. With the increasing use of Medical
                  Imaging as the most widely used Diagnostic Tool in Modern Healthcare, our Radiology Department has combined
                  Cutting-Edge Technology with Highly Experienced Medical Professionals to ensure Reliable Results are provided
                  to Patients and Physicians.
                </p>
                <p style={styles.heroParagraph}>
                  As the "Best Radiology Hospital in Nashik," we have created a State-of-the-Art Laboratory for Diagnostic Imaging
                  that uses Advanced Systems to enable fast and accurate Production of High Quality Detailed Body Images. Advanced
                  Imaging Technology enables early detection of Broken Bones, Infection, Tumours or problems with Internal Organs
                  (e.g. a Heart Problem) as well as many other types of problems such as Vascular/Nerve Disorders and Early Warning
                  Systems. The earlier a problem is detected, the more likely it is to be treated successfully with fewer
                  complications.
                </p>
                <p style={styles.heroParagraph}>
                  We provide many types of Diagnostic Imaging Services, including Ultrasound, CT Scans, MRIs, Doppler Studies and
                  many others. In addition, we also provide Digital Imaging Technology which enables Higher Resolution Images,
                  Lower Radiation Exposure and Faster Results than Conventional Technologies. These services are used by Physicians
                  and Surgeons to prepare for Surgery or to monitor Chronic Conditions or to check routine health.
                </p>
                <p style={styles.heroParagraph}>
                  The department is comprised of highly trained radiologists with many years of experience interpreting complex
                  imaging studies. Radiologists at the facility work closely with all medical staff, including specialists, to
                  relate imaging findings to the clinical presentation of the patient. Following the completion of each radiological
                  examination, the radiologist will author a comprehensive and detailed report that will assist the referring physician
                  in making good clinical decisions.
                </p>
                <p style={styles.heroParagraph}>
                  The radiologists are supported by a team of certified radiologic technologists who have been specifically trained in
                  relation to positioning patients properly, utilizing radiographic equipment safely, and following strict safety
                  guidelines. Additionally, radiologic technologists are educated and trained to help ensure that each radiographic
                  examination is performed in a manner that provides a safe, efficient, and comfortable experience for the patient,
                  as well as following regulations from the US Food and Drug Administration regarding the minimum level of safety and
                  reducing the risk of recurrence through the minimization of radiation exposure.
                </p>
                <p style={styles.heroParagraph}>
                  To ensure that patients have access to expert teleradiology support without interruption, our hospital utilizes
                  teleradiology systems so that specialists working offsite can easily analyze images sent via those systems and
                  provide additional opinions when required. The digital connection with specialists allows our staff to provide
                  rapid reporting on emergencies, overnight cases, and critical care situations as well as improve the collaborative
                  work of all healthcare providers and have improved treatment outcomes.
                </p>
                <p style={styles.heroParagraph}>
                  Our pediatric radiology services are specifically designed to meet the special needs of infants, children, and
                  adolescents; while providing the necessary imaging services to safely assess and treat their conditions. Imaging
                  a child requires the use of unique imaging techniques, smaller radiation dose protocols, and a gentle approach to
                  performing procedures. To create a safe, reassuring environment, our staff provides child-friendly imaging
                  procedures, makes every effort to reduce discomfort and trauma associated with imaging, and effectively communicates
                  with the child's parents regarding their child's safety.
                </p>
                <p style={styles.heroParagraph}>
                  Our patient-centered workflow begins with providing patients with detailed, simple explanations of the scans prior
                  to their imaging procedure. During the scan, we focus on privacy and comfort for all of our patients. Our modern
                  equipment is designed to reduce scan times, noise, and discomfort; therefore, creating a more comfortable experience
                  for elderly patients, children, and anxious patients.
                </p>
                <p style={styles.heroParagraph}>
                  The imaging unit is an integral part of the support provided to our cardiology, orthopedics, neurology, oncology,
                  gynecology, and trauma care departments. Diagnostic imaging provides the basis for achieving clinical excellence
                  within our institution, from identifying heart disease to facilitating the diagnosis and treatment of cancer to
                  assessing athletes with sports-related injuries.
                </p>
                <p style={styles.heroParagraph}>
                  All necessary hygiene and quality controls are upheld constantly; equipment is calibrated prior to/after each
                  usage; equipment is maintained per standard protocol of operating; and infection prevention control is performed
                  at all times for the benefit of both patients and staff.
                </p>
                <p style={styles.heroParagraph}>
                  The Shree Saibaba Multispeciality Hospital offers quality MD imaging services using the latest technology along
                  with experienced physicians who treat all patients with respect and compassion. We strive to deliver timely,
                  accurate, and dependable results so our providers can make better informed choices about their patient's treatment
                  plan leading to improved patient outcomes.
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

          {/* Facilities & Equipment */}
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

          {/* Specialised Imaging Services */}
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

          {/* Achievements & Highlights */}
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

          {/* Patient Guidelines */}
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

          {/* Team Members & Department Timings */}
          <section style={styles.section}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle}>
                <span style={styles.sectionAccentBar} />
                Team Members &amp; Department Timings
              </div>
            </div>

            <p style={styles.listItem}>Meet our experienced Radiologists:</p>

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

          {/* FAQs */}
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

export default Radiology;