import React from 'react';
import { ArrowDown, Network, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Ribbon Motif (subtle flowing lines) */}
      <div className="hero-bg-accent" aria-hidden="true">
        <svg
          className="hero-ribbon-svg"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C300 100, 600 450, 1100 250 C1300 170, 1500 300, 1600 280"
            stroke="url(#hero-ribbon-grad-1)"
            strokeWidth="3"
            strokeDasharray="6 8"
            opacity="0.3"
          />
          <path
            d="M-50 450 C350 350, 750 650, 1200 400 C1380 300, 1550 480, 1650 420"
            stroke="url(#hero-ribbon-grad-2)"
            strokeWidth="2.5"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="hero-ribbon-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00DDFC" />
              <stop offset="35%" stopColor="#1264F5" />
              <stop offset="70%" stopColor="#7024E8" />
              <stop offset="100%" stopColor="#FF642C" />
            </linearGradient>
            <linearGradient id="hero-ribbon-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1264F5" />
              <stop offset="50%" stopColor="#00DDFC" />
              <stop offset="100%" stopColor="#FF642C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography & Approved Copy */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Integrated ERP Platform</span>
            </div>

            <h1 className="hero-heading">
              Enterprise Technology Designed Around the Way Businesses Work
            </h1>

            <div className="ribbon-gradient-bar" />

            <div className="hero-copy-body">
              <p className="hero-lead">
                Businesses today operate in an increasingly connected and competitive environment. Managing customers, suppliers, inventory, finances and people requires coordination across multiple functions. Yet many organizations continue to depend on disconnected systems and manual processes to manage their everyday operations.
              </p>
              
              <div className="hero-callout">
                <p className="hero-callout-highlight">
                  XENedion was conceived to address this challenge.
                </p>
                <p className="hero-callout-text">
                  It is an integrated Enterprise Resource Planning platform designed to bring essential business processes together within a unified system.
                </p>
              </div>
            </div>

            <div className="hero-action-row">
              <a href="#about" className="btn-primary">
                <span>Learn About XENedion</span>
                <ArrowRight size={18} className="btn-icon" />
              </a>
              <a href="#why-xenedion" className="btn-secondary">
                <span>Why XENedion?</span>
              </a>
            </div>

            {/* Micro proof points anchored strictly in approved principles */}
            <div className="hero-pillars">
              <div className="hero-pillar-item">
                <div className="hero-pillar-icon-box">
                  <Network size={20} className="hero-pillar-icon" />
                </div>
                <div>
                  <div className="hero-pillar-title">Connected Processes</div>
                  <div className="hero-pillar-sub">Cross-functional coordination</div>
                </div>
              </div>
              <div className="hero-pillar-divider" />
              <div className="hero-pillar-item">
                <div className="hero-pillar-icon-box">
                  <ShieldCheck size={20} className="hero-pillar-icon" />
                </div>
                <div>
                  <div className="hero-pillar-title">Operational Visibility</div>
                  <div className="hero-pillar-sub">Meaningful management information</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Realistic Editorial Visual Composition */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-card">
              <div className="hero-image-frame">
                <img
                  src="/assets/images/connected-operations.jpg"
                  alt="Enterprise business professionals collaborating across sales, customer management, and operations"
                  className="hero-main-img"
                  width="1200"
                  height="750"
                  loading="eager"
                />
                <div className="hero-image-gradient-overlay" />
              </div>

              {/* Connected Functional Ribbon Node */}
              <div className="hero-floating-card floating-card-top">
                <div className="floating-card-pill">
                  <span className="floating-card-indicator" />
                  <span className="floating-card-badge">Integrated Operations</span>
                </div>
                <div className="floating-card-nodes">
                  <span className="node-tag">Sales</span>
                  <span className="node-arrow">→</span>
                  <span className="node-tag">Procurement</span>
                  <span className="node-arrow">→</span>
                  <span className="node-tag">Inventory</span>
                  <span className="node-arrow">→</span>
                  <span className="node-tag">Fulfillment</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="hero-floating-card floating-card-bottom">
                <div className="floating-card-icon-wrap">
                  <Layers size={22} className="floating-card-icon" />
                </div>
                <div>
                  <p className="floating-card-title">Unified Business Architecture</p>
                  <p className="floating-card-desc">Connecting information rather than creating silos.</p>
                </div>
              </div>
            </div>

            {/* Decorative Ribbon Accent Elements */}
            <div className="hero-accent-shape hero-accent-shape-1" aria-hidden="true" />
            <div className="hero-accent-shape hero-accent-shape-2" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-prompt">
          <a href="#about" aria-label="Scroll down to About XENedion">
            <span className="hero-scroll-label">Discover XENedion</span>
            <ArrowDown size={18} className="hero-scroll-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
