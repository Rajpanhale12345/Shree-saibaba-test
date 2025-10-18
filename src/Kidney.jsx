import React from 'react';
import kidneymid from './Images/kidneymid.png';
import './Kidney.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet-async";

function Kidney() {
  const otherBlogs = [
    { to: '/spine', title: 'Spine Health and Sitting', date: '11 Aug 2025', category: '🏥 Neurosurgery' },
    { to: '/Cardio', title: 'Pacemaker Care', date: '5 Sep 2025', category: '🏥Cardiology' },

  ];

  const toc = [
    { id: 'what', label: 'What is a Kidney Stone?' },
    { id: 'causes', label: 'What Causes Kidney Stones?' },
    { id: 'size', label: 'How Large Are Kidney Stones?' },
    { id: 'recurrence', label: 'Will They Come Back?' },
    { id: 'types', label: 'Types of Kidney Stones' },
    { id: 'do', label: 'What To Do' },
    { id: 'avoid', label: 'What To Avoid' },
    { id: 'diet', label: 'Daily Diet Plan Example' },
  ];

  return (
    <>

      <Helmet>
        <title>Kidney | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description' content='Understand kidney stones: causes, size, recurrence, types, prevention, and a sample diet plan. From Saibaba Multispeciality Hospital.' />
        <meta name='keywords' content='' />
        <meta name='og:description' content='' />
      </Helmet>


      <div className="kidney-page">
        {/* LEFT: Main article (normal page scroll) */}
        <main className="pane pane--main" aria-label="Kidney article">
          <article className="kidney-article">

            {/* Hero */}
            <header className="kidney-header">
              <img src={kidneymid} alt="Kidney health illustration" className="kidney-image" />
              <div className="kidney-meta">
                <Link to="/urology" className="kidney-category">🏥 Urology</Link>
                <span className="kidney-date">🕗 11 August 2025</span>
              </div>
              <h1 className="kidney-title">Kidney Stones: Symptoms, Causes & Prevention</h1>
            </header>

            {/* TOC */}
            <nav className="toc" aria-label="On this page">
              <p className="toc__label">On this page</p>
              <ul>
                {toc.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <section className="kidney-content">
              <h2 id="what">What is a Kidney Stone?</h2>
              <p>
                A kidney stone is a small, hard deposit formed from waste (often calcium with oxalate, or uric acid) that
                accumulates in your kidneys. Stones may travel through the urinary tract and can cause significant pain.
              </p>

              <h2 id="causes">What Causes Kidney Stones?</h2>
              <p>Stones form when urine has a high concentration of crystal-forming substances and not enough fluid to dilute them.</p>
              <ul>
                <li>Not consuming enough water</li>
                <li>High intake of salt, animal protein, or sugar</li>
                <li>High-fat or high-cholesterol diet patterns</li>
                <li>Medical conditions such as diabetes or GI disorders</li>
              </ul>

              <h2 id="size">How Large Are Kidney Stones?</h2>
              <ul>
                <li><strong>≤ 4&nbsp;mm:</strong> Often pass on their own</li>
                <li><strong>4–6&nbsp;mm:</strong> ~60% chance of spontaneous passage</li>
                <li><strong>≥ 6&nbsp;mm:</strong> Usually requires medical treatment</li>
              </ul>

              <h2 id="recurrence">Will They Come Back?</h2>
              <p>Recurrence is common without prevention:</p>
              <ul>
                <li>~7% yearly risk</li>
                <li>~35% within 5 years</li>
                <li>~50% within 10 years</li>
              </ul>
              <p><em>Hydration and nutrition are the foundations of prevention.</em></p>

              <h2 id="types">Types of Kidney Stones</h2>
              <h3>1) Calcium Oxalate Stones (≈80% of stones)</h3>
              <ul>
                <li>Often linked to dehydration</li>
                <li>Risk rises with excess animal protein, salt, and oxalate-rich foods</li>
                <li>Medical conditions like hyperparathyroidism increase risk</li>
              </ul>

              <h3>2) Uric Acid Stones (~15% of stones)</h3>
              <ul>
                <li>Due to excess uric acid and low urine pH</li>
                <li>Can be associated with metabolic issues (e.g., diabetes, obesity)</li>
                <li>Low potassium/magnesium intake may contribute</li>
              </ul>

              <h2 id="do">What To Do</h2>
              <ul>
                <li>Drink enough fluids: aim ~3&nbsp;litres/day (or as advised by your doctor)</li>
                <li>Include calcium foods (milk, yogurt, cheese) with meals</li>
                <li>Use lemon/lime—citrate can help prevent stones</li>
                <li>Choose low-sodium foods; avoid heavily processed options</li>
                <li>Use salt substitutes like herbs, spices, citrus</li>
              </ul>

              <h2 id="avoid">What To Avoid</h2>
              <ul>
                <li>High-dose Vitamin C or D supplements (unless prescribed)</li>
                <li>High-oxalate foods: spinach, beetroot, rhubarb, sweet potato</li>
                <li>Large amounts of black tea, nuts, orange juice, chocolate</li>
                <li>Sugary drinks/juices; salty processed foods (chips, pickles, canned soups, ketchup)</li>
              </ul>

              <h2 id="diet">Daily Diet Plan Example</h2>
              <ul>
                <li><strong>Breakfast:</strong> Blueberry porridge + a glass of milk</li>
                <li><strong>Lunch:</strong> Whole wheat bread, salad, and a yogurt</li>
                <li><strong>Dinner:</strong> Grilled salmon, steamed asparagus, wild rice, yogurt-dill sauce</li>
              </ul>
            </section>

            {/* CTA */}
            <footer className="cta-section" aria-labelledby="cta-title">
              <h2 id="cta-title" className="sr-only">Call to Action</h2>
              <h5 className="CTA">
                At Shree Saibaba Multispeciality Hospital, Nashik, our urology specialists provide advanced diagnosis,
                painless treatment options, and prevention guidance to keep stones from coming back.
              </h5>
              <h5 className="CTA">📞 Call us or visit us for a consultation. Your kidneys deserve the best care...</h5>
              <Link to="/contact" className="cta-btn-wrapper">
                <Button variant="contained">Reach us out</Button>
              </Link>
            </footer>
          </article>
        </main>

        {/* RIGHT: Sticky, independently scrolling sidebar */}
        <aside className="pane pane--sidebar" aria-label="Other blog posts">
          <div className="sidebar-inner">
            <h2 className="sidebar-title">Other Blogs</h2>
            <div className="sidebar-list" role="list">
              {otherBlogs.map((post, idx) => (
                <Link to={post.to} key={idx} className="sidebar-card" role="list item">
                  <div className="sidebar-card__meta">
                    <span className="sidebar-card__category">{post.category}</span>
                    <time className="sidebar-card__date" dateTime={new Date(post.date).toISOString()}>
                      {post.date}
                    </time>
                  </div>
                  <h3 className="sidebar-card__title">{post.title}</h3>
                </Link>
              ))}
            </div>
            <Link to="/blogs" className="sidebar-all-link">View all posts →</Link>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Kidney;
