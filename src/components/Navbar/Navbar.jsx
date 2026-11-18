import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home Page' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'partners', label: 'Partners' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          aria-label="XENedion Home"
        >
          <img
            src="/assets/xenedion-logo.png"
            alt="XENedion — Integrated Enterprise Resource Planning"
            className="navbar-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="navbar-nav-item">
                  <button
                    type="button"
                    className={`navbar-nav-link ${isActive ? 'navbar-nav-link-active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Right CTA Action */}
        <div className="navbar-action-desktop">
          <button
            type="button"
            className="navbar-cta-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span>Request a Demo</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`navbar-mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <img
              src="/assets/xenedion-logo.png"
              alt="XENedion Logo"
              className="navbar-logo-img mobile-logo-img"
            />
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id} className="mobile-nav-item">
                    <button
                      type="button"
                      className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="mobile-active-dot" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn-primary mobile-cta-btn"
              onClick={() => handleNavClick('contact')}
            >
              <span>Request a Demo</span>
              <ArrowRight size={16} />
            </button>
            <div className="ribbon-gradient-bar" style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }} />
            <p className="mobile-footer-tagline">
              Your Business. Connected. Controlled. Informed.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="navbar-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
