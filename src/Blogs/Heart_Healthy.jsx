import React from "react";
import Kidneyy from "./Images/Heart_healthy.jpg";
import "./cardio_blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet-async";

function Heart_Blog() {
    const otherBlogs = [
        { to: "/spine", title: "Spine Health and Sitting", date: "11 Aug 2025", category: "🏥 Neurosurgery" },
        { to: "/kidney", title: "Kidney Stones", date: "11 Aug 2025", category: "🏥 Urology" },
    ];

    const toc = [
        { id: "Introduction", label: "1. What To Eat And What To Avoid" },
        { id: "Coronary", label: "2. What To Eat" },
        { id: "Cerebral", label: "3. What To Avoid" },
        { id: "Maintaining", label: "4. Tips For Maintaining A Heart-Healthy Diet" },
        { id: "Conclusion", label: "5. Conclusion" },
    ];

    return (
        <>
            <Helmet>
                <title>Heart Healthy | Shree Saibaba Multispeciality Hospital</title>
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
                                alt="Heart Healthy"
                                className="kidney-image" />

                            <div className="kidney-meta">
                                <Link to="/cardiology" className="kidney-category">
                                    Dr. Aniruddha Dharmadhikari
                                </Link>
                                <span className="kidney-date">🕗 03 May 2019</span>
                            </div>
                            <h1 className="kidney-title">
                                Heart-healthy nutrition
                            </h1>
                        </header>

                
                        <section className="kidney-content">
                            <h2 id="Introduction">What To Eat And What To Avoid</h2>

                            <p>A heart-healthy diet is essential for maintaining good cardiovascular health. Eating a nutritious diet can help to reduce the risk of heart disease, lower blood pressure, and improve cholesterol levels. In this blog post, we'll explore what to eat and what to avoid in order to maintain a heart-healthy diet.</p>

                            <br />


                            <h2 id="Coronary">What To Eat</h2>

                            <ol>
                                <li><b>Fruits and vegetables:</b> Fruits and vegetables are rich in nutrients and antioxidants that can help to improve heart health. They are also low in calories, making them a great choice for weight management. Aim for at least five servings of fruits and vegetables per day.</li>    <br />
                                <li><b>Whole grains:</b> Whole grains are a great source of fibre, which can help to lower cholesterol levels and improve heart health. Choose whole grain cereals and oats and aim for at least 3-4 servings per day.</li>    <br />
                                <li><b>Millets:</b> As this is international millet year, you can add more Jowar, Bajra, Ragi, Varai, Kodu, Sama Millets to reduce risk of lifestyle related disorders as they are high in fibres & nutrients</li>    <br />
                                <li><b>High Protein Sources:</b>    <br />
                                <p><b>Lean proteins:</b> Lean proteins such as boneless chicken, turkey, fish are a great source of protein without added saturated fats avoid having red meat. Aim for at least two servings of lean protein per day. Eggs are also good source of proteins. If cholesterol is high have egg whites.</p>  <br />
                                <p><b>Vegetable proteins:</b> You can add more Dals, legumes, soyabeans, sprouts, paneer, tofu etc. in meals.</p></li>    <br />
                                <li><b>Healthy fats:</b> Healthy fats i.e. omega-3 fatty acids such as those found in nuts, oil seeds, avocado and olive oil can help to improve cholesterol levels and reduce the risk of heart disease. Aim for at least two servings of healthy fats per day. For example - Flaxseeds, almonds, walnuts etc.</li>    <br />
                                <li><b>Low-fat dairy:</b> Low-fat dairy products such as cow's milk, paneer and yogurt, buttermilk are a great source of calcium and protein without added saturated fats which is found in whole-fat dairy products. Aim for two to three servings of low-fat dairy per day.</li>    
                            </ol>

                            <br />


                            <h2 id="Cerebral">What To Avoid</h2>

                            <ol>
                                <li><b>Saturated and trans fats:</b> Saturated and trans fats can raise cholesterol levels and increase the risk of heart disease. Avoid foods that are high in saturated and trans fats such as fatty meats, butter, cream and processed snacks, fried food items, packed foods, cheese etc.</li>   <br />
                                <li><b>Added sugars:</b> Simple sugars can increase the risk of obesity and type 2 diabetes both of which are risk factors for heart disease. Avoid sugary drinks and processed snacks that are high in added sugars.</li>   <br />
                                <li><b>Sodium:</b> Consuming too much sodium can increase blood pressure which is a risk factor for heart disease. Avoid foods that are high in sodium such as processed and fast foods. i.e. pickles, papad, salad, biscuits, chips etc.</li>   <br />
                                <li><b>Alcohol:</b> Consuming too much alcohol can increase blood pressure and contribute to weight gain both of which are risk factors for heart disease. Limit alcohol consumption to one drink per day for women and two drinks per day for men.</li>
                            </ol>
                            
                            <br />


                            <h2 id="Maintaining">Tips For Maintaining A Heart-Healthy Diet</h2>


                            <p><b>Plan meals ahead of time:</b> Planning meals ahead of time can help to ensure that you are consuming a balanced and nutritious diet. Make a grocery list and plan meals for the week ahead.</p>   <br />
                            <p><b>Cook at home:</b> Cooking at home allows you to control the ingredients used and portion sizes of your meals. Try to cook at home as often as possible.</p>   <br />
                            <p><b>Use herbs and spices for flavour:</b> Herbs and spices are a great way to add flavour to meals without adding extra sodium or unhealthy fats. Adding garlic in the diet helps to keep heart healthy.</p>   <br />
                            <p><b>Read food labels:</b> Reading food labels can help to identify foods that are high in sodium, added sugars/ and unhealthy fats. Look for products that are low in these ingredients.</p>   <br />
                            <p><b>Stay hydrated:</b> Staying hydrated is important for maintaining good cardiovascular health. Aim for at least eight glasses of water per day.</p>   <br />
                            <p><b>Be mindful of portion sizes:</b> Portion sizes can have a big impact on overall caloric intake. Use smaller plates and be mindful of serving sizes to avoid overeating.</p>  <br />

                            <h2 id="Conclusion">Conclusion</h2>  

                            <p>Maintaining a heart-healthy diet is essential for good cardiovascular health. Eating a diet that is rich in fruits, vegetables, whole grains, lean proteins, healthy fats, and low-fat dairy can help to reduce the risk of heart attack.</p>

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

export default Heart_Blog;
