import React from "react";
import Understanding_CABG from "./Images/Understanding_CABG.png";
import Understanding_CABG1 from './Images/Understanding_CABG1.png';
import Understanding_CABG2 from './Images/Understanding_CABG2.png';
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
        { id: "Introduction", label: "Introduction" },
        { id: "Recommended", label: "When Is CABG Recommended? Indications for Surgery" },
        { id: "Different", label: "Different Types of Grafts Used in CABG" },
        { id: "Advancements", label: "Advancements in Minimally Invasive CABG Techniques" },
    ];

    return (
        <>
            <Helmet>
                <title>CABG | Shree Saibaba Multispeciality Hospital</title>
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
                            <img style={{objectFit : "fill"}}
                                src={Understanding_CABG}
                                alt="Coronary Artery Disease"
                                className="kidney-image"
                            />
                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 February 2025</span>
                            </div>
                            <h1 className="kidney-title">
                                Understanding Coronary Artery Bypass Grafting (CABG)
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>
                                Coronary Artery Bypass Grafting, commonly known as CABG, is a surgical procedure to restore normal blood flow to an obstructed coronary artery. A surgeon takes a healthy blood vessel from another part of the body and grafts it onto the coronary artery, bypassing the blocked section. The grafted artery or vein essentially forms a new path for oxygen-rich blood to flow to the heart muscle, circumventing the narrowed or blocked parts of the diseased coronary artery. This surgery is typically recommended when coronary arteries are narrowed or blocked and when other less invasive treatments like medications or angioplasty have not been successful. CABG aims to relieve symptoms such as chest pain, improve the patient's quality of life, and reduce the risk of a heart attack or other heart problems.
                            </p>

                            <br />

                            <h2 id="Recommended">When Is CABG Recommended? Indications for Surgery:</h2>

                            <p>Coronary Artery Bypass Grafting (CABG) is typically recommended when:</p>

                            <ul>
                                <li>There is severe blockage in the main artery or multiple blockages that are reducing blood flow to the heart.</li>
                                <li>Non-invasive treatments like medications or angioplasty have not been successful, or are not viable options.</li>
                                <li>A patient suffers from left main coronary artery disease, which is a blockage in the artery that supplies the majority of blood to the heart.</li>
                                <li>A patient is experiencing persistent symptoms such as chest pain (angina) and shortness of breath which significantly affect their quality of life.</li>
                                <li>There are complications from a previous percutaneous coronary intervention (PCI) such as re-narrowing of the arteries (restenosis).</li>
                                <li>The heart's left ventricular function is poor, indicating a larger area of the heart is at risk.</li>
                            </ul>
                            
                            <p>Each patient is assessed individually to determine the appropriateness of CABG in their treatment plan.</p>  
                            
                            <br />

                            <h2 id="Different">Different Types of Grafts Used in CABG:</h2>

                            <figure className="inline-illustration">
                                <img style={{objectFit : "fill"}}
                                    src={Understanding_CABG1}
                                    alt="CABG Different Type"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcapption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <p>In Coronary Artery Bypass Grafting (CABG), surgeons use various types of grafts to bypass blocked coronary arteries. The choice of graft depends on the patient's condition, the number of bypasses needed, and the specific coronary arteries involved.</p>

                            <p><b>Commonly Used Graft Types: Arterial Grafts:</b></p>

                            <ul>
                                <li><b>Internal Mammary Arteries (IMAs):</b> Often preferred due to their durability and long-term results.</li>
                                <li><b>Radial Artery:</b> Harvested from the forearm; used for its versatility and suitable size.</li>
                                <li><b>Gastroepiploic Artery:</b> Taken from the stomach; less commonly used but can be an option in certain cases.</li>
                            </ul>

                            <br />

                            <p><b>Venous Grafts:</b></p>

                            <ul>
                                <li><b>Great Saphenous Vein:</b> Frequently utilized vein from the leg, known for its length and accessibility.</li>
                                <li><b>Lesser Saphenous Vein:</b> An alternative when the great saphenous is not usable.</li>
                            </ul>

                            <p>Arterial grafts generally have better longevity than venous grafts, but each type has its own indications and potential benefits. Surgeons consider various factors to determine the most appropriate graft for each individual patient</p>

                            <br />

                            <p><b>The CABG Procedure: A Step-by-Step Guide</b></p>

                            <ol>
                                <li><b>Preparation:</b> The patient undergoes anaesthesia, and the chest area is cleaned and prepared for surgery.</li>
                                <li><b>Incision:</b> A surgeon makes an incision down the middle of the chest, then the breastbone is split to access the heart.</li>
                                <li><b>Heart Access:</b> The heart is stopped temporarily, and a heart-lung bypass machine takes over blood circulation.</li>
                                <li><b>Graft Harvesting:</b> A healthy artery or vein is harvested from another part of the body, often the leg or chest.</li>
                                <li><b>Grafting:</b> The harvested vessel is attached (grafted) above and below the blocked artery segments.</li>
                                <li><b>Restoring Blood Flow:</b> Once grafting is complete, the heart is restarted and checked for proper blood flow.</li>
                                <li><b>Closing Incision:</b> The breastbone is wired together, and the incision is closed with sutures or staples.</li>
                                <li><b>Postoperative Care:</b> The patient is moved to ICU for monitoring and begins the recovery process.</li>
                            </ol>
                            
                            <br />

                            <h2 id="Advancements">Advancements in Minimally Invasive CABG Techniques:</h2>

                            <figure className="inline-illustration">
                                <img style={{objectFit : "fill"}}
                                    src={Understanding_CABG2}
                                    alt="Advancements CABG Techniques"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcapption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <p>Recent developments in minimally invasive coronary artery bypass grafting (CABG) have significantly improved patient outcomes.</p>

                            <p><b>Advancements include:</b></p>

                            <ul>
                                <li><b>Endoscopic Vessel Harvesting:</b> Surgeons now often use endoscopy to harvest the necessary arteries or veins, reducing recovery time and infection risks.</li>
                                <li><b>Robotic-Assisted Surgery:</b> Utilizing robotic systems enhances precision and allows for smaller incisions.</li>
                                <li><b>Hybrid Revascularization:</b> Combining minimally invasive CABG with percutaneous coronary intervention (PCI) can optimize results for certain patient groups.</li>
                            </ul>

                            <p>These innovations lead to reduced trauma, quicker recovery times, and better overall patient satisfaction compared to traditional open-heart CABG techniques.</p>

                            <br />

                            <p><b>Recovery Process After Coronary Artery Bypass Surgery</b></p>

                            <p>Postoperative recovery from Coronary Artery Bypass Grafting involves monitored hospitalization and structured rehabilitation. Initial hospital stays typically last around one week, during which patients receive pain management and begin minimal physical activity. Post-discharge, recovery continues at home with:</p>

                            <li>Gradual resumption of light activities</li>
                            <li>Participation in a cardiac rehabilitation program</li>
                            <li>Adherence to prescribed medications</li>
                            <li>Regular follow-ups with the cardiac care team</li>

                            <p>Lifestyle modifications, including diet, exercise, and smoking cessation, are crucial for long-term graft patency. The full recovery period can vary but often extends to several months.</p>
                            
                            <br />

                            <p><b>Potential Risks and Complications of CABG</b></p>

                            <p>While CABG is a common and generally safe procedure, it carries potential risks and complications. Some of these include:</p>

                            <ul>
                                <li><b>Infection at the incision site:</b> This can manifest as redness, swelling, and sometimes discharge.</li>
                                <li><b>Stroke:</b> Caused by blood clots or air bubbles that can travel to the brain during surgery</li>
                                <li><b>Heart attack:</b> Although the surgery aims to prevent heart attacks, there is a small risk during or after the procedure.</li>
                                <li><b>Irregular heart rhythms (arrhythmias):</b> These can be temporary or permanent, requiring medication or other interventions.</li>
                                <li><b>Memory loss or cognitive difficulties:</b> Some patients report these conditions, particularly in the early postoperative period.</li>
                                <li><b>Kidney problems:</b> These can range from temporary impairment to kidney failure.</li>
                                <li><b>Blood clots:</b> Can lead to deep vein thrombosis or pulmonary embolism.</li>
                                <li><b>Bleeding requiring transfusion or re-operation:</b> Surgery can lead to uncontrolled bleeding in some cases.</li>
                                <li><b>Pneumonia:</b> A potential respiratory complication after surgery.</li>
                            </ul>


                            <p>Patients should discuss these potential risks with their healthcare provider to fully understand their individual risk profile.</p>

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

export default NutritionBlog;
