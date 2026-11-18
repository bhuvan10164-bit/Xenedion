import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Industries from './components/Industries/Industries';
import Partners from './components/Partners/Partners';
import Resources from './components/Resources/Resources';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
