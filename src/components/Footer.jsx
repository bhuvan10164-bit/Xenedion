import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About XENedion', href: '#about' },
    { name: 'Why XENedion?', href: '#why-xenedion' },
    { name: 'Our Approach', href: '#our-approach' },
  ];

  return (
    <footer className="site-footer">
      {/* Top Ribbon Accent Line */}
      <div className="footer-ribbon-bar" />

      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand Identity Column */}
          <div className="footer-brand-column">
            <a href="#home" className="footer-logo-link" aria-label="XENedion Home">
              <div className="footer-logo-wrapper">
                <img
                  src="/assets/xenedion-logo.png"
                  alt="XENedion Logo"
                  className="footer-logo-img"
                  width="180"
                  height="45"
                />
              </div>
            </a>
            <p className="footer-brand-description">
              Integrated Enterprise Resource Planning platform designed to bring essential business processes together within a unified system.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-column">
            <h4 className="footer-nav-heading">Platform Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="footer-nav-item">
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Philosophy Column strictly from approved document */}
          <div className="footer-principles-column">
            <h4 className="footer-nav-heading">Guiding Principles</h4>
            <ul className="footer-principles-list">
              <li>Simplify business management</li>
              <li>Connect information across functions</li>
              <li>Streamline operational workflows</li>
              <li>Establish operational visibility</li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} XENedion. All rights reserved. Enterprise Technology Designed Around the Way Businesses Work.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
