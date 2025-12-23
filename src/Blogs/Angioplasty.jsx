import React from "react";
import Kidneyy from "./Images/Angioplasty.png";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Angioplasty_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. Procedure Of Angioplasty" },
        { id: "Anaesthesia", label: "3. Anaesthesia" },
        { id: "Accessing", label: "4. Accessing The Artery" },
        { id: "Balloon", label: "5. Balloon Angioplasty" },
        { id: "Stenting", label: "6. Stenting" },
        { id: "After", label: "7. After The Procedure" },
        { id: "Benefits", label: "8. Benefits Of Angioplasty" },
        { id: "Improved", label: "9. Improved Blood Flow" },
        { id: "Quick", label: "10. Quick Recovery" },
        { id: "Reduced", label: "11. Reduced Risk Of Complications" },
        { id: "Benefits", label: "12. Improved Quality Of Life" },
        { id: "Long-Term", label: "13. Long-Term Benefits" },
        { id: "Precautions", label: "14. Precautions" },
        { id: "Talk", label: "15. Talk To Your Doctor" },
        { id: "Pre-Procedure", label: "16. Follow Pre-Procedure Instructions" },
        { id: "Your", label: "17. Monitor Your Condition After The Procedure" },
        { id: "Prescribed", label: "18. Take Medications As Prescribed" },
        { id: "Make", label: "19. Make Lifestyle Changes" },
        { id: "Conclusion", label: "20. Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Angioplasty | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Angioplasty"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 03 May 2023</span>
                            </div>
                            <h1 className="kidney-title">
                                What is Angioplasty? Procedure, Benefits
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">What Is Angioplasty?</h2>

                            <p>
                                Angioplasty is a medical procedure used to open up narrowed or blocked blood vessels, typically arteries,
                                in the body. It is a minimally invasive procedure that involves inserting a thin, flexible tube called a
                                catheter through a small incision in the skin and guiding it to the blocked area of the artery. The
                                catheter is equipped with a tiny balloon at the tip, which is inflated once it reaches the blockage to
                                push the plaque or blockage against the arterial walls, thus widening the artery and improving blood flow.
                                A stent is placed during angioplasty to help keep the artery open. Angioplasty is a common treatment for
                                various conditions, including coronary artery disease, peripheral artery disease, and carotid artery
                                disease. It is generally considered safe and is associated with a low risk of complications.
                            </p>

                            <br />


                            <h2 id="Understandingg">Procedure Of Angioplasty</h2>

                            <p>Before the angioplasty procedure, the patient will undergo a thorough evaluation that includes a medical history, physical examination, and diagnostic tests such as blood tests, electrocardiogram (ECG), and angiography. The patient will be instructed to avoid food and drink for few hours before the procedure and may be given medications to help relax and reduce anxiety.</p>

                            <br />

                            <h2 id="Anaesthesia">Anaesthesia</h2>

                            <p>The angioplasty procedure is typically done under local anaesthesia, which numbs the area around the site of the incision. In some cases, conscious sedation may also be used to help the patient relax and feel more comfortable during the procedure.</p>

                            <br />

                            <h2 id="Accessing">Accessing The Artery</h2>

                            <p>To perform an angioplasty, the interventional cardiologist or vascular surgeon will insert a thin, flexible tube called a catheter into an artery in the groin, wrist, or arm. The catheter is guided through the artery using real-time X-ray imaging until it reaches the site of the blockage.</p>

                            <br />

                            <h2 id="Balloon">Balloon Angioplasty</h2>

                            <p>Once the catheter is in place, a small balloon at the tip of the catheter is inflated, which pushes the plaque or blockage against the arterial walls, widening the artery and improving blood flow. The balloon is then deflated, and the catheter is removed.</p>

                            <br />

                            <h2 id="Stenting">Stenting</h2>

                            <p>Sometimes, a small metal mesh tube called a stent may be placed in the artery to help keep it open. The stent is inserted over a deflated balloon, which is then inflated to push the stent against the arterial walls. Once in place, the stent remains in the artery permanently, acting as a scaffold to keep the artery open.</p>

                            <br />

                            <h2 id="After">After The Procedure</h2>

                            <p>After the angioplasty procedure, the patient is monitored closely for several hours to ensure that there are no complications such as bleeding, infection, or an allergic reaction to the contrast dye used during the procedure. The patient can typically go home the same day or the following day and can resume normal activities within a few days.</p>

                            <br />

                            <h2 id="Benefits">Benefits Of Angioplasty</h2>

                            <p>In this blog, we will discuss some of the benefits of angioplasty.</p>

                            <br />

                            <h2 id="Improved">Improved Blood Flow</h2>

                            <p>The primary benefit of angioplasty is improved blood flow to the affected area of the body. By widening the artery, the procedure can help restore normal blood flow, which can reduce the risk of complications such as heart attack, stroke, or tissue damage.</p>

                            <br />

                            <h2 id="Quick">Quick Recovery</h2>

                            <p>Angioplasty is a minimally invasive procedure so that patients can go home Early. Compared to more invasive surgeries, angioplasty involves less pain and discomfort, and patients can typically return to their normal activities within a few days.</p>

                            <br />

                            <h2 id="Reduced">Reduced Risk Of Complications</h2>

                            <p>Angioplasty is a safe procedure with a low risk of complications. Unlike open-heart surgery, angioplasty does not require the use of general anaesthesia, which can reduce the risk of complications such as infection, bleeding, or complications related to anaesthesia.</p>

                            <br />

                            <h2 id="Life">Improved Quality Of Life</h2>

                            <p>By improving blood flow to the affected area of the body, angioplasty can help reduce symptoms such as chest pain, shortness of breath, or fatigue, which can improve the patient's quality of life. Patients who undergo angioplasty may also be able to resume activities that they were unable to do before the procedure.</p>

                            <br />

                            <h2 id="Long-Term">Long-Term Benefits</h2>

                            <p>Angioplasty can provide long-term benefits for patients with blocked arteries. By improving blood flow to the affected area, the procedure can help prevent further blockages from occurring and reduce the risk of complications such as heart attack or stroke.</p>

                            <br />

                            <h2 id="Precautions">Precautions</h2>

                            <p>We will discuss some of the precautions that patients should be aware of when undergoing angioplasty.</p>

                            <br />

                            <h2 id="Talk">Talk To Your Doctor</h2>

                            <p>Before undergoing angioplasty, it is essential to talk to your doctor about your medical history and any medications you are currently taking. Certain medications, such as blood thinners, may need to be stopped before the procedure to reduce the risk of bleeding. Your doctor may also perform tests to determine if you are at high risk for complications during the procedure.</p>

                            <br />

                            <h2 id="Pre-Procedure">Follow Pre-Procedure Instructions</h2>

                            <p>Your doctor or healthcare team will provide you with specific instructions to follow before the procedure. These may include fasting for a certain period before the procedure, avoiding certain medications, or arranging for someone to drive you home afterward. It is important to follow these instructions carefully to ensure the best possible outcome.</p>

                            <br />

                            <h2 id="Your">Monitor Your Condition After The Procedure</h2>

                            <p>After angioplasty, it is important to monitor your condition closely and report any changes or complications to your healthcare team. Symptoms such as fever, swelling, bleeding, or severe pain may indicate a problem and require immediate medical attention.</p>

                            <br />

                            <h2 id="Prescribed">Take Medications As Prescribed</h2>

                            <p>After angioplasty, your doctor may prescribe medications to help prevent further blockages or complications. It is important to take these medications as prescribed and to follow up with your doctor regularly to monitor your condition.</p>

                            <br />

                            <h2 id="Make">Make Lifestyle Changes</h2>

                            <p>Making lifestyle changes such as eating a healthy diet, quitting smoking, and getting regular exercise can help reduce the risk of further blockages and improve your overall health. Your healthcare team may provide you with specific recommendations for making these changes and may refer you to a dietitian or other specialist as needed.</p>

                            <br />

                            <h2 id="Conclusion">Conclusion</h2>

                            <p>Angioplasty is a safe and effective procedure for treating blockages or narrowing in the arteries of the body. By following these precautions before and after the procedure, patients can help ensure a successful outcome and reduce the risk of complications. If you have questions or concerns about angioplasty, talk to your doctor or healthcare team for more information.</p>

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

export default Angioplasty_Blog;
