import React from "react";
import Heart_Disease from "./Images/Heart_Disease.png";
import Heart_Disease1 from './Images/Heart_Disease1.png';
import Heart_Disease2 from './Images/Heart_Disease2.jpg';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Heart_Disease_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "Introduction" },
        { id: "Causes", label: "Causes" },
        { id: "Congenital", label: "Types of Congenital Heart Disease" },
        { id: "Symptoms", label: "Symptoms" },
        { id: "Diagnosis", label: "Diagnosis" },
        { id: "Treatment", label: "Treatment" },
        { id: "Conclusion", label: "Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Congenital Heart Disease | Shree Saibaba Multispeciality Hospital</title>
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
                                src={Heart_Disease2}
                                alt="Recovery care after hospital discharge"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 April 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Heartburn or Heart Attack
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Congenital heart disease (CHD) is a broad term for multiple structural abnormalities of the heart that are present at birth. This is one of the most common congenital conditions, with an incidence of 1% of infants born around the world. Although the exact etiology of congenital heart diseases is usually not identified, they can be attributed to a variety of genetic and environmental factors.</p>

                            <br />

                            <h2 id="Causes">Causes:</h2>

                            <p>The etiology of congenital heart diseases includes genetic, environmental, and multifactorial causes. Genetic causes exist due to some genetic conditions and chromosomal abnormalities, which are important in the pathogenesis of CHD. Infections in the mother during pregnancy and exposures to toxic agents during pregnancy can also contribute as risk factors for congenital heart disease, as can maternal health conditions (i.e. maternal diabetes). Similarly, certain lifestyle factors and prescribed medications have been linked with increased risks.</p>

                            <br />

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Heart_Disease1}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Congenital">Types of Congenital Heart Disease:</h2>

                            <p>CHD includes a variety of congenital defects in heart structure, ranging from mild to severe. The most common types are:</p>
                            <ul>
                                <li>Atrial Septal Defect (ASD)</li>
                                <li>Ventricular Septal Defect (VSD)</li>
                                <li>Tetralogy of Fallot</li>
                                <li>Transposition of the Great Arteries</li>
                                <li>Coarctation of the Aorta</li>
                                <li>Hypoplastic Left Heart Syndrome</li>
                                <li>Each specific type of congenital heart disease is accompanied by different defects in heart structure, as well as unique symptoms and complications.</li>
                            </ul>
                            <br />


                            <h2 id="Symptoms">Symptoms:</h2>
                            <p>Symptoms of congenital heart disease depend on the specific defect and severity of the congenital condition. Some individuals may present with no symptoms or mild symptoms, maybe for many years. Some individuals can have life-threatening problems at birth. Some common symptoms associated with CHD are:</p>

                            <ul>
                                <li>Leaning Breathing</li>
                                <li>Poor feeding and failure to thrive in infants</li>
                                <li>Fatigue</li>
                                <li>Shortness of breath, particularly with exertion</li>
                                <li>Heart murmurs</li>
                                <li>Bluish coloration of the skin</li>
                            </ul>

                            <br />

                            <h2 id="Diagnosis">Diagnosis:</h2>

                            <p>Congenital heart disease is typically diagnosed through a combination of physical exams, prenatal screening, and diagnostic tests. In some cases, prenatal ultrasound can highlight issues with the heart before birth. After birth, a pediatrician may notice signs of congenital heart disease during a physical exam when they detect abnormal heart sounds or murmurs. The pediatrician may refer the child for more definitive diagnostic testing, which may include 2-dimensional echocardiograms, electrocardiograms (ECG), Spo2 monitoring, and possibly cardiac catheterization.</p>

                            <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Heart_Disease}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />


                            <h2 id="Treatment">Treatment:</h2>
                            <p>Treatment for congenital heart disease will depend on the type and severity of the defect. In less serious cases, children may just require observation by a cardiologist, or their congenital heart disease may never require treatment. In more serious cases, treatment may consist of one or more of the following:</p>

                            <ul>
                                <li>Intervention via catheter. Examples include: Balloon angioplasty or valve repair</li>
                                <li>Surgical procedures to repair or correct the structural defect</li>
                                <li>Heart transplantation in the case of life-threatening congenital heart defects</li>
                                <li>Pinhole surgeries/Device closures</li>
                            </ul>
                            
                            <br />

                            <h2 id="Conclusion">Conclusion: </h2>
                            <p>Congenital heart disease is multifactorial, and it is important to consider how this will affect diagnosis and management. Advances in medical technology and treatment have allowed for improved outcomes in treatment so that people with congenital heart disease may be required to lead healthy and fulfilling lives.</p>
                            
                            <p>Nevertheless, more research is warranted for a more complete understanding of the causes of CHD and for effective treatment of this complex medical condition. Early detection, appropriate clinical care, and family support are markedly important for individuals living with congenital heart defect conditions.</p>

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

export default Heart_Disease_Blog;
