import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  Play,
  Compass,
  GitMerge,
  Sliders,
  RefreshCw,
  Clock,
  FileText,
  CheckSquare
} from 'lucide-react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onNavigate }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const centerpieceRef = useRef(null);
  const [activeFunctionTab, setActiveFunctionTab] = useState('all');

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
    { num: '01', title: 'CRM & Sales Management', desc: 'Build stronger customer relationships and manage your sales activities, opportunities, quotations and orders.', category: 'sales' },
    { num: '02', title: 'Order Management', desc: 'Manage the complete order process, from order creation through processing and fulfillment.', category: 'operations' },
    { num: '03', title: 'Procurement & Vendor Management', desc: 'Organize supplier relationships, purchasing activities, purchase orders and goods receipts.', category: 'supply' },
    { num: '04', title: 'Inventory Management', desc: 'Maintain visibility into stock positions, movements and inventory transactions.', category: 'operations' },
    { num: '05', title: 'Warehouse Management', desc: 'Bring greater structure and control to warehouse operations, stock handling and goods movement.', category: 'operations' },
    { num: '06', title: 'Finance & Accounts', desc: 'Connect financial transactions with business operations and improve financial visibility.', category: 'finance' },
    { num: '07', title: 'Human Resource Management', desc: 'Organize employee information and support structured human resource administration.', category: 'corporate' },
    { num: '08', title: 'Logistics Management', desc: 'Coordinate logistics-related activities and improve operational communication.', category: 'supply' },
    { num: '09', title: 'Business Intelligence & Reporting', desc: 'Bring business information together to support monitoring, analysis and management decisions.', category: 'finance' }
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

  const approachSteps = [
    {
      stage: 'Stage 1 — Discovery',
      title: 'Understand the Business',
      desc: "Understand the organization's business model, operational requirements and process challenges.",
      icon: Compass
    },
    {
      stage: 'Stage 2 — Integration',
      title: 'Connect the Processes',
      desc: 'Bring different departments and business functions together through integrated workflows.',
      icon: GitMerge
    },
    {
      stage: 'Stage 3 — Governance',
      title: 'Establish Operational Control',
      desc: 'Create structured processes and improve visibility across business activities.',
      icon: Sliders
    },
    {
      stage: 'Stage 4 — Evolution',
      title: 'Enable Continuous Improvement',
      desc: 'Use business information and operational insights to identify opportunities for improvement.',
      icon: RefreshCw
    }
  ];

  const filteredFunctions = activeFunctionTab === 'all'
    ? previewFunctions
    : previewFunctions.filter(f => f.category === activeFunctionTab);

  // GSAP Animation setup matching the reference video (00:00 - 00:30)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Load Entrance Animation (matching 00:00 of reference video)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-kicker-anim',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          '.hero-headline-row',
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
          '-=0.6'
        )
        .fromTo(
          '.hero-lead-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.hero-action-anim',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.6'
        )
        .fromTo(
          centerpieceRef.current,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          '-=0.7'
        );

      // 2. Responsive ScrollTrigger MatchMedia
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        // Centerpiece scaling and subtle parallax on scroll (matching 00:01 - 00:03 in video)
        gsap.to('.hero-centerpiece-card', {
          scrollTrigger: {
            trigger: '.hero-reference-wrapper',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
          },
          scale: 1.03,
          y: -25,
          ease: 'none',
        });

        // Stats counter row slide up (matching 00:04 in video)
        gsap.fromTo(
          '.stats-reveal-anim',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.credibility-stats-section',
              start: 'top 80%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: 'power3.out',
          }
        );

        // 2x2 Services Grid Stagger (matching 00:07 - 00:08 in video)
        gsap.fromTo(
          '.capability-video-card',
          { y: 45, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.capabilities-video-section',
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
          }
        );

        // Case Studies Showcase Stagger (matching 00:09 - 00:10 in video)
        gsap.fromTo(
          '.showcase-video-card',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.showcase-video-section',
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.18,
            duration: 0.9,
            ease: 'power3.out',
          }
        );

        // Methodology Timeline Steps Stagger (matching 00:12 - 00:13 in video)
        gsap.fromTo(
          '.timeline-step-anim',
          { x: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.methodology-video-section',
              start: 'top 70%',
            },
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.8,
            ease: 'power3.out',
          }
        );

        // Kinetic text banner translation on scroll (matching 00:11 in video)
        gsap.to('.kinetic-marquee-inner', {
          scrollTrigger: {
            trigger: '.kinetic-banner-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
          xPercent: -15,
          ease: 'none',
        });
      });

      mm.add('(max-width: 991px)', () => {
        // Mobile smooth subtle entrances
        gsap.utils.toArray('.capability-video-card, .showcase-video-card, .timeline-step-anim, .why-editorial-card').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 25, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="home-video-experience">
      {/* ====================================================================
          PHASE 3 / SECTION 1: VIBRANT BLUE HERO CANVAS + OVERLAPPING CENTERPIECE
          (Direct recreation of reference video 00:00 - 00:04)
          ==================================================================== */}
      <div className="hero-reference-wrapper" ref={heroRef}>
        <section className="hero-vibrant-canvas">
          {/* Subtle Ambient Light Glows */}
          <div className="hero-canvas-glow-1" aria-hidden="true" />
          <div className="hero-canvas-glow-2" aria-hidden="true" />

          <div className="container hero-canvas-container">
            {/* Top Two-Column Asymmetrical Header (matching 00:00 - 00:02) */}
            <div className="hero-split-header">
              {/* Left Column: Monumental Headline */}
              <div className="hero-split-left">
                <div className="hero-kicker-anim hero-category-tag">
                  <span className="kicker-pip" />
                  <span className="kicker-text">Enterprise Resource Planning Platform</span>
                </div>
                <h1 className="hero-video-headline">
                  <span className="hero-headline-row headline-row-1">Your Business.</span>
                  <span className="hero-headline-row headline-row-2">
                    Connected. Controlled. Informed.
                  </span>
                </h1>
              </div>

              {/* Right Column: Lead Paragraph & CTA Pill (matching 00:00 in video) */}
              <div className="hero-split-right">
                <p className="hero-lead-anim hero-narrative-lead">
                  XENedion (XEN) is an integrated ERP platform designed to simplify business operations, connect processes and give you, the business owner or the business manager, complete visibility across your organization.
                </p>
                <div className="hero-action-anim hero-action-pills">
                  <button
                    type="button"
                    className="btn-video-hero-primary"
                    onClick={() => onNavigate('contact')}
                  >
                    <span>Request a Demo</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn-video-hero-secondary"
                    onClick={() => onNavigate('solutions')}
                  >
                    <span>Explore Solutions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Centerpiece Overlapping Photograph (matching 00:00 - 00:03 in video) */}
        <div className="hero-centerpiece-container container" ref={centerpieceRef}>
          <div className="hero-centerpiece-card">
            <div className="centerpiece-image-frame">
              <img
                src="/assets/images/connected-operations.jpg"
                alt="XENedion Connected Enterprise Operations Meeting"
                className="centerpiece-img"
                loading="eager"
              />
              <div className="centerpiece-badge-overlay">
                <span className="badge-pulse-indicator" />
                <span className="badge-overlay-text">Unified Operations in Action</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          PHASE 4 / SECTION 2: CREDIBILITY STATEMENT & DUAL METRICS
          (Direct recreation of reference video 00:03 - 00:05)
          ==================================================================== */}
      <section className="credibility-stats-section">
        <div className="container">
          <div className="credibility-split-grid">
            {/* Left Column: Bold statement, supporting text, CTA and avatar stack */}
            <div className="credibility-narrative-col stats-reveal-anim">
              <span className="section-tag">Enterprise Resource Planning Platform</span>
              <h2 className="credibility-statement-heading">
                Managing a business shouldn't mean managing multiple applications, disconnected spreadsheets and endless manual processes.
              </h2>
              <p className="credibility-statement-body">
                XENedion brings your essential business functions together on one integrated platform, enabling your teams to work seamlessly, your processes to operate efficiently and your management to make informed decisions.
              </p>
              <div className="credibility-action-cluster">
                <button
                  type="button"
                  className="btn-pill-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={16} />
                </button>
                <div className="credibility-trust-stack">
                  <div className="trust-avatar-group">
                    <span className="avatar-chip chip-1">X</span>
                    <span className="avatar-chip chip-2">E</span>
                    <span className="avatar-chip chip-3">N</span>
                  </div>
                  <div className="trust-label-group">
                    <span className="trust-score-bold">100%</span>
                    <span className="trust-caption">Unified Enterprise Architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-impact stacked metric cards (matching 00:04 in video) */}
            <div className="credibility-metrics-col stats-reveal-anim">
              <div className="metric-video-card">
                <div className="metric-number-display">100%</div>
                <div className="metric-divider-line" />
                <p className="metric-label-text">
                  Process alignment and operational visibility across all departments.
                </p>
              </div>

              <div className="metric-video-card">
                <div className="metric-number-display">1</div>
                <div className="metric-divider-line" />
                <p className="metric-label-text">
                  Unified platform connecting essential business management functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: ECOSYSTEM CAPABILITIES LOGO STRIP / MARQUEE
          (Direct recreation of reference video 00:05 - 00:06)
          ==================================================================== */}
      <section className="marquee-trust-strip" aria-label="Core Architectural Standards">
        <div className="container marquee-container">
          <div className="marquee-label-col">
            <span className="marquee-title-tag">CORE ARCHITECTURE</span>
          </div>
          <div className="marquee-scroll-track">
            <div className="marquee-pills-row">
              <span className="marquee-chip">• Single Source of Truth</span>
              <span className="marquee-chip">• Integrated Workflows</span>
              <span className="marquee-chip">• Real-Time Synchronization</span>
              <span className="marquee-chip">• Multi-Location Coordination</span>
              <span className="marquee-chip">• Operational Visibility</span>
              <span className="marquee-chip">• Scalable Enterprise Architecture</span>
              <span className="marquee-chip">• Cross-Department Governance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: CORE CAPABILITIES — 2x2 NUMBERED FEATURE MATRIX
          (Direct recreation of reference video 00:06 - 00:09)
          ==================================================================== */}
      <section className="capabilities-video-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Our Expertise</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="capabilities-lead-text">
              XENedion brings together the essential functions required to manage your business.
            </p>

            {/* Quick Filter Tabs matching modern video interaction */}
            <div className="capabilities-filter-pills">
              <button
                type="button"
                className={`cap-filter-btn ${activeFunctionTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFunctionTab('all')}
              >
                All Functions (09)
              </button>
              <button
                type="button"
                className={`cap-filter-btn ${activeFunctionTab === 'sales' ? 'active' : ''}`}
                onClick={() => setActiveFunctionTab('sales')}
              >
                Sales & CRM
              </button>
              <button
                type="button"
                className={`cap-filter-btn ${activeFunctionTab === 'operations' ? 'active' : ''}`}
                onClick={() => setActiveFunctionTab('operations')}
              >
                Operations & Warehouse
              </button>
              <button
                type="button"
                className={`cap-filter-btn ${activeFunctionTab === 'supply' ? 'active' : ''}`}
                onClick={() => setActiveFunctionTab('supply')}
              >
                Procurement & Supply
              </button>
              <button
                type="button"
                className={`cap-filter-btn ${activeFunctionTab === 'finance' ? 'active' : ''}`}
                onClick={() => setActiveFunctionTab('finance')}
              >
                Finance & BI
              </button>
            </div>
          </div>

          {/* 2x2 / Responsive Grid Cards matching 00:07 - 00:08 in the video */}
          <div className="capabilities-video-grid">
            {filteredFunctions.map((func) => (
              <div key={func.num} className="capability-video-card">
                <div className="cap-card-top-row">
                  <span className="cap-index-num">{func.num}</span>
                  <div className="cap-micro-chart">
                    <span className="chart-bar bar-1" />
                    <span className="chart-bar bar-2" />
                    <span className="chart-bar bar-3" />
                  </div>
                </div>
                <h3 className="cap-card-title">{func.title}</h3>
                <p className="cap-card-desc">{func.desc}</p>
                <div className="cap-card-footer">
                  <button
                    type="button"
                    className="cap-action-link"
                    onClick={() => onNavigate('solutions')}
                  >
                    <span>View capability details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="capabilities-cta-wrapper">
            <button
              type="button"
              className="btn-pill-primary"
              onClick={() => onNavigate('solutions')}
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: OPERATIONAL SHOWCASE & THE BUSINESS CHALLENGE
          (Direct recreation of reference video 00:09 - 00:11)
          ==================================================================== */}
      <section className="showcase-video-section">
        <div className="container">
          <div className="showcase-section-header">
            <div className="showcase-header-left">
              <span className="section-tag">The Business Challenge</span>
              <h2 className="section-title">
                Your Business Has Evolved. Have Your Systems Kept Up?
              </h2>
            </div>
            <div className="showcase-header-right">
              <button
                type="button"
                className="btn-pill-outline"
                onClick={() => onNavigate('solutions')}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <p className="showcase-lead-prose">
            As businesses expand, its operational complexity increases. Different departments adopt different applications, information gets scattered and business processes become increasingly difficult to coordinate.
          </p>

          {/* Two Large Visual Cards matching 00:10 in the video */}
          <div className="showcase-dual-grid">
            {/* Card 1: Operational Challenge */}
            <div className="showcase-video-card">
              <div className="showcase-card-badge-bar challenge-badge-bar">
                <span className="showcase-badge-title">The Operational Challenge</span>
                <span className="showcase-badge-status">Disconnected Legacy Systems</span>
              </div>
              <div className="showcase-card-image-wrapper">
                <img
                  src="/assets/images/procurement-coordination.jpg"
                  alt="Fragmented business operations"
                  className="showcase-card-img"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card-content">
                <span className="showcase-subtag">Operational Consequence</span>
                <h3 className="showcase-item-title">The consequences are familiar:</h3>
                <ul className="showcase-bullet-list">
                  {challengeConsequences.map((item, idx) => (
                    <li key={idx} className="showcase-bullet-item">
                      <AlertCircle size={16} className="bullet-alert-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Connected Solution */}
            <div className="showcase-video-card">
              <div className="showcase-card-badge-bar solution-badge-bar">
                <span className="showcase-badge-title">The Connected Solution</span>
                <span className="showcase-badge-status">Unified XEN Platform</span>
              </div>
              <div className="showcase-card-image-wrapper">
                <img
                  src="/assets/images/crm-sales-analytics.jpg"
                  alt="Connected ERP management"
                  className="showcase-card-img"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card-content">
                <span className="showcase-subtag">Enterprise Architecture</span>
                <h3 className="showcase-item-title">One Business. One Integrated Platform.</h3>
                <p className="showcase-prose-text">
                  XENedion is an integrated Enterprise Resource Planning platform that connects the different functions of your business within a common business operating environment.
                </p>
                <p className="showcase-prose-text">
                  From managing customer relationships and sales orders to procurement, inventory, warehousing, finance and human resources, XEN helps bring your business processes together.
                </p>
                <div className="showcase-resolution-callout">
                  <p className="resolution-highlight-text">
                    The real challenge isn't the number of applications you use. It's the lack of connection between them.
                  </p>
                  <span className="resolution-signature">
                    XEN brings your business together, seamlessly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: MASSIVE KINETIC TYPOGRAPHY BANNER
          (Direct recreation of reference video 00:11 - 00:12)
          ==================================================================== */}
      <section className="kinetic-banner-section" aria-hidden="true">
        <div className="kinetic-marquee-inner">
          <div className="kinetic-text-track">
            <span className="kinetic-text-item">Your Business. Connected. Controlled. Informed.</span>
            <span className="kinetic-separator">•</span>
            <span className="kinetic-text-item">One Business. One Integrated Platform.</span>
            <span className="kinetic-separator">•</span>
            <span className="kinetic-text-item">Your Business. Connected. Controlled. Informed.</span>
            <span className="kinetic-separator">•</span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7: METHODOLOGY & STEP-BY-STEP APPROACH WITH MEDIA
          (Direct recreation of reference video 00:12 - 00:15)
          ==================================================================== */}
      <section className="methodology-video-section">
        <div className="container">
          <div className="methodology-split-layout">
            {/* Left Column: Heading, description, CTA */}
            <div className="methodology-header-col">
              <span className="section-tag">Our Approach</span>
              <h2 className="section-title">
                Understand. Connect. Control. Improve.
              </h2>
              <div className="ribbon-gradient-bar" />
              <p className="methodology-narrative-prose">
                We recognize that every business has its own operating processes and management requirements. Our approach focuses on understanding these requirements and aligning the ERP platform with the way the business operates.
              </p>
              <div className="methodology-cta-box">
                <button
                  type="button"
                  className="btn-pill-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Speak with Our Implementation Specialists</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Step-by-Step Vertical Roadmap (matching 00:12 - 00:13 in video) */}
            <div className="methodology-steps-col">
              {approachSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="timeline-step-anim methodology-step-card">
                    <div className="step-card-indicator-col">
                      <div className="step-icon-bubble">
                        <IconComponent size={18} />
                      </div>
                      {idx < approachSteps.length - 1 && <div className="step-connector-rail" />}
                    </div>
                    <div className="step-card-text-col">
                      <span className="step-stage-pill">{step.stage}</span>
                      <h3 className="step-card-headline">{step.title}</h3>
                      <p className="step-card-body">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Centerpiece Media Card with Play Button (matching 00:14 - 00:15 in video) */}
          <div className="methodology-media-frame">
            <div className="media-image-wrapper">
              <img
                src="/assets/images/modern-manufacturing.jpg"
                alt="XENedion Enterprise Implementation and Strategy Review"
                className="media-img"
                loading="lazy"
              />
              <div className="media-play-overlay">
                <button
                  type="button"
                  className="media-play-button"
                  aria-label="Play Overview Video"
                  onClick={() => onNavigate('contact')}
                >
                  <Play size={24} className="play-icon-triangle" />
                </button>
                <span className="play-button-label">Explore Implementation Walkthrough</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8: WHY XENEDION? (CORE VALUE PILLARS)
          (Direct recreation of reference video 00:15 - 00:17)
          ==================================================================== */}
      <section className="why-video-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">More Than Software.</h2>
            <p className="section-subtitle">
              A Better Way to Manage Your Business. It’s a businesses way of life.
            </p>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
          </div>

          <div className="why-video-grid">
            {whyPoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.num} className="why-editorial-card">
                  <div className="why-card-top-row">
                    <span className="why-large-index">{pt.num}</span>
                    <div
                      className="why-icon-bubble"
                      style={{ color: pt.color }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="why-card-title">{pt.title}</h3>
                  <p className="why-card-prose">{pt.desc}</p>
                  <div
                    className="why-card-indicator"
                    style={{ background: `linear-gradient(90deg, ${pt.color}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Monolith Capabilities Bar: With XEN you can */}
          <div className="with-xen-capabilities-bar">
            <div className="with-xen-bar-inner">
              <div className="with-xen-bar-title-col">
                <span className="status-indicator-live" />
                <h3 className="with-xen-bar-title">With XEN, you can:</h3>
              </div>
              <div className="with-xen-chips-grid">
                {xenBenefits.map((benefit, i) => (
                  <div key={i} className="with-xen-chip-card">
                    <CheckCircle size={16} className="chip-check-icon" />
                    <span className="chip-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 9: DESIGNED FOR YOUR INDUSTRY
          ==================================================================== */}
      <section className="industries-video-section">
        <div className="container">
          <div className="industries-header-group">
            <span className="section-tag">Designed for Your Industry</span>
            <h2 className="section-title">
              Business Processes May Differ.<br />The Need for Integration Doesn't.
            </h2>
            <div className="ribbon-gradient-bar" />
            <p className="industries-lead-statement">
              XENedion is designed to support businesses operating across different industries and business environments.
            </p>
          </div>

          <div className="industries-video-deck">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-video-card">
                  <div className="industry-icon-vault">
                    <Icon size={24} />
                  </div>
                  <h3 className="industry-name">{ind.name}</h3>
                  <p className="industry-description">{ind.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="industries-deck-action">
            <button
              type="button"
              className="btn-pill-primary"
              onClick={() => onNavigate('industries')}
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 10: FINAL EXECUTIVE DEMO PORTAL
          ==================================================================== */}
      <section className="home-final-portal-section">
        <div className="container">
          <div className="final-portal-card">
            <div className="portal-ambient-ribbon" aria-hidden="true" />
            <div className="portal-content-wrap">
              <h2 className="portal-headline">
                Ready to Bring Your Business Together?
              </h2>
              <p className="portal-lead">
                Move beyond disconnected applications and fragmented processes. Discover how XENedion can help you manage your business with greater clarity, control and efficiency.
              </p>
              <div className="portal-action-cluster">
                <button
                  type="button"
                  className="btn-pill-primary btn-portal-large"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Personalized Product Demonstration</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}