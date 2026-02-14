import React from "react";
import Kidneyy from "./Images/Holter.png";
import Kidneyy1 from './Images/Holter1.png';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Holter_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. Key Features Of A Holter Monitor Include" },
    ];

    return (
        <>
            <Helmet>
                <title>Holter Monitor | Shree Saibaba Multispeciality Hospital</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="og:description" content="" />
            </Helmet>

            <div className="kidney-page">
       
                <main className="pane pane--main" aria-label="Recovery article">
                    <article className="kidney-article">
                    
                        <header className="kidney-header">
                            <img style={{ objectFit: "fill" }}
                                src={Kidneyy}
                                alt="Several Type of Angiographies"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 28 April 2023</span>
                            </div>
                            <h1 className="kidney-title">
                                General Information About Holter Monitors
                            </h1>
                        </header>

                     
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>A Holter monitor is a small, portable medical device used to monitor and record a person's heart activity continuously for an extended period, typically 24 to 48 hours. It is an ambulatory electrocardiography (ECG or EKG) used to detect irregular heart rhythms or other cardiac issues that may not be present during a standard short-duration ECG test.</p>

                            <br />


                            <h2 id="Understandingg">Key Features Of A Holter Monitor Include:</h2>

                            <br />

                            <p><b>Continuous Monitoring:</b> Unlike a standard ECG, which only records heart activity for a few minutes, a Holter monitor records the heart's electrical signals over an extended period while the patient goes about their daily activities.</p>  <br />

                            <p><b>Portable Design:</b> Holter monitors are small, lightweight, and can be easily worn by the patient on a belt or shoulder strap. They come with electrodes that are attached to the chest to detect and record the heart's electrical signals.</p>  <br />

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy1}
                                    alt="Cerebral Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                               
                            </figure>

                            <br />


                            <p><b>Event Recording:</b> Some Holter monitors have event recording capabilities that allow patients to activate the recording manually when they experience symptoms like palpitations or dizziness. This helps doctors correlate symptoms with the heart's electrical activity.</p> <br />

                            <p><b>Data Analysis:</b> After the monitoring period, the recorded data is downloaded to a computer for analysis. Cardiologists or other medical professionals interpret the data to identify any abnormal heart rhythms or other cardiac issues.</p>

                            <br />

                            <p>Holter monitors are commonly used in the diagnosis and management of various heart conditions, such as arrhythmias, atrial fibrillation, and bradycardia, among others. They provide valuable insights into a patient's heart function during normal daily activities, which may help tailor appropriate treatment plans.</p>

                            <br />

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

                
                <aside className="pane pane--sidebar" aria-label="Other blog posts">
                    <div className="sidebar-inner">

              
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

export default Holter_Blog;
