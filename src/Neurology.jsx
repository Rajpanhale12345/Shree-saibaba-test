import React from 'react';
import Neurologyimg from './Images/Neurologydep.jpg'; // change to neurology image if you have one
import { Helmet } from "react-helmet-async";

const styles = {
  page: {
    background: 'linear-gradient(135deg, #f4f7fb, #e5edf9)',
    padding: '40px 16px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    color: '#0f172a',
  },
  hero: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    alignItems: 'stretch',
    marginBottom: '32px',
  },
  heroImageWrapper: {
    flex: '1 1 320px',
    minWidth: '280px',
  },
  heroImageCard: {
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 18px 45px rgba(15,23,42,0.16)',
    border: '1px solid rgba(148,163,184,0.4)',
    background: '#0f172a',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    display: 'block',
    opacity: 0.95,
  },
  heroTextWrapper: {
    flex: '2 1 420px',
    minWidth: '280px',
  },
  heroTextCard: {
    height: '100%',
    borderRadius: '20px',
    padding: '28px 28px 24px',
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 18px 45px rgba(15,23,42,0.08)',
    border: '1px solid rgba(148,163,184,0.4)',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    background: 'rgba(37,99,235,0.08)',
    color: '#1d4ed8',
    marginBottom: '10px',
  },
  pillDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  heroTitle: {
    fontSize: '30px',
    fontWeight: 700,
    margin: '4px 0 4px',
    color: '#0f172a',
  },
  heroSubtitle: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#64748b',
    marginBottom: '18px',
  },
  heroTagline: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f766e',
    marginBottom: '14px',
  },
  heroParagraph: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '10px',
    textAlign: 'left'
  },
  highlightStrip: {
    marginTop: '16px',
    padding: '10px 14px',
    borderRadius: '12px',
    background: 'linear-gradient(90deg, rgba(37,99,235,0.08), rgba(56,189,248,0.10))',
    fontSize: '13px',
    color: '#0f172a',
    border: '1px solid rgba(129,140,248,0.4)',
  },
  highlightLabel: {
    fontWeight: 600,
    marginRight: '6px',
  },

  // Section styles
  section: {
    borderRadius: '18px',
    padding: '22px 22px 20px',
    marginBottom: '20px',
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 14px 35px rgba(15,23,42,0.06)',
    border: '1px solid rgba(203,213,225,0.8)',
  },
  sectionHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '10px',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionAccentBar: {
    width: '3px',
    height: '18px',
    borderRadius: '999px',
    background: 'linear-gradient(180deg, #2563eb, #22c55e)',
  },
  sectionSubtext: {
    fontSize: '12px',
    color: '#94a3b8',
  },
  list: {
    paddingLeft: '18px',
    margin: 0,
    textAlign: "left"
  },
  listItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#1e293b',
    marginBottom: '6px',
  },

  // Grid / layout helpers
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px 32px',
  },

  // Doctors
  doctorList: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
  },
  doctorItem: {
    fontSize: '14px',
    color: '#0f172a',
    padding: '6px 10px',
    borderRadius: '999px',
    border: '1px solid rgba(148,163,184,0.5)',
    background: 'rgba(248,250,252,0.9)',
    display: 'inline-block',
    marginBottom: '6px',
  },

  // Achievements / Timings
  tagListItem: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#0f172a',
    padding: '6px 10px',
    borderRadius: '10px',
    background: 'rgba(239,246,255,0.9)',
    border: '1px solid rgba(191,219,254,1)',
    marginBottom: '6px',
  },

  // FAQs (kept for consistency if you add later)
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
  },
};

