import React from "react";                  // ✅ make sure this is here
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>   {/* requires React */}
    <App />
  </React.StrictMode>
);
