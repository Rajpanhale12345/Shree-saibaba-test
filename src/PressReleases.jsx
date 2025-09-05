import React, { useState } from 'react';
import Upper from './Upper';
import './PressReleases.css';
import './ImageModal.css'; 
import article1 from './Images/golden_framed_article01.png'
import article2 from './Images/golden_framed_article02.png'
import article6 from './Images/golden_framed_article6.png'
import article7 from './Images/golden_framed_article7.png'
import article8 from './Images/golden_framed_article8.png'
import article9 from './Images/golden_framed_article9.png'
import article10 from './Images/golden_framed_article10.png'
import article11 from './Images/golden_framed_article11.png'
import article12 from './Images/golden_framed_article12.png'
import article13 from './Images/golden_framed_article13.png'
import article14 from './Images/golden_framed_article14.png'
import article15 from './Images/golden_framed_article15.png'
import article16 from './Images/golden_framed_article16.png'
import article17 from './Images/golden_framed_article17.png'
import article18 from './Images/golden_framed_article18.png'
import article19 from './Images/golden_framed_article19.png'
import article20 from './Images/golden_framed_article20.png'
import article21 from './Images/golden_framed_article21.png'
import article22 from './Images/golden_framed_article22.png'
import article23 from './Images/golden_framed_article23.png'
import article24 from './Images/golden_framed_article24.png'
import article25 from './Images/golden_framed_article25.png'
import article26 from './Images/golden_framed_article26.png'
import article27 from './Images/golden_framed_article27.png'
import article28 from './Images/golden_framed_article28.png'
import article29 from './Images/golden_framed_article29.png'
import article30 from './Images/golden_framed_article30.png'
import { Helmet } from 'react-helmet';



const images = [
    article1, article2, article6, article7, article8, article9,
    article10, article11, article12, article13, article14, article15,
    article16, article17, article18, article19, article20, article21,
    article22, article23, article24, article25, article26, article27,
    article28, article29
];

function PressReleases() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>

        
    <helmet>
      <title>Press Releases | Saibaba Multispeciality Hospital</title>
    </helmet>


            <Upper text="Press Releases" classname="upper" />
            <br /><br />
            <h2 className='pioneer'><i style={{color : 'blue'}}>Pioneering change, setting the pace.⚡</i></h2><br /><br />
            <h3 className='description'><i>In this press release, we reveal the next evolution of our journey. A step designed to meet the demands of tomorrow while delivering value today. It’s not just progress, it’s intentional, focused, and bold.</i></h3>
            <br /><br /><br /><br />

            <div className='article'>
                {images.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`article${index}`}
                        onClick={() => setSelectedImage(imgSrc)}
                        className="thumbnail"
                    />
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
                    </div>
                </div>
            )}
            <br /><br />
        </>
    );
}

export default PressReleases;
