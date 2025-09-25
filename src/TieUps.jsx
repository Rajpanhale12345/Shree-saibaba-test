import React, { useMemo, useState } from "react";
import "./TieUps.css"; // <-- use the isolated stylesheet

const DATA = [
  {
    title: "Government Tie-ups",
    key: "government",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l8 4v3H4V6l8-4zm-7 7h14v11h-3v-7H8v7H5V9zM10 20h4v-5h-4v5z" />
      </svg>
    ),
    items: [
      "CGHS Nashik Dispensary",
      "State Government Employee",
      "Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)",
      "Prathan Mantri Jan Arogya Yojana (PMJAY)",
      "Maharashtra Police kutumb Arogya Yojana (MPKAY)",
      "Food Corporation of india (FCI)",
      "Employees State Insurance Corporation. (ESIC)",
      "Indian Security Press (ISP) (IPD & OPD)",
      "Currency Note Press (CNP) (IPD & OPD)",
      "ECHS (IPD & OPD)",
      "Maharashtra State Road Transport Corporation (MSRTC)",
    ],
  },
  {
    title: "Corporate Tie-ups",
    key: "corporate",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    items: ["Bosch Ltd."],
  },
  {
    title: "Public Sector Insurance Co.",
    key: "public-insurance",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1l9 5v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V6l9-5zm0 4.2L6 7.9v3.8c0 3.9 2.7 7.6 6 8.7 3.3-1.1 6-4.8 6-8.7V7.9l-6-2.7z" />
      </svg>
    ),
    items: [
      "The New India Insurance Co.  Ltd.",
      "The Original Insurance Co. Ltd.",
      "National Insurance Co. Ltd.",
      "United India Insurance Co. Ltd.",
    ],
  },
  {
    title: "Private Insurance Co.",
    key: "private-insurance",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v2H4V6zm2 4h12v10H6V10zm4 2v6h2v-6h-2z" />
      </svg>
    ),
    items: [
      "Star Health & Allied Insurance Co. Ltd.",
      "Bajaj Allianz General Insurance Co. Ltd.",
      "ICICI Lombard General Insurance Co. Ltd.",
      "Reliance General Insurance Co. Ltd.",
      "Medvantage Insurance TPA Pvt Ltd.",
      "Aditya Birla Health Insurance Pvt Ltd.",
      "Future Generali Insurance Pvt Ltd.",
      "SBI General Insurance Co. Pvt Ltd.",
      "Go Digit Health Insurance.",
      "NAVI General Insurance Co.",
      "Cholamandalam MS General Insurance Co.",
      "Manipal Cigna Health Insurance Co.",
      "Universal Sompo Insurance co.",
      "Magma Cigna Health Insurance Co.",
      "TATA AIG General Insurance Co.",
      "IFFCO Tokio General Insurance Co.",
    ],
  },
  {
    title: "Cashless TPA",
    key: "tpa",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 7H3V5h18v2zM3 9h18l-2 10H5L3 9zm8 2v6h2v-6h-2z" />
      </svg>
    ),
    items: [
      "MD India Health Insurance TPA",
      "Paramount Health Services.",
      "Medi Assist Insurance TPA.",
      "Health India Insurance TPA Services Pvt Ltd.",
      "Heritage Health Insurance TPA  Pvt Ltd.",
      "Health Insurance TPA  Pvt Ltd.",
      "Safeway Insurance TPA.",
      "Med Save Insurance TPA.",
      "Volo Health Insurance TPA (East West Assist Insurance)",
      "Vidal Health Insurance TPA",
      "Ericson Insurance TPA",
      "Genins India Insurance TPA",
      "Family Health Plan Insurance TPA",
    ],
  },
];

const Tag = ({ children }) => <span className="tag">{children}</span>;

