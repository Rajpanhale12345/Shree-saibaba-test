import React from "react";
import Kidneyy from "./Images/Varicose_Veins.png";
import Kidneyy1 from './Images/Varicose_Veins1.png';
import Kidneyy2 from "./Images/Varicose_Veins2.png";
import Kidneyy3 from './Images/Varicose_Veins3.png';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Varicose_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. Key Features Of A Holter Monitor Include" },
        { id: "Understanding", label: "3. Section 1: Spine Replacement Surgery" },
    ];

    return (
        <>
            <Helmet>
                <title>Varicose Veins | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Varicose Veins"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 15 December 2023</span>
                            </div>
                            <h1 className="kidney-title">
                                General Information about Varicose Veins and Their Treatments
                            </h1>
                        </header>

         
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Varicose veins are swollen, twisted veins that often appear blue or dark purple in color. They usually occur in the legs and can cause discomfort, pain, and cosmetic concerns. Varicose veins develop when the valves in the veins that help blood flow toward the heart become weakened or damaged. This causes blood to pool in the veins, leading to their enlargement and distortion.</p>  <br />

                            <p>Varicose veins are visible and palpable. Definitive diagnosis of varicose veins is done by color Doppler venous study. It is important to do Doppler study to diagnose varicose veins, to decide extent of disease and plan treatment.</p>  <br />

                            <p>Treatments for varicose veins aim to alleviate symptoms, improve blood flow, and reduce the appearance of the veins. Some common treatment options include:</p>

                            <br />


                            <h2 id="Understandingg">Lifestyle Changes:</h2>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy1}
                                    alt="Endovenous Laser Treatment"
                                    loading="lazy"
                                    decoding="async" />
                               
                            </figure>

                            <br />

                            <p><b>Regular exercise:</b> Engaging in activities like walking, swimming, and cycling can improve circulation and help prevent varicose veins from worsening.</p>   <br />

                            <p><b>Weight management:</b> Maintaining a healthy weight reduces pressure on the veins and improves blood flow.</p>   <br />

                            <p><b>Elevating legs:</b> Elevating your legs periodically can help reduce swelling and improve blood circulation.</p> 

                            <br />

                            <h2 id="Compression">Compression Stockings:</h2>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy2}
                                    alt="Compression Stockings"
                                    loading="lazy"
                                    decoding="async"
                                />
 
                            </figure>

                            <br />


                            <p>Compression stockings are specially designed socks that apply pressure to the legs, helping to improve blood flow and reduce swelling.</p>  <br />

                            <p><b>Laser Therapy:</b> Laser therapy first choice of treatment nowadays to treat varicose veins. It involves directing focused laser energy onto the veins, causing them to collapse and fade. It is a daycare procedure done under local anesthesia. Patient can go home in the evening.</p>
                            
                            <br />

                            <h2 id="Sclerotherapy">Sclerotherapy:</h2>

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy3}
                                    alt="Scalerotherapy"
                                    loading="lazy"
                                    decoding="async"
                                />
                                
                            </figure>

                            <br />

                            <p>In this minimally invasive procedure, a solution is injected directly into the varicose veins, causing them to shrink and eventually fade away.</p>  <br />

                            <p><b>Vein Stripping:</b> In more severe cases, a surgical procedure called vein stripping may be recommended. This involves removing the affected vein through small incisions. Now it is replaced by minimally invasive laser therapy</p>  <br />

                            <p>It's important to note that the best treatment option depends on factors such as the severity of your varicose veins, your overall health, and your preferences.</p>   <br />

                            <p>Remember that while these treatments can address the symptoms and appearance of varicose veins, lifestyle changes like regular exercise and maintaining a healthy weight can also play a significant role in preventing the development or worsening of varicose veins.</p>


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

export default Varicose_Blog;