function Neurology() {
  return (
    <>
      <Helmet>
        <title>Neurology | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Neurology Department at Shree Saibaba Multispeciality Hospital, Nashik offers expert care for brain, spine, nerve and muscle disorders with advanced diagnostics and 24x7 stroke care."
        />
        <meta
          name="keywords"
          content="neurology hospital Nashik, best neurology hospital Nashik, stroke care Nashik, EEG EMG Nashik"
        />
        <meta
          name="og:description"
          content="Comprehensive neurology services including stroke, epilepsy, movement disorders and neurodiagnostic facilities at Shree Saibaba Multispeciality Hospital, Nashik."
        />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          {/* Hero */}
          <div style={styles.hero}>
            <div style={styles.heroImageWrapper}>
              <div style={styles.heroImageCard}>
                <img
                  src={Neurologyimg} // replace with neurology-specific image if available
                  alt="Neurology Department"
                  style={styles.heroImage}
                />
              </div>
            </div>

            <div style={styles.heroTextWrapper}>
              <div style={styles.heroTextCard}>
                <div style={styles.pill}>
                  <span style={styles.pillDot} />
                  <span>Advanced Neuro Care</span>
                </div>
                <h1 style={styles.heroTitle}>Best Neurology Hospital</h1>
                <div style={styles.heroSubtitle}>Nashik, Maharashtra</div>
                <div style={styles.heroTagline}>
                  Comprehensive care for brain, spine, nerve and muscle disorders.
                </div>

                <p style={styles.heroParagraph}>
                  Neurology is the study of how abnormalities in the functioning of the
                  brain, spinal cord, nerves, and musculature can cause problems in the
                  way we perform everyday activities such as moving, thinking, feeling,
                  talking, and remembering. There is no way to imagine what life would
                  be like if your brain and nervous system did not function correctly.
                </p>
                <p style={styles.heroParagraph}>
                  The Shree Saibaba Multispeciality Hospital has been a premier source
                  of exceptional service in the field of neurology in Nashik. One of
                  the strengths of Shree Saibaba Multispeciality Hospital is that they
                  have some of the best neurologists in the area. They have the latest
                  technology and utilize the latest in clinical practices to treat both
                  children and adults.
                </p>
                <p style={styles.heroParagraph}>
                  The Neurology Department at Shree Saibaba Multispeciality Hospital
                  provides care for a wide variety of conditions, including stroke,
                  seizures (epilepsy), migraines, peripheral neuropathy (nerve pain),
                  degenerative spinal disorders, Parkinson's disease, confusion,
                  forgetfulness, and muscle weakness. The Neurology Department has
                  advanced imaging capabilities, a full range of nerve testing services,
                  and 24-hour emergency services to ensure a proper diagnosis and a quick
                  recovery for their patients.
                </p>
                <p style={styles.heroParagraph}>
                  Kids have a special place at Shree Saibaba Multispeciality Hospital.
                  Kids in Neurology consists of highly trained neurologists who specialize
                  in diagnosing and treating conditions affecting the brain and nerves in
                  children. Common conditions treated through kids in neurology are seizure
                  disorders, developmental delays and disorders, cerebral palsy, infectious
                  brain disease (meningitis), and other neurological issues in infants and
                  children.
                </p>
                <p style={styles.heroParagraph}>
                  The children's neurology department of the hospital promotes a friendly
                  and welcoming atmosphere that encourages children and their parents to feel
                  comfortable, supported, and empowered throughout every step of their care
                  journey.
                </p>
                <p style={styles.heroParagraph}>
                  We pride ourselves on using a collaborative model of care where our 
                  neurologists and neurosurgeons, along with our physiotherapists, 
                  psychologists, and critical care specialists, work closely together 
                  as a cohesive team. Our patients receive individualised, focused, early 
                  intervention so that they may recover quickly, live a healthy and productive 
                  life, and achieve their full potential.
                </p>

                <div style={styles.highlightStrip}>
                  <span style={styles.highlightLabel}>Quick Facts:</span>
                  Advanced EEG &amp; EMG • 24x7 stroke care • MRI &amp; CT neuroimaging
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
                <strong>Diagnostic Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>EEG (Electroencephalogram) for seizure disorders.</li>
                  <li style={styles.listItem}>EMG (Electromyogram) for muscle disorders.</li>
                  <li style={styles.listItem}>Nerve conduction studies.</li>
                  <li style={styles.listItem}>MRI.</li>
                  <li style={styles.listItem}>CT Scan.</li>
                </ul>
              </li>

              <li style={styles.listItem}>
                <strong>Treatment Services:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    Medication management for neurological conditions.
                  </li>
                  <li style={styles.listItem}>
                    Lumbar punctures for diagnostic and therapeutic purposes.
                  </li>
                </ul>
              </li>

              <li style={styles.listItem}>
                <strong>Stroke and Neurovascular Care:</strong>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Acute stroke care and thrombolysis.</li>
                  <li style={styles.listItem}>
                    Neurovascular interventions for stroke prevention.
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
            <p style={styles.listItem}>
              Our department is equipped with advanced neurodiagnostic and imaging
              facilities to support accurate evaluation and treatment:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Advanced neurodiagnostic equipment (EEG, EMG, nerve conduction studies).
              </li>
              <li style={styles.listItem}>
                Modern imaging systems (MRI, CT scans).
              </li>
              <li style={styles.listItem}>
                Neurointerventional radiology facilities.
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
                Our department has successfully managed numerous complex neurological
                cases, including stroke and epilepsy.
              </li>
              <li style={styles.tagListItem}>
                We prioritize patient care and strive for excellent functional and
                clinical outcomes.
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
                Inform your doctor about any medications, allergies, or previous
                illnesses.
              </li>
              <li style={styles.listItem}>
                Follow specific instructions for diagnostic tests such as fasting or
                medication adjustments, if advised.
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
            <p style={styles.listItem}>Meet our experienced Neurologist:</p>

            <div style={styles.twoColumnGrid}>
              <ul style={styles.doctorList}>
                <li style={styles.tagListItem}>
                  <strong>Dr. Rahul Naik</strong>
                  <br />
                  OPD: Monday to Saturday, 9:00 AM – 5:00 PM
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

export default Neurology;