export default function TieUps() {
  const [q, setQ] = useState("");
  const [activeKeys, setActiveKeys] = useState(() => new Set(DATA.map(d => d.key)));

  // Build search index
  const flatIndex = useMemo(() => {
    return DATA.map(section => ({
      ...section,
      items: section.items.map(label => ({
        label,
        tokens: (label + " " + section.title).toLowerCase(),
      })),
    }));
  }, []);

  const filtered = useMemo(() => {
    const v = q.trim().toLowerCase();
    if (!v) return DATA;
    return flatIndex
      .map(sec => ({
        ...sec,
        items: sec.items.filter(it => it.tokens.includes(v)).map(it => it.label),
      }))
      .filter(sec => sec.items.length > 0);
  }, [q, flatIndex]);

  const totalCount = useMemo(
    () => (filtered || []).reduce((sum, s) => sum + s.items.length, 0),
    [filtered]
  );

  const toggleSection = (key) => {
    setActiveKeys(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const clearSearch = () => setQ("");

  // NOTE: scoped wrapper + an id="top" for back-to-top
  return (
    <div id="top" className="partners-scope">
      <div className="partners-wrap">
        {/* Sticky Top Bar */}
        <header className="topbar" role="banner">
          <div className="brand">
          
            <div>
              <h1 className="title">Network & Tie-ups</h1>
              <p className="subtitle">Government • Corporate • Insurance • TPA</p>
            </div>
          </div>

          <nav className="jump-links" aria-label="Section shortcuts">
            {DATA.map(s => (
              <a key={s.key} href={`#${s.key}`} className="jump-link">
                {s.title}
              </a>
            ))}
          </nav>
        </header>

        {/* Search Panel */}
        <section className="search-panel">
          <div className="search-box" role="search">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search company, scheme or TPA…"
              aria-label="Search partners"
            />
            {q && (
              <button className="clear" onClick={clearSearch} aria-label="Clear search">
                ✕
              </button>
            )}
            <div className="hint">
              {q ? (
                <span>
                  Showing <strong>{totalCount}</strong> {totalCount === 1 ? "result" : "results"}
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>

          
        </section>

        {/* Sections */}
        <main className="sections" role="main">
          {(q ? filtered : DATA).map((section) => {
            const isOpen = activeKeys.has(section.key);
            return (
              <section key={section.key} id={section.key} className="section-card">
                <button
                  className="section-header"
                  onClick={() => toggleSection(section.key)}
                  aria-expanded={isOpen}
                  aria-controls={`${section.key}-panel`}
                >
                  <span className="icon">{section.icon}</span>
                  <div className="header-text">
                    <h2>{section.title}</h2>
                    <p>{section.items.length} {section.items.length === 1 ? "listing" : "listings"}</p>
                  </div>
                  <span className={`chevron ${isOpen ? "open" : ""}`} aria-hidden="true">▾</span>
                </button>

                <div
                  id={`${section.key}-panel`}
                  className={`section-body ${isOpen ? "open" : "collapsed"}`}
                >
                  <ul className="grid">
                    {section.items.map((name) => (
                      <li className="card" key={name}>
                        <div className="card-head">
                          <span className="dot" aria-hidden="true" />
                          <h3 className="card-title">{name}</h3>
                        </div>
                        <div className="badges">
                          {/* Auto badges */}
                          {/\b(IPD)\b/i.test(name) && <span className="badge">IPD</span>}
                          {/\b(OPD)\b/i.test(name) && <span className="badge">OPD</span>}
                          {/CGHS|ECHS|ESIC|PMJAY|MJPJAY|MSRTC|Police|Government/i.test(name) && (
                            <span className="badge muted">Govt</span>
                          )}
                          {/Insurance|TPA|Allianz|Cigna|Lombard|AIG|Tokio|Sompo|Digit|NAVI|Birla|SBI/i.test(name) && (
                            <span className="badge">Cashless</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </main>

        <footer className="footer">
          <div className="cta">
            <h4>Need help with approvals?</h4>
            <p>Our insurance helpdesk can verify eligibility and guide pre-auth within minutes.</p>
           <br /> <a className="btn" href="/contact">Contact Helpdesk</a>
          </div>
            <a
            className="back-to-top"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </div>
  );
}
