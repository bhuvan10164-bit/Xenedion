import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Industries from './components/Industries/Industries';
import Partners from './components/Partners/Partners';
import Resources from './components/Resources/Resources';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling & synchronize with GSAP ScrollTrigger
  useEffect(() => {
    // Only enable smooth scrolling on non-reduced-motion environments
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      // Connect Lenis to ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(updateTicker);
      };
    }
  }, []);

  // Handle URL hash changes for deep linking (e.g. #solutions, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'solutions', 'industries', 'partners', 'resources', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Refresh ScrollTrigger after view transition
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content">
        {activePage === 'home' && <Home onNavigate={handleNavigate} />}
        {activePage === 'about' && <About onNavigate={handleNavigate} />}
        {activePage === 'solutions' && <Solutions onNavigate={handleNavigate} />}
        {activePage === 'industries' && <Industries onNavigate={handleNavigate} />}
        {activePage === 'partners' && <Partners onNavigate={handleNavigate} />}
        {activePage === 'resources' && <Resources onNavigate={handleNavigate} />}
        {activePage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </main>

      {/* Website Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
