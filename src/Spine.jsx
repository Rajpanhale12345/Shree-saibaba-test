import React from 'react';
import spinemain from './Images/spinemain.jpg';
import './spine.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';

export default function Spine() {
   const otherBlogs = [
 
    { to: '/Cardio', title: 'Pacemaker care', date: '11 Aug 2025', category: '🏥 Cardiology' },
    { to: '/kidney', title: 'Kidney Stones', date: '11 Aug 2025', category: '🏥 Urology' },

  ];

  const toc = [
    { id: 'affects', label: 'How Sitting Affects Your Back' },
    { id: 'too-long', label: 'What Happens When You Sit Too Long' },
    { id: 'hazards', label: 'Why Sitting Too Much Is Hazardous' },
    { id: 'work-tips', label: 'Workplace Tips to Save Your Back' },
    { id: 'habits', label: 'Small Habits for Spine Care' },
  ];

  return (
    <>
      <Helmet>
        <title>Spine Health Blog | Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="Learn how sitting affects your spine and practical steps to protect your back at work and home. Tips from Saibaba Multispeciality Hospital."
        />
      </Helmet>

      {/* Normal page scroll; only sidebar has its own scroll */}
      <div className="blog-page">
        {/* Left: Main content (no independent scroll) */}
        <main className="pane pane--main" aria-label="Blog article">
          <article className="blog-article">
            <header className="blog-header">
              <img src={spinemain} alt="Spine health illustration" className="blog-image" />
              <div className="blog-meta">
                <Link to="/neurosurgery" className="blog-category">🏥 Neurosurgery</Link>
                <span className="blog-date">🕗 11 August 2025</span>
              </div>
              <h1 className="blog-title">Spine Health and Sitting: What You Need to Know</h1>
            </header>

            <nav className="toc" aria-label="On this page">
              <p className="toc__label">On this page</p>
              <ul>
                {toc.map(item => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section className="blog-content">
              <p>
                Everyone sits for several hours a day, whether working or not. Too much sitting,
                though, can disrupt your back. Some experts even believe sitting too much is worse
                for your body than smoking.
              </p>

              <h2 id="affects">How Sitting Affects Your Back?</h2>
              <p>
                Your back is supposed to move. If you sit for years, especially slouching, it puts
                stress on your lower back. That can lead to pain and other problems.
              </p>

              <h2 id="too-long">What Happens When You Sit Too Long</h2>
              <ul>
                <li>Lower back and hip muscles stiffen</li>
                <li>Spinal discs twist and may get damaged</li>
                <li>Reduced blood flow limits oxygen supply to muscles</li>
                <li>Neck and shoulders stiffen from leaning forward</li>
                <li>Can lead to chronic pain, bad posture, or nerve issues</li>
              </ul>

              <h2 id="hazards">Why Sitting Too Much Is Hazardous</h2>
              <p>Sitting all day affects not only your back but your whole health.</p>
              <ul>
                <li>Chronic neck and back pain</li>
                <li>Poor posture and spine issues</li>
                <li>Weight gain &amp; slow metabolism</li>
                <li>Higher risk of diabetes and heart disease</li>
                <li>Weak abdominal and hip muscles</li>
              </ul>

              <h2 id="work-tips">Workplace Tips to Save Your Back</h2>
              <ul>
                <li>Keep knees at hip level &amp; feet flat on the floor</li>
                <li>Sit fully back with spine supported</li>
                <li>Screen at eye level to avoid slouching</li>
                <li>Use a footrest if needed</li>
                <li>Keep keyboard &amp; mouse within reach</li>
              </ul>

              <h2 id="habits">Small Habits for Spine Care</h2>
              <ul>
                <li>Adjust your desk setup</li>
                <li>Set a timer to stand every 30 minutes</li>
                <li>Stretch daily to release tension</li>
                <li>Adopt healthy posture habits</li>
              </ul>
            </section>

            <footer className="cta-section" aria-labelledby="cta-title">
              <h2 id="cta-title" className="sr-only">Call to Action</h2>
              <p>
                Your back supports your entire body daily. If you sit a lot, it’s time to make
                changes — stand, stretch, and adjust your setup. These simple steps can protect
                your spine and improve your long-term health.
              </p>
              <p>📞 Call us or visit us for a consultation. Your spine deserves the best care.</p>
              <Link to="/contact" className="cta-btn-wrapper">
                <Button variant="contained" color="primary">Reach Us Out</Button>
              </Link>
            </footer>
          </article>
        </main>

        {/* Right: Sticky sidebar with its own scroll */}
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

            <Link to="/blog" className="sidebar-all-link">View all posts →</Link>
          </div>
        </aside>
      </div>
    </>
  );
}
