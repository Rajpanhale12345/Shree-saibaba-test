import React from "react";
import Multidisciplinary from "./Images/Multidisciplinary Care.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Multidisciplinary_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. An Approach to Patient-Centric Healing" },
        { id: "Coronary", label: "2. Why Some Patients Require a Multispecialty Approach to Treat Their Health Symptoms" },
        { id: "Cerebral", label: "3. Risk Factors and Causes for Collaborative Care" },
        { id: "Maintainingg", label: "4. When to Visit your Doctor for Multidisciplinary Care" },
        { id: "Maintaining", label: "5. Multidisciplinary Care Available at Shree Saibaba Multispeciality Hospital" },
        { id: "Expertise", label: "6. How Multidisciplinary Care Leads to Better Outcomes" },
        { id: "Technology", label: "7. Our Doctors: The Expertise You Can Trust" },
        { id: "Why", label: "8. Why Go Multispecialty for Your Treatment?" },
        { id: "Summary", label: "9. Take the First Step Towards Better Health" },
        { id: "Conclusion", label: "10. Book Your Appointment Today" },
    ];

    const siteUrl = "https://shreesaibabamultispecialityhospital.com";
    const pageUrl = `${siteUrl}/Multidisciplinary`;

    const title =
        "Multidisciplinary Care | Multispeciality Hospital in Nashik";

    const description =
        "Discover how multidisciplinary care improves diagnosis, recovery, and long-term health outcomes. Shree Saibaba Multispeciality Hospital in Nashik offers collaborative treatment across specialties for complex and chronic conditions.";

    const keywords =
        "multidisciplinary care in nashik, multispeciality hospital in nashik, best hospital in nashik, collaborative medical care nashik, chronic disease management nashik, advanced healthcare in nashik, patient centered treatment nashik, integrated medical care nashik";

    const ogImage = `${siteUrl}/assets/multidisciplinary-care.jpg`;

    const publishedDate = "2026-02-20";
    const modifiedDate = "2026-02-20";

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
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "articleSection": "Healthcare",
        "keywords": keywords
    };

    const hospitalSchema = {
        "@context": "https://schema.org",
        "@type": "Hospital",
        "name": "Shree Saibaba Multispeciality Hospital",
        "url": siteUrl,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nashik",
            "addressRegion": "MH",
            "addressCountry": "IN"
        },
        "areaServed": "Nashik"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${siteUrl}/blogs` },
            { "@type": "ListItem", "position": 3, "name": "Multidisciplinary Care", "item": pageUrl }
        ]
    };

    return (
        <>
            <Helmet>

                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={pageUrl} />

                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Shree Saibaba Multispeciality Hospital" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />

                {/* Geo */}
                <meta name="geo.region" content="IN-MH" />
                <meta name="geo.placename" content="Nashik" />
                <meta name="language" content="English" />

                <meta property="article:published_time" content={`${publishedDate}T00:00:00+05:30`} />
                <meta property="article:modified_time" content={`${modifiedDate}T00:00:00+05:30`} />

                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(hospitalSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

            </Helmet>


            <div className="kidney-page">

                <main className="pane pane--main" aria-label="Recovery article">
                    <article className="kidney-article">

                        <header className="kidney-header">
                            <img style={{ objectFit: "fill" }}
                                src={Multidisciplinary}
                                alt="Multidisciplinary care treatment at multispeciality hospital in Nashik"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 20 Feb 2026</span>
                            </div>
                            <h1 className="kidney-title">
                                Why Multidisciplinary Care Improves Patient Outcomes in Nashik
                            </h1>
                        </header>

                        <section className="kidney-content">
                            <h2 id="Introduction">An Approach to Patient-Centric Healing</h2>

                            <p>Instead of providing care based on a single symptom with a single treatment approach - as was done
                                in years past - today's healthcare delivery system has evolved. Healthcare providers should consider
                                the entire patient. By collaborating across specialities, physicians have the ability to diagnose and
                                treat their patients using a coordinated approach. The collaborative nature of a multispecialty healthcare
                                team results in faster diagnosis, more rapid recovery times, and improved long-term outcomes for
                                patients.</p> <br />

                            <p>At Shree Saibaba Multispeciality Hospital, located in Nashik, we know it's very difficult to promote a
                                successful healing experience unless multiple medical disciplines can come together to support the well-being
                                of a patient with a holistic approach by addressing all facets of the person's biological (physical), surgical,
                                mental/emotional (psychological), and rehabilitation.</p>

                            <br />


                            <h2 id="Coronary">Why Some Patients Require a Multispecialty Approach to Treat Their Health Symptoms</h2>

                            <p>Many illnesses and diseases are associated with multiple symptoms and/or affect multiple areas of the body;
                                thus, when a patient is experiencing one or more of the following issues, it is beneficial for the patient to
                                receive care from a multispecialty hospital with multiple physicians working collaboratively to treat the
                                patient:</p>
                            <br />

                            <ul>
                                <li>Chronic pain that does not respond to traditional medical treatments</li>
                                <li>Multiple chronic diseases or conditions (such as diabetes, heart disease and kidney disease) at the same time</li>
                                <li>Protracted recovery period following surgery or illness</li>
                                <li>Unexplained fatigue, weakness or recurring infections</li>
                                <li>Serious injuries, including but not limited to stroke, cancer (all types), and other trauma, that require
                                    care from more than one physician/specialist</li>
                                <li>Lifestyle diseases (i.e., high blood pressure, obesity) that require ongoing medical management</li>
                            </ul>

                            <p>It is much easier to provide comprehensive treatment of these medical issues when the healthcare team consists
                                of multiple specialists working together rather than treating each patient independently.</p>
                            <br />


                            <h2 id="Cerebral">Risk Factors and Causes for Collaborative Care</h2>

                            <p>Some health issues that need multidisciplinary care include:</p>
                            <br />

                            <ul>
                                <li>Long-term diseases such as diabetes, high blood pressure, and diseases of the heart.</li>
                                <li>Conditions related to ageing that require multiple levels of care at the same time, including geriatric,
                                    orthopaedic, and medical.</li>
                                <li>Lifestyle diseases; associated with stress, an unhealthy diet, and sedentary living.</li>
                                <li>Multiple injuries to the body from accidents; systems of the body are affected; musculoskeletal,
                                    nervous, and internal.</li>
                                <li>Cancer treatment; needs surgery, oncology, imaging, and rehabilitation.</li>
                                <li>Postoperative care; physiotherapy and medical follow-up.</li>
                            </ul>
                            <br />

                            <p>In Nashik, patients with these issues will get improved medical attention through a multidisciplinary care
                                hospital, where all specialist physicians are working toward the same healthcare goal, resulting in no
                                fragmenting of the medical care of the patient.</p>
                            <br />

                            <h2 id="Maintainingg">When to Visit your Doctor for Multidisciplinary Care</h2>

                            <p>If one or more of the following are true for you, consider multidisciplinary care:</p>
                            <br />

                            <ul>
                                <li>Your issue requires the knowledge and treatment from more than one specialist.</li>
                                <li>You have multiple health issues at the same time.</li>
                                <li>Previous treatment has not helped in providing long-term relief.</li>
                                <li>You are having surgery that requires rehabilitation/post-operative care.</li>
                                <li>You want a complete second opinion on how to treat a complicated diagnosis.</li>
                                <li>A family member requires all of the services needed for elderly/critical care.</li>
                            </ul>
                            <br />

                            <h2 id="Maintaining">Multidisciplinary Care Available at Shree Saibaba Multispeciality Hospital</h2>

                            <p>At Shree Saibaba Multispeciality Hospital, you will have everything you need for your overall
                                health in one location, allowing things to work together:</p>
                            <br />

                            <ul>
                                <li>Complete diagnosis based on advanced imaging technology and laboratory services.</li>
                                <li>Health Professional Consultations by Patients with Medical Doctors, Surgeons and Specialists.</li>
                                <li>Individualised treatment plans tailored to your specific needs.</li>
                                <li>Greater Safety and more Successful Results through Collaborative Efforts Between Surgical
                                    and Medical Teams.</li>
                                <li>Rehabilitation and Physical Therapy to Assist with Recovery Period.</li>
                                <li>Preventative Health Services to Prevent Future Episodes of Illness.</li>
                                <li>Education and Lifestyle Changes for Lasting Good Health.</li>
                            </ul>
                            <br />

                            <p>When you have all of the above in place, you can reduce waiting times, minimize the opportunity for
                                errors, provide conceptualization of full-spectrum multi-specialty medical care in Nashik.</p>

                            <br />


                            <h2 id="Expertise">How Multidisciplinary Care Leads to Better Outcomes</h2>

                            <p>Research and practical experience have shown that patients receiving multidisciplinary
                                care tend to experience:</p>
                            <br />

                            <p><b>If you have one or more of these Urinary Tract Symptoms:</b></p>

                            <ul>
                                <li>Rapid and precise diagnosis</li>
                                <li>Shorter hospital stays and fewer hospital readmissions</li>
                                <li>Improved chronic disease management</li>
                                <li>Reduced chances of complications from treatment</li>
                                <li>Increased success rates for surgical procedures</li>
                                <li>Improved recovery with comprehensive rehab</li>
                                <li>Increased patient confidence and satisfaction</li>
                            </ul>
                            <br />

                            <p>This ensures all aspects of your health are considered, making it the best choice for managing
                                complex health problems.</p>
                            <br />

                            <h2 id="Technology">Our Doctors: The Expertise You Can Trust</h2>

                            <p>Shree Saibaba Multispecialty Hospital is backed by a team of highly qualified doctors,
                                surgeons, and healthcare experts who work together to provide evidence-based treatment.
                                Our team of specialists comes together to provide you with the safest and most effective
                                treatment possible.</p>

                            <p>With years of experience and the latest medical technology at their disposal, our team is
                                all about patient-centric, ethical, and result-oriented treatment. </p>

                            <br />

                            <h2 id="Why">Why Go Multispecialty for Your Treatment?</h2>

                            <p>When you choose a hospital that offers multispecialty treatment, you get:</p>
                            <br />

                            <ul>
                                <li>All your medical needs under one roof</li>
                                <li>Improved communication between specialists</li>
                                <li>Holistic treatment without the confusion</li>
                                <li>Personalised attention and follow-throughs</li>
                                <li>A smoother and less stressful healthcare experience</li>
                            </ul>
                            <br />

                            <p>Instead of running around different clinics, you get holistic diagnosis and treatment
                                planning in one trusted location.</p>
                            <br />



                            <h2 id="Summary">Take the First Step Towards Better Health</h2>

                            <p>Your health needs more than fragmented treatment; it needs a team working together for you.
                                If you or a loved one is struggling with a complex or chronic illness, don't wait. Early
                                multispecialty treatment can make a world of difference.</p>
                            <br />

                            <ul>
                                <li>Get expert advice</li>
                                <li>Get comprehensive treatment</li>
                                <li>Get faster recovery and improved outcomes</li>
                            </ul>
                            <br />

                            <h2 id="Conclusion">Book Your Appointment Today</h2>
                            <p>Come to Shree Saibaba Multispecialty Hospital, Nashik, and consult with our specialists
                                for comprehensive and caring treatment.</p>
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
                            <ul style={{ textAlign: "left" }}>
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

export default Multidisciplinary_Blog;
