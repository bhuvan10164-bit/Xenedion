import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/xenedion-logo.png';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionsLinks = [
    { label: 'CRM & Sales', id: 'crm' },
    { label: 'Order Management', id: 'order' },
    { label: 'Procurement', id: 'procurement' },
    { label: 'Inventory', id: 'inventory' },
    { label: 'Warehouse', id: 'warehouse' },
    { label: 'Finance & Accounts', id: 'finance' },
    { label: 'HR', id: 'hr' },
    { label: 'Logistics', id: 'logistics' },
    { label: 'Reporting', id: 'bi' }
  ];

  const industriesLinks = [
    { label: 'Retail', id: 'retail' },
    { label: 'Distribution', id: 'distribution' },
    { label: 'Manufacturing', id: 'manufacturing' },
    { label: 'Garments', id: 'garments' },
    { label: 'Automotive', id: 'automotive' }
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

      {/* Top Video-Inspired Prompt Row (matching 00:19 - 00:20 in video) */}
      <div className="footer-top-prompt-banner">
        <div className="container footer-prompt-flex">
          <div className="footer-prompt-text-group">
            <h3 className="footer-prompt-title">Let's talk! Have a project for us!</h3>
            <p className="footer-prompt-sub">Ready to unify your business operations with XENedion.</p>
          </div>
          <button
            type="button"
            className="footer-prompt-pill-btn"
            onClick={() => {
              onNavigate('contact');
              scrollToTop();
            }}
          >
            <span>Request a Demo</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div className="container footer-main-container">
        {/* Main Footer Columns Grid */}
        <div className="footer-columns-grid">
          {/* Brand Identity & Visual Card (matching 00:20 in video) */}
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
            <h4 className="footer-brand-tagline">Intelligent Connected Business.</h4>
            <p className="footer-brand-desc">
              An integrated Enterprise Resource Planning platform designed to connect business processes, simplify operations and improve organizational visibility.
            </p>

            <div className="footer-office-preview-card">
              <img
                src="/assets/images/connected-operations.jpg"
                alt="XENedion Enterprise Operations"
                className="footer-office-preview-img"
              />
              <div className="footer-office-caption">
                <span>Unified Enterprise Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Monumental Wordmark & Navigation Group */}
          <div className="footer-nav-and-wordmark">
            <div className="footer-monumental-wordmark" aria-hidden="true">
              XENedion
            </div>

            <div className="footer-links-tri-column">
              {/* Solutions Column */}
              <div className="footer-nav-col">
                <h4 className="footer-col-title">Solutions</h4>
                <ul className="footer-link-list">
                  {solutionsLinks.map((sol) => (
                    <li key={sol.id}>
                      <button
                        type="button"
                        className="footer-link-btn"
                        onClick={() => {
                          onNavigate('solutions', sol.id);
                          scrollToTop();
                        }}
                      >
                        {sol.label}
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
                    <li key={ind.id}>
                      <button
                        type="button"
                        className="footer-link-btn"
                        onClick={() => {
                          onNavigate('industries', ind.id);
                          scrollToTop();
                        }}
                      >
                        {ind.label}
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