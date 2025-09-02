// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top (or to an anchor if there's a hash) on every route change.
 * Usage: <ScrollToTop behavior="smooth" />
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL has #anchor, try to scroll to that element
    if (hash) {
      const id = hash.slice(1);
      // wait a tick in case the target renders after route change
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

    // Otherwise just go to top
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
