import React from "react";
import AsthmaImg from "./Images/Asthma.webp"; // Add a relevant asthma image
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Asthma() {

    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Causes", label: "2. Causes" },
        { id: "Symptoms", label: "3. Symptoms" },
        { id: "Diagnosis", label: "4. Diagnosis" },
        { id: "Types", label: "5. Types of Asthma" },
        { id: "Treatment", label: "6. Treatment Options" },
        { id: "HomeCare", label: "7. Home Management" },
        { id: "Prevention", label: "8. Prevention" },
        { id: "Emergency", label: "9. Emergency Care" },
        { id: "Outlook", label: "10. Long-Term Outlook" },
        { id: "Importance", label: "11. Why Early Treatment Matters" },
    ];

    return (
        <>
            <Helmet>
                <title>Childhood Asthma | Shree Saibaba Multispeciality Hospital</title>
                <meta name="description" content="Understanding Childhood Asthma and how to manage it effectively." />
                <meta name="keywords" content="Childhood Asthma, Pediatric Asthma, Asthma Treatment Nashik" />
                <meta name="og:description" content="Complete guide to childhood asthma management and prevention." />
            </Helmet>

            <div className="kidney-page">
                <main className="pane pane--main" aria-label="Asthma article">
                    <article className="kidney-article">

                        {/* Hero */}
                        <header className="kidney-header">
                            <img
                                src={AsthmaImg}
                                alt="Childhood Asthma"
                                className="kidney-image"
                            />

                            <div className="kidney-meta">
                                <Link to="/pediatrics" className="kidney-category">
                                    Pediatric Department
                                </Link>
                                <span className="kidney-date">🕗 26 Feb 2026</span>
                            </div>

                            <h1 className="kidney-title">
                                Understanding Childhood Asthma and How to Manage It
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">

                            <h2 id="Introduction">1. Introduction to Childhood Asthma</h2>
                            <p>
                                Childhood asthma is a chronic lung disease that causes inflammation and narrowing of the air passages in children. 
                                It is one of the leading causes of hospitalization in children worldwide. Early diagnosis and proper pediatric asthma management can prevent complications and keep children active and healthy.
                            </p>

                            <h2 id="Causes">2. What Causes Asthma in Children?</h2>
                            <ul>
                                <li>Family history of asthma or allergies</li>
                                <li>Exposure to dust and pollution</li>
                                <li>Seasonal pollen</li>
                                <li>Viral respiratory infections</li>
                                <li>Passive smoking</li>
                                <li>Cold weather</li>
                            </ul>

                            <h2 id="Symptoms">3. Early Warning Signs & Symptoms</h2>
                            <ul>
                                <li>Coughing (especially at night)</li>
                                <li>Wheezing while breathing</li>
                                <li>Difficulty breathing while playing</li>
                                <li>Tightness in the chest</li>
                                <li>Frequent colds leading to chest congestion</li>
                            </ul>

                            <h2 id="Diagnosis">4. How Childhood Asthma Is Diagnosed</h2>
                            <ul>
                                <li>Comprehensive medical history</li>
                                <li>Physical examination</li>
                                <li>Lung function tests (above 5 years)</li>
                                <li>Allergy testing (if required)</li>
                            </ul>

                            <h2 id="Types">5. Types of Asthma in Children</h2>
                            <ul>
                                <li>Allergic asthma</li>
                                <li>Exercise-induced asthma</li>
                                <li>Seasonal asthma</li>
                                <li>Chronic asthma</li>
                            </ul>

                            <h2 id="Treatment">6. Treatment Options</h2>
                            <p><strong>Quick-Relief Medications:</strong> Rescue inhalers used during sudden asthma attacks.</p>
                            <p><strong>Long-Term Controller Medications:</strong> Daily medicines to reduce inflammation.</p>
                            <p><strong>Nebulization Therapy:</strong> Useful for younger children who cannot use inhalers properly.</p>

                            <h2 id="HomeCare">7. Managing Asthma at Home</h2>
                            <ul>
                                <li>Keep the house dust-free</li>
                                <li>Avoid smoke exposure</li>
                                <li>Follow inhaler instructions carefully</li>
                                <li>Maintain an asthma action plan</li>
                                <li>Regular pediatric visits</li>
                            </ul>

                            <h2 id="Prevention">8. Preventing Asthma Attacks</h2>
                            <ul>
                                <li>Identify and avoid triggers</li>
                                <li>Ensure flu and pneumonia vaccinations</li>
                                <li>Monitor breathing patterns regularly</li>
                                <li>Keep rescue medication accessible</li>
                            </ul>

                            <h2 id="Emergency">9. When to Call for Emergency Care</h2>
                            <ul>
                                <li>Difficulty speaking</li>
                                <li>Blue lips or fingernails</li>
                                <li>Very fast breathing</li>
                                <li>Rescue inhaler not helping</li>
                            </ul>

                            <h2 id="Outlook">10. Long-Term Outlook</h2>
                            <p>
                                Most children with asthma can live completely normal lives, including playing sports, attending school regularly, and participating in daily activities with proper management.
                            </p>

                            <h2 id="Importance">11. Why Early Treatment is Important</h2>
                            <ul>
                                <li>Reduces ER visits</li>
                                <li>Improves sleep quality</li>
                                <li>Supports healthy lung growth</li>
                                <li>Enhances academic performance</li>
                            </ul>

                            {/* CTA */}
                            <footer className="cta-section">
                                <h5 className="CTA">
                                    📞 Call us or visit us for a consultation. Early care makes all the difference.
                                </h5>
                                <Link to="/contact" className="cta-btn-wrapper">
                                    <Button variant="contained">Reach us out</Button>
                                </Link>
                            </footer>

                        </section>
                    </article>
                </main>

                {/* Sidebar */}
                <aside className="pane pane--sidebar">
                    <div className="sidebar-inner">

                        <nav className="toc">
                            <p className="toc__label"><span style={{ color: "Red" }}>On this page</span></p>
                            <ul>
                                {toc.map((item) => (
                                    <li key={item.id}>
                                        <a href={`#${item.id}`}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <br />

                        <h2 className="sidebar-title">Other Blogs</h2>
                        <div className="sidebar-list">
                            {otherBlogs.map((post, idx) => (
                                <Link to={post.to} key={idx} className="sidebar-card">
                                    <div className="sidebar-card__meta">
                                        <span>{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3>{post.title}</h3>
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

export default Asthma;