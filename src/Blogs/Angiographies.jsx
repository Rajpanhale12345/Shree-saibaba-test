import React from "react";
import Kidneyy from "./Images/Angiographies.png";
import Angiographies1 from "./Images/Angiographies1.png";
import Angiographies2 from "./Images/Angiographies2.png";
import Angiographies3 from "./Images/Angiographies3.png";
import Angiographies4 from "./Images/Angiographies4.png";
import Angiographies5 from "./Images/Angiographies5.png";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Angiographies_Blog() { 
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Coronary", label: "2. Coronary Angiography" },
        { id: "Cerebral", label: "3. Cerebral Angiography" },
        { id: "Pulmonary", label: "4. Pulmonary Angiography" },
        { id: "Renal", label: "5. Renal Angiography" },
        { id: "Peripheral", label: "6. Peripheral Angiography" },
    ];

    return (
        <>
            <Helmet>
                <title>Angiographies | Shree Saibaba Multispeciality Hospital</title>
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
                                src={Kidneyy}
                                alt="Several Type of Angiographies"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 03 May 2019</span>
                            </div>
                            <h1 className="kidney-title">
                                Types of Angiographies
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>

                            <p>There are several types of angiographies, which are used to examine blood vessels throughout the body. Here are some of the most common types:</p>

                            <br />


                            <h2 id="Coronary">1. Coronary Angiography:</h2>

                            <p>This type of angiography is used to examine the blood vessels of the heart. A catheter is inserted through a blood vessel in the groin or wrist and guided up into the heart, where a contrast dye is injected to create detailed images of the blood vessels.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Angiographies1}
                                    alt="Coronary Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Cerebral">2. Cerebral Angiography:</h2>

                            <p>This type of Angiography is used to examine the blood vessels in the brain. A Catheter is inserted into an Artery in the groin or wrist and guided up to the Blood vessels in the Brain, where a contrast dye is injected to create detailed images.</p>

                             <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Angiographies2}
                                    alt="Cerebral Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <h2 id="Pulmonary">3. Pulmonary Angiography:</h2>

                            <p>This type of Angiography is used to examine the blood vessels in the Lungs. A catheter is inserted through a blood vessel in the groin or neck and guided up to the Blood vessels in the lungs, where a contrast dye is injected to create detailed images.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Angiographies3}
                                    alt="Pulmonary Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Renal">4. Renal Angiography:</h2>

                            <p>This type of Angiography is used to examine the blood vessels in the kidneys. A catheter is inserted through a blood vessel in the groin and guided up to the blood vessels in the kidneys, where a contrast dye is injected to create detailed images.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Angiographies4}
                                    alt="Renal Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> 

                            <br />


                            <h2 id="Compression">5. Peripheral Angiography:</h2>

                            <p>This type of Angiography is used to examine the blood vessels in the kidneys. A catheter is inserted through a blood vessel in the groin and guided up to the blood vessels in the kidneys, where a contrast dye is injected to create detailed images.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Angiographies5}
                                    alt="Peripheral Angiography"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> 

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

export default Angiographies_Blog;
