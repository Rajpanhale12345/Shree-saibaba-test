import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Departments from './Departments';
import About from './About';
import Doctors from './Doctors'
import Medical from './Medical';
import Blogs from './Blogs';
import PressReleases from './PressReleases';
import Contact from './Contact';
import Footer from './Footer';
import Cardiology from './Cardiology';
import CardioVascular from './CardioVascular';
import Ortho from './Orthopedic';
import Urology from './Urology';
import Neurology from './Neurology';
import Radiology from './Radiology';
import InterventionalRadiology from './IR';
import Neurosurgery from './Neurosurgery';
import Testimonials from './Testimonials';
import Kidney from './Kidney';
import Spine from './Spine';
import Sitemap from './sitemap';
import ScrollToTop from './ScrollToTop';
import GTranslate from "./GTranslate";
import InternalMedicine from './InternalMedicine';
import Dentistry from './Dentistry';
import GeneralSurgery from './GeneralSurgery';
import PlasticSurgery from './PlasticSurgery';
import Opthalmology from './Opthalmology';
import Gastroenterology from './Gastroenterology';
import Nephrology from './Nephrology';
import OPD from './OPD.';
import FullBodyCheckup from './FullBodyCheckup';


function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0 }}>
        <GTranslate />
        <Header />
        <Navbar />
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctors" element={<Doctors />} /> 
            <Route path="/medical" element={<Medical />} />
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/pr" element={<PressReleases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/cardiovascular" element={<CardioVascular />} />
            <Route path="/Ortho" element={<Ortho />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/neurology" element={<Neurology />} />
            <Route path="/radiology" element={<Radiology />} />
            <Route path="/interventionalradiology" element={<InterventionalRadiology />} />
            <Route path="/neurosurgery" element={<Neurosurgery />} />
            <Route path="/InternalMedicine" element={<InternalMedicine />} />
            <Route path="/Dentistry" element={<Dentistry />} />
            <Route path="/GeneralSurgery" element={<GeneralSurgery />} />
            <Route path="/PlasticSurgery" element={<PlasticSurgery />} />
            <Route path="/Opthalmology" element={<Opthalmology />} />
            <Route path="/nephrology" element={<Nephrology />} />
            <Route path="/Gastroenterology" element={<Gastroenterology />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/kidney" element={<Kidney />} />
            <Route path="/spine" element={<Spine />} />
          <Route path="/sitemap" element ={<Sitemap/>}/>
          <Route path="/fullbodycheckup" element={<FullBodyCheckup />} />
          </Routes>
         
          <ScrollToTop />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
