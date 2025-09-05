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
                <h5 className='time2'> 🕗 05 September 2025</h5>
            </div>

            <br /><br />
            <h4>Pacemaker Care: Surgery, Recovery & Lifestyle Changes Explained</h4>
            <span className='down'>⮟</span><br />
            <ul>
                Having a heart condition can sometimes feel overwhelming, but improvements in medicine, including pacemakers, have enabled patients to have a safer, more confident, and independent life. Pacemakers are small, yet powerful, devices used to help keep abnormal heart rhythms under control and help the heart beat with a steady rhythm.
            </ul>
            <h4>What Is a Pacemaker?</h4>  
            <span className='down'>⮟</span><br /><br />
            <p>A pacemaker is a small electronic device that is implanted under the skin to help regulate an abnormal heart rhythm. It releases mild electrical pulses to maintain the heart's steady beat.</p>
            <p>It is usually prescribed for patients with:</p>
            <ul>
                <li>Slow heart rate (bradycardia)</li>
                <li>Irregular rhythms (arrhythmias)</li>
                <li>Specific forms of heart block</li>
            </ul>
            <p>Current pacemakers are extremely reliable, inserted with minimally invasive surgery, and enable patients to lead active, normal lives.</p>
            <br />
            <h4>Pacemaker surgery and recovery: What to expect</h4>
            <span className='down'>⮟</span><br /><br />
            <p>Generally, most patients will be sent home within 24 to 48 hours following the implantation. Mild site pain, swelling, or bruising is also normal; these will likely improve after a few days. </p>
            <p>Post-surgery precautions include:</p>
            <ul>
                <li>Avoid lifting heavy weights for 3 to 4 weeks</li>
                <li>Avoid raising the arm on the side of the implant over your head in the immediate period after surgery</li>
                <li>Carefully follow wound care and your physician's instructions</li>
            </ul>
            <br /><br />
            <h4>Daily Life with a Pacemaker</h4>
            <span className='down'>⮟</span><br />
            <h5><strong>1. Physical Activity</strong></h5>
            <ul>
                <li>Yoga, walking, and light stretches are safe</li>
                <li>Do not play contact sports or engage in activities that could harm the chest</li>
                <li>Speak to your cardiologist before going back to gym exercises</li>
            </ul>

            <h5><strong>2. Diet</strong></h5>
            <ul>
                <li>Consume a healthy diet with fresh vegetables, fruits, whole grains, nuts, and lean proteins</li>
                <li>Avoid salt, alcohol, fried foods, and processed snacks</li>
                <li>Stop smoking to safeguard your heart and enhance pacemaker function</li>
            </ul>

            <h5><strong>3. Electronics and Appliances</strong></h5>
            <ul>
                <li>Microwaves, refrigerators, smartphones, TVs, and laptops are safe to use</li>
                <li>Maintain mobile phones at a minimum of six inches from the device</li>
                <li>Stay away from intense magnetic fields or excessive time near heavy industrial machinery</li>
                <li>At the airport, notify security personnel. Walk-through units are okay, but hand-held units should not be held directly over the pacemaker</li>
            </ul>            
            <br /><br />


            <h4>Follow-up Visits and Home Monitoring</h4>
            <span className='down'>⮟</span><br />
            <p>Periodic cardiology follow-ups are important for battery life tracking and monitoring of device function. Remote monitoring, if available on many newer pacemakers, enables physicians to monitor your heart rhythms without multiple trips to the hospital.</p>
            <br /><br />

            <h4>Pacemaker Life Expectancy</h4>   
            <span className='down'>⮟</span><br />
            <p>Pacemaker batteries typically last from eight to twelve years, depending on usage. When the battery is depleted, only the generator is replaced, while leads tend to remain intact. With routine care and follow-up, patients with pacemakers can lead long, active, and productive lives.</p>
            <br /><br />


            <h4>Daily Diet Plan Example</h4>   
            <span className='down'>⮟</span><br />
            <p><b>Myth:</b> You cannot use household appliances</p>
            <p><b>Fact:</b> Most household appliances are totally safe to use with a pacemaker</p> <br />
            <p><b>Myth:</b> Pacemaker surgery is a major operation</p>
            <p><b>Fact:</b> It is a minimally invasive procedure and is normally done under local anaesthesia</p> <br />
            <p><b>Myth:</b> Pacemakers are reserved for old patients</p>
            <p><b>Fact:</b> Patients of any age could need pacemakers based on their condition</p>
            <br /><br />


            
            <h4>Conclusion</h4>   
            <span className='down'>⮟</span><br />
            <p>A pacemaker is never a limitation, but a lifesaver that resynchronizes regular heart rhythm and enables patients to lead healthier, more active lives. With follow-ups, maintenance, and a healthy lifestyle, pacemaker patients can lead long, independent lives.</p>
            <p>At Shree Saibaba Heart Institute, Nashik, our expert cardiologists and electrophysiologists specialize in advanced pacemaker therapies, including leadless pacemakers and cardiac resynchronisation therapy (CRT). We are committed to providing each patient with compassionate, world-class cardiac care.</p>  <br /><br />


            <h5 className='CTA'>At Shree Saibaba Multispeciality Hospital, Nashik, our urology specialists provide advanced diagnosis, painless treatment options, and prevention guidance to keep stones from coming back.</h5><br />
            <h5 className='CTA'>📞 Call us or visit us for a consultation. Your kidneys deserve the best care...</h5><br /><br />
            <Link to="/contact"><Button variant="contained" >Reach us out</Button></Link> <br /><br />
        </>
    )
}
export default Cardio_blog;
