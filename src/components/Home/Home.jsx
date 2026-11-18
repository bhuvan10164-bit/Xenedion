import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Layers,
  Sparkles,
  BarChart3,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Truck,
  Factory,
  Scissors,
  Car,
  ChevronRight,
  Network
} from 'lucide-react';
import './Home.css';

export default function Home({ onNavigate }) {
  const challengeConsequences = [
    'Disconnected systems and fragmented information.',
    'Repetitive data entry and manual processes.',
    'Limited visibility across departments.',
    'Delays in accessing critical business information.',
    'Inventory discrepancies and operational inefficiencies.',
    'Difficulty maintaining control as the business grows.'
  ];

  const xenBenefits = [
    'Connect business functions through integrated workflows.',
    'Improve coordination between departments.',
    'Reduce repetitive manual activities.',
    'Maintain better control over business processes.',
    'Access consolidated operational information.',
    'Make informed decisions with greater visibility.'
  ];

  const previewFunctions = [
    { num: '01', title: 'CRM & Sales Management', desc: 'Build stronger customer relationships and manage your sales activities, opportunities, quotations and orders.', accent: 'var(--color-electric-blue)' },
    { num: '02', title: 'Order Management', desc: 'Manage the complete order process, from order creation through processing and fulfillment.', accent: 'var(--color-cyan)' },
    { num: '03', title: 'Procurement & Vendor Management', desc: 'Organize supplier relationships, purchasing activities, purchase orders and goods receipts.', accent: 'var(--color-orange)' },
    { num: '04', title: 'Inventory Management', desc: 'Maintain visibility into stock positions, movements and inventory transactions.', accent: 'var(--color-purple)' },
    { num: '05', title: 'Warehouse Management', desc: 'Bring greater structure and control to warehouse operations, stock handling and goods movement.', accent: 'var(--color-electric-blue)' },
    { num: '06', title: 'Finance & Accounts', desc: 'Connect financial transactions with business operations and improve financial visibility.', accent: 'var(--color-cyan)' },
    { num: '07', title: 'Human Resource Management', desc: 'Organize employee information and support structured human resource administration.', accent: 'var(--color-orange)' },
    { num: '08', title: 'Logistics Management', desc: 'Coordinate logistics-related activities and improve operational communication.', accent: 'var(--color-purple)' },
    { num: '09', title: 'Business Intelligence & Reporting', desc: 'Bring business information together to support monitoring, analysis and management decisions.', accent: 'var(--color-electric-blue)' }
  ];

  const whyPoints = [
    { num: '01', title: 'Integrated Business Management', desc: 'Bring multiple business functions together rather than managing them through isolated applications.', icon: Layers, color: 'var(--color-electric-blue)' },
    { num: '02', title: 'Greater Operational Control', desc: 'Establish structured processes, improve coordination and maintain better oversight of business activities.', icon: ShieldCheck, color: 'var(--color-cyan)' },
    { num: '03', title: 'Business-Wide Visibility', desc: 'Access relevant information across departments to understand what is happening throughout your organization.', icon: BarChart3, color: 'var(--color-purple)' },
    { num: '04', title: 'Improved Productivity', desc: 'Reduce repetitive work, streamline activities and help your teams focus on more valuable tasks.', icon: Zap, color: 'var(--color-orange)' },
    { num: '05', title: 'Better Decision-Making', desc: 'Make business decisions with a more connected view of operational information.', icon: TrendingUp, color: 'var(--color-electric-blue)' },
    { num: '06', title: 'Built to Support Growth', desc: 'Create an integrated technology foundation that can support your organization as its requirements evolve.', icon: Cpu, color: 'var(--color-cyan)' }
  ];

  const industriesList = [
    { id: 'retail', name: 'Retail', icon: ShoppingBag, detail: 'Omnichannel sales, point-of-sale integration, and real-time inventory synchronization.' },
    { id: 'distribution', name: 'Distribution', icon: Truck, detail: 'Multi-location dispatch, warehouse replenishment, and optimized route fulfillment.' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, detail: 'Bill of materials, production scheduling, shop floor coordination, and quality control.' },
    { id: 'garments', name: 'Garments', icon: Scissors, detail: 'Size/color matrices, style life cycles, textile procurement, and export packaging.' },
    { id: 'automotive', name: 'Automotive', icon: Car, detail: 'Serialized parts tracking, warranty records, assembly schedules, and dealership logistics.' }
  ];

  return (
    <div className="home-page-view">
      {/* 1. HERO SECTION — THE CONNECTED CANVAS */}
      <section className="home-hero-canvas">
        {/* Background Interconnected Ribbon Spline SVG */}
        <div className="hero-ribbon-canvas-bg" aria-hidden="true">
          <svg
            className="hero-ribbon-spline"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-80 320 C260 180, 520 620, 940 380 C1180 240, 1380 460, 1560 360"
              stroke="url(#hero-canvas-grad-1)"
              strokeWidth="3.5"
              strokeDasharray="8 12"
              opacity="0.45"
            />
            <path
              d="M-40 540 C340 440, 680 720, 1100 480 C1280 380, 1440 560, 1580 500"
              stroke="url(#hero-canvas-grad-2)"
              strokeWidth="2.5"
              opacity="0.35"
            />
            <defs>
              <linearGradient id="hero-canvas-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00DDFC" />
                <stop offset="35%" stopColor="#1264F5" />
                <stop offset="70%" stopColor="#7024E8" />
                <stop offset="100%" stopColor="#FF642C" />
              </linearGradient>
              <linearGradient id="hero-canvas-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1264F5" />
                <stop offset="50%" stopColor="#00DDFC" />
                <stop offset="100%" stopColor="#FF642C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container hero-canvas-container">
          <div className="hero-canvas-grid">
            {/* Left Typographic Composition */}
            <div className="hero-editorial-column">
              <div className="hero-badge-pill">
                <span className="badge-pulsing-orbit" />
                <span className="badge-label-text">Enterprise Resource Planning Platform</span>
              </div>

              <h1 className="hero-monumental-headline">
                <span className="headline-lead-row">Your Business.</span>
                <span className="headline-accent-row">Connected. Controlled. Informed.</span>
              </h1>

              <div className="ribbon-gradient-bar" />

              <div className="hero-editorial-narrative">
                <p className="hero-lead-statement">
                  XENedion (XEN) is an integrated ERP platform designed to simplify business operations, connect processes and give you, the business owner or the business manager, complete visibility across your organization.
                </p>
                <p className="hero-supporting-statement">
                  Managing a business shouldn't mean managing multiple applications, disconnected spreadsheets and endless manual processes.
                </p>
                <p className="hero-concluding-statement">
                  XENedion brings your essential business functions together on one integrated platform, enabling your teams to work seamlessly, your processes to operate efficiently and your management to make informed decisions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="hero-action-cluster">
                <button
                  type="button"
                  className="btn-primary hero-btn-main"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={18} className="btn-icon" />
                </button>
                <button
                  type="button"
                  className="btn-secondary hero-btn-alt"
                  onClick={() => onNavigate('solutions')}
                >
                  <span>Explore Solutions</span>
                </button>
              </div>

              {/* Architectural Proof Bar */}
              <div className="hero-operational-circuits">
                <div className="circuit-item">
                  <Network size={18} className="circuit-icon circuit-icon-blue" />
                  <span className="circuit-label">Cross-functional workflows</span>
                </div>
                <div className="circuit-divider" />
                <div className="circuit-item">
                  <ShieldCheck size={18} className="circuit-icon circuit-icon-cyan" />
                  <span className="circuit-label">Real-time organizational visibility</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Photographic Composition */}
            <div className="hero-composition-column">
              <div className="architectural-visual-assembly">
                {/* Layer 1: Ambient Ribbon Halo */}
                <div className="visual-halo-glow" aria-hidden="true" />

                {/* Layer 2: Main Image with Architectural Mask & Double Frame */}
                <div className="architectural-image-scaffold">
                  <div className="image-lens-mask">
                    <img
                      src="/assets/images/connected-operations.jpg"
                      alt="XENedion banner — Enterprise operational team collaborating on an integrated platform"
                      className="hero-scaffold-img"
                      width="1200"
                      height="750"
                      loading="eager"
                    />
                    <div className="scaffold-gradient-wash" />
                  </div>

                  {/* Layer 3: Floating Architecture Badges */}
                  <div className="floating-architecture-tag floating-tag-top">
                    <div className="tag-pulse-ring" />
                    <span className="tag-text">XENedion Integrated Business Architecture</span>
                  </div>

                  {/* Layer 4: Interconnected Process Circuit Orbit */}
                  <div className="floating-circuit-orbit floating-tag-bottom">
                    <div className="orbit-nodes-row">
                      <span className="orbit-chip chip-sales">Sales</span>
                      <span className="orbit-link">→</span>
                      <span className="orbit-chip chip-proc">Procurement</span>
                      <span className="orbit-link">→</span>
                      <span className="orbit-chip chip-inv">Inventory</span>
                      <span className="orbit-link">→</span>
                      <span className="orbit-chip chip-ful">Fulfillment</span>
                    </div>
                  </div>
                </div>

                {/* Layer 5: Geometric Accent Elements */}
                <div className="geometric-ribbon-tab tab-one" aria-hidden="true" />
                <div className="geometric-ribbon-tab tab-two" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS CHALLENGE — TENSION & RESOLUTION */}
      <section className="home-section section-alt challenge-editorial-section">
        <div className="container">
          <div className="challenge-editorial-layout">
            {/* Left: The Strategic Dilemma */}
            <div className="challenge-intro-pane">
              <span className="section-tag">The Business Challenge</span>
              <h2 className="section-title challenge-editorial-title">
                Your Business Has Evolved. Have Your Systems Kept Up?
              </h2>
              <div className="ribbon-gradient-bar" />
              <p className="challenge-editorial-lead">
                As businesses expand, its operational complexity increases. Different departments adopt different applications, information gets scattered and business processes become increasingly difficult to coordinate.
              </p>
            </div>

            {/* Right: The 6 Connected Friction Nodes */}
            <div className="challenge-consequences-pane">
              <h3 className="consequences-section-subheading">The consequences are familiar:</h3>
              <div className="consequences-circuit-grid">
                {challengeConsequences.map((item, idx) => (
                  <div key={idx} className="consequence-circuit-card">
                    <div className="circuit-card-header">
                      <span className="circuit-node-index">0{idx + 1}</span>
                      <AlertCircle size={18} className="circuit-warning-icon" />
                    </div>
                    <p className="circuit-consequence-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom High-Contrast Resolution Callout */}
          <div className="challenge-resolution-frame">
            <div className="resolution-quote-bracket" aria-hidden="true">“</div>
            <div className="resolution-inner-content">
              <p className="resolution-core-insight">
                The real challenge isn't the number of applications you use. It's the lack of connection between them.
              </p>
              <div className="resolution-accent-badge">
                <span className="resolution-sparkle-dot" />
                <p className="resolution-brand-punch">
                  XEN brings your business together, seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCING XENEDION — ASYMMETRIC UNITY */}
      <section className="home-section intro-editorial-section">
        <div className="container">
          <div className="intro-editorial-grid">
            <div className="intro-narrative-column">
              <span className="section-tag">Introducing XENedion</span>
              <h2 className="section-title intro-display-title">
                One Business. One Integrated Platform.
              </h2>
              <div className="ribbon-gradient-bar" />

              <div className="intro-text-stack">
                <p className="intro-lead-p">
                  XENedion is an integrated Enterprise Resource Planning platform that connects the different functions of your business within a common business operating environment.
                </p>
                <p>
                  From managing customer relationships and sales orders to procurement, inventory, warehousing, finance and human resources, XEN helps bring your business processes together.
                </p>
                <div className="intro-highlight-ribbon-card">
                  <p className="intro-highlight-statement">
                    Instead of managing individual departments in isolation, you can manage your business as one connected organization.
                  </p>
                </div>
              </div>

              <div className="intro-action-box">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>Discover XENedion</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
              </div>
            </div>

            {/* Right: Architectural Benefits Showcase */}
            <div className="intro-capabilities-column">
              <div className="capabilities-monolith-card">
                <div className="monolith-card-header">
                  <div className="monolith-badge">
                    <span className="monolith-dot" />
                    <span>Operational Control</span>
                  </div>
                  <h3 className="monolith-title">With XEN, you can:</h3>
                </div>

                <ul className="monolith-benefits-list">
                  {xenBenefits.map((benefit, i) => (
                    <li key={i} className="monolith-list-item">
                      <div className="monolith-check-icon">
                        <CheckCircle size={18} />
                      </div>
                      <span className="monolith-benefit-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ONE PLATFORM. MULTIPLE BUSINESS FUNCTIONS — STAGGERED MATRIX */}
      <section className="home-section section-alt functions-editorial-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="functions-lead-paragraph">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          <div className="functions-matrix-grid">
            {previewFunctions.map((func) => (
              <div key={func.num} className="function-matrix-card">
                <div className="matrix-card-top">
                  <span className="matrix-number">{func.num}</span>
                  <div
                    className="matrix-accent-pip"
                    style={{ backgroundColor: func.accent }}
                  />
                </div>
                <h3 className="matrix-card-title">{func.title}</h3>
                <p className="matrix-card-description">{func.desc}</p>
                <div className="matrix-card-action">
                  <button
                    type="button"
                    className="matrix-explore-btn"
                    onClick={() => onNavigate('solutions')}
                  >
                    <span>View capability</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="functions-global-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('solutions')}
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY XENEDION? — EDITORIAL NUMBERED PRINCIPLES */}
      <section className="home-section why-editorial-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">More Than Software.</h2>
            <p className="section-subtitle">
              A Better Way to Manage Your Business. It’s a businesses way of life.
            </p>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
          </div>

          <div className="why-editorial-grid">
            {whyPoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.num} className="why-editorial-card">
                  <div className="why-card-header">
                    <span className="why-editorial-number">{pt.num}</span>
                    <div
                      className="why-editorial-icon-box"
                      style={{ color: pt.color }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="why-editorial-card-title">{pt.title}</h3>
                  <p className="why-editorial-card-desc">{pt.desc}</p>
                  <div
                    className="why-card-bottom-line"
                    style={{ background: `linear-gradient(90deg, ${pt.color}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DESIGNED FOR YOUR INDUSTRY */}
      <section className="home-section section-alt industries-editorial-section">
        <div className="container">
          <div className="industries-editorial-header">
            <span className="section-tag">Designed for Your Industry</span>
            <h2 className="section-title">
              Business Processes May Differ.<br />The Need for Integration Doesn't.
            </h2>
            <div className="ribbon-gradient-bar" />
            <p className="industries-lead-copy">
              XENedion is designed to support businesses operating across different industries and business environments.
            </p>
          </div>

          <div className="industries-editorial-deck">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-editorial-card">
                  <div className="industry-card-icon-well">
                    <Icon size={28} />
                  </div>
                  <h3 className="industry-card-title">{ind.name}</h3>
                  <p className="industry-card-summary">{ind.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="industries-deck-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('industries')}
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. READY TO BRING YOUR BUSINESS TOGETHER? — EXECUTIVE STATEMENT */}
      <section className="home-final-cta-section">
        <div className="container">
          <div className="executive-banner-scaffold">
            {/* Ambient Multi-Tone Gradient Glow */}
            <div className="executive-banner-glow" aria-hidden="true" />

            <div className="executive-banner-content">
              <h2 className="executive-banner-headline">
                Ready to Bring Your Business Together?
              </h2>
              <p className="executive-banner-lead">
                Move beyond disconnected applications and fragmented processes. Discover how XENedion can help you manage your business with greater clarity, control and efficiency.
              </p>
              <div className="executive-banner-action">
                <button
                  type="button"
                  className="btn-primary executive-demo-button"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Personalized Product Demonstration</span>
                  <ArrowRight size={18} className="btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
