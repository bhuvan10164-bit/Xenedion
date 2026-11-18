import React from 'react';
import {
  Sparkles,
  GitMerge,
  Workflow,
  BarChart3,
  Sliders,
  Compass,
  GitBranch,
  ShieldCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import './About.css';

export default function About({ onNavigate }) {
  const principles = [
    {
      num: '01',
      title: 'Simplify, rather than complicate, business operations.',
      desc: 'Eliminate needless friction and streamline complex administrative overhead across functions.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Connect information rather than create silos.',
      desc: 'Unite operational data into a shared single source of truth across all business units.',
      icon: GitMerge
    },
    {
      num: '03',
      title: 'Improve processes rather than simply digitise existing inefficiencies.',
      desc: 'Transform and optimize end-to-end workflows rather than automating broken manual procedures.',
      icon: Workflow
    },
    {
      num: '04',
      title: 'Support management decisions with meaningful information.',
      desc: 'Deliver real-time consolidated visibility so leadership acts with speed, clarity, and precision.',
      icon: BarChart3
    },
    {
      num: '05',
      title: 'Adapt to changing business requirements.',
      desc: 'Architected to scale seamlessly as new products, facilities, suppliers, and markets evolve.',
      icon: Sliders
    }
  ];

  const approachStages = [
    {
      step: '01',
      title: 'Understand the Business',
      desc: "Understand the organization's business model, operational requirements and process challenges.",
      icon: Compass
    },
    {
      step: '02',
      title: 'Connect the Processes',
      desc: 'Bring different departments and business functions together through integrated workflows.',
      icon: GitBranch
    },
    {
      step: '03',
      title: 'Establish Operational Control',
      desc: 'Create structured processes and improve visibility across business activities.',
      icon: ShieldCheck
    },
    {
      step: '04',
      title: 'Enable Continuous Improvement',
      desc: 'Use business information and operational insights to identify opportunities for improvement.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="about-page-view">
      {/* 1. ABOUT XENEDION MAIN */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-header-block">
            <span className="section-tag">ABOUT XENEDION</span>
            <h1 className="about-hero-title">
              Enterprise Technology Designed Around the Way Businesses Work
            </h1>
            <div className="ribbon-gradient-bar" />
          </div>

          <div className="about-split-layout">
            <div className="about-editorial-text">
              <p className="about-lead-paragraph">
                Businesses today operate in an increasingly connected and competitive environment. Managing customers, suppliers, inventory, finances and people requires coordination across multiple functions. Yet many organizations continue to depend on disconnected systems and manual processes to manage their everyday operations.
              </p>

              <div className="about-highlight-box">
                <div className="about-highlight-bar" />
                <p className="about-highlight-title">
                  XENedion was conceived to address this challenge.
                </p>
                <p className="about-highlight-desc">
                  It is an integrated Enterprise Resource Planning platform designed to bring essential business processes together within a unified system.
                </p>
              </div>

              <div className="about-body-copy">
                <p>
                  Our objective is to simplify business management by connecting information, streamlining workflows and providing organizations with greater operational visibility.
                </p>
                <p className="about-body-conclusion">
                  XENedion brings together business process understanding and enterprise technology to help organizations operate more efficiently and manage growth with greater confidence.
                </p>
              </div>
            </div>

            <div className="about-visual-column">
              <div className="about-image-card-wrapper">
                <div className="about-image-frame">
                  <img
                    src="/assets/images/procurement-coordination.jpg"
                    alt="Enterprise business professionals reviewing cross-functional operational plans"
                    className="about-feature-img"
                    width="1000"
                    height="667"
                    loading="eager"
                  />
                </div>
                <div className="about-caption-card">
                  <p className="about-caption-quote">
                    "Connecting information, streamlining workflows and providing organizations with greater operational visibility."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY XENEDION? BECAUSE EVERY PART OF YOUR BUSINESS MATTERS */}
      <section className="about-section section-alt">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">
              Because Every Part of Your Business Matters.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="about-why-narrative">
              A business doesn't operate as a collection of independent departments. Sales influence inventory. Procurement affects availability. Inventory impacts fulfillment. Every transaction has operational and financial implications. When these functions operate independently, businesses lose valuable visibility and coordination.
            </p>
            <div className="about-connects-badge">
              <span className="connects-dot" />
              <span>XENedion connects these functions to create a more integrated business environment.</span>
            </div>
          </div>

          <div className="about-principles-container">
            <h3 className="principles-lead-header">
              We believe that enterprise technology should:
            </h3>

            <div className="about-principles-grid">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.num} className="about-principle-card">
                    <div className="principle-card-top">
                      <span className="principle-num-badge">{item.num}</span>
                      <div className="principle-icon-box">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h4 className="principle-card-title">{item.title}</h4>
                    <p className="principle-card-desc">{item.desc}</p>
                    <div className="principle-bottom-bar" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="about-section about-approach-dark">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag section-tag-dark">Our Approach</span>
            <h2 className="section-title approach-white-title">
              Understand. Connect. Control. Improve.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="approach-intro-copy">
              We recognize that every business has its own operating processes and management requirements. Our approach focuses on understanding these requirements and aligning the ERP platform with the way the business operates.
            </p>
          </div>

          <div className="about-stages-timeline">
            {approachStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.step} className="approach-timeline-card">
                  <div className="timeline-node-circle">
                    <Icon size={24} />
                    <span className="node-step-label">{stage.step}</span>
                  </div>
                  <div className="timeline-card-content">
                    <h3 className="timeline-stage-title">{stage.title}</h3>
                    <p className="timeline-stage-desc">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-approach-footer-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('contact')}
            >
              <span>Speak with Our Implementation Specialists</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
