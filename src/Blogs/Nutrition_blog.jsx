import React from "react";
import nutrition from "./Images/nutrition.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function NutritionBlog() {
  const otherBlogs = [
    { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
    { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
  ];

  const toc = [
    { id: "intro", label: "Introduction: Recovery Doesn’t End at Discharge" },
    { id: "nutrition", label: "Nutrition: Fuel for Healing" },
    { id: "sleep", label: "Sleep: Your Built-In Recovery System" },
    { id: "lifestyle", label: "Lifestyle: Gentle Habits that Build Strength" },
    { id: "guidance", label: "When to Seek Professional Guidance" },
    { id: "conclusion", label: "Conclusion: Healing is a Habit" },
  ];

  return (
    <>
      <Helmet>
        <title>Post-Hospital Recovery: Nutrition, Sleep & Lifestyle | Shree Saibaba Multispeciality Hospital</title>
        <meta
          name="description"
          content="A practical, science-backed guide to post-hospital recovery. Learn how targeted nutrition, restorative sleep, gentle movement, and emotional care accelerate healing and reduce complications."
        />
        <meta
          name="keywords"
          content="post hospital recovery, discharge care, healing nutrition, sleep for recovery, gentle exercise, physiotherapy, mental health, hydration, Nashik hospital"
        />
        <meta
          name="og:description"
          content="Recovery doesn’t end at discharge. Use nutrition, sleep, movement, and mindful habits to rebuild strength and immunity after a hospital stay."
        />
      </Helmet>

      {/* 2-column page: main on the left, sticky sidebar on the right */}
      <div className="kidney-page">
        {/* Main */}
        <main className="pane pane--main" aria-label="Recovery article">
          <article className="kidney-article">
            {/* Hero */}
            <header className="kidney-header">
              <img
                src={nutrition}
                alt="Recovery care after hospital discharge"
                className="kidney-image"
              />
              <div className="kidney-meta">
                <Link to="/cardiology" className="kidney-category">
                  Health
                </Link>
                <span className="kidney-date">🕗 05 November 2025</span>
              </div>
              <h1 className="kidney-title">
                Post-Hospital Recovery: Nutrition, Sleep & Lifestyle Guide
              </h1>
            </header>

            {/* TOC */}
            <nav className="toc" aria-label="On this page">
              <p className="toc__label">On this page</p>
              <ul>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content */}
            <section className="kidney-content">
              <h2 id="intro">Introduction: Recovery Doesn&apos;t End at Discharge</h2>
              <p>
                Going home from the hospital is usually viewed as the last stage of recovery, but, in fact, it&apos;s just the beginning.
                Whether for surgery, an illness, injury, or infection, the body continues to work tirelessly, repairing tissues,
                rebalancing energy, restoring immunity, and regaining strength. That is why this period after discharge from the
                hospital is so important but is usually underestimated. Targeted nutrition, restorative sleep, and sustainable
                lifestyle habits together could make all the difference in accelerating the healing process, reducing complications,
                and improving long-term wellness outcomes.
              </p>

              <h2 id="nutrition">1. Nutrition: Fuel That Rebuilds the Body from Within</h2>
              <p>
                Food is not just calories; it&apos;s information. The human body requires certain nutrients in recovery to rebuild
                cells that have been damaged, fight off inflammation, and restore immunity. Choosing the correct nutrition following
                a hospital stay can reduce healing times and improve energy levels.
              </p>

              <h3>Easy healing meals</h3>
              <ul>
                <li>Smoothies with protein powder, berries, spinach, and chia seeds</li>
                <li>Vegetable and lentil or shredded chicken bone broth soups</li>
                <li>Overnight oats with Greek yogurt, seeds, and vitamin-C-rich fruits</li>
              </ul>
              <p>Even small, frequent meals can help if appetite is low, especially after medication or surgery.</p>

              <h2 id="sleep">2. Sleep: The Body&apos;s Built-In Recovery System</h2>
              <p>
                Sleep is, by far, the most underappreciated recovery tool. During deep sleep, the body increases blood flow to
                tissues, repairs cells, balances hormones, and bolsters immunity. A poor sleep cycle may delay healing, create
                inflammation, and weaken an immune response.
              </p>

              <h3>Sleep protocols that may help with recovery:</h3>
              <ul>
                <li><strong>Circadian rhythm reset:</strong> Set a regular sleep and wake time.</li>
                <li><strong>Daylight:</strong> Simulated sunlight in the morning resets your body clock in 10–20 minutes.</li>
                <li><strong>Nighttime protocol:</strong> Limit screen time (including phones) to 60 minutes prior to sleep; use light stretching, breathing, or audio books instead.</li>
                <li><strong>Room setup:</strong> Keep it cool, dark, and quiet—ideal for cellular repair.</li>
                <li><strong>Nap wisely:</strong> Exception to the &lt;30 min nap rule: Both 20- and 30-min naps support healing. More than 30 minutes may disrupt sleep patterns overnight.</li>
              </ul>
              <p>
                Sleep issues secondary to pain and fatigue—sleep on your side (with pillow assistance), consider magnesium glycinate,
                or create a guided meditation habit for sleep.
              </p>

              <h2 id="lifestyle">3. Lifestyle: Gentle Habits to Build Strength and Confidence</h2>
              <p>
                Once the body finds some stabilization, lifestyle habits become the bridge between feeling better and long-term health.
                Rushing may create more problems while doing nothing leaves you with loss of muscle mass, stiff joints, and slowed metabolism.
              </p>

              <h3>Movement &amp; Mobility</h3>
              <ul>
                <li>Start with light movement—walking 5–10 minutes twice a day.</li>
                <li>Add in breathing exercises (in-program) for lung capacity post illness.</li>
                <li>Progress to therapeutic mobility, or follow physiotherapy guided stretches as tolerated, assessed by your physiotherapist.</li>
                <li>Movement promotes circulation, decreases anxiety, and mitigates the loss of muscle mass.</li>
              </ul>

              <h3>Stress &amp; Emotional Recovery</h3>
              <p>
                Anxiety after discharge, fear of recurrence, or loss of self-sufficiency affects many patients. The following mind-body practices may help:
              </p>
              <ul>
                <li>Guided meditation</li>
                <li>Gratitude journaling</li>
                <li>Soft yoga or tai chi</li>
                <li>Music therapy</li>
              </ul>
              <p>…help balance the nervous system and speed up physical healing.</p>

              <h3>Hydration &amp; Detox Support</h3>
              <p>
                Hydration helps medications leave the system and supports lymphatic drainage. Herbal teas, such as ginger, nettle,
                or peppermint, gently cleanse and restore gut function.
              </p>

              <h2 id="guidance">4. When You Should Seek Professional Guidance</h2>
              <p>
                Some cases, such as major surgery, chronic illness, or an extended stay in an ICU, will take a team-based approach to care.
                A post-hospital plan for wellness may include:
              </p>
              <ul>
                <li>Registered Dietitian</li>
                <li>Sleep Therapist</li>
                <li>Physiotherapist</li>
                <li>Mental Health Counsellor</li>
                <li>Functional Medicine Physician</li>
              </ul>
              <p>
                Asking for help is not a sign of weakness; rather, it protects you from relapse and allows you to establish more robust
                health in the long term.
              </p>

              <h2 id="conclusion">Conclusion: Healing is a Habit, Not an Event</h2>
              <p>
                Life after the hospital may feel like a lot, but healing is empowering and becomes manageable through the implementation of
                simple science-backed approaches. Once you prioritize real nourishing foods, quality sleep, movement (preferably mindful),
                and emotional wellbeing, you are not just healing—the foundation of your health is now being rebuilt stronger than it was before.
                Healing is not passive. It is an ongoing commitment to nourish and provide your body with what it needs so that it can thrive once again.
              </p>

              {/* CTA */}
              <footer className="cta-section" aria-labelledby="cta-title">
                <h2 id="cta-title" className="sr-only">Call to Action</h2>
                <h5 className="CTA">📞 Call us or visit us for a consultation. Your health deserves the best care.</h5>
                <Link to="/contact" className="cta-btn-wrapper">
                  <Button variant="contained">Reach us out</Button>
                </Link>
              </footer>
            </section>
          </article>
        </main>

        {/* Sidebar */}
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

export default NutritionBlog;
