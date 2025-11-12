import React from "react";
import Dengue1 from "./Images/Dengue1.png";
import Denguee from './Images/Dengue.png';
import Dengue2 from './Images/Dengue2.png'
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Dengue() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "Introduction" },
        { id: "Transmission", label: "Transmission" },
        { id: "Diagnosis", label: "Diagnosis" },
        { id: "Complication", label: "Complication" },
        { id: "Treatment", label: "Treatment" },
        { id: "Prevention", label: "Prevention" },
        { id: "Conclusion", label: "Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Vitamin B12 | Shree Saibaba Multispeciality Hospital</title>
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
                                src={Denguee}
                                alt="Recovery care after hospital discharge"
                                className="kidney-image"/>

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 August 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Dengue: Understanding the Disease
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Dengue, or more simply dengue fever, is a viral infection transmitted by mosquitoes that has become a serious public health threat worldwide. It occurs in tropical and sub-tropical areas of the world, with the major burden in urban and peri-urban areas. Dengue disease results from infection with the dengue virus (DENV), for which there exist four distinct, but closely related, serotypes (DENV-1, DENV-2, DENV-3, and DENV-4). A person can be infected by each serotype independently, resulting in potential lifetime risks of dengue infection.</p>

                            <br />

                            <h2 id="Transmission">Transmission</h2>
                            <p>Dengue is primarily spread by the bites of female mosquitoes from the Aedes aegypti species, though in some cases it may be spread by Aedes albopictus. These mosquitoes prefer laying their eggs in stagnant water found in places like containers, discarded tires, and blocked gutters. They are most active during daylight, especially in the early morning and late afternoon.</p>

                            <br />


                            <h2 id="Diagnosis">Diagnosis</h2>
                            <p>The diagnosis of dengue primarily relies on the symptoms presented and the patient's history, especially if they have traveled to or live in areas where dengue is endemic. Laboratory tests can confirm either the presence of the virus or antibodies that indicate an infection.</p>

                            <p>Laboratory confirmation of the disease includes:</p>
                            <ul>
                                <li>Polymerase chain reaction tests</li>
                                <li>Dengue NS1 antigen tests</li>
                                <li>Serological tests for the detection of antibodies, including IgM and IgG</li>
                            </ul>

                            <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Dengue1}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <h2 id="Complication">Complication</h2>
                            <p>Symptoms of dengue can range from mild to severe. It usually presents 4-10 days after the infective mosquito bite. The common symptoms include:</p>
                            <ul>
                                <li>High fever</li>
                                <li>Severe headache</li>
                                <li>Pain behind the eyes</li>
                                <li>Joint and muscle pains</li>
                                <li>Nausea and vomiting</li>
                                <li>Skin rash</li>
                                <li>Mild bleeding (such as nose or gum bleeding, or easy bruising)</li>
                            </ul>

                            <br />

                            <p>In some cases, the disease develops into a more severe form, known as severe dengue, and it has also been referred to as dengue hemorrhagic fever (DHF) or dengue shock syndrome (DSS). Severe dengue is a life-threatening complication that includes plasma leakage, or fluid accumulation, respiratory distress, severe bleeding, or organ impairment.</p>

                            <br />

                            <h2 id="Treatment">Treatment</h2>
                            <p>There is no specific antiviral treatment for dengue. Management of the disease focuses on relief of symptoms and supporting the patient's immune response. Key aspects of treatment include:</p>
                            <ul>
                                <li><b>Rest and hydration:</b> An abundance of fluids should be taken by the patients to avoid dehydration.</li>
                                <li><b>Analgesia:</b> Paracetamol (acetaminophen) can be given to help lower body temperature and relieve pain. It is essential to steer clear of aspirin and non-steroidal anti-inflammatory drugs because they can increase the chance of bleeding.</li>
                                <li><b>Hospitalization:</b> In severe dengue infections, hospitalization is often needed so that a patient can be monitored closely, and supportive care, such as intravenous fluids or blood transfusions if needed, can be provided.</li>
                            </ul>

                            <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Dengue2}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <h2 id="Prevention">Prevention</h2>

                            <p>Prevention of Dengue focuses primarily on controlling mosquito populations and protecting people from mosquito bites. Effective prevention strategies include: </p>

                            <ul>
                                <li><b>Eliminate mosquito breeding sites:</b> frequently empty and clean containers that hold water, cover up water storage containers, and use insecticides to treat the stagnant water.</li>
                                <li><b>MOSQUITO REPELLENTS:</b> Apply repellents on the exposed skin and clothes; employ mosquito nets, screens, and coils.</li>
                                <li><b>Wearing protective clothing:</b> Such as long-sleeved shirts and trousers, can reduce skin exposure due to mosquito bites.</li>
                                <li><b>Community efforts:</b> Include public health campaigns and community involvement to reduce the availability of breeding sites for mosquitoes and to improve awareness for dengue prevention.</li>
                            </ul>

                            <br />


                            <h2 id="Conclusion">Conclusion:</h2>
                            <p>Dengue fever, a significant health threat in many areas of the world, can have its effects mitigated by appropriate prevention and management. Controlling mosquitoes, educating the public, and improving health infrastructure are all key components of combating dengue. Likewise, research into vaccines and treatment is ongoing and holds promise for improved prevention and management of the disease in the future.</p>

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

export default Dengue;
