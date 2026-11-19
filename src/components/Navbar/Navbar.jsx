import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import logoImg from '../../assets/xenedion-logo.png';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { id: 'home', label: 'Home' },
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
    <header className={`navbar-floating-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-floating-island">
        {/* Brand Logo Dock */}
        <a
          href="#home"
          className="navbar-brand-dock"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          aria-label="XENedion Home"
        >
          <img
            src={logoImg || "/assets/xenedion-logo.png"}
            alt="XENedion — Integrated Enterprise Resource Planning"
            className="navbar-logo-img"
            width="168"
            height="36"
          />
        </a>

        {/* Center Floating Capsule Dock */}
        <nav className="navbar-capsule-nav" aria-label="Main Navigation">
          <ul className="navbar-capsule-list">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="navbar-capsule-item">
                  <button
                    type="button"
                    className={`navbar-capsule-link ${isActive ? 'navbar-capsule-link-active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && <span className="capsule-active-indicator" aria-hidden="true" />}
                    <span className="capsule-link-text">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button: Request a Demo */}
        <div className="navbar-action-dock">
          <button
            type="button"
            className="navbar-action-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span className="btn-shimmer-effect" aria-hidden="true" />
            <Sparkles size={14} className="demo-btn-sparkle" />
            <span className="demo-btn-label">Request a Demo</span>
            <ArrowRight size={14} className="demo-btn-arrow" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            <div className="mobile-brand-wrapper">
              <img
                src={logoImg || "/assets/xenedion-logo.png"}
                alt="XENedion Logo"
                className="navbar-logo-img mobile-logo-img"
              />
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item, idx) => {
                const isActive = activePage === item.id;
                return (
                  <li
                    key={item.id}
                    className="mobile-nav-item"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <button
                      type="button"
                      className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={15} className="mobile-link-arrow" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="navbar-action-btn mobile-demo-btn"
              onClick={() => handleNavClick('contact')}
            >
              <Sparkles size={15} />
              <span>Request a Demo</span>
              <ArrowRight size={15} />
            </button>
            <div className="ribbon-gradient-bar" style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }} />
            <p className="mobile-footer-tagline">
              Your Business. Connected. Controlled. Informed.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
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