 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
 
    if (hash) {
      const id = hash.slice(1);
    
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior });
        }
      });
      return;
    }

 
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
