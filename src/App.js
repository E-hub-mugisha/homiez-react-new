import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Webservice from './pages/Webservice';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Quote from './pages/Quote';

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Home - HOMIEZ',
      '/about': 'About Us - HOMIEZ',
      '/services': 'Our Services - HOMIEZ',
      '/contact': 'Contact Us - HOMIEZ',
      '/web-services': 'Web Services - HOMIEZ',
      '/photography': 'Photography - HOMIEZ',
      '/videography': 'Videography - HOMIEZ',
      '/quote': 'Quote - HOMIEZ',
    };

    const normalizedPath = location.pathname.toLowerCase();
    document.title = titles[normalizedPath] || 'HOMIEZ';
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <DynamicTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-services" element={<Webservice />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
