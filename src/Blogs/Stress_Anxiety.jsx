import React from "react";
import Kidneyy from "./Images/Stress_Anxiety.png";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Stress_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Coronary", label: "2. How Stress Affects Heart Health" },
        { id: "Cerebral", label: "3. How Anxiety Affects Heart Health" },
        { id: "Maintaining", label: "4. Ways To Manage Stress & Anxiety" },
        { id: "Conclusion", label: "5. Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Stress & Anxiety | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Stress Anxiety"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 03 May 2019</span>
                            </div>
                            <h1 className="kidney-title">
                               How stress and anxiety affect heart health, and ways to manage stress
                            </h1>
                        </header>

                   
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>

                            <p>The connection between stress, anxiety, and heart health is a complex and increasingly important topic, as stress and anxiety are becoming more common in our daily lives. Research has shown that stress and anxiety can have negative effects on heart health, and that managing stress can help to reduce the risk of heart disease.</p>

                            <br />


                            <h2 id="Coronary">How Stress Affects Heart Health</h2>

                            <p>Stress is a normal part of life, and the body has a natural response to it. However, when stress becomes chronic, it can lead to negative health outcomes. Stress increases the body's production of hormones such as adrenaline and cortisol, which can increase blood pressure, heart rate, and inflammation. Over time, these changes can damage the heart and blood vessels, increasing the risk of heart disease.</p>
                            <br />

                            <p>Stress can also affect behaviour, leading to unhealthy habits such as smoking, overeating, or not getting enough exercise. These habits can contribute to high blood pressure, high cholesterol, and obesity, all of which are risk factors for heart disease.</p>

                            <br />


                            <h2 id="Cerebral">How Anxiety Affects Heart Health</h2>

                            <p>Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. Like stress, anxiety can also have negative effects on heart health. Anxiety can increase heart rate and blood pressure, and can cause the release of stress hormones that can lead to inflammation in the body. Anxiety can also lead to unhealthy behaviours, such as overeating, smoking, or drinking alcohol. These behaviours can increase the risk of heart disease and other chronic health conditions.</p>
                            
                            <br />


                            <h2 id="Maintaining">Ways To Manage Stress And Anxiety</h2>


                            <p>Managing stress and anxiety is an important part of maintaining heart health. Managing stress and anxiety is an important part of maintaining heart health. Here are some strategies that can help:</p>   <br />
                            <ol>
                                <li><b>Exercise:</b> Regular physical activity is a great way to reduce stress and anxiety. Exercise releases endorphins, which can improve mood and reduce feelings of anxiety. Exercise can also improve heart health by reducing blood pressure, improving cholesterol levels, and reducing the risk of obesity.</li>    <br />
                                <li><b>Meditation:</b> Meditation is a mindfulness practice that can help to reduce stress and anxiety. Meditation can help to slow down the body's stress response, reducing the production of stress hormones and promoting a sense of calm.</li>    <br />
                                <li><b>Healthy habits:</b> Maintaining healthy habits such as eating a healthy diet, getting enough sleep, and avoiding unhealthy behaviours such as smoking and excessive alcohol consumption can help to reduce stress and anxiety.</li>    <br />
                                <li><b>Seek professional help:</b> If stress and anxiety are impacting your daily life and affecting your overall health, it may be helpful to seek professional help. A mental health professional can provide support and guidance on how to manage stress and anxiety, and can help to develop a personalized plan for improving heart health.</li>
                            </ol>


                            <h2 id="Conclusion">Conclusion</h2>  

                            <p>Stress and anxiety can have negative effects on heart health, but there are many strategies that can be used to manage these feelings and reduce the risk of heart disease. Exercise, meditation, deep breathing, social support, healthy habits, and seeking professional help are all effective ways to reduce stress and anxiety and promote heart health. By incorporating these strategies into daily life, individuals can improve their overall health and well-being, and reduce the risk of heart disease.</p>

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

export default Stress_Blog;
