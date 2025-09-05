import React from 'react'
import Cardio from './Images/Cardio_blog.jpg';
import './Kidney.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';



function Cardio_blog() {
    return ( 
        <>


            <helmet>
                <title>Cardiology Blog</title>
            </helmet>


            <div className='kidney-container'>
                <img src={Cardio} alt="" /></div>
            <div className='time1'>
                <Link to='/cardio_blog'> <h5 className='time'>🏥Cardiology</h5></Link>
                <h5 className='time2'> 🕗 03 September 2025</h5>
            </div>

            <br /><br />
            <h4>Pacemaker Care: Surgery, Recovery & Lifestyle Changes Explained</h4>
            <span className='down'>⮟</span><br />
            <ul>
                It can be stressful to live with heart disease, but medical innovations such as pacemakers have provided patients with hope of living healthier, more confident, and independent lives. Pacemakers are tiny but strong devices that assist in normalizing erratic heartbeats, making sure that the heart pumps regularly.
            </ul>
            <h4>
                What causes Kidney Stones?
            </h4>   <span className='down'>⮟</span><br /><br />
            <ul>
                Kidney stones happen when you have a high concentration of waste (like calcium, oxalate, or uric acid) in your urine and insufficient water to pass it. There are some of the most common reasons for this include:


                Not consuming enough water

                Consuming excessive salt, protein, or sugar

                High-fat or high-cholesterol diet

                Certain diseases, such as diabetes or gastrointestinal illness

            </ul><br />
            <h4>
                How Large Are Kidney Stones?
            </h4>
            <span className='down'>⮟</span><br /><br />
            <ul>


                4 mm: Generally clear on their own


                4–6 mm: 60% risk of spontaneous passage


                6 mm: Usually requires medical care

                <br /><br />
                <h4>Will They Come Back?</h4>
                <span className='down'>⮟</span><br />
                Yes, indeed, they can. There's a:

                7% yearly risk of recurrence

                35% probability in 5 years

                50% risk in 10 years

                That is why prevention is all about hydration & nutrition
            </ul><br /><br />
            <h4>Types of Kidney Stones</h4>
            <span className='down'>⮟</span><br />
            <ul>
                1. Calcium Oxalate Stones (≈80% of all stones)
                Dehydration caused by

                Risk grows with excessive protein, salt, and oxalate-containing foods

                Medical conditions such as hyperparathyroidism also lead to them

            </ul>
            2. Uric Acid Stones (around 15% of all stones)
            <ul>

                Due to excess uric acid

                Lack of sufficient potassium or magnesium.

                More prevalent in individuals with diabetes or obesity

                Dietary Recommendations to Avoid Kidney Stones


            </ul><br /><br />
            <h4>What To Do:</h4>
            <span className='down'>⮟</span><br />
            <ul>
                Drink sufficient fluids – minimum 3 litres/day

                Take calcium foods (dairy products, cheese, yoghurt)

                Use lemon juice – it has citrate, which stops stones

                Choose low-sodium foods – avoid processed and salty foods.

                Use salt substitutes – herbs, spices, lemon juice

            </ul>
            <br /><br />
            <h4>What To Avoid:</h4>   <span className='down'>⮟</span><br />
            <ul>
                Vitamin C & D supplements may raise the risk of stones

                High-oxalate foods:

                Spinach, beetroot, rhubarb, sweet potato


                Black tea, nuts, orange juice, and chocolate.


                Sweet drinks and juices
                Salty and processed foods – chips, pickles, canned soups, ketchup


            </ul><br /><br />
            <h4>Daily Diet Plan Example</h4>   <span className='down'>⮟</span><br />
            <ul>
                Breakfast: Blueberry porridge and a glass of milk.
                Lunch: Whole wheat bread, salad, and a yogurt.
                Dinner: grilled salmon, steamed asparagus, Wild rice, and yogurt dill sauce.
            </ul>
            <br /><br />
            <h5 className='CTA'>At Shree Saibaba Multispeciality Hospital, Nashik, our urology specialists provide advanced diagnosis, painless treatment options, and prevention guidance to keep stones from coming back.</h5><br />
            <h5 className='CTA'>📞 Call us or visit us for a consultation. Your kidneys deserve the best care...</h5><br /><br />
            <Link to="/contact"><Button variant="contained" >Reach us out</Button></Link> <br /><br />
        </>
    )
}
export default Cardio_blog;
