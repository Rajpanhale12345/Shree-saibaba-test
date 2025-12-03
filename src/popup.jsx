import React, { use, useState } from 'react'
import { useEffect } from 'react';
import image from "./Images/popup.webp"
import "./popup.css"

const Popup = () => {
const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
        setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        {showPopup && (
            <div className="popup">
              <img src={image} alt="Popup"/>
                <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
        )}
    </div>
  )
}

export default Popup;
