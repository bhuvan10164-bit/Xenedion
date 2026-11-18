import React from 'react';
import {
  Handshake,
  TrendingUp,
  Cpu,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './Partners.css';

export default function Partners({ onNavigate }) {
  const partnerTracks = [
    {
      title: 'Implementation & Delivery Partners',
      tag: 'Consultancies & Systems Integrators',
      icon: Handshake,
      desc: 'Partner with XENedion to lead enterprise digital transformations, business process alignment, and technical rollout for middle-market and enterprise organizations.',
      perks: [
        'Dedicated partner enablement and implementation methodology certification.',
        'Direct access to senior ERP product architects and priority escalation engineering.',
        'Attractive recurring margins on licensing and implementation revenues.'
      ]
    },
    {
      title: 'Solution Advisory & Referral Partners',
      tag: 'Management & Industry Advisors',
      icon: TrendingUp,
      desc: 'Recommend a modern, unified ERP platform to business leaders struggling with disconnected spreadsheets and departmental silos.',
      perks: [
        'Transparent deal registration and recurring commission structures.',
        'Comprehensive marketing collaterals, whitepapers, and joint solution briefs.',
        'Executive sales support and customized product demonstrations for prospects.'
      ]
    },
    {
      title: 'Technology & Integration Partners',
      tag: 'ISVs & Ecosystem Enablers',
      icon: Cpu,
      desc: 'Extend XENedion through native integrations with specialized hardware, regional payment gateways, IoT warehouse scanners, and logistics tracking APIs.',
      perks: [
        'Well-documented REST APIs and sandbox development environments.',
        'Co-marketing opportunities and listing in the XENedion enterprise ecosystem.',
        'Joint roadmapping and continuous integration testing.'
      ]
    }
  ];

  return (
    <div className="partners-page-view">
      {/* 1. Hero Section */}
      <section className="partners-hero-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Partner Program</span>
            <h1 className="section-title">
              Expand Your Impact. Deliver Connected Enterprise Value.
            </h1>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="partners-hero-lead">
              Whether you are evaluating ERP software, planning to upgrade your existing systems or exploring opportunities to become a XENedion partner, we would be happy to hear from you.
            </p>
            <p className="partners-sub-lead">
              Connect with our team to understand how XENedion can support your business requirements and joint market opportunities.
            </p>
            <div className="partners-hero-cta">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onNavigate('contact')}
              >
                <span>Apply for the Partner Program</span>
                <ArrowRight size={17} className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partner Tracks */}
      <section className="section-alt partner-tracks-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Collaboration Tracks</span>
            <h2 className="section-title">Tailored Partnership Pathways</h2>
            <p className="section-subtitle">
              Designed to create enduring mutual value across professional service domains.
            </p>
          </div>

          <div className="partner-tracks-grid">
            {partnerTracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <div key={i} className="partner-track-card">
                  <div className="track-card-header">
                    <div className="track-icon-box">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="track-type-tag">{track.tag}</span>
                      <h3 className="track-title">{track.title}</h3>
                    </div>
                  </div>

                  <p className="track-desc">{track.desc}</p>

                  <div className="track-perks-box">
                    <h4 className="perks-heading">Partner Benefits:</h4>
                    <ul>
                      {track.perks.map((p, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="perk-check-icon" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="track-card-footer">
                    <button
                      type="button"
                      className="track-apply-btn"
                      onClick={() => onNavigate('contact')}
                    >
                      <span>Express interest</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Partner Value Pillar Banner */}
      <section className="partners-banner-section">
        <div className="container">
          <div className="partner-value-card">
            <div className="value-pillar-item">
              <div className="value-pillar-icon">
                <GraduationCap size={24} />
              </div>
              <h4 className="value-pillar-title">Comprehensive Certification</h4>
              <p className="value-pillar-desc">
                Structured functional training enabling your team to confidently scope and configure XENedion.
              </p>
            </div>

            <div className="value-pillar-divider" />

            <div className="value-pillar-item">
              <div className="value-pillar-icon">
                <ShieldCheck size={24} />
              </div>
              <h4 className="value-pillar-title">Dedicated Account Support</h4>
              <p className="value-pillar-desc">
                Named partner relationship manager and joint architectural reviews for every enterprise engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
