// test.jsx
import React, { useRef, useState, useEffect, useMemo } from "react";
import gen1 from './Images/gen1.jpg'
import gen2 from './Images/gen1.jpg'
import gen3 from './Images/gen3.jpg'
import gen4 from './Images/gen4.jpg'
import gen5 from './Images/gen5.jpg'
import gen6 from './Images/gen6.jpg'
import gen7 from './Images/gen7.jpg'
import gen8 from './Images/gen8.jpg'
import gen9 from './Images/gen9.jpg'
import gen10 from './Images/gen10.jpg'
import lad1 from './Images/lad1.jpg'
import lad2 from './Images/lad2.jpg'
import lad3 from './Images/lad3.jpg'
import lad4 from './Images/lad4.jpg'



export default function Test({ testimonials }) {
  // ---- Data ----
  const defaultTestimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Shantanu Walunj",
        quote:
          "कुशल डॉक्टर आणि काळजी घेणारे कर्मचारी असलेले उत्कृष्ट रुग्णालय. सुविधा आधुनिक, स्वच्छ आणि सुव्यवस्थित आहेत. हृदयरोग उपचारांसाठी नाशिकमधील खरोखरच सर्वोत्तम ठिकाणांपैकी हे एक नंबर रुग्णालय आहे.",
      },
      {
        id: 2,
        name: "Kalyan Hurkat",
        quote:
          "Staff members are responsive and caring. Hospital infrastructure is new and well equipped. Operation procedure was well performed. Regular care and visits from the treating and supporting doctors. Thank you.",
      },
      {
        id: 3,
        name: "Kailas Khairnar",
        quote:
          "My mother’s bypass surgery was successfully done at Sai Baba Hospital. It’s the best cardiac and super speciality hospital in Nashik. The new facility is clean, hygienic, and offers excellent patient care. Service is outstanding. Thanks to the entire Sai Baba team!",
      },
      {
        id: 4,
        name: "Farhat Sayyed",
        quote:
          "Alhamdulillah! My hip surgery under Dr. Satyen Joshi was a success. His skill and compassion made all the difference. Just a week later, I’m recovering well. Grateful to Dr. Joshi, his team, and Dr. Anirudh Dharmadhikari. Truly a blessing!",
      },
      {
        id: 5,
        name: "Kiran Mankar",
        quote:
          "Saibaba Hospital is excellent for cardiac care. We came from Mumbai for my relative’s angiography and angioplasty, both done successfully with great care. Dr. Dharmadhikari and the staff were highly supportive. My relative is now healthy. Highly recommended! 🙏",
      },
      {
        id: 6,
        name: "Ayan Shaikh",
        quote:
          "My mother was recently admitted to Shree Sai Baba Heart Institute and Research Centre, and I am truly thankful for the care provided. The doctors here are extremely polite, experienced, and explain everything with patience. The hospital staff is very supportive and attentive. The entire premises are clean, hygienic, and well-maintained. They took really good care of my mom throughout her treatment. I highly recommend this hospital for anyone in need of heart care.",
      },
      {
        id: 7,
        name: "Dinkar Gaikwad",
        quote:
          "My mothers Anjiography and Anjioplasty done succesfully in this hospital. This hospital is very best cardiac care as well as Super multy specialist hosital. All medical facilities available. Patient care is so nice. Thanks🙏",
      },
      {
        id: 8,
        name: "Anju Jagtap",
        quote:
          "My husband EP study procedure done successfully in this hospital. This new hospital is very best Super speciality hospital in Nashik. Patient care is very nice. All doctors and staff is very cooperative. Thanks.",
      },
      {
        id: 9,
        name: "Kunal Goyal",
        quote:
          "My mother's Orif procedure done successfully in this hospital. All medical facilities available. All doctors and staff is very cooperative. New hospital is very neat and clean also very well hygienic. Thanks to all Saibaba team.",
      },
      {
        id: 10,
        name: "Prashant Shinde",
        quote:
          "1)First of all Dr.Dharmadhikari sir is awasome man he is a best cardiologist in the nashik city.2) Mr.Wani sir Very awesome person. I like it good dr.very politely speak everyone.Thanks for your supporting",
      },
      {
        id: 12,
        name: "kanchan pahilwan",
        quote:
          "Best multispeciality hospital in nashik. Helpful staff and daily takecare of patient. Thank you.",
      },
      {
        id: 13,
        name: "Maithili Kulkarni",
        quote:
          "Very Nice Hospitality... Well Known Doctors & Staff Also, coopertive and helping Nature... Clean & peaceful area.. Every Service meet quick, politly..All The Best Team 🙏",
      },
      {
        id: 14,
        name: "Falaknaaz Shaikh",
        quote:
          "My Spine operation done successfully in this hospital. All medical facilities available. Very best super speciality hospital in Nashik. All doctors and support staff is very cooperative. House keeping is very good. Thanks.",
      },
      {
        id: 15,
        name: "Meera Gangurde",
        quote:
          "The experience of Sai Baba Hospital was very satisfying. The all staff members including all the doctors, nurse, house keeking service took excellent care of the patient. As a family member I m very happy about Sai Baba Hospital. In future I will suggest my relatives, friends in any kind of emergency pls go to Sai Baba Hospital. Most important Dr. Dharmadhikari, is really a next to God for us. Thank you everyone for the kind service.",
      },
    ],
    []
  );

  // ---- Avatar URL resolver (prefers external, else local, else SVG) ----
  function getCustomAvatarUrl(id) {
    const avatarMap = {
      1: gen1, // will fall back to local or SVG
      2: gen7,
      3: gen3,
      4: gen4,
      5: gen5,
      6: gen6,
      7: gen8,
      8: lad1,
      9: gen9,
      10: gen10,
      12: lad1,
      13: lad2,
      14: lad4,
      15 : lad3,
  
    };

    const external = avatarMap[id];
    if (external) return external;

    // Try local file under /public/images/avatars/{id}.png
    // (Works in CRA, Vite, Next.js; if file doesn't exist, onError will swap to SVG.)
    return `/images/avatars/${id}.png`;
  }

  // Merge incoming testimonials with avatar URLs
  const items = (testimonials && testimonials.length ? testimonials : defaultTestimonials).map(
    (t, idx) => ({
      ...t,
      avatarUrl: t.avatarUrl || getCustomAvatarUrl(t.id ?? idx),
    })
  );

  // ---- Scroller state ----
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [cardBasisPct, setCardBasisPct] = useState(85); // responsive width per card

  // Responsive card width without media queries in CSS files
  useEffect(() => {
    const setBasis = () => {
      const w = window.innerWidth;
      if (w >= 1536) setCardBasisPct(24);
      else if (w >= 1280) setCardBasisPct(28);
      else if (w >= 1024) setCardBasisPct(33);
      else if (w >= 640) setCardBasisPct(60);
      else setCardBasisPct(85);
    };
    setBasis();
    window.addEventListener("resize", setBasis);
    return () => window.removeEventListener("resize", setBasis);
  }, []);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const scrollByCards = (direction = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9 * direction;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Enable desktop arrows via inline CSS hack (kept for parity)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (min-width: 640px) {
        .arrow-desktop { display: inline-flex !important; }
      }
    `;  
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ---- Render ----
  return (
    <section style={{ width: "100%" }}>
      <div style={{ position: "relative", margin: "0 auto", maxWidth: 1200 }}>
        {/* Heading */}
        <div
          style={{
            marginBottom: 24,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 8px",
          }}
        >
          <div style={{ margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: 25, fontWeight: 600, margin: 0, color: "blue" }}>
              What people are saying
            </h2>
            <p style={{ margin: "8px 0 0", color: "#6b7280" }}></p>
          </div>
        </div>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          role="region"
          aria-label="Testimonials carousel"
          tabIndex={0}
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            padding: "0 8px 10px",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollByCards(1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollByCards(-1);
            }
          }}
        >
          {items.map((t, idx) => {
            const meta = [t.role, t.company].filter(Boolean).join(" • ");
            const initials = getInitials(t.name);
            return (
              <article
                key={t.id ?? idx}
                style={{
                  flex: `0 0 ${cardBasisPct}%`,
                  scrollSnapAlign: "start",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 16,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#fff",
                    padding: 20,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                    textAlign: "left",
                  }}
                >
                  <p style={{ color: "#374151", lineHeight: 1.6, margin: 0 }}>“{t.quote}”</p>

                  <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src={t.avatarUrl}
                      alt={`${t.name}'s avatar`}
                      width={80}
                      height={80}
                      loading="lazy"
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        background: "#f3f4f6",
                        border: "1px solid rgba(0,0,0,0.06)",
                        flex: "0 0 auto",
                      }}
                      onError={(e) => {
                        e.currentTarget.src = getAvatarDataUri(initials);
                      }}
                    />
                    <div style={{ lineHeight: 1.2 }}>
                      <div style={{ fontWeight: 600 }}>{t.name}</div>
                      {meta ? (
                        <div style={{ fontSize: 12, color: "#6b7280" }}>{meta}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile controls */}
        <div style={{ display: "flex", gap: 8, padding: 8 }}>
         <br /><br />
        </div>
      </div>
    </section>
  );
}

const mobileBtnStyle = {
  height: 40,
  width: 40,
  borderRadius: 12,
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  cursor: "pointer",
};

// ---- Helpers ----
function getInitials(name = "?") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join("");
}

function getAvatarDataUri(initials = "?") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>
    <rect width='100%' height='100%' rx='40' ry='40' fill='#eef2f7'/>
    <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, Helvetica, sans-serif' font-size='28' fill='#374151'
      font-weight='700'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
