import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Upper from "./Upper";
import OPD from "./OPD.";
import "./Doctors.css";
import { useLocation } from "react-router-dom";
 
const specialties = [
  {
    name: "Cardiology",
    color: "#0a9396",
    doctors: [
      { name: "DR. ANIRUDDHA DHARMADHIKARI", degree: "MBBS, MD, DM, FACC, FESC" },
      { name: "DR. AMIT CHAUDHARI", degree: "MBBS, MD, DM" },
      { name: "DR. NILESH TAWADE", degree: "MBBS, MD, DM" }
    ]
  },
  {
    name: "Physician",
    color: "#0a9396",
    doctors: [
      { name: "DR. KUNAL NIKAM", degree: "MBBS, MD" },
      { name: "DR. GANESH MOTWANI", degree: "MBBS, MD" },
      { name: "DR. BHARAT PATIL", degree: "MBBS, MD" }
    ]
  },
  {
    name: "Spine Surgeon",
    color: "#0a9396",
    doctors: [
      { name: "DR. GAURAV GUJRATHI", degree: "MBBS, MCh" },
      { name: "DR. SUMIT HEERE", degree: "MBBS, MCh" },
      { name: "DR. GAURAV KULSHRESTHA", degree: "MBBS, MS" }
    ]
  },
  {
    name: "CVTS",
    color: "#0a9396",
    doctors: [
      { name: "DR. Kishor Deore", degree: "MBBS, MS, MCh" },

    ]
  },
  {
    name: "Radiology",
    color: "#0a9396",
    doctors: [
      { name: "DR. PALLAVI DHARMADHIKARI", degree: "MBBS, MD, DNB" },
      { name: "DR. VAIBHAV NIMBHORE", degree: "MBBS, DMRD, DNB" }
    ]
  },
  {
    name: "Gastroenterology",
    color: "#0a9396",
    doctors: [
      { name: "DR. SUDARSHAN PATIL", degree: "MBBS, DNB" },
      { name: "DR. MAHESH PATIL", degree: "MBBS, DNB" }
    ]
  },
  {
    name: "Neurosurgery & Spine Surgery",
    color: "#0a9396",
    doctors: [
      { name: "DR. SUMIT HEERE", degree: "MBBS, MCh" },
      { name: "DR. ANIL JADHAV", degree: "MBBS, MCh" }
    ]
  },
  {
    name: "Chest Physician", color: "#0a9396", doctors:
      [{ name: "DR. SAURABH BORGAONKAR", degree: "MBBS, DNB" },
      { name: "DR. PRASHANT SHINDE", degree: "MBBS, DNB" }
      ]
  },

  { name: "Urology", color: "#0a9396", doctors: [{ name: "DR. AMEY PATIL", degree: "MBBS, MS, MCh" }] },
  { name: "Orthopaedic", color: "#0a9396", doctors: [{ name: "DR. AJINKYA DESALE", degree: "MBBS, MD, MCh" }] },
  { name: "Interventional Radiology", color: "#0a9396", doctors: [{ name: "DR. AJIT PATIL", degree: "MBBS, MD, FVIR" }] },
  { name: "Nephrologist", color: "#0a9396", doctors: [{ name: "DR. ABHIJEET MORE ", degree: "MBBS, MCh" }] },
  { name: "Plastic Surgeon", color: "#0a9396", doctors: [{ name: "DR. LALIT DERLE", degree: "MBBS, DNB, MS" }] },
  { name: "General Surgery", color: "#0a9396", doctors: [{ name: "DR. AMIT KELE", degree: "MBBS, DNB" }] },
  { name: "Dentist", color: "#0a9396", doctors: [{ name: "DR. AMIT BORSE", degree: "BDS" }] },
  {
    name: "Ophthalmologist", color: "#0a9396", doctors: [{ name: "DR. MANJIRI LELE", degree: "MBBS, MS" },
    { name: "DR. APURVA MANKARE", degree: "MBBS, MS" }
    ]
  },
  { name: "Neurologist", color: "#0a9396", doctors: [{ name: "DR. RAHUL NAIK", degree: "MBBS, DM" }] },
];
  
const normalize = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
const getInitials = (full) => {
 
  const clean = full.replace(/^dr\.?\s*/i, "");
  const parts = clean.split(/\s+/);
  const first = parts[0]?.[0] || "";
  const last = parts[parts.length - 1]?.[0] || "";
  return (first + last).toUpperCase();
};
 
const flattenDoctors = (specs) =>
  specs.flatMap((s) =>
    s.doctors.map((d) => ({
      ...d,
      specialty: s.name
    }))
  );





