import React from 'react';
import Cardio from './Images/Cardio_blog.jpg';
import './cardio_blog.css'; // reuse the same stylesheet
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet-async";

function Cardio_blog() {
  const otherBlogs = [
 
    { to: '/spine', title: 'Spine Health and Sitting', date: '11 Aug 2025', category: '🏥 Neurosurgery' },
    { to: '/kidney', title: 'Kidney Stones', date: '11 Aug 2025', category: '🏥Urology' },
   
  ];


  const toc = [
    { id: 'what', label: 'What Is a Pacemaker?' },
    { id: 'surgery', label: 'Surgery & Recovery' },
    { id: 'life', label: 'Daily Life with a Pacemaker' },
    { id: 'followup', label: 'Follow-ups & Monitoring' },
    { id: 'battery', label: 'Pacemaker Life Expectancy' },
    { id: 'myths', label: 'Myths & Facts' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <>
      <Helmet>
        <title>Cardiology Blog |  Shree Saibaba Hospital</title>
        <meta
          name="description"
          content="Pacemaker care: what it is, surgery and recovery, daily life, follow-ups, longevity, and common myths—by Saibaba Heart Institute."
        />
      </Helmet>

      <div className="kidney-page">{/* same grid as kidney page */}
        {/* LEFT: Main article (normal page scroll) */}
        <main className="pane pane--main" aria-label="Cardiology article">
          <article className="kidney-article">
            {/* Hero */}
            <header className="kidney-header">
              <img src={Cardio} alt="Cardiology pacemaker care" className="kidney-image" />
              <div className="kidney-meta">
                <Link to="/cardiology" className="kidney-category">🏥 Cardiology</Link>
                <span className="kidney-date">🕗 05 September 2025</span>
              </div>
              <h1 className="kidney-title">Pacemaker Care: Surgery, Recovery & Lifestyle Changes Explained</h1>
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
              <h2 id="what">What Is a Pacemaker?</h2>
              <p>
                A pacemaker is a small electronic device implanted under the skin to help regulate an abnormal heart rhythm.
                It releases mild electrical pulses to keep the heart beating steadily and is typically recommended for
                bradycardia, certain arrhythmias, or heart block. Modern pacemakers are highly reliable, usually inserted
                via minimally invasive surgery, and let patients live active, normal lives.
              </p>

              <h2 id="surgery">Pacemaker Surgery & Recovery: What to Expect</h2>
              <p>
                Most patients go home within 24–48 hours after implantation. Mild pain, swelling, or bruising at the site
                is common and improves in a few days.
              </p>
              <ul>
                <li>Avoid lifting heavy weights for 3–4 weeks</li>
                <li>Avoid raising the arm on the implant side above shoulder level initially</li>
                <li>Follow wound care and your cardiologist’s instructions closely</li>
              </ul>

              <h2 id="life">Daily Life with a Pacemaker</h2>
              <h3>1) Physical Activity</h3>
              <ul>
                <li>Walking, yoga, and light stretches are generally safe</li>
                <li>Avoid contact sports or chest-impact activities</li>
                <li>Consult your cardiologist before resuming gym workouts</li>
              </ul>

              <h3>2) Diet</h3>
              <ul>
                <li>Emphasize fruits, vegetables, whole grains, nuts, and lean proteins</li>
                <li>Limit salt, alcohol, fried/processed foods</li>
                <li>Stop smoking to protect your heart and device function</li>
              </ul>

              <h3>3) Electronics & Appliances</h3>
              <ul>
                <li>Microwaves, fridges, phones, TVs, laptops are safe</li>
                <li>Keep phones at least ~6 inches away from the device</li>
                <li>Avoid strong magnetic fields/heavy industrial machinery</li>
                <li>Airport: inform security; walk-through gates are okay—avoid hand-held wands directly over device</li>
              </ul>

              <h2 id="followup">Follow-up Visits & Home Monitoring</h2>
              <p>
                Regular follow-ups track battery status and device performance. Many newer devices support remote monitoring
                so your team can review rhythms without frequent hospital visits.
              </p>

              <h2 id="battery">Pacemaker Life Expectancy</h2>
              <p>
                Pacemaker batteries typically last 8–12 years depending on usage. When the battery depletes, the generator
                is replaced while leads often remain in place. With routine care, patients can lead long, active lives.
              </p>

              <h2 id="myths">Myths & Facts</h2>
              <p><strong>Myth:</strong> You can’t use household appliances.</p>
              <p><strong>Fact:</strong> Most household appliances are safe with a pacemaker.</p>
              <p><strong>Myth:</strong> Pacemaker surgery is a major operation.</p>
              <p><strong>Fact:</strong> It’s typically minimally invasive and often done under local anaesthesia.</p>
              <p><strong>Myth:</strong> Pacemakers are only for elderly patients.</p>
              <p><strong>Fact:</strong> Patients of any age may need one, depending on their condition.</p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                A pacemaker is a lifesaving device that restores a healthy rhythm and enables an active life. With follow-ups,
                device care, and heart-healthy habits, patients can remain independent and well.
              </p>
              <p>
                At Shree Saibaba Heart Institute, Nashik, our cardiologists and electrophysiologists offer advanced therapies
                including leadless pacemakers and CRT—delivered with compassionate, world-class care.
              </p>

              {/* CTA */}
              <footer className="cta-section" aria-labelledby="cta-title">
                <h2 id="cta-title" className="sr-only">Call to Action</h2>
                <h5 className="CTA">📞 Call us or visit us for a consultation. Your heart deserves the best care.</h5>
                <Link to="/contact" className="cta-btn-wrapper">
                  <Button variant="contained">Reach us out</Button>
                </Link>
              </footer>
            </section>
          </article>
        </main>

        {/* RIGHT: Sticky, independently scrolling sidebar */}
        <aside className="pane pane--sidebar" aria-label="Other blog posts">
          <div className="sidebar-inner">
            <h2 className="sidebar-title">Other Blogs</h2>
            <div className="sidebar-list" role="list">
              {otherBlogs.map((post, idx) => (
                <Link to={post.to} key={idx} className="sidebar-card" role="listitem">
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

export default Cardio_blog;
