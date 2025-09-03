import React from 'react'
import spinemain from './Images/spinemain.jpg';
import './Kidney.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Spine() {
    return (
        <>
        
    <helmet>
      <title>Spine | Saibaba Multispeciality Hospital</title>
    </helmet>


            <div className='kidney-container'>
                <img src={spinemain} alt="" /></div>
            <div className='time1'>
                <Link to='/neurosurgery'> <h5 className='time'>🏥Neurosurgery</h5></Link>
                <h5 className='time2'> 🕗 11 August 2025</h5>
            </div>

            <br /><br />
            <h4>Spine Health and Sitting: What You Need to Know</h4>
            <span className='down'>⮟</span><br />
            <ul>
           More or less, everyone sits down for several hours a day, whether they work or not. Too much sitting, though, can disrupt your back. Some experts even believe sitting around too much is worse for your body than smoking.<br /><br />
            </ul>
            <h4>
                How Sitting Affects Your Back?
            </h4>   <span className='down'>⮟</span><br /><br />
            <ul>
                Your back is supposed to move, you know? If you sit for years, particularly if you're slouching, it really does a number on your lower back. That can lead to pain and a whole slew of other problems.


            </ul><br />
            <h4>
                What occurs when sitting for too long:
            </h4>
            <span className='down'>⮟</span><br /><br />
            <ul>
                
                        All your lower back and hip muscles become stiff.
                    

                        Spinal discs become twisted and may become damaged

                    
                     

                            Blood flow slows down, reducing oxygen to your muscles

                        
                            If you lean forward, your shoulders and neck can stiffen up.
                       
                            This can lead to long-term backache, bad posture, and even nerve damage.
                   
               <br /><br />
                <h4>Why sitting too much is hazardous?</h4>
                <span className='down'>⮟</span><br />
                Sitting all day isn't only bad for your back. It can play havoc with your health as well.
            </ul><br /><br />
            <h4>Some of those risks are:</h4>
            <span className='down'>⮟</span><br />
            <ul>
                Chronic pain in neck and back
                Poor posture and back issues
                Weight gain and decreased metabolism
               Increased risk of diabetes and cardiovascular disease
             Your stomach and hip muscles are kinda weak.
            </ul>
            <br /><br />
            <h4>A good workplace can save your back. Try these:</h4>
            <span className='down'>⮟</span><br />
            <ul>
                Keep knees at hip level and flat feet on the floor   

            Sit back in the chair fully with your back against it.   

                Position your screen at eye level  

                If your feet can't touch the floor, just take a footrest. Have your keyboard and mouse within easy reach to prevent leaning.  
            Improve Your Posture    

            </ul>
            <br /><br />
            <h4>
                You don't need to do it all at once. Start with small changes like:
            </h4>   <span className='down'>⮟</span><br />
            <ul>
                Renovating your desk 

               Having a timer to stand every half hour

         Refreshing with a few daily stretches  

            
           These tiny habits protect your spine.
            
            </ul><br /><br />
            <br /><br />
            <h5 className='CTA'>Your back carries your entire body around every day. If you sit a great deal, it's time to mix it up. Straighten your back, get your body moving more frequently, and arrange your world to support your back. These simple steps will feel wonderful and keep you healthier in the long term.</h5><br />
            <h5 className='CTA'>📞 Call us or visit us for a consultation. Your Spine deserve the best care...</h5><br /><br />
            <Link to="/contact"><Button variant="contained" >Reach us out</Button></Link> <br /><br />
        </>
    )
}
