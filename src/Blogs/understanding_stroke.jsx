import React from "react";
import nutrition from "./Images/understanding_stroke.png";
import Understanding_stroke1 from './Images/understanding_stroke1.png';
import Understanding_stroke2 from './Images/understanding_stroke2.png';
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
        { id: "Stroke", label: "What is a Stroke?" },
        { id: "Types_of_Stroke", label: "Types of Stroke" },
        { id: "Common_Symptoms_of_Stroke", label: "Common Symptoms of Stroke" },
        { id: "Remember:_Act_F.A.S.T.", label: "Remember: Act F.A.S.T." },
        { id: "Golden_Hour", label: "'Golden Hour' for Ischemic Stroke" },
        { id: "Risk_Factors", label: "Risk Factors" },
        { id: "Prevention_Tips", label: "Prevention Tips" },
        { id: "Recovery_and_Rehabilitation", label: "Recovery and Rehabilitation" },
        { id: "When_to_Talk_Help", label: "When to Talk Help" },
    ];

    return (
        <>
            <Helmet>
                <title>Understanding Stroke | Shree Saibaba Multispeciality Hospital</title>
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
                            <img
                                src={Understanding_stroke1}
                                alt="Ischemic & Hemorrhagic Stroke"
                                className="kidney-image"
                            />
                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 15 January 2025</span>
                            </div>
                            <h1 className="kidney-title">
                                Understanding Stroke: Symptoms, Causes, and Prevention
                            </h1>
                        </header> 

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Stroke">What is a Stroke?</h2>
                            <p>
                                A stroke occurs when an artery supplying blood to the brain either becomes blocked or reduces its blood supply,
                                essentially starving that part of the brain of vital oxygen and nutrients. In a matter of minutes, this situation
                                can destroy or injure brain cells, making a stroke a medical emergency.
                            </p>  <br />

                            <h2 id="Types_of_Stroke">Types of Stroke</h2>
                            <ul>
                                <li><b>Ischemic Stroke:</b> This is caused by an artery blockage and accounts for 87% of all strokes.</li>
                                <li><b>Hemorrhagic Stroke:</b> This is due to a ruptured blood vessel that causes bleeding either in or around the brain.</li>
                                <li><b>Transient Ischemic Attack (TIA):</b> A temporary disruption in blood flow to the brain, sometimes referred to as a "mini-stroke."</li>
                            </ul>  <br />

                            <h2 id="Common_Symptoms_of_Stroke">Common Symptoms of Stroke</h2>
                            <ul>
                                <ol>
                                    <li>Sudden numbness or weakness of the face, arm, or leg, usually on one side of the body.</li>
                                    <li>Confusion or difficulty speaking.</li>
                                    <li>Difficulty with speech.</li>
                                    <li>Trouble seeing in one or both eyes</li>
                                    <li>Difficulty in walking, dizziness, or loss of balance and coordination.</li>
                                    <li>Severe headache of unknown origin.</li>
                                    <li>Tingling sensations over the body like around the mouth, hands, or legs.</li>
                                    <li>Severe vomiting, giddiness.</li>
                                </ol>
                            </ul>   <br />

                            <h2 id="Remember:_Act_F.A.S.T.">Remember: Act F.A.S.T.</h2>

                            <ul>
                                <ol>
                                    <li>Drooping Face</li>
                                    <li>Arm Weakness</li>
                                    <li>Speech Difficulty</li>
                                    <li>Time to Call Emergency Services Immediately</li>
                                </ol>
                            </ul>   <br />

                            <figure className="inline-illustration">
                                <img
                                    src={nutrition}
                                    alt="Common Type of Stroke"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <h2 id="Golden_Hour">'Golden Hour' for Ischemic Stroke:</h2>

                            <p>The first 60 minutes that follow the stroke, up to 4-5 hours, is called the "golden hour."</p>
                            <p>The treatment provided within this golden hour is most effective and minimizes brain damage. So, reach the hospital as early as possible.</p>
                            <br />


                            <h2 id="Risk_Factors">Risk Factors</h2>

                            <h3><b>Modifiable Risk Factors:</b></h3>
                            <ul>
                                <ol>
                                    <li>High blood pressure</li>
                                    <li>Smoking</li>
                                    <li>Diabetes</li>
                                    <li>Obesity</li>
                                    <li>Physical inactivity</li>
                                    <li>High cholesterol</li>
                                </ol>
                            </ul>

                            <h3><b>Non-Modifiable Risk Factors:</b></h3>
                            <ul>
                                <ol>
                                    <li>Age-more than 55 years of age</li>
                                    <li>Family history</li>
                                    <li>Gender (higher risk for men, yet women have poorer outcomes)</li>
                                </ol>
                            </ul>  <br />

                            <h2 id="Prevention_Tips">Prevention Tips</h2>
                            <ul>
                                <ol>
                                    <li><b>Maintain Healthy Blood Pressure:</b> The normal range should be 120/80 mmHg.</li>
                                    <li><b>Stay Active:</b> Regular physical activity helps to manage weight and reduces the risk of stroke.</li>
                                    <li><b>Stop Smoking:</b> This damages blood vessels and accelerates the formation of blood clots.</li>
                                    <li><b>Follow a healthy diet:</b> Focus on fruits, vegetables, whole grains, lean protein, and limiting salt and trans fat.</li>
                                    <li><b>Monitor chronic conditions:</b> appropriate management of diabetes, heart conditions, and cholesterol can reduce risks.</li>
                                    <li><b>Limit Alcohol:</b> Excessive drinking raises the risk of high blood pressure.</li>
                                </ol>
                            </ul>  <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Understanding_stroke2}
                                    alt="Prevention Tips"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <h2 id="Recovery_and_Rehabilitation">Recovery and Rehabilitation</h2>
                            <p>Rehabilitation is usually needed after a stroke to help regain lost skills and improve quality of life. Common treatments include:</p>
                            <ul>
                                <li><b>Physical Therapy:</b> Enhances strength, function, and flexibility. </li>
                                <li><b>Speech Therapy:</b> Focuses on challenges to speech or swallowing.</li>
                                <li><b>Occupational Therapy:</b> Assists with relearning activities of daily living to remain independent. </li>
                            </ul>  <br />


                            <h2 id="When_to_Talk_Help">When to Talk Help:</h2>
                            <p>A stroke can happen any time to anybody. Immediate medical attention is important to minimize the damaging of the brain and to increase the
                                chances for a good recovery. If either you or someone around you starts to show stroke symptoms, please call emergency services immediately.</p>
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
                            <p className="toc__label"><span style={{color : "Red"}}>On this page</span></p>
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

export default NutritionBlog;
