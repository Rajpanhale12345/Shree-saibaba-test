import React from "react";
import CABG from "./Images/CABG.png";
import CABG1 from './Images/CABG1.png';
import CABG2 from './Images/CABG2.png';
import CABG3 from './Images/CABG3.png';
import CABG4 from './Images/CABG4.png';
import CABG5 from './Images/CABG5.png';
import CABG6 from './Images/CABG6.jpg';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Lifestyle_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "Introduction" },
        { id: "Regular", label: "Regular Physical Activity" },
        { id: "Smoking", label: "Smoking Cessation" },
        { id: "Medications", label: "Medications" },
        { id: "Stress", label: "Stress Management" },
        { id: "Weight", label: "Weight Management" },
        { id: "CABG", label: "CABG versus Other Cardiac Interventions: Making the Right Choice" },
    ];

    return (
        <>
            <Helmet>
                <title>Lifestyle | Shree Saibaba Multispeciality Hospital</title>
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
                                src={CABG}
                                alt="Recovery care after hospital discharge"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 15 February 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Lifestyle Changes and Medications After CABG
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>After a coronary artery bypass grafting (CABG) surgery, it is critical for patients to enact lifestyle changes and adhere to prescribed medications for optimal recovery and future heart health. These interventions include: - Dietary Adjustments: A heart-healthy diet low in saturated fats, cholesterol, and sodium is vital, often with an emphasis on fruits, vegetables, and whole grains.</p>

                            <br />

                            <h2 id="Regular">Regular Physical Activity:</h2>

                            <p>Cardiac rehabilitation programs and regular exercise tailored to individual patient needs help to improve cardiovascular fitness.</p>

                            

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG6}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure>

                            <br />


                            <h2 id="Smoking">Smoking Cessation:</h2>

                            <p>Patients must quit smoking entirely, as it is a significant risk factor for coronary artery disease.</p>

                            

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG1}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br /> 


                            <h2 id="Medications">Medications</h2>

                            <p>Patients will typically require medications such as antiplatelets, statins, beta-blockers, or ACE inhibitors to manage cholesterol levels, blood pressure, and prevent blood clots.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG2}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br /> 


                            <h2 id="Stress">Stress Management</h2>

                            <p>Techniques to reduce stress, like mindfulness, yoga, or therapy, can have positive effects on heart health.</p>


                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG3}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br /> 


                            <h2 id="Weight">Weight Management</h2>

                            <p>Maintaining a healthy weight through diet and exercise is crucial to decrease the workload on the heart. Adherence to these strategies is often closely monitored by healthcare professionals through regular follow-ups</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG4}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br /> 



                            <h2 id="CABG">CABG versus Other Cardiac Interventions: Making the Right Choice</h2>

                            <p>When deciding between Coronary Artery Bypass Grafting (CABG) and other cardiac interventions like percutaneous coronary intervention (PCI), several factors must be considered:</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={CABG5}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br /> 

                            <ol>
                                <ul><b>Disease Severity:</b> CABG is preferred for complex, multi-vessel coronary artery diseases, whereas PCI is suitable for less extensive blockages.</ul>
                                <ul><b>Patient Health:</b> Co-existing medical conditions may influence the choice, with CABG offering better outcomes for diabetic patients with advanced heart disease.</ul>
                                <ul><b>Longevity:</b> CABG tends to provide more durable results in the long term, especially in cases of severe blockages.</ul>
                                <ul><b>Recovery and Risks:</b> Patients must weigh the longer recovery period and increased initial risk of CABG against the potential need for repeat procedures with PCI.</ul>
                                <ul><b>Patient Preference:</b> Lifestyle implications and personal preference should align with the treatment choice, emphasizing the importance of informed consent and shared decision-making.</ul>
                            </ol>

                            <br />


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

export default Lifestyle_Blog;
