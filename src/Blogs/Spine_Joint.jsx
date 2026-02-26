import React from "react";
import Kidneyy from "./Images/Spine_Joint1.png";
import Kidneyy1 from './Images/Spine_Joint2.png';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Spine_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. Key Features Of A Holter Monitor Include" },
        { id: "Understanding", label: "3. Section 1: Spine Replacement Surgery" },
        { id: "Understandinggg", label: "4. Section 2: Joint Replacement Surgery" },
    ];

    return (
        <>
            <Helmet>
                <title>Spine & Joint Replacement | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Human Vertebral Column"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 21 December 2023</span>
                            </div>
                            <h1 className="kidney-title">
                                Understanding Spine and Joint Replacement
                            </h1>
                        </header>

            
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Spine and joint replacement surgeries have become increasingly common medical procedures aimed at improving the quality of life for individuals with debilitating conditions. These surgeries are often recommended when conservative treatments no longer provide relief, and the pain or dysfunction significantly affects daily activities.</p>

                            <br />


                            <h2 id="Understandingg">Section 1: Spine Replacement Surgery</h2>

                            <br />

                            <p><b>Overview:</b> Spine replacement, also known as spinal fusion or disc replacement, is a surgical procedure designed to address issues such as degenerative disc disease, herniated discs, or spinal instability. The primary goal is to alleviate pain, restore stability, and enhance overall spinal function.</p>   <br />

                            <p><b>Procedure:</b> During spine replacement surgery, damaged discs may be removed and replaced with artificial discs or fused together using bone grafts. The surgeon aims to stabilize the spine, reduce pain, and maintain or improve flexibility.</p>   <br />

                            <p><b>Recovery and Rehabilitation:</b> Post-surgery, patients typically undergo a rehabilitation program to regain strength, flexibility, and functionality. This process may involve physical therapy, pain management, and lifestyle adjustments to support long-term spine health.</p> 

                            <br />

                            <h2 id="Understandinggg">Section 2: Joint Replacement Surgery</h2>


                            <p><b>Overview:</b> Joint replacement surgery is commonly performed on weight-bearing joints like the knees, hips, and shoulders. Osteoarthritis, rheumatoid arthritis, or joint injuries are common reasons for undergoing joint replacement to alleviate pain and enhance joint function.</p>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy1}
                                    alt="Joint replacement surgery"
                                    loading="lazy"
                                    decoding="async"
                                />
                                 
                            </figure>

                            <br />


                            <p><b>Procedure:</b> In joint replacement surgery, the damaged joint surfaces are removed and replaced with artificial implants made of metal, plastic, or ceramic materials. This restores the joint's smooth movement and reduces pain caused by friction and inflammation.</p>  <br />

                            <p><b>Recovery and Rehabilitation:</b> Rehabilitation after joint replacement involves a structured program of physical therapy, exercise, and pain management. Patients are encouraged to gradually increase their activity levels, leading to improved joint function and mobility.</p>

                            <br />


                            <p><b>Conclusion:</b> Spine and joint replacement surgeries have revolutionized the treatment of chronic musculoskeletal conditions, providing relief to individuals who once faced limited mobility and persistent pain. As with any medical procedure, it's crucial for patients to consult with their healthcare providers to determine the most suitable treatment plan based on their unique circumstances.</p>

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

export default Spine_Blog;
