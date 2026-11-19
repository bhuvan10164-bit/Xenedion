import React from 'react';
import { ArrowUp } from 'lucide-react';
import logoImg from '../../assets/xenedion-logo.png';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // PDF 1 Page 5: Solutions (9 items)
  const solutionsLinks = [
    'CRM & Sales Management',
    'Order Management',
    'Procurement & Vendor Management',
    'Inventory Management',
    'Warehouse Management',
    'Finance & Accounts',
    'Human Resource Management',
    'Logistics Management',
    'Business Intelligence & Reporting'
  ];

  // PDF 1 Page 5: Industries (5 items)
  const industriesLinks = [
    'Retail',
    'Distribution',
    'Manufacturing',
    'Garments',
    'Automotive'
  ];

  // PDF 1 Page 5: Company (5 items)
  const companyLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'Solutions', target: 'solutions' },
    { label: 'Industries', target: 'industries' },
    { label: 'Partners', target: 'partners' },
    { label: 'Contact Us', target: 'contact' }
  ];

  return (
    <footer className="website-footer">
      {/* Top Multi-color Ribbon Bar */}
      <div className="footer-ribbon-bar" />

      <div className="container footer-main-container">
        {/* Main Footer Columns Grid */}
        <div className="footer-columns-grid">
          {/* Brand Identity & Tagline */}
          <div className="footer-brand-summary">
            <div className="footer-logo-wrapper">
              <img
                src={logoImg || "/assets/xenedion-logo.png"}
                alt="XENedion Logo"
                className="footer-brand-logo"
                width="190"
                height="48"
              />
            </div>
            <h4 className="footer-brand-tagline">Intelligent Connected Business</h4>
            <p className="footer-brand-desc">
              A unified enterprise resource planning platform designed to connect people, processes, and operational data into one intelligent ecosystem.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-links-tri-column">
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
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="footer-copyright-text">
              Powered by Astrion Digital Private Limited
            </p>
            <p className="footer-copyright-text">
              © 2026 XENedion. All Rights Reserved.
            </p>
          </div>

          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
