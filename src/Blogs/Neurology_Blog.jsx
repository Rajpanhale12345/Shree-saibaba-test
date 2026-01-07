import React, { useMemo, useState } from "react";
import Kidneyy from "./Images/Neurology_Blog.jpg";
import Neuro1 from "./Images/neuro1.jpg";
import Neuro2 from "./Images/neuro2.jpg";
import Neuro3 from "./Images/neuro3.jpg";
import Neuro4 from "./Images/neuro4.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Stress_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const carouselImages = useMemo(
        () => [
            { src: Neuro1, alt: "Neurology consultation" },
            { src: Neuro2, alt: "Brain imaging / MRI" },
            { src: Neuro3, alt: "Nerve and spine illustration" },
            { src: Neuro4, alt: "Rehabilitation therapy" },
        ],
        []
    );

    const [activeSlide, setActiveSlide] = useState(0);

    const prevSlide = () =>
        setActiveSlide((s) => (s === 0 ? carouselImages.length - 1 : s - 1));

    const nextSlide = () =>
        setActiveSlide((s) => (s === carouselImages.length - 1 ? 0 : s + 1));

    const goToSlide = (index) => setActiveSlide(index);

    const toc = [
        { id: "Introduction", label: "1. The Basics of Neurology: What You Need to Know" },
        { id: "Coronary", label: "2. Common Brain and Nerve Disorders and Their Impact" },
        { id: "Cerebral", label: "3. Specialized Medical Care for Better Outcomes" },
        { id: "Maintaining", label: "4. Advance Treatment and Rehabilitation" },
        { id: "Expertise", label: "5. Health Care You Can Trust for Neurological Conditions in the Nashik Area" },
        { id: "Technology", label: "6. Commitment to Brain Health" },
    ];

    return (
        <>
            <style>{`
        .blog-carousel { margin: 14px 0 18px; }
        .blog-carousel__viewport { position: relative; display:flex; align-items:center; justify-content:center; border-radius:14px; overflow:hidden; }
        .blog-carousel__image { width:100%; max-height:360px; object-fit:cover; display:block; }
        .blog-carousel__nav { position:absolute; top:50%; transform:translateY(-50%); border:none; width:44px; height:44px; border-radius:999px; cursor:pointer; font-size:28px; line-height:1; display:grid; place-items:center; background:rgba(0,0,0,.45); color:#fff; }
        .blog-carousel__nav--prev { left:12px; }
        .blog-carousel__nav--next { right:12px; }
        .blog-carousel__dots { display:flex; justify-content:center; gap:8px; margin-top:10px; }
        .blog-carousel__dot { width:10px; height:10px; border-radius:999px; border:none; cursor:pointer; background:rgba(0,0,0,.25); }
        .blog-carousel__dot.is-active { background:rgba(0,0,0,.75); }
      `}</style>

            <Helmet>
                <title>Neurology Brain Disorders | Shree Saibaba Multispeciality Hospital</title>
                <meta name="description" content="Learn neurology basics, common brain and nerve disorders (stroke, epilepsy, Parkinson's, MS), diagnosis, advanced treatment, and rehabilitation. Consult an experienced neurologist in Nashik at Shree Saibaba Multispeciality Hospital." />
                <meta name="keywords" content="neurologist in nashik, neurology hospital nashik, best neurologist near me, brain disorder treatment, stroke treatment nashik, epilepsy specialist nashik, parkinson's treatment, multiple sclerosis care, neuro physician nashik, neuro rehabilitation, neuro physiotherapy, brain and nerve disorders" />
                <link rel="canonical" href="https://shreesaibabamultispecialityhospital.com/Neurology_Blog" />
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="IN-MH" />
                <meta name="geo.placename" content="Nashik" />
                <meta property="og:title" content="Neurology in Nashik: Brain & Nerve Disorders, Treatment and Rehab" />
                <meta property="og:description" content="Understand neurology, common brain/nerve disorders, modern diagnosis, advanced treatments, and neuro rehabilitation at Shree Saibaba Multispeciality Hospital, Nashik." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://shreesaibabamultispecialityhospital.com/Neurology_Blog" />
                <meta property="og:site_name" content="Shree Saibaba Multispeciality Hospital" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://shreesaibabamultispecialityhospital.com/assets/Shreesaibabalogo-D9LTGZox.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Neurology care in Nashik - diagnosis and treatment" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Neurology in Nashik: Brain & Nerve Disorders, Treatment and Rehab" />
                <meta name="twitter:description" content="Neurology basics, common brain/nerve disorders, diagnosis, advanced treatment, and rehab. Shree Saibaba Multispeciality Hospital, Nashik." />
                <meta name="twitter:image" content="https://shreesaibabamultispecialityhospital.com/assets/Shreesaibabalogo-D9LTGZox.png" />
                <meta name="author" content="Dr. Aniruddha Dharmadhikari" />
                <meta property="article:section" content="Neurology" />
                <meta property="article:published_time" content="2026-01-01" />
                <meta property="article:modified_time" content="2026-01-01" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "name": "Understanding Neurology: The Key to Unlocking Brain Disorders",
                        "url": "https://shreesaibabamultispecialityhospital.com/Neurology_Blog",
                        "description":
                            "Neurology basics, common brain and nerve disorders, diagnosis, advanced treatment, and rehabilitation in Nashik.",
                        "inLanguage": "en-IN",
                        "about": [
                            { "@type": "MedicalCondition", "name": "Stroke" },
                            { "@type": "MedicalCondition", "name": "Epilepsy" },
                            { "@type": "MedicalCondition", "name": "Parkinson's disease" },
                            { "@type": "MedicalCondition", "name": "Multiple sclerosis" }
                        ],
                        "reviewedBy": {
                            "@type": "Physician",
                            "name": "Dr. Aniruddha Dharmadhikari"
                        },
                        "publisher": {
                            "@type": "Hospital",
                            "name": "Shree Saibaba Multispeciality Hospital",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Nashik",
                                "addressRegion": "MH",
                                "addressCountry": "IN"
                            }
                        },
                        "mainEntity": {
                            "@type": "Article",
                            "headline": "Understanding Neurology: The Key to Unlocking Brain Disorders",
                            "datePublished": "2026-01-01",
                            "dateModified": "2026-01-01",
                            "author": {
                                "@type": "Person",
                                "name": "Dr. Aniruddha Dharmadhikari"
                            },
                            "image": [
                                "https://shreesaibabamultispecialityhospital.com/assets/Shreesaibabalogo-D9LTGZox.png"
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <div className="kidney-page">
                <main className="pane pane--main" aria-label="Recovery article">
                    <article className="kidney-article">
                        <header className="kidney-header">
                            <img
                                style={{ objectFit: "fill" }}
                                src={Kidneyy}
                                alt="Robotic Joint Replacememnt Surgery"
                                className="kidney-image"
                            />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 Jan 2026</span>
                            </div>

                            <h1 className="kidney-title">
                                Understanding Neurology: The Key to Unlocking Brain Disorders
                            </h1>
                        </header>

                        <section className="kidney-content">
                            <h2 id="Introduction">The Basics of Neurology: What You Need to Know</h2>



                            <p>Neurology is a specialty of medicine related to the brain, spinal cord, and nerves that run the show
                                for every function within the body. From moving and remembering to seeing and keeping balance, this
                                field helps doctors figure out how the nervous system works and why problems pop up. At a modern
                                neuroscience center, slick diagnostic tools meet solid clinical know-how in finding disorders early
                                in order to guide solid care.</p>

                            <br />


                            <h2 id="Coronary">Common Brain and Nerve Disorders and Their Impact</h2>

                            <p>Nervous system problems can certainly rock everyday life. Stroke, epilepsy, Parkinson's, multiple
                                sclerosis-these can wreak havoc on movement, sensation, speech, or thinking. Some patients will
                                also require support from specialists such as a neuromuscular doctor for disorders related to the
                                nerves responsible for muscle function, or neuro-ophthalmology support in case the problem with
                                their vision is rooted in nerve issues. Understanding these conditions better helps patients and
                                families cope with symptoms confidently and clearly.</p>

                            <br />


                            <h2 id="Cerebral">Specialized Medical Care for Better Outcomes</h2>

                            <p>Picking the right specialist is a big deal when it comes to nervous system disorders. An experienced
                                neuro physician digs into symptoms and crafts a personalized plan. Many people seek a good neurologist
                                near me for timely diagnosis and follow-up. The ability to see a qualified neurologist who has the
                                tools of technology behind him can lead to significant improvement in your long-term recovery from
                                neurological disease, particularly for complicated or chronic conditions.</p>

                            <br />




                            {/* Image Carousel (directly under the heading) */}
                            <div className="blog-carousel" aria-label="Neurology image carousel">
                                <div className="blog-carousel__viewport">
                                    <button
                                        type="button"
                                        className="blog-carousel__nav blog-carousel__nav--prev"
                                        onClick={prevSlide}
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>

                                    <img
                                        src={carouselImages[activeSlide].src}
                                        alt={carouselImages[activeSlide].alt}
                                        className="blog-carousel__image"
                                        loading="lazy"
                                    />

                                    <button
                                        type="button"
                                        className="blog-carousel__nav blog-carousel__nav--next"
                                        onClick={nextSlide}
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                </div>

                                <div className="blog-carousel__dots" role="tablist" aria-label="Choose image">
                                    {carouselImages.map((img, idx) => (
                                        <button
                                            key={img.alt + idx}
                                            type="button"
                                            className={`blog-carousel__dot ${idx === activeSlide ? "is-active" : ""}`}
                                            onClick={() => goToSlide(idx)}
                                            aria-label={`Go to image ${idx + 1}`}
                                            aria-pressed={idx === activeSlide}
                                        />
                                    ))}
                                </div>
                            </div>

                            <br />

                            <h2 id="Maintaining">Advance Treatment and Rehabilitation</h2>


                            <p>New treatment modalities have been developed with the use of advances in medical science, such as new
                                medications that are more accurate, laser technology and new methods of monitoring the progress of
                                recovery electronically. The acute recovery process typically involves rehabilitation services that
                                provide patients with neurophysiotherapy, which helps them regain strength and coordination following
                                an injury involving the brain or nerve system, as well as helping them to regain independence.
                                Combining these therapies has produced the best improvement in activity levels and overall improvement
                                in quality of living.</p>     <br />


                            <h2 id="Expertise">Health Care You Can Trust for Neurological Conditions in the Nashik Area</h2>

                            <p>Nashik's neuro-hospital provides a full range of neurological services, including diagnostic evaluation
                                and emergency services, as well as rehabilitation services all in one location. Many families choose
                                Nashik's best hospitals for neurology due to their expert medical staff and focus on patient-centered
                                care. Through consultation with an experienced neurologist in Nashik and by receiving treatment from a
                                highly qualified neuro physician in Nashik, patients receive an accurate diagnosis and caring treatment.
                                Commitment to improving brain health through neurological excellence.</p>
                            <br />

                            <h2 id="Technology">Commitment to Brain Health</h2>

                            <p>Shree Saibaba Multispeciality Hospital in Nashik offers quality neurological treatment by merging
                                professional knowledge with technology and the rehabilitation process into a single comprehensive
                                service that helps patients cope with their neurological conditions, recover from injury quicker,
                                and maintain the health of their brain and nerves long after they leave our facility. In addition
                                to providing quality care to the individual patient, our integrated service model will provide support
                                to patients' families, which will help maintain healthy brains and nerves throughout our Nashik service
                                area.</p>
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

export default Stress_Blog;
