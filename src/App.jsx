import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyXenedion from './components/WhyXenedion';
import OurApproach from './components/OurApproach';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <WhyXenedion />
        <OurApproach />
      </main>

      <Footer />
    </div>
  );
}
