import React from "react";
import Vitamin from "./Images/Vitamin_B.png";
import Vitamin1 from './Images/Vitamin_B1.png';
import Vitamin2 from './Images/Vitamin_B11.jpg';
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Dengue() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "Introduction" },
        { id: "Vitamin B12", label: "Vitamin B12" },
        { id: "Calcium", label: "Calcium" },
        { id: "Conclusion", label: "Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Vitamin B12 | Shree Saibaba Multispeciality Hospital</title>
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
                            <img style={{objectFit : "fill"}}
                                src={Vitamin}
                                alt="Recovery care after hospital discharge"
                                className="kidney-image"/>

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 1 June 2024</span>
                            </div>
                            <h1 className="kidney-title">
                                Vitamin B12 and Calcium
                            </h1>
                        </header>

                        {/* Content */}
                        <section className="kidney-content">
                            <h2 id="Introduction">Introduction</h2>
                            <p>Vitamins and minerals are key factors in maintaining overall health and well-being. Vitamin B12 and Calcium rank among two commonly deliberated nutrients concerning health. Both nutrients are crucial in different body functions, and the deficiency of either leads to serious health problems. The current article deals with the importance, sources, and benefits of Vitamin B12 and Calcium.</p>

                            <br />

                            <h2 id="Vitamin B12">Vitamin B12: The Energy Vitamin</h2>
                            

                            <p>1. Functions and Benefits</p>
                            <ul>
                                <li><b>Energy Production:</b> Vitamin B12 is essential in the production of energy from food. This vitamin plays a crucial role in the metabolic activity of each cell in the body; thus, it directly impacts DNA synthesis and regulation, fatty acid synthesis, and energy production.</li>
                                <li><b>Nervous System Health:</b> This vitamin is crucial for the health of the nervous system. Vitamin B12 aids in forming the myelin sheath that further protects nerves and allows for proper nerve transmission.</li>
                                <li><b>Formation of Red Blood Cells:</b> It is highly essential for the production of RBCs. A good level of Vitamin B12 prevents megaloblastic anemia, wherein there are large and inefficient red blood cells.</li>
                            </ul>  
                            <br />

                            <figure className="inline-illustration">
                                <img style={{objectFit : 'fill'}}
                                    src={Vitamin1}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <p>2. Sources of Vitamin B12</p>
                            <ul>
                                <li><b>Animal Products:</b> These include meat, fish, poultry, eggs, and various dairy products, which are considered plentiful sources of Vitamin B12.</li>
                                <li><b>Fortified Foods:</b> Vitamin B12 can be found in several breakfast cereals, nutritional yeasts, and some plant-based milk, which are good options for vegetarians and vegans.</li>
                                <li><b>Supplements:</b> Vitamin B12 supplements come in a variety of forms, such as tablets, capsules, and injections, which may be preferred by those who have trouble getting Vitamin B12 through their diet.</li>
                            </ul>
                            <br />

                            <p>3. Deficiency and Health Risks</p>
                            <ul>
                                <li><b>Anemia:</b> A deficiency in Vitamin B12 can cause megaloblastic anemia, which presents itself with symptoms of fatigue, weakness, and pallor.</li>
                                <li><b>Neurological Issues:</b> Having low levels of Vitamin B12 may lead to neurological issues which may include symptoms such as numbness and tingling and balance problems as well as issues with cognition.</li>
                            </ul>

                            <br />  
                            

                            <h2 id="Calcium">Calcium: The Bone Builder</h2>

                            <p>1. Calcium purposes and benefits</p>
                            <ul>
                                <li><b>Bone Health:</b> Calcium is popular known and is widely recognized for its importance in bone and teeth development and maintenance. Calcium plays an important role where bones are forming, such as during childhood, adolescence, pregnancy, lactation, and when older adults are experiencing bone loss.</li>
                                <li><b>Muscle Function:</b> Calcium is essential to muscle contraction. Calcium helps muscles contract and relax properly thus providing smooth movements and coordination.</li>
                                <li><b>Cardiovascular Health:</b> Calcium helps in the coagulation of blood and in the proper functioning of the heart, ensuring a normal pulse, among others. It also helps in the maintenance of healthy blood vessels.</li>
                            </ul>
                            <br />                          

                            <figure className="inline-illustration">
                                <img
                                    src={Vitamin2}
                                    alt="Everyday living with a pacemaker"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Optional: remove this figcaption if you don't want text under the image */}
                                {/* <figcaption>Simple habits can keep you active and confident with a pacemaker.</figcaption> */}
                            </figure> <br />

                            <p>2. Sources of Calcium</p>
                            <ul>
                                <li><b>Dairy Products:</b> These are found in rather high amounts in foods made from milk, such as milk, cheese, and yogurt.</li>
                                <li><b>Leafy Greens:</b> The best sources for this important mineral include leafy greens like kale, broccoli, and spinach.</li>
                                <li><b>Fortified Foods:</b> Most plant-based milks, juices, cereals, and Ragi (nachani) Rajgira are fortified with plenty of calcium to support daily intake.</li>
                                <li><b>Supplements:</b> include calcium supplements for people, especially with higher needs and dietary restrictions, who may not get enough from their diet alone.</li>
                                <li><b>Nuts and Oil seeds:</b> sesame seeds, Poppy seeds, Halim and Almonds</li>
                            </ul>  <br />

                            <p>3. Deficiency and Health Risks</p>
                            <ul>
                                <li><b>Osteoporosis:</b> A long-term calcium deficiency can lead to the development of osteoporosis, a condition in which bones are weak and brittle.</li>
                                <li><b>Muscle Cramps:</b> Low levels of calcium can result in muscle cramps and spasms; it shows the importance of the mineral in muscles.</li>
                                <li><b>Cardiovascular Problems:</b> Insufficient intake of calcium can affect the heart, thereby causing cardiovascular problems.</li>
                            </ul>

                            <br />

                            <h2 id="Conclusion">Conclusion:</h2>
                            <p>Vitamin B12 and Calcium are both substances that aid in various important bodily functions. It is vital that they are obtained through diet or supplementation, when advised, to maintain health and prevent deficiency. By knowing the functions these nutrients serve and the dietary sources to get them from, individuals can make informed decisions that support their own health.</p>

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
                            <p className="toc__label"><span style={{color : "Red"}}>On this page</span></p>
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

export default Dengue;
