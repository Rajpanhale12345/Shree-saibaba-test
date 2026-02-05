import React from "react";
import Kidneyy from "./Images/Urology_Kidney_Blog.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Urology_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Coronary", label: "2. Why choose a Specialized Urology Hospital in Nashik?" },
        { id: "Cerebral", label: "3. Kidney Stone Treatment in Nashik — What patients should know" },
        { id: "Maintainingg", label: "4. Advanced Prostate Treatment in Nashik" },
        { id: "Maintaining", label: "5. Women's Urology Care with Confidentiality" },
        { id: "Expertise", label: "6. Bladder & Urinary Tract Disorder Treatment" },
        { id: "Technology", label: "7. The New Age of Urology Treatment: Minimally Invasive Urology Surgery" },
        { id: "Why", label: "8. Emergency Urology Care - 24/7 Support" },
        { id: "Summary", label: "9. When to Visit a Urologist?" },
        { id: "Conclusion", label: "10. Conclusion" },
    ];

    const siteUrl = "https://shreesaibabamultispecialityhospital.com";
    const pageUrl = `${siteUrl}/Urology_Blog`;
    const title = "Kidney Stones & Prostate Care";
    const description =
        "Looking for the best urology hospital in Nashik? Learn about kidney stone treatment, laser prostate surgery (TURP), UTI care, and minimally invasive urology at Shree Saibaba Multispeciality Hospital.";
    const keywords =
        "best urology hospital in nashik, kidney stone treatment nashik, kidney stone surgery nashik, ureteroscopy laser nashik, lithotripsy nashik, laser prostate surgery nashik, TURP nashik, enlarged prostate treatment nashik, UTI treatment nashik, women's urology nashik, minimally invasive urology surgery nashik, urologist in nashik, Shree Saibaba Multispeciality Hospital";

    const ogImage = `${siteUrl}/assets/Urology_Kidney_Blog-nWZxCyLL.jpg`; 

    const publishedDate = "2026-02-05";
    const modifiedDate = "2026-02-05"; // update when you edit content

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": [ogImage],
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "author": {
            "@type": "Person",
            "name": "Dr. Aniruddha Dharmadhikari"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Shree Saibaba Multispeciality Hospital",
            "url": siteUrl
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${siteUrl}/blogs` },
            { "@type": "ListItem", "position": 3, "name": "Urology", "item": pageUrl }
        ]
    };

    return (
        <>
            <Helmet>
                {/* Primary SEO */}
                <title>{title} | Shree Saibaba Multispeciality Hospital</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={pageUrl} />

                {/* Robots */}
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:alt" content="Urology care in Nashik - kidney stones and prostate treatment" />
                <meta property="og:site_name" content="Shree Saibaba Multispeciality Hospital" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />

                {/* Local SEO helpers */}
                <meta name="geo.region" content="IN-MH" />
                <meta name="geo.placename" content="Nashik" />
                <meta name="language" content="English" />

                {/* Article dates (optional but helpful) */}
                <meta property="article:published_time" content={`${publishedDate}T00:00:00+05:30`} />
                <meta property="article:modified_time" content={`${modifiedDate}T00:00:00+05:30`} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
                                alt="Advance Robotic Surgery"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 05 Feb 2026</span>
                            </div>
                            <h1 className="kidney-title">
                                Kidney Stones & Prostate Care
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>

                            <p>If you are looking for the best urology hospital in Nashik for kidney stones or advanced prostate
                                care, get an insight into modern urology so that you can make faster, better health decisions.
                                At Shree Saibaba Multispeciality Hospital, the Centre for Urology provides comprehensive,
                                minimally invasive solutions for both men and women suffering from urinary tract and reproductive
                                system disorders.</p> <br />
                            <p>This guide discusses the most searched and AI-suggested topics: kidney stone surgery, laser prostate
                                surgery, UTI treatment, and minimally invasive urological surgery in Nashik.</p>

                            <br />


                            <h2 id="Coronary">Why choose a Specialized Urology Hospital in Nashik?</h2>

                            <p>Urological disorders may require accurate diagnosis, advanced imaging, and expert urosurgeons. A specialized center provides you with:</p>

                            <ul>
                                <li>Modern operating rooms</li>
                                <li>Sophisticated endoscopic and laparoscopic equipment</li>
                                <li>Urodynamic studies, cystoscopy, and CT scans</li>
                                <li>Emergency urology services 24/7</li>
                            </ul>

                            <p>Such hospitals are known to provide faster recovery, reduced pain, and shorter hospital stays, especially in minimally invasive procedures.</p>
                            <br />


                            <h2 id="Cerebral">Kidney Stone Treatment in Nashik — What patients should know</h2>

                            <p>Kidney stones are among the most common reasons for visiting a urologist. Dehydration, excess salt intake, frequent infections, and heredity are the leading causes.</p>
                            <br />

                            <p><b>Kidney Stone Symptoms</b></p>

                            <ul>
                                <li>Back or side pain that is severe/painful</li>
                                <li>Feeling pain when a person urinates</li>
                                <li>Blood in Urine</li>
                                <li>Frequent urge to urinate</li>
                            </ul>
                            <br />

                            <p><b>Modern Kidney Stone Removal Techniques</b></p>
                            <p>At an advanced medical facility, you can expect:</p>
                            <ul>
                                <li>Endoscopy of the kidneys and ureters through a small tube/catheter into the kidney while using a laser.</li>
                                <li>Ureteroscopy using a laser to remove the kidney stones.</li>
                                <li>Laparoscopic surgery to remove the kidney stones.</li>
                                <li>Using shock waves to break the kidneys and the stones (Lithotripsy).</li>
                            </ul>
                            <br />

                            <p>Each of these methods uses very small cuts (incisions) in the body and, as a result, will provide you with an opportunity to return quickly to normal activities.
                                Choosing a Nashik hospital that offers minimally invasive surgical procedures is likely to offer you higher odds of surviving kidney stones if you need them surgically removed.</p>

                            <br />

                            <h2 id="Maintainingg">Advanced Prostate Treatment in Nashik</h2>

                            <p>In Nashik, the ability to be treated for prostate problems early can greatly improve your quality of life if you are a man over 50 years old.</p>
                            <br />

                            <p><b>Types of Prostate Problems </b></p>

                            <ul>
                                <li>Weakened flow of urine</li>
                                <li>The urge to go "to the bathroom" during the night</li>
                                <li>Difficulty getting the urge to urinate</li>
                                <li>Not being able to fully empty your bladder after urinating</li>
                            </ul>
                            <br />

                            <p><b>Laser Prostate Surgery & TURP</b></p>
                            <p>At an advanced medical facility, you can expect:</p>

                            <ul>
                                <li>TURP (Transurethral Resection of Prostate)</li>
                                <li>Laser prostatectomy for an enlarged prostate</li>
                                <li>Endoscopic prostate surgery</li>
                            </ul>
                            <br />

                            <p>Each of these procedures uses very small cuts (incisions), thereby reducing the amount of blood lost and consequently reducing the length of recovery time. If you wish to have laser prostate surgery performed in Nashik, you may wish to find a facility that specializes in Endourology.</p>

                            <br />


                            <h2 id="Maintaining">Women's Urology Care with Confidentiality</h2>


                            <p>Women tend to delay seeking bladder or urinary tract issues since discussing them can be embarrassing. Our expert urology care team provides:</p>

                            <ul>
                                <li>Treatment for frequent UTIs</li>
                                <li>Bladder control problems</li>
                                <li>Urinary incontinence</li>
                                <li>Pelvic urological conditions</li>
                            </ul>
                            <br />

                            <p>A confidential consultation with our expert urologists ensures that you receive the right diagnosis and dignified treatment.</p>

                            <br />


                            <h2 id="Expertise">Bladder & Urinary Tract Disorder Treatment</h2>

                            <p>Bladder issues can be an indication of infection, stones, or bladder abnormalities.</p>
                            <br />

                            <p><b>If you have one or more of these Urinary Tract Symptoms:</b></p>

                            <ul>
                                <li>Pain with urination</li>
                                <li>Blood in urine</li>
                                <li>Urgent need to urinate or ability to hold back urination</li>
                                <li>Frequent need to urinate</li>
                            </ul>
                            <br />

                            <p>A urologist can perform several tests such as: Cystoscopy, imaging studies, or urodynamic tests to determine the cause and carry out the appropriate treatment.</p>
                            <br />

                            <h2 id="Technology">The New Age of Urology Treatment: Minimally Invasive Urology Surgery</h2>

                            <p>Minimally invasive surgery is becoming the most popular choice for patients in Nashik, due to:</p>

                            <ul>
                                <li>Small incisions</li>
                                <li>Little to no pain</li>
                                <li>Low risk of infection</li>
                                <li>Shorter hospital stay</li>
                                <li>Quicker return to work</li>
                            </ul>
                            <br />

                            <p>From removing kidney and ureter stones to bladder and prostate surgery, minimally invasive surgery has become a standard of care in modern urological medicine.</p>

                            <br />

                            <h2 id="Why">Emergency Urology Care - 24/7 Support</h2>

                            <p>Emergency services can be found for kidney stones, urinary retention, and hematuria at all times. Accessing a urologist 24/7 ensures that you have the ability to get required emergency treatment quickly.</p>
                            <br />

                            <h2 id="Summary">When to Visit a Urologist?</h2>

                            <p>Schedule a consultation with a urologist if you have:</p>

                            <ul>
                                <li>Frequent UTIs</li>
                                <li>Kidney stone symptoms</li>
                                <li>Urinary obstruction</li>
                                <li>Blood in urine</li>
                                <li>Bladder control problems</li>
                            </ul>
                            <br />

                            <p>Early treatment can prevent complications and avoid major surgery.</p>
                            <br />

                            <h2 id="Conclusion">Conclusion</h2>
                            <p>When you're looking for the right urology hospital in Nashik for your kidney stone and/or prostate surgery, be sure to consider the use of the latest technology, experienced urologists, and a patient-centred approach. Shree Saibaba Multispeciality Hospital offers you all of that along with complete diagnostic capabilities, minimally invasive urological surgery, and 24-hour emergency care, all under one roof.</p>
                            <br />
                            <p>If you have been experiencing any of these urinary symptoms, don't wait any longer to get the relief that is available to you through 21st-century urological medicine.</p>
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
                            <ul style={{textAlign : "left"}}>
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

export default Urology_Blog;
