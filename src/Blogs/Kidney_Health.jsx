import React from "react";
import Kidneyy from "./Images/Kidney_Health.jpg";
import Kidneyy1 from './Images/Understanding_Kidney.jpg';
import Kidneyy2 from './Images/Stress_Management.jpg';
import Kidneyy3 from './Images/Kidney_Health1.png'
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Kidney_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. Introduction" },
        { id: "Understandingg", label: "2. Understanding Kidney Function and the Risks of Kidney Disease" },
        { id: "Managingg", label: "3. Managing Blood Pressure: A Key Factor in Kidney Health" },
        { id: "Stress", label: "4. Stress Management Techniques to Support Kidney Health" },
        { id: "Supplementss", label: "5. Herbal Supplements and Kidney Health: Guidance and Precautions" },
        { id: "Conclusion", label: "6. Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Kidney Health | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Kidney Health"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 08 January 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Kidney Health and Importance of Lifestyle Changes
                            </h1>
                        </header>

                      
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Kidneys are vital organs that filter waste, balance fluids, and regulate vital nutrients in the body. Maintaining kidney health is critical, as dysfunction can lead to serious conditions such as chronic kidney disease (CKD). Lifestyle factors—diet, exercise, and avoidance of harmful substances—are key in preserving kidney function. Proactive changes can reduce the risk of developing kidney-related health issues. It's essential to understand how lifestyle choices directly influence kidney health, necessitating conscious efforts for optimal kidney function.</p>

                            <br />


                            <h2 id="Understandingg">Understanding Kidney Function and the Risks of Kidney Disease</h2>

                            

                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy1}
                                    alt="Stages of Chronic Kidney Diseases"
                                    loading="lazy"
                                    decoding="async"
                                />
                                
                            </figure>

                            <br />

                            <p>Proper hydration is critical for kidney health, as the kidneys require sufficient water to filter and eliminate waste from the body. The recommended daily water intake can vary based on individual factors, but a general guideline is approximately 2-3 Liters (8-12 cups) per day. Certain conditions may demand adjustments:</p>

                            <ul>
                                <li><b>Increased need:</b> Hot climates, exercise, pregnancy, breastfeeding.</li>
                                <li><b>Decreased need:</b> Some kidney diseases, heart failure, or if advised by a healthcare provider. Monitoring urine colour can serve as a hydration indicator - aiming for light, straw-coloured urine. Nevertheless, excessive water consumption can also burden the kidneys. Consulting a healthcare professional for personalized advice optimizes kidney function and overall health.</li>
                            </ul>

                            <br />


                            <h2 id="Managingg">Managing Blood Pressure: A Key Factor in Kidney Health</h2>

                            <p>Maintaining optimal blood pressure is critical for kidney health. High blood pressure is a leading cause of kidney disease and failure. It damages blood vessels, decreasing blood flow to the kidneys, impairing their ability to filter waste effectively.</p>

                            <ul>
                                <li><b>Monitor Blood Pressure:</b> Regularly check blood pressure levels to ensure they remain within the normal range.</li>
                                <li><b>Healthy Lifestyle Choices:</b> Adopt a diet low in salt, maintain a healthy weight, engage in regular physical activity, and avoid excessive alcohol to control blood pressure.</li>
                                <li><b>Medication Adherence:</b> For those prescribed antihypertensive drugs, consistent adherence to medication regimes is vital.</li>
                                <li><b>Medical Consultations:</b> Regular consultations with healthcare providers help to manage blood pressure and monitor kidney function over time.</li>
                            </ul>

                            <p>By controlling blood pressure, individuals can significantly reduce the risk of developing kidney disease or manage its progression.</p>


                            <h2 id="Stresss">Stress Management Techniques to Support Kidney Health</h2>


                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy3}
                                    alt="Kidney Health"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br />

                            <p>Chronic stress can negatively impact kidney health. To mitigate this, consider:</p>

                            <ul>
                                <li><b>Regular Physical Exercise:</b> Engaging in activities like walking, swimming, or yoga can reduce stress levels and improve overall kidney function.</li>
                                <li><b>Mindfulness and Relaxation:</b> Techniques such as meditation, deep breathing exercises, and progressive muscle relaxation can help manage stress.</li>
                                <li><b>Adequate Sleep:</b> Ensuring 7-9 hours of quality sleep can help reduce stress hormones in the body.</li>
                                <li><b>Healthy Eating:</b> A balanced diet rich in fruits, vegetables, and low in processed foods can support kidney health and reduce stress.</li>
                                <li><b>Professional Support:</b> Counselling or therapy can be beneficial for long-term stress management.</li>
                            </ul>


                            <h2 id="Supplementss">Herbal Supplements and Kidney Health: Guidance and Precautions</h2>


                            <figure className="inline-illustration">
                                <img style={{ objectFit: 'fill' }}
                                    src={Kidneyy2}
                                    alt="Stress Management"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>

                            <br />

                            <p>While some herbal supplements claim to support kidney health, they can potentially have adverse effects. Patients contemplating supplement use should:</p>                        

                            <ul>
                                <li>Consult with healthcare professionals to ensure compatibility with their condition.</li>
                                <li>Avoid high doses, as some supplements can exacerbate kidney issues.</li>
                                <li>Be aware of herbal diuretics, which can strain the kidneys.</li>
                                <li>Recognize that herbal supplements are not regulated like medications; thus potency and purity vary.</li>
                                <li>Monitor kidney function regularly if using supplements, as some may interact with medications or cause harm.</li>
                            </ul>




                            <h2 id="Conclusion">Conclusion:</h2>

                            <p>Committing to a Lifetime of Healthy Kidney Practices</p>

                            <p>Maintaining kidney health is a lifelong endeavour. It requires persistent attention to dietary choices, fluid intake, and lifestyle habits. Individuals should screen for kidney disease regularly, especially if they have risk factors such as hypertension or diabetes. Timely medical intervention, adherence to prescribed treatments, and lifestyle modifications are essential. A proactive approach, including education about kidney function and disease, coupled with informed health decisions, bolsters prevention efforts. Ultimately, a commitment to these practices is not only a Défense against kidney disease but a cornerstone of overall well-being.</p>
                            
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

export default Kidney_Blog;
