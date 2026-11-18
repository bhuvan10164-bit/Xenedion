import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionsLinks = [
    'CRM & Sales',
    'Order Management',
    'Procurement',
    'Inventory',
    'Warehouse',
    'Finance & Accounts',
    'HR',
    'Logistics',
    'Reporting'
  ];

  const industriesLinks = [
    'Retail',
    'Distribution',
    'Manufacturing',
    'Garments',
    'Automotive'
  ];

  const companyLinks = [
    { label: 'About XENedion', target: 'about' },
    { label: 'Why XENedion', target: 'about' },
    { label: 'Partner Program', target: 'partners' },
    { label: 'Resources', target: 'resources' },
    { label: 'Contact Us', target: 'contact' }
  ];

  return (
    <footer className="website-footer">
      {/* Top Multi-color Ribbon Bar */}
      <div className="footer-ribbon-bar" />

      <div className="container footer-main-container">
        <div className="footer-columns-grid">
          {/* Brand Identity & Summary */}
          <div className="footer-brand-summary">
            <div className="footer-logo-wrapper">
              <img
                src="/assets/xenedion-logo.png"
                alt="XENedion Logo"
                className="footer-brand-logo"
                width="190"
                height="48"
              />
            </div>
            <h4 className="footer-brand-tagline">Intelligent Connected Business.</h4>
            <p className="footer-brand-desc">
              An integrated Enterprise Resource Planning platform designed to connect business processes, simplify operations and improve organizational visibility.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-link-list">
              {solutionsLinks.map((sol) => (
                <li key={sol}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => {
                      onNavigate('solutions');
                      scrollToTop();
                    }}
                  >
                    {sol}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-link-list">
              {industriesLinks.map((ind) => (
                <li key={ind}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => {
                      onNavigate('industries');
                      scrollToTop();
                    }}
                  >
                    {ind}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              {companyLinks.map((comp) => (
                <li key={comp.label}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => {
                      onNavigate(comp.target);
                      scrollToTop();
                    }}
                  >
                    {comp.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-wrap">
            <p className="footer-powered-by">
              Powered by Astrion Digital Private Limited
            </p>
            <p className="footer-copyright-text">
              © 2026 XENedion. All Rights Reserved.
            </p>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
