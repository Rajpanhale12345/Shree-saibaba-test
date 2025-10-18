import React from "react";
import { Helmet } from "react-helmet-async";

const styles = {
  container: {
    maxWidth: 880,
    margin: "40px auto",
    padding: "32px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
    lineHeight: 1.65,
    color: "#1f2937",
  },
  h1: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: "2rem",
    letterSpacing: "-0.01em",
  },
  h2: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: 6,
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  updated: {
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 24,
    color: "#6b7280",
  },
  listReset: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  listItem: {
    marginTop: 24,
  },
  sectionTitle: {
    display: "block",
    fontWeight: 700,
    marginBottom: 6,
  },
  address: {
    fontStyle: "normal",
    marginLeft: 16,
  },
  boldCenter: {
    marginTop: 32,
    fontWeight: 700,
    textAlign: "center",
  },
  card: {
    background: "#fafafa",
    border: "1px solid #eee",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
};

const PrivacyPolicy = () => {
  return (
    <>


      <Helmet>
        <title>Privacy Policy | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


      <main role="main" aria-labelledby="privacy-policy-title">
        <div style={styles.container}>
          <h1 id="privacy-policy-title" style={styles.h1}>
            Privacy Policy
          </h1>

          <h2 style={styles.h2}>
            Shree Saibaba Heart Institute and Research Centre Privacy Policy
          </h2>

          <p style={styles.updated}>Last Updated: 19 May 2025</p>

          <p>
            Shree Saibaba Heart Institute and Research Centre (hereinafter
            referred to as “the Hospital,” “we,” “us,” or “our”) is committed to
            protecting the privacy and security of your personal information. This
            Privacy Policy describes how we collect, use, disclose, and protect
            the personal information of our patients, website visitors, and other
            individuals who interact with us.
          </p>

          <ol style={styles.listReset}>
            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Information We Collect</strong>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>
                  <strong>Personal Identification Information:</strong> This
                  includes your name, age, gender, date of birth, address (Opp.
                  Wani House, Mumbai Naka, Mirajkar Nagar, Nashik, Maharashtra
                  422001), contact details (Email ID:
                  <a href="mailto:saibabaheartinstitute@yahoo.com">
                    {" "}
                    saibabaheartinstitute@yahoo.com
                  </a>
                  , Mobile No:{" "}
                  <a href="tel:+919158887554">+91 91588 87554</a>, Landline No:{" "}
                  <a href="tel:+912532507001">+91 253 250 7001</a>), and other
                  identifying information.
                </li>
                <li>
                  <strong>Medical Information:</strong> This includes your medical
                  history, current health conditions, diagnoses, treatments,
                  medications, allergies, test results, and other health-related
                  information provided by you or collected during your medical
                  care.
                </li>
                <li>
                  <strong>Insurance Information:</strong> Details of your health
                  insurance policy, insurer, and related information necessary for
                  billing and payment purposes.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address, payment
                  card details, or other payment information when you make
                  payments for our services.
                </li>
                <li>
                  <strong>Website Usage Information:</strong> When you visit our
                  website{" "}
                  <a
                    href="https://www.shreesaibabaheartinstitute.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.shreesaibabaheartinstitute.com
                  </a>
                  , we may collect information about your IP address, browser
                  type, operating system, referring website, pages you visit, and
                  the dates and times of your visits. We may use cookies or
                  similar tracking technologies for this purpose.
                </li>
                <li>
                  <strong>Communication Data:</strong> Records of your
                  communication with us, including emails, phone calls, and other
                  correspondence.
                </li>
                <li>
                  <strong>Other Information:</strong> Any other information you
                  voluntarily provide to us.
                </li>
              </ul>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>How We Collect Your Information</strong>
              <p>We may collect your personal information in the following ways:</p>
              <ul>
                <li>
                  <strong>Directly from you:</strong> When you provide information
                  during registration, consultations, treatment, or when you
                  communicate with us.
                </li>
                <li>
                  <strong>From healthcare professionals:</strong> When your
                  referring physicians or other healthcare providers share your
                  medical information with us for your care.
                </li>
                <li>
                  <strong>From your insurance provider:</strong> To verify your
                  coverage and process claims.
                </li>
                <li>
                  <strong>Automatically:</strong> Through your use of our website
                  or other digital platforms (e.g., using cookies).
                </li>
              </ul>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>How We Use Your Information</strong>
              <p>We may use your personal information for the following purposes:</p>
              <ul>
                <li>
                  <strong>Providing Medical Services:</strong> To diagnose and
                  treat your medical conditions, provide necessary care, and
                  manage your healthcare.
                </li>
                <li>
                  <strong>Communication:</strong> To communicate with you about
                  appointments, test results, treatment plans, billing, and other
                  relevant information.
                </li>
                <li>
                  <strong>Record Keeping:</strong> To maintain accurate and
                  up-to-date medical records as required by law and for quality
                  healthcare.
                </li>
                <li>
                  <strong>Billing and Payment Processing:</strong> To process
                  payments for our services and manage billing inquiries.
                </li>
                <li>
                  <strong>Improving Our Services:</strong> To analyze data and
                  feedback to improve the quality of our medical services, patient
                  care, and operational efficiency.
                </li>
                <li>
                  <strong>Research and Education:</strong> For medical research
                  and educational purposes, provided that your information is
                  anonymized or used in a manner that does not directly identify
                  you, unless you provide explicit consent.
                </li>
                <li>
                  <strong>Legal and Regulatory Compliance:</strong> To comply with
                  applicable laws, regulations, and legal processes.
                </li>
                <li>
                  <strong>Website Administration:</strong> To administer and
                  improve our website and online services.
                </li>
                <li>
                  <strong>Security:</strong> To protect the security and integrity
                  of our systems and data.
                </li>
              </ul>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Disclosure of Your Information</strong>
              <p>We may disclose your personal information to the following parties:</p>
              <ul>
                <li>
                  <strong>Healthcare Professionals:</strong> Doctors, nurses,
                  technicians, and other healthcare professionals involved in your
                  care.
                </li>
                <li>
                  <strong>Referring Physicians:</strong> Healthcare providers who
                  referred you to us.
                </li>
                <li>
                  <strong>Family Members and Legal Guardians:</strong> When
                  authorized by you or as legally required.
                </li>
                <li>
                  <strong>Insurance Providers:</strong> To process claims and
                  obtain pre-authorizations.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> Providers who
                  assist us in areas such as IT services, data analysis, payment
                  processing, and administrative support. These providers are
                  contractually obligated to protect your information.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, court
                  order, or other legal process.
                </li>
                <li>
                  <strong>Regulatory Bodies:</strong> To comply with reporting
                  requirements of healthcare regulatory authorities.
                </li>
                <li>
                  <strong>In case of a Business Transfer:</strong> In the event of
                  a merger, acquisition, or sale of all or a portion of our
                  assets, your information may be transferred to the acquiring
                  entity, subject to the terms of this Privacy Policy or a new
                  policy communicated to you.
                </li>
              </ul>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Data Security</strong>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, disclosure, alteration, or
                destruction. These measures include physical, electronic, and
                administrative safeguards. However, please be aware that no method
                of transmission over the internet or method of electronic storage
                is completely secure.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Your Rights</strong>
              <p>
                You may have certain rights regarding your personal information
                under applicable laws, which may include the right to:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> Request access to the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or
                  incomplete personal information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request the deletion of your personal
                  information, subject to legal and regulatory requirements.
                </li>
                <li>
                  <strong>Objection to Processing:</strong> Object to the
                  processing of your personal information in certain circumstances.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw your consent to the
                  processing of your personal information where we rely on your
                  consent.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request to receive your
                  personal information in a structured, commonly used, and
                  machine-readable format.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact
                details provided below. We may require you to verify your identity
                before processing your request.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Retention of Your Information</strong>
              <p>
                We will retain your personal information for as long as necessary
                to fulfill the purposes for which it was collected, as required by
                law, or as necessary to protect our legal rights. Medical records
                are typically retained for a period as mandated by healthcare
                regulations.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Cookies and Tracking Technologies</strong>
              <p>
                Our website{" "}
                <a
                  href="https://www.shreesaibabaheartinstitute.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.shreesaibabaheartinstitute.com
                </a>{" "}
                may use cookies and other tracking technologies to enhance your
                browsing experience and collect usage information. You can manage
                your cookie preferences through your browser settings.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Links to Other Websites</strong>
              <p>
                Our website may contain links to other websites. We are not
                responsible for the privacy practices or the content of those
                websites. We encourage you to review the privacy policies of any
                third-party websites you visit.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Children&apos;s Privacy</strong>
              <p>
                Our services are generally not directed towards children. We do
                not knowingly collect personal information from children under the
                age of 18 without the consent of their parent or guardian. If you
                believe we have collected personal information from a child
                without such consent, please contact us immediately, and we will
                take steps to remove the information.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Changes to This Privacy Policy</strong>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will post any
                changes on our website and update the “Last Updated” date at the
                top of this policy. We encourage you to review this Privacy Policy
                periodically.
              </p>
            </li>

            <li style={styles.listItem}>
              <strong style={styles.sectionTitle}>Contact Us</strong>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the handling of your personal information,
                please contact us at:
              </p>
              <address style={styles.address}>
                <div>Shree Saibaba Heart Institute and Research Centre</div>
                <div>
                  Opp. Wani House, Mumbai Naka, Mirajkar Nagar, Nashik, Maharashtra
                  422001
                </div>
                <div>
                  Email ID:{" "}
                  <a href="mailto:saibabaheartinstitute@yahoo.com">
                    saibabaheartinstitute@yahoo.com
                  </a>
                </div>
                <div>
                  Mobile No: <a href="tel:+919158887554">+91 91588 87554</a>
                </div>
                <div>
                  Landline No: <a href="tel:+912532507001">+91 253 250 7001</a>
                </div>
                <div>
                  Website:{" "}
                  <a
                    href="https://www.shreesaibabaheartinstitute.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.shreesaibabaheartinstitute.com
                  </a>
                </div>
              </address>
            </li>
          </ol>

          <div style={styles.card} aria-live="polite">
            <p style={styles.boldCenter}>
              By using the services of Shree Saibaba Heart Institute and Research
              Centre, you acknowledge that you have read and understood this Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
