import React from "react";
import Kidneyy from "./Images/Angiography.png";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Angiography_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. What Radial Angiography Is And How It Differs From Other Types Of Angiographies" },
        { id: "Compression", label: "3. Benefits of Radial Angiography" },
    ];

    return (
        <>
            <Helmet>
                <title>Angiography | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Angiography"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 03 May 2019</span>
                            </div>
                            <h1 className="kidney-title">
                                Benefits of Radial Angiography
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>

                            <p>Radial angiography is a diagnostic procedure that allows doctors to examine coronary arteries (blood vessels of heart) using a catheter passed from arteries of hand ( radial artery). Over the past decade, this procedure has been increasingly used as an alternative to the traditional femoral approach. In this blog, we will explore the benefits of radial angiography.</p>

                            <br />


                            <h2 id="Understandingg">What Radial Angiography Is And How It Differs From Other Types Of Angiographies</h2>

                            <p>Radial angiography is a diagnostic procedure used to evaluate the Heart's blood vessels i.e coronary arteries. In radial angiography, a thin, flexible tube called a catheter is inserted into the radial artery in the wrist, instead of the femoral artery in the groin like in femoral angiography. This approach allows for easier access and increased patient comfort during the procedure. Once the catheter is in place, dye is injected into the artery, and X-ray images are taken to visualize the heart’s blood vessels. These images can help detect any blockages or other abnormalities in the blood vessels that could be causing symptoms or putting the patient at risk for a Heart attack. Compared to Femoral Angiography, Radial angiography offers several benefits. It is less invasive, meaning that there is a lower risk of bleeding or other complications. It also allows for a quicker recovery time, as patients can usually resume normal activities within a few hours after the procedure. Additionally, radial angiography exposes patients to less radiation than femoral angiography, which is an important consideration for patients who require multiple diagnostic procedures. Overall, radial angiography is an important diagnostic tool in the evaluation of Heart disease, offering a patient-friendly approach with numerous benefits.</p>

                            <br />

                            <h2 id="Compression">Benefits of Radial Angiography</h2>

                            <p>Radial angiography is a diagnostic procedure that allows doctors to examine blood vessels in the arm using a catheter. Over the past decade, this procedure has been increasingly used as an alternative to the traditional femoral approach. In this blog, we will explore the benefits of radial angiography.</p>   <br />

                            <p><b>Less Risk Of Complications:</b> One of the most significant benefits of radial angiography is that it is associated with a lower risk of complications compared to the femoral approach.</p>  <br />

                            <p><b>Cost-Effective:</b> Radial angiography is also cost-effective compared to the femoral approach.</p>   <br />

                            <p><b>Improved Patient Comfort:</b> Patients who undergo radial angiography typically experience less pain and discomfort than those who undergo the femoral approach.</p>  <br />

                            <p><b>Faster Recovery Time:</b> Radial angiography is associated with a faster recovery time than the femoral approach.</p>  <br />

                            <p><b>Conclusion:</b> In conclusion, radial angiography offers several benefits over the traditional femoral approach, including a lower risk of complications, cost-effectiveness, improved patient comfort, and faster recovery time.</p>


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

export default Angiography_Blog;
