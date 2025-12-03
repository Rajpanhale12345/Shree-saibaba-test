import React from "react";
import Heart_Attack from "./Images/Heart_Attack.png";
import Heart_Attack1 from './Images/Heart_Attack1.png';
import Heart_Attack2 from './Images/Heart_Attack2.jpg';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Heart_Attack_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "Introduction" },
        { id: "Heartburn", label: "Heartburn vs Heart Attack" },
        { id: "Ignore", label: "Don't Ignore Persistent Discomfort" },
        { id: "Proactive", label: "Taking A Proactive Approach To Your Heart Health" },
    ];

    return (
        <>
            <Helmet>
                <title>Heart Attack | Shree Saibaba Multispeciality Hospital</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="og:description" content="" />
            </Helmet>

            {/* 2-column page: main on the left, sticky sidebar on the right */}
            <div className="kidney-page">
                {/* Main */}
                <main className="pane pane--main" aria-label="Recovery article">
                    <article className="kidney-article">
                        {/* Hero */}
                        <header className="kidney-header">
                            <img style={{ objectFit: "fill" }}
                                src={Heart_Attack1}
                                alt="Recovery care after hospital discharge"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 April 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Heartburn or Heart Attack
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>At times, it is common for us to feel heartburn: that burning sensation behind the breastbone produced by stomach acid moving back up into the esophagus. But what if we told you heartburn could be more than just a nuisance? Shree Saibaba Heart Institute and Research Center (SSHIRC) would like to educate you about another connection that may surprise you: heartburn and one's heart attack.</p>

                            <br />

                            <h2 id="Heartburn">Heartburn vs Heart Attack: Not so Always Black and White</h2>

                            <p>Although one may experience discomfort with heartburn, or a heart attack, it does not mean they are the same explanation:</p>

                            <ul>
                                <li><b>Heartburn:</b> esophagus irritation from stomach acid</li>
                                <li><b>Heart Attack:</b> heart muscle becomes starved for blood, because the coronary arteries are blocked</li>
                            </ul>
                            <br />

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Heart_Attack}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Ignore">Don't Ignore Persistent Discomfort</h2>

                            <p>If you are a frequent, or severe heartburn sufferer, here is what to do about it:</p>
                            <ul>
                                <li><b>Medical Advice:</b> Describe your symptoms to an SSHIRC doctor. After ruling out any heart conditions, they will be able to help you with the best treatments for heartburn.</li>
                                <li><b>Control Heartburn:</b> For many people, heartburn can be managed by changing lifestyle habits, such as avoiding trigger foods, maintaining a healthy weight, and raising the head of the bed and medication can help.</li>
                            </ul>
                            <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Heart_Attack2}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Proactive">Taking A Proactive Approach To Your Heart Health</h2>
                            <p>At SSHIRC we take a proactive approach to preventive cardiology. Ths is how we can help: </p>
                            
                            <ul>
                                <li>Comprehensive Heart Risk Assessment: Our well trained team will assess your individual risk factors for having heart disease including any reported history of heartburn. </li>
                                <li>Advanced Diagnostics: We use the most leading technology to diagnose and treat potential heart issues at an early stage.</li>
                                <li>Personalized Treatment Plans: We develop a personalized treatment plan to alleviate your heartburn and improve heart health.</li>
                            </ul>
                            
                            <p>Remember, early detection and early intervention are the ways to prevent a heart attack. If your heartburn does not go away or is more than just mildly uncomfortable, we encourage you to book an appointment at SSHIRC.</p>

                            <br />

                            <h2 style={{color: "blue"}}>Care for your heart starts with awareness. Let's come together for a healthier you!</h2>  <br />
                            <h2 style={{color : "blue"}}>Shree Saibaba Heart Institute and Research Center: A Partner in Heart Health</h2>  <br />

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

                        {/* TOC */}
                        <nav className="toc" aria-label="On this page">
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

export default Heart_Attack_Blog;
