import React from "react";
import Cardiac from "./Images/Cardia_Surgery.png";
import Cardiac1 from './Images/Cardia_Surgery1.jpg';
import DoctorPhoto from "./Images/doctor_kishor_devre.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Cardia_Surgery_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Stroke", label: "What is a Stroke?" },
        { id: "Types_of_Stroke", label: "Types of Stroke" },
        { id: "Common_Symptoms_of_Stroke", label: "Common Symptoms of Stroke" },
        { id: "Remember:_Act_F.A.S.T.", label: "Remember: Act F.A.S.T." },
        { id: "Golden_Hour", label: "'Golden Hour' for Ischemic Stroke" },
        { id: "Risk_Factors", label: "Risk Factors" },
        { id: "Prevention_Tips", label: "Prevention Tips" },
        { id: "Recovery_and_Rehabilitation", label: "Recovery and Rehabilitation" },
        { id: "When_to_Talk_Help", label: "When to Talk Help" },
    ];

    return (
        <>
            <Helmet>
                <title>कार्डियाक सर्जरी | श्री साईबाबा मल्टीस्पेशालिटी हॉस्पिटल</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="og:description" content="" />
            </Helmet>

            <div className="kidney-page">

                <main className="pane pane--main" aria-label="Recovery article">
                    <article className="kidney-article">
              
                        <header className="kidney-header">
                            <img
                                src={Cardiac1}
                                alt="Cardiac Surgery"
                                className="kidney-image"
                            />
                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 September 2025</span>
                            </div>
                            <h1 className="kidney-title">
                                मिनिमली इन्वैसिव्ह कार्डियाक सर्जरी हृदयरुग्णांसाठी वरदान
                            </h1>
                        </header>

           
                        <section className="kidney-content">
                            <h2 id="Stroke">प्रस्तावना</h2>  
                            <p>
                                मित्रांनो, हृदयशस्त्रक्रिया म्हणाल्यास आपल्या डोळ्यांसमोर काय विचार येतो? बायपास शस्त्रक्रिया, हृदयाच्या झडपेच्या शस्त्रक्रिया, लहान मुलांच्या हृदय शस्त्रक्रिया ? परंतु त्याहूनही महत्त्वाचे म्हणजे छातीचे हाड (Sternum) पूर्णपणे कापून केलेली शस्त्रक्रिया शस्त्रक्रियेनंतर होणारा रक्तस्त्राव, शस्त्रक्रियेनंतर होणाऱ्या वेदना, छातीचे हाड जुळून येण्यासाठी लागणार साधारणतः दीड महिन्याचा कालावधी व नंतरही त्वरीत कामावर जाण्यात येणाऱ्या अडचणी या मुळेच कित्येक रुग्ण गरज असतांनाही हृदयशस्त्रक्रिया टाळण्याचा प्रयत्न करतात.
                            </p>

                            <p>परंतु समजा, हृदयशस्त्रक्रियेमध्ये येणाऱ्या वरील सर्व समस्यांचे निराकरण झाले व रुग्ण शस्त्रक्रियेनंतर केवळ दोनच दिवसांत चालू लागला व आठवगभरातच कामावर जाऊ लागला तर ?</p>

                            <br />

                            <figure className="inline-illustration">
                                <img
                                    src={Cardiac}
                                    alt="Cardiac Surgery"
                                    loading="lazy"
                                    decoding="async"
                                />
                               
                            </figure> <br />

                            <p>हे शक्य आहे मिनिमली इन्वैसिव्ह कार्डियाक सर्जरी (mics) च्या माध्यमातून. मग mics म्हणजे काय ? सोप्या भाषेत सांगायचे तर छातीचे हाड न कापता केलेली हृदयशस्त्रक्रिया म्हणजे मिनिमली इन्वैसिव्ह कार्डियाक सर्जरी. मित्रांनो कोणत्याही शस्त्रक्रिया करणे म्हणजे शरिरावर केलेले एकप्रकारचे आक्रमण असते ज्यालाच इन्व्हेजन (Invasion) म्हटले जाते. हे इन्व्हेजन कमी करणे म्हणजेच minimally Invasive Cardiac Surgery. ह्याचे मुख्य कारण छातीचे हाड कापणे व त्यामुळे होणाऱ्या समस्या असल्याने mics मध्ये छातीचे हाड न कापता अगदी छोट्याशा जागेतून शस्त्रक्रिया केली जाते छातीच्या दोन फासळ्या (Ribs) मध्ये असलेल्या जागेतून हृदयापर्यंत पोहचून ही शस्त्रक्रिया केली जाते. यामध्ये हाड कापलेले नसल्याने होणारा रक्तस्त्राव कमी होतो. त्यामुळे कमीत कमी Blood transfusion मध्ये ही शस्त्रक्रिया करता येते. शिवाय हाड कापलेले नसल्यामुळे रुग्णास होणाऱ्या वेदनांचे प्रमाणही अत्यंत कमी होते. त्यामुळे हृदयशस्त्रक्रियेनंतर अवघ्या दोन दिवसात रुग्ण चालू फिरू लागतो. शिवाय छातीचे हाड न कापल्याने शस्त्रक्रियेनंतर होणाऱ्या न्यूमोनिया सारख्या समस्यांचे प्रमाणही अगदीच कमी होते. नेहमीच्या शस्त्रक्रियेनंतर हाड जुळून येण्यास साधारणतः दीड महिन्याचा कालावधी लागतो. परंतु mics मध्ये हाड न कापल्याने रुग्ण अवघ्या आठवडाभरात नेहमीची कामे सुरु करू शकतो.</p>  <br />
                            <p>एकंदरीत बघता, mics ही पद्धती हृदयरुग्णांसाठी एक वरदानच ठरते आहे. या प्रकारे शस्त्रक्रिया करणेसाठी विशेष तज्ञांची एक टीम गरजेची असते. यासाठी विशिष्ट प्रशिक्षण व विशिष्ट प्रकारचे शस्त्रक्रियेचे साहित्यही आवश्यक आहे.</p>  <br />

                            <p>साईबाबा रुग्णालय नाशिक येथे डॉ.अनिरुदुध धर्माधिकारी व डॉ.पल्लवी धर्माधिकारी यांच्या मार्गदर्शनाने डॉ.किशोर देवरे (M-S.MCH.CVTS) यांच्या नेतृत्वाखालील पथकाद्वारे mics शस्त्रक्रियेसाठी लागणारे विशेष साहित्य व विशेष प्रशिक्षण उपलब्ध करण्यात आले असून रुग्णांना मिनिमली इन्वैसिव्ह कार्डियाक सर्जरी या नवीन तंत्राचा लाभ देण्यात येणार आहे. तरीही हृदय रुग्णांनी या तंत्राचा अवश्य लाभ घ्यावा ही विनंती.</p>  
                            
                            <br />

                            <figure className="doctor-card" aria-labelledby="doctor-caption">
                                <img
                                    src={DoctorPhoto}
                                    alt="डॉ. किशोर देवरे (M.S., M.Ch., CVTS"
                                    loading="lazy"
                                />
                                <figcaption id="doctor-caption">
                                    <strong>Dr. Kishor Devre (M.S., M.Ch., CVTS)</strong> <br />
                                    <small>Minimally Invasive Cardiac Surgery</small>
                                </figcaption>
                            </figure>



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

export default Cardia_Surgery_Blog;
