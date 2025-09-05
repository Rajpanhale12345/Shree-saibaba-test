import React from 'react';
import spinemain from './Images/spinemain.jpg';
import './spine.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';

export default function Spine() {
  return (
    <>
      <Helmet>
        <title>Spine Health Blog | Saibaba Multispeciality Hospital</title>
      </Helmet>

      <article className="blog-container">

        {/* Hero Section */}
        <header className="blog-header">
          <img src={spinemain} alt="Spine Health" className="blog-image" />
          <div className="blog-meta">
            <Link to="/neurosurgery" className="blog-category">🏥 Neurosurgery</Link>
            <span className="blog-date">🕗 11 August 2025</span>
          </div>
          <h1 className="blog-title">Spine Health and Sitting: What You Need to Know</h1>
        </header>

        {/* Blog Content */}
        <section className="blog-content">
          <p>
            Everyone sits for several hours a day, whether working or not. Too much sitting,
            though, can disrupt your back. Some experts even believe sitting too much is worse
            for your body than smoking.
          </p>

          <h2>How Sitting Affects Your Back?</h2>
          <p>
            Your back is supposed to move. If you sit for years, especially slouching, it puts
            stress on your lower back. That can lead to pain and other problems.
          </p>

          <h2>What Happens When You Sit Too Long</h2>
          <ul>
            <li>Lower back and hip muscles stiffen</li>
            <li>Spinal discs twist and may get damaged</li>
            <li>Reduced blood flow limits oxygen supply to muscles</li>
            <li>Neck and shoulders stiffen from leaning forward</li>
            <li>Can lead to chronic pain, bad posture, or nerve issues</li>
          </ul>

          <h2>Why Sitting Too Much Is Hazardous</h2>
          <p>
            Sitting all day affects not only your back but your whole health.
          </p>
          <ul>
            <li>Chronic neck and back pain</li>
            <li>Poor posture and spine issues</li>
            <li>Weight gain & slow metabolism</li>
            <li>Higher risk of diabetes and heart disease</li>
            <li>Weak abdominal and hip muscles</li>
          </ul>

          <h2>Workplace Tips to Save Your Back</h2>
          <ul>
            <li>Keep knees at hip level & feet flat on the floor</li>
            <li>Sit fully back with spine supported</li>
            <li>Screen at eye level to avoid slouching</li>
            <li>Use a footrest if needed</li>
            <li>Keep keyboard & mouse within reach</li>
          </ul>

          <h2>Small Habits for Spine Care</h2>
          <ul>
            <li>Adjust your desk setup</li>
            <li>Set a timer to stand every 30 minutes</li>
            <li>Stretch daily to release tension</li>
            <li>Adopt healthy posture habits</li>
          </ul>
        </section>

        {/* CTA Section */}
        <footer className="cta-section">
          <p>
            Your back supports your entire body daily. If you sit a lot, it’s time to make
            changes — stand, stretch, and adjust your setup. These simple steps can protect
            your spine and improve your long-term health.
          </p>
          <p>📞 Call us or visit us for a consultation. Your spine deserves the best care.</p>
          <Link to="/contact">
            <Button variant="contained" color="primary">Reach Us Out</Button>
          </Link>
        </footer>
      </article>
    </>
  );
}
