import React, { useState } from 'react';
import {
  Compass,
  GitBranch,
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowRight
} from 'lucide-react';

export default function OurApproach() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Understand the Business',
      description: "Understand the organization's business model, operational requirements and process challenges.",
      icon: Compass,
      tag: 'Stage 1 — Discovery & Alignment',
      color: 'var(--color-electric-blue)',
      gradient: 'linear-gradient(135deg, #1264F5 0%, #00DDFC 100%)'
    },
    {
      step: '02',
      title: 'Connect the Processes',
      description: 'Bring different departments and business functions together through integrated workflows.',
      icon: GitBranch,
      tag: 'Stage 2 — Integration & Synthesis',
      color: 'var(--color-purple)',
      gradient: 'linear-gradient(135deg, #7024E8 0%, #1264F5 100%)'
    },
    {
      step: '03',
      title: 'Establish Operational Control',
      description: 'Create structured processes and improve visibility across business activities.',
      icon: ShieldCheck,
      tag: 'Stage 3 — Governance & Visibility',
      color: 'var(--color-primary-navy)',
      gradient: 'linear-gradient(135deg, #091F40 0%, #1264F5 100%)'
    },
    {
      step: '04',
      title: 'Enable Continuous Improvement',
      description: 'Use business information and operational insights to identify opportunities for improvement.',
      icon: TrendingUp,
      tag: 'Stage 4 — Evolution & Insight',
      color: 'var(--color-orange)',
      gradient: 'linear-gradient(135deg, #FF642C 0%, #7024E8 100%)'
    }
  ];

  return (
    <section id="our-approach" className="section section-dark approach-section">
      {/* Background Ribbon Flow Lines */}
      <div className="approach-bg-svg" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100 300 C300 150, 700 450, 1100 200 C1300 100, 1500 350, 1600 250"
            stroke="url(#approach-ribbon-line)"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="approach-ribbon-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00DDFC" />
              <stop offset="40%" stopColor="#1264F5" />
              <stop offset="70%" stopColor="#7024E8" />
              <stop offset="100%" stopColor="#FF642C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="approach-header">
          <div className="section-tag section-tag-dark">
            <Target size={14} />
            <span>Our Approach</span>
          </div>

          <h2 className="section-title approach-main-title">
            Understand. Connect. Control. Improve.
          </h2>

          <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />

          {/* Introductory Paragraph */}
          <p className="approach-intro-text">
            We recognize that every business has its own operating processes and management requirements. Our approach focuses on understanding these requirements and aligning the ERP platform with the way the business operates.
          </p>
        </div>

        {/* Desktop Process Flow Track */}
        <div className="approach-flow-desktop">
          {/* Connecting Ribbon Gradient Track */}
          <div className="approach-track-line" aria-hidden="true">
            <div className="track-line-progress" />
          </div>

          <div className="approach-stages-grid">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isCurrent = activeStep === index;
              return (
                <div
                  key={stage.step}
                  className={`approach-stage-item ${isCurrent ? 'stage-item-active' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                  tabIndex={0}
                  onFocus={() => setActiveStep(index)}
                  role="region"
                  aria-label={stage.title}
                >
                  {/* Step Connector Node */}
                  <div className="stage-node-wrapper">
                    <div
                      className="stage-node-circle"
                      style={{ background: stage.gradient }}
                    >
                      <Icon size={24} className="stage-node-icon" />
                    </div>
                    <span className="stage-step-badge">{stage.step}</span>
                  </div>

                  {/* Stage Card */}
                  <div className="stage-card">
                    <span className="stage-tag">{stage.tag}</span>
                    <h3 className="stage-title">{stage.title}</h3>
                    <p className="stage-desc">{stage.description}</p>
                    <div className="stage-card-indicator" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="approach-timeline-mobile">
          <div className="mobile-timeline-track" />
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div key={stage.step} className="mobile-timeline-step">
                <div
                  className="mobile-timeline-node"
                  style={{ background: stage.gradient }}
                >
                  <Icon size={20} className="mobile-node-icon" />
                </div>
                <div className="mobile-timeline-content">
                  <div className="mobile-step-num-pill">
                    <span>Stage {stage.step}</span>
                  </div>
                  <h3 className="mobile-step-title">{stage.title}</h3>
                  <p className="mobile-step-desc">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Alignment Manifesto */}
        <div className="approach-alignment-banner">
          <div className="alignment-banner-inner">
            <div className="alignment-quote-icon">"</div>
            <p className="alignment-banner-quote">
              "Aligning the ERP platform with the way the business operates."
            </p>
            <div className="alignment-banner-actions">
              <a href="#about" className="alignment-btn">
                <span>Explore the Platform</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
