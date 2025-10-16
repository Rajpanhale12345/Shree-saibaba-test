import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Header from "./Header";
import Departments from "./Departments";
import About from "./About";
import Doctors from "./Doctors";
import Medical from "./Medical";
import Blogs from "./Blogs";
import PressReleases from "./PressReleases";
import Contact from "./Contact";
import Footer from "./Footer";
import Cardiology from "./Cardiology";
import CardioVascular from "./CardioVascular";
import Ortho from "./Orthopedic";
import Urology from "./Urology";
import Neurology from "./Neurology";
import Radiology from "./Radiology";
import InterventionalRadiology from "./IR";
import Neurosurgery from "./Neurosurgery";
import Testimonials from "./Testimonials";
import Kidney from "./Kidney";
import Spine from "./Spine";
import Sitemap from "./Sitemap";
import ScrollToTop from "./ScrollToTop";
import GTranslate from "./GTranslate";
import InternalMedicine from "./InternalMedicine";
import Dentistry from "./Dentistry";
import GeneralSurgery from "./GeneralSurgery";
import PlasticSurgery from "./PlasticSurgery";
import Opthalmology from "./Opthalmology";
import Gastroenterology from "./Gastroenterology";
import Nephrology from "./Nephrology";
import OPD from "./OPD.";
import FullBodyCheckup from "./FullBodyCheckup";
import Cardio_blog from "./Cardio_blog";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import SpineCare from "./SpineCare";
import GeneralMedicine from "./GeneralMedicine";
import Gynecology from "./Gynecology";
import Pulmonology from "./Pulmonology";
import Facilities from "./Facilities";
import TieUps from "./TieUps";

function App() {
  return (
    <Router>
      <GTranslate />
      <header>
        <Header />
        <Navbar />
      </header>

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/packages" element={<Medical />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pr" element={<PressReleases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/cardiovascular" element={<CardioVascular />} />
          <Route path="/ortho" element={<Ortho />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/radiology" element={<Radiology />} />
          <Route path="/interventionalradiology" element={<InterventionalRadiology />} />
          <Route path="/neurosurgery" element={<Neurosurgery />} />
          <Route path="/internalmedicine" element={<InternalMedicine />} />
          <Route path="/dentistry" element={<Dentistry />} />
          <Route path="/generalsurgery" element={<GeneralSurgery />} />
          <Route path="/plasticsurgery" element={<PlasticSurgery />} />
          <Route path="/opthalmology" element={<Opthalmology />} />
          <Route path="/nephrology" element={<Nephrology />} />
          <Route path="/gastroenterology" element={<Gastroenterology />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/kidney" element={<Kidney />} />
          <Route path="/spine" element={<Spine />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/fullbodycheckup" element={<FullBodyCheckup />} />
          <Route path="/cardio" element={<Cardio_blog />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/spinecare" element={<SpineCare />} />
          <Route path="/gynaecology" element={<Gynecology />} />
          <Route path="/generalmedicine" element={<GeneralMedicine />} />
          <Route path="/pulmonology" element={<Pulmonology />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/tieups" element={<TieUps />} />
        </Routes>

        <ScrollToTop />
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
