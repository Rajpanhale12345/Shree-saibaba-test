import { useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function GTranslate() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "mr"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher: "dropdown" // dropdown without flags
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>

      {/* <helmet>
        <title>Language Translate | Shree Saibaba</title>
      </helmet> */}


      {/* Internal CSS to hide flags */}
      <style>{`
        .gtranslate_wrapper img {
          display: none !important;
        }
      `}</style>

      <div className="gtranslate_wrapper"></div>
    </>
  );
}