const Doctors = () => {
  const [view, setView] = useState("specialty");  
  const [q, setQ] = useState("");

  const allDoctors = useMemo(() => flattenDoctors(specialties), []);
  const filteredBySpecialty = useMemo(() => {
    if (!q) return specialties;
    const nq = normalize(q);
    return specialties
      .map((s) => ({
        ...s,
        doctors: s.doctors.filter(
          (d) =>
            normalize(d.name).includes(nq) ||
            normalize(d.degree).includes(nq) ||
            normalize(s.name).includes(nq)
        )
      }))
      .filter((s) => s.doctors.length > 0);
  }, [q]);

  const directory = useMemo(() => {
    const list = q
      ? allDoctors.filter(
        (d) =>
          normalize(d.name).includes(normalize(q)) ||
          normalize(d.degree).includes(normalize(q)) ||
          normalize(d.specialty).includes(normalize(q))
      )
      : allDoctors;

    const grouped = list.reduce((acc, d) => {
      const letter = d.name.replace(/^dr\.?\s*/i, "")[0]?.toUpperCase() || "#";
      acc[letter] = acc[letter] || [];
      acc[letter].push(d);
      return acc;
    }, {});
    return Object.keys(grouped)
      .sort()
      .map((k) => ({ letter: k, doctors: grouped[k] }));
  }, [q, allDoctors]);



  const SITE_NAME = "Shree Saibaba Multispeciality Hospital";
  const SITE_URL = "https://shreesaibabamultispecialityhospital.com"; 
  const OG_IMAGE_URL = `${SITE_URL}/assets/Shreesaibabalogo-D9LTGZox.png`;
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;


  return (
    <>

      <Helmet>
        <title>Our Doctors | Best Doctors in Nashik</title>
        <meta name="description" content="Meet our specialist and super-specialist doctors in Nashik at Shree Saibaba Multispeciality Hospital. Browse by specialty or A-Z directory and find the right doctor for your care." />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Our Doctors | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta property="og:description" content="Browse our doctors by specialty or A-Z directory and choose the right specialist for your care." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="Doctors and specialists at Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Doctors | Shree Saibaba Multispeciality Hospital, Nashik" />
        <meta name="twitter:description" content="Explore doctors by specialty or A-Z directory at Shree Saibaba Multispeciality Hospital, Nashik." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Doctors",
            url: canonical,
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Doctor Directory",
            itemListOrder: "https://schema.org/ItemListUnordered",
            numberOfItems: allDoctors.length,
            itemListElement: allDoctors.map((d, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: d.name,
              url: canonical,
              item: {
                "@type": "Person",
                name: d.name,
                jobTitle: "Doctor",
                affiliation: { "@type": "Hospital", name: SITE_NAME, url: SITE_URL },
                knowsAbout: d.specialty
              }
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Doctors", item: canonical }
            ]
          })}
        </script>
      </Helmet>


      <Upper text="Our Doctors" />

      <div className="doctors-head">
        <div className="doctors-tabs">
          <button
            className={view === "specialty" ? "active" : ""}
            onClick={() => setView("specialty")}
            aria-pressed={view === "specialty"}
            style={{ color: "black" }}
          >
            By Specialty
          </button>
          <button
            className={view === "directory" ? "active" : ""}
            onClick={() => setView("directory")}
            aria-pressed={view === "directory"}
            style={{ color: "black" }}
          >
            A–Z Directory
          </button>
        </div>

        <input
          type="search"
          className="doctors-search"
          placeholder="Search doctor, degree or specialty…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search doctors"
        />
      </div>

      {view === "specialty" ? (
        <div className="specialty-grid">
          {filteredBySpecialty.map((s, idx) => (
            <section key={idx} className="specialty-card">
              <header
                className="specialty-head"
                style={{
                  
                  background:
                    "linear-gradient(180deg, rgba(10,147,150,0.12), rgba(10,147,150,0.03))",
                  borderColor: s.color
                }}
              >
                <h3>{s.name}</h3>
                <span className="count">{s.doctors.length}</span>
              </header>

              <ul className="doctor-list">
                {s.doctors.map((d, i) => (
                  <li key={i} className="doctor-pill">
                    <div aria-hidden="true">

                    </div>
                    <div className="meta">
                      <div className="name">{d.name}</div>
                      <div className="degree">{d.degree}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {filteredBySpecialty.length === 0 && (
            <div className="empty">No results. Try another search term.</div>
          )}
        </div>
      ) : (
        <div className="directory-wrap">
          <aside className="alpha-rail" aria-label="Alphabet quick nav">
            {directory.map((g) => (
              <a key={g.letter} href={`#letter-${g.letter}`} className="rail-link">
                {g.letter}
              </a>
            ))}
          </aside>

          <div className="directory-list">
            {directory.map((g) => (
              <section key={g.letter} id={`letter-${g.letter}`} className="dir-group">
                <div className="dir-letter">{g.letter}</div>
                <ul className="dir-items">
                  {g.doctors.map((d, i) => (
                    <li key={i} className="dir-item">
                      <div className="avatar sm" aria-hidden="true">
                        {getInitials(d.name)}
                      </div>
                      <div className="dir-meta">
                        <div className="name">{d.name}</div>
                        <div className="dim">
                          {d.degree} • <span className="chip">{d.specialty}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            {directory.length === 0 && (
              <div className="empty">No matches found.</div>
            )}
          </div>
        </div>
      )}

      <div className="doctors-sep" />
      <OPD />
    </>
  );
};

export default Doctors;
