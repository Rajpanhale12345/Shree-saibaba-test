import React from 'react';
import img from './Images/Dentistry.jpg';
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://shreesaibabamultispecialityhospital.com";
const PAGE_URL = "https://shreesaibabamultispecialityhospital.com/dentistry";

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
    background: "white",
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

function Dentistry() {
  const title = "Dentistry | Shree Saibaba Multispeciality Hospital, Nashik";
  const description =
    "Complete dental care in Nashik at Shree Saibaba Multispeciality Hospital — dental check-ups, cleaning, fillings, root canal treatment, extractions, crowns & bridges, dentures, and smile care with safe sterilization protocols.";
  const keywords =
    "dentist in nashik, dental clinic nashik, dental hospital nashik, teeth cleaning nashik, tooth filling nashik, root canal treatment nashik, tooth extraction nashik, crowns and bridges nashik, dentures nashik, gum treatment nashik, pediatric dentist nashik, dental checkup nashik";

  // Prefer Dentist/LocalBusiness style schema for a dental department page
  const jsonLdClinic = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Shree Saibaba Multispeciality Hospital - Dentistry Department",
    url: PAGE_URL,
    image: `${SITE_URL}/assets/dentistrydep.webp`,
    description,
    areaServed: ["Nashik", "Maharashtra"],
    medicalSpecialty: "Dentistry",
    parentOrganization: {
      "@type": "Hospital",
      name: "Shree Saibaba Multispeciality Hospital",
      url: SITE_URL,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I visit a dentist?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most people benefit from a dental check-up and cleaning every 6 months. Your dentist may suggest more frequent visits if you have gum disease, cavities, or sensitivity.",
        },
      },
      {
        "@type": "Question",
        name: "When do I need a root canal treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Root canal treatment may be needed if a tooth has deep decay, infection, severe sensitivity, swelling, or pain while biting. An exam and X-ray help confirm the diagnosis.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide dental care for children?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We provide child-friendly dental check-ups, cavity prevention guidance, fillings when needed, and support for healthy oral habits from early childhood.",
        },
      },
      {
        "@type": "Question",
        name: "Is professional teeth cleaning safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Professional cleaning removes plaque and tartar safely and helps reduce gum bleeding, bad breath, and future cavity risk. We follow strict sterilization and hygiene protocols.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={PAGE_URL} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/assets/dentistrydep.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/assets/dentistrydep.webp`} />
        <script type="application/ld+json">{JSON.stringify(jsonLdClinic)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={img}
                  alt="Dentistry"
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

                <h1 style={styles.heroParagraph2}>Dentistry Department</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <br />

                <p style={styles.heroParagraph}>
                  Proper oral hygiene is an integral part of good health. You may not realise that mouth issues
                  can impact your heart health, digestion, speech, and even your self-esteem. Dentistry is
                  concerned with keeping your teeth, gums, and jaw healthy through preventive measures, early
                  detection, and appropriate treatment.
                </p>

                <p style={styles.heroParagraph}>
                  At the Shree Saibaba Multispeciality Hospital dental department, we treat patients of all
                  ages in an environment that's comfortable and safe. Our objective is straightforward; we
                  aim to protect natural teeth and relieve pain quickly while helping our patients feel
                  confident about their smiles. The treatment plan will detail each step very clearly and
                  provide a strong, sensible roadmap.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Comprehensive Dental Care All in One Location</h2>

                <p style={styles.heroParagraph}>
                  Our new dental clinic provides a complete range of services, including preventive, restorative,
                  and cosmetic dental care, as well as the support of skilled dental surgeons and specialists who
                  coordinate their efforts to create individualised treatment plans that accommodate each patient's
                  individual situation and comfort level.
                </p>
                <p style={styles.heroParagraph}>
                  <b>Here are some of our most common services:</b>
                </p>

                <ul style={styles.heroParagraph}>
                  <li>Routine oral exams to evaluate gum health</li>
                  <li>Teeth cleaning by a professional to eliminate plaque and stains</li>
                  <li>Tooth-colored filling for cavities</li>
                  <li>Root canals for infected teeth</li>
                  <li>To extract teeth and complete minor oral surgery</li>
                  <li>Replacement of missing teeth with crowns, bridges, or dentures</li>
                </ul>
                <br />

                <h2 style={styles.heroParagraph1}>Technology That Makes Treatment Easy</h2>
                <p style={styles.heroParagraph}>
                  Today's technology has improved the way that doctors are able to detect problems and treat them
                  with much more precise measurements. Digital imaging and computerised systems are used by the
                  department for diagnosing and low-radiation imaging, and good procedure protocols for sterilising
                  equipment are in place to assist in providing the best possible care to the patients. In certain cases,
                  gum treatment can be performed using laser technologies, providing more pain-free ways of healing and
                  less time recovering than with traditional methods.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Child-Friendly Dentistry</h2>
                <p style={styles.heroParagraph}>
                  Early childhood is the best time to create habits of good oral health. A kids dentist in Nashik
                  takes great care of the young patients to help make their experiences stress-free. From the time
                  of the first tooth through the need for orthodontics, children receive gentle direction and prevention
                  care, as well as tips for their parents about how to brush properly and what types of food and drinks
                  contain sugar that cause cavities, the children are provided a bright smile for many years.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Focus on Comfort and Safety</h2>
                <p style={styles.heroParagraph}>
                  Visiting a dentist can bring on additional anxiety for many people. The team provides a calming
                  environment, provides easy explanations of what will occur during the appointment and make every
                  effort to minimize discomfort. Recommended hygienic practices and infection control are closely
                  followed to provide the safest possible environment for treatment.
                </p>
                <p style={styles.heroParagraph}>
                  It is easy to schedule an appointment with a dentist, and visiting the dentist on a regular basis
                  can prevent larger issues from occurring later. By going to the dentist early, you can help to
                  decrease the amount of work to be done and the amount of time and money involved in your care.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Caring for Nashik's community through trusted care</h2>
                <p style={styles.heroParagraph}>
                  Your community has relied on us for quality care. Many people consider this dental practice in
                  Nashik to be the best for all of their oral health care needs because of the quality of services
                  and the commitment to patients. Each patient receives not only expert oral care but also compassionate
                  support through the entire process, including post-treatment follow-up care.
                </p>
                <br />

                <h2 style={styles.heroParagraph1}>Help Maintain a Healthy Smile for a Lifetime</h2>
                <p style={styles.heroParagraph}>
                  With regular visits to the dentist, along with daily oral hygiene and qualified professional
                  guidance, most dental health issues can be avoided. Modern procedures and treatments, together
                  with the expertise of dental professionals, allow individuals to maintain oral health and smile
                  with confidence for the rest of their lives.
                </p>
                <p style={styles.heroParagraph}>
                  When you have toothaches, bleeding gums, sensitivity, or notice any changes in your smile, seeking
                  timely dental care can make all the difference. A professional can help you take good care of your
                  smile, allowing you to continue to smile brightly for many years to come.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced brain &amp; spine surgeries • Minimally invasive techniques •
                  Neuro-navigation &amp; intraoperative neuromonitoring •
                  Dedicated neurocritical care • 24x7 emergency services
                </div>
              </div>
            </div>
          </div>

          {/* Dental Services */}
          <section style={styles.section} aria-labelledby="dentistry-services">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-services">
                <span style={styles.sectionAccentBar} />
                Dentistry Services
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Dental check-ups and oral health consultation</li>
              <li style={styles.listItem}>Professional teeth cleaning (scaling) and polishing</li>
              <li style={styles.listItem}>Cavity evaluation and tooth-colored fillings</li>
              <li style={styles.listItem}>Root canal treatment for infected teeth</li>
              <li style={styles.listItem}>Tooth extraction and minor oral procedures</li>
              <li style={styles.listItem}>Gum problem evaluation (bleeding gums, swelling, bad breath)</li>
              <li style={styles.listItem}>Crowns, bridges, and dentures for missing teeth</li>
            </ul>
          </section>

          {/* Diagnostics */}
          <section style={styles.section} aria-labelledby="dentistry-diagnostics">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-diagnostics">
                <span style={styles.sectionAccentBar} />
                Diagnostics &amp; Dental Assessment
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Digital dental imaging (X-ray as advised)</li>
              <li style={styles.listItem}>Cavity detection and bite assessment</li>
              <li style={styles.listItem}>Gum health check and periodontal screening</li>
              <li style={styles.listItem}>Sensitivity evaluation and enamel assessment</li>
              <li style={styles.listItem}>Pre-procedure evaluation for crowns and dentures</li>
            </ul>
          </section>

          {/* Treatment */}
          <section style={styles.section} aria-labelledby="dentistry-treatment">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-treatment">
                <span style={styles.sectionAccentBar} />
                Treatment &amp; Dental Procedures
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Scaling, polishing, and oral hygiene guidance</li>
              <li style={styles.listItem}>Restorations (fillings) for cavities and damaged teeth</li>
              <li style={styles.listItem}>Root canal therapy and post-RCT crown planning</li>
              <li style={styles.listItem}>Tooth extraction with after-care guidance</li>
              <li style={styles.listItem}>Crowns and bridges for strength and tooth replacement</li>
              <li style={styles.listItem}>Denture planning and fit adjustment support</li>
            </ul>
          </section>

          {/* Highlights */}
          <section style={styles.section} aria-labelledby="dentistry-highlights">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-highlights">
                <span style={styles.sectionAccentBar} />
                Highlights of Our Dental Care
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.tagListItem}>
                Preventive-first approach to reduce cavities and gum disease with routine follow-ups.
              </li>
              <li style={styles.tagListItem}>
                Clear treatment planning for pain relief, infection control, and long-term tooth preservation.
              </li>
              <li style={styles.tagListItem}>
                Safe sterilization protocols and patient comfort-focused care at every step.
              </li>
            </ul>
          </section>

          {/* Facilities */}
          <section style={styles.section} aria-labelledby="dentistry-facilities">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-facilities">
                <span style={styles.sectionAccentBar} />
                Facilities &amp; Equipment
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Dental chair setup for comfortable procedures</li>
              <li style={styles.listItem}>Digital imaging support (X-ray as advised)</li>
              <li style={styles.listItem}>Sterilization and infection control systems</li>
              <li style={styles.listItem}>In-house support for multi-speciality coordination if needed</li>
            </ul>
          </section>

          {/* Patient Guidelines */}
          <section style={styles.section} aria-labelledby="dentistry-guidelines">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-guidelines">
                <span style={styles.sectionAccentBar} />
                Patient Guidelines
              </div>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Arrive 10 minutes early for smooth registration.</li>
              <li style={styles.listItem}>Carry old dental prescriptions, reports, or X-rays (if available).</li>
              <li style={styles.listItem}>Inform the doctor about diabetes, BP, allergies, and current medicines.</li>
              <li style={styles.listItem}>For tooth pain, avoid self-medication and get an evaluation early.</li>
            </ul>
          </section>

          {/* Team & Timings */}
          <section style={styles.section} aria-labelledby="dentistry-team-timings">
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionTitle} id="dentistry-team-timings">
                <span style={styles.sectionAccentBar} />
                Team &amp; OPD Timings
              </div>
            </div>

            <p style={styles.listItem}>
              Our dental care team includes dental surgeons and trained assistants to guide diagnosis, treatment, and
              preventive care for long-term oral health.
            </p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dental Surgeon / Dentist</strong>
                  <br />
                  Dr. Amit Borse
                </li>
                <li style={styles.tagListItem}>
                  <strong>Dental Support Team</strong>
                  <br />
                  Trained assistants &amp; nursing staff
                </li>
              </ul>

              <ul style={styles.doctorList}>
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
                  Q: How often should I visit a dentist?
                </div>
                <div style={styles.faqAnswer}>
                  Most people benefit from a dental check-up and professional cleaning every 6 months. Your dentist may
                  suggest more frequent visits if you have gum disease, frequent cavities, braces, or sensitivity.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: When do I need a root canal treatment (RCT)?
                </div>
                <div style={styles.faqAnswer}>
                  RCT may be needed when a tooth has deep decay or infection causing severe pain, prolonged sensitivity to
                  hot/cold, swelling, pus discharge, or pain while biting. A dental examination and X-ray help confirm it.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Is professional teeth cleaning (scaling) safe?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. Professional cleaning safely removes plaque and tartar, helps reduce gum bleeding and bad breath,
                  and lowers the risk of cavities and gum disease. We follow strict sterilization and hygiene protocols.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: Do you provide dental care for children?
                </div>
                <div style={styles.faqAnswer}>
                  Yes. We provide child-friendly dental check-ups, cavity prevention guidance, fillings when needed, and
                  support for healthy brushing/flossing habits from early childhood.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: What should I do if I have a toothache or swelling?
                </div>
                <div style={styles.faqAnswer}>
                  Get evaluated early—especially if there is swelling, fever, or severe pain. Avoid placing aspirin on
                  the tooth/gums. You may rinse gently with warm salt water and take pain relief only as advised, but
                  definitive treatment requires a dental check-up.
                </div>
              </div>

              <div style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  Q: How do crowns, bridges, and dentures help?
                </div>
                <div style={styles.faqAnswer}>
                  Crowns protect weak or root-canal-treated teeth, bridges replace missing teeth by supporting adjacent
                  teeth, and dentures replace multiple missing teeth. Your dentist will recommend the best option based
                  on bite, gum health, and comfort.
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default Dentistry;