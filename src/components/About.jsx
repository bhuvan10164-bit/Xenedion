import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header-row">
          <div>
            <div className="section-tag">
              <Compass size={14} />
              <span>ABOUT XENEDION</span>
            </div>
            <h2 className="section-title">
              Enterprise Technology Designed Around the Way Businesses Work
            </h2>
          </div>
          <div className="ribbon-gradient-bar" />
        </div>

        {/* Editorial Split Layout */}
        <div className="about-grid">
          {/* Left Column: Full Approved Content Wording */}
          <div className="about-copy-column">
            <div className="about-paragraph-lead">
              <p>
                Businesses today operate in an increasingly connected and competitive environment. Managing customers, suppliers, inventory, finances and people requires coordination across multiple functions. Yet many organizations continue to depend on disconnected systems and manual processes to manage their everyday operations.
              </p>
            </div>

            <div className="about-focus-card">
              <div className="about-focus-marker" />
              <p className="about-focus-text">
                XENedion was conceived to address this challenge.
              </p>
            </div>

            <div className="about-paragraph-body">
              <p>
                It is an integrated Enterprise Resource Planning platform designed to bring essential business processes together within a unified system.
              </p>
              <p>
                Our objective is to simplify business management by connecting information, streamlining workflows and providing organizations with greater operational visibility.
              </p>
              <p className="about-paragraph-conclusion">
                XENedion brings together business process understanding and enterprise technology to help organizations operate more efficiently and manage growth with greater confidence.
              </p>
            </div>

            {/* Core Value Pillars explicitly drawn from the approved text */}
            <div className="about-attributes-grid">
              <div className="about-attribute-card">
                <div className="about-attribute-icon-wrap icon-cyan">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="about-attribute-title">Connecting Information</h4>
                  <p className="about-attribute-desc">
                    Bringing together fragmented systems into a unified operational view.
                  </p>
                </div>
              </div>

              <div className="about-attribute-card">
                <div className="about-attribute-icon-wrap icon-blue">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="about-attribute-title">Streamlining Workflows</h4>
                  <p className="about-attribute-desc">
                    Eliminating manual handoffs and aligning business procedures.
                  </p>
                </div>
              </div>

              <div className="about-attribute-card">
                <div className="about-attribute-icon-wrap icon-orange">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="about-attribute-title">Managing Growth</h4>
                  <p className="about-attribute-desc">
                    Providing leaders with the operational visibility to scale with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Business Editorial Photograph */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <div className="about-image-frame">
                <img
                  src="/assets/images/procurement-coordination.jpg"
                  alt="Enterprise business professionals collaborating on procurement, supplier coordination, and operations planning"
                  className="about-editorial-img"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>

              {/* Editorial Caption Box */}
              <div className="about-image-caption">
                <div className="caption-accent-line" />
                <p className="caption-quote">
                  "XENedion brings together business process understanding and enterprise technology to help organizations operate more efficiently."
                </p>
                <span className="caption-sub">
                  Operational Coordination & Supplier Management
                </span>
              </div>
            </div>

            {/* Subtle Ribbon SVG Accent */}
            <div className="about-ribbon-accent" aria-hidden="true">
              <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 60 C100 10, 200 110, 390 50"
                  stroke="url(#about-ribbon-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="about-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1264F5" />
                    <stop offset="50%" stopColor="#7024E8" />
                    <stop offset="100%" stopColor="#FF642C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
