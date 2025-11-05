import React from "react";
import Upper from "./Upper";
import "./Testimonials.css";
import Test from "./Test";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const { pathname } = useLocation();
  const canonical = `https://shreesaibabamultispecialityhospital.com/testimonials${pathname}`;

  return (
    <>
      <Helmet>
        <title>Tearms & Condition | Shree Saibaba Multispeciality Hospital</title>
        <meta name='description" content="Real patient stories and reviews about cardiology, neurology, nephrology, orthopaedics and more at Shree Saibaba Multispeciality Hospital, Nashik.' />
        <link rel="canonical" href={canonical} />
        <meta property='og:title' content='Patient Testimonials | Shree Saibaba Hospital' />
        <meta property='og:description' content='Read inspiring recovery stories from our patients.' />
        <meta property='og:url' content={canonical} />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      <div>
        <Upper text="Testimonials" />
        <Test />

        <div className="read">
          <a
            href="https://www.google.com/search?q=Shree+Saibaba+Heart+Institute+And+Research+Centre+Reviews"
            target="_blank"
            rel="noopener nofollow"
          >
            Click here to read more inspiring stories…
          </a>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Testimonials;
