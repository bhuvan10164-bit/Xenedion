import React, { useEffect, useRef } from 'react';
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
  Network
} from 'lucide-react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onNavigate }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const challengeSectionRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalTrackRef = useRef(null);
  const progressBarRef = useRef(null);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Load Entrance Animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-badge-capsule',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo(
          '.hero-reveal-word',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.hero-editorial-fade',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          '-=0.6'
        )
        .fromTo(
          '.hero-canvas-art-plane',
          { scale: 0.92, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'expo.out' },
          '-=0.7'
        )
        .fromTo(
          '.hero-action-cluster',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        );

      // 2. Responsive ScrollTrigger
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        // Animation A: Hero-to-content transition parallax
        gsap.to('.hero-canvas-art-plane', {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 70,
          scale: 0.96,
          opacity: 0.85,
          ease: 'none',
        });

        gsap.to('.hero-headline-column', {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom 40%',
            scrub: 0.8,
          },
          y: -40,
          opacity: 0.45,
          ease: 'none',
        });

        // Animation B & C: Sticky storytelling for Scene 2 (The Business Challenge)
        gsap.fromTo(
          '.consequence-circuit-card',
          { y: 45, opacity: 0 },
          {
            scrollTrigger: {
              trigger: challengeSectionRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: 'power2.out',
          }
        );

        // Animation C: Webflow-Style Horizontal Scroll Sequence for Scene 4 (9 Functions)
        if (horizontalSectionRef.current && horizontalTrackRef.current) {
          const track = horizontalTrackRef.current;
          const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

          const horizontalTween = gsap.to(track, {
            x: getScrollAmount,
            ease: 'none',
            scrollTrigger: {
              trigger: horizontalSectionRef.current,
              start: 'top top',
              end: () => '+=' + (track.scrollWidth - window.innerWidth + 200),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressBarRef.current) {
                  progressBarRef.current.style.width = `${self.progress * 100}%`;
                }
              },
            },
          });
        }

        // Scene 3 — Introducing XENedion Monolith entrance
        gsap.fromTo(
          '.monolith-glass-card',
          { x: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.intro-ecosystem-section',
              start: 'top 70%',
            },
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
          }
        );

        // Scene 5 — Why XENedion Principles Reveal
        gsap.fromTo(
          '.why-editorial-card',
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.why-kinetic-section',
              start: 'top 72%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.75,
            ease: 'power3.out',
          }
        );

        // Scene 6 — Industry Deck Reveal
        gsap.fromTo(
          '.industry-kinetic-card',
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.industries-kinetic-section',
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power2.out',
          }
        );
      });

      mm.add('(max-width: 991px)', () => {
        // Mobile-optimized gentle scroll reveals without pinning
        gsap.utils.toArray('.consequence-circuit-card, .function-matrix-card, .why-editorial-card, .industry-kinetic-card').forEach((el) => {
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
              duration: 0.55,
              ease: 'power2.out',
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="home-page-view">
      {/* ====================================================================
          SCENE 1: INTERACTIVE EDITORIAL CANVAS (HERO)
          ==================================================================== */}
      <section ref={heroRef} className="home-hero-cinematic">
        {/* Subtle Architectural Dot Grid & Ambient Brand Glows */}
        <div className="hero-grid-ambient" aria-hidden="true" />
        <div className="hero-radial-glow glow-cyan" aria-hidden="true" />
        <div className="hero-radial-glow glow-blue" aria-hidden="true" />

        <div className="container hero-canvas-container">
          {/* Top Micro-Badge */}
          <div className="hero-badge-capsule">
            <span className="capsule-pip" />
            <span className="capsule-text">Enterprise Resource Planning Platform</span>
          </div>

          {/* New Hero Composition: Bespoke Interactive Editorial Canvas */}
          <div className="hero-editorial-canvas-grid">
            {/* Left/Main Editorial Column */}
            <div className="hero-headline-column">
              <h1 className="hero-editorial-headline">
                <span className="headline-line">
                  <span className="hero-reveal-word">Your</span>{' '}
                  <span className="hero-reveal-word">Business.</span>
                </span>
                <span className="headline-line headline-line-accent">
                  <span className="hero-reveal-word gradient-word">Connected.</span>{' '}
                  <span className="hero-reveal-word gradient-word">Controlled.</span>{' '}
                  <span className="hero-reveal-word gradient-word">Informed.</span>
                </span>
              </h1>

              {/* Exact Approved Paragraphs */}
              <div className="hero-narrative-block">
                <p className="hero-editorial-fade hero-paragraph-lead">
                  XENedion (XEN) is an integrated ERP platform designed to simplify business operations, connect processes and give you, the business owner or the business manager, complete visibility across your organization.
                </p>
                <p className="hero-editorial-fade hero-paragraph-sub">
                  Managing a business shouldn't mean managing multiple applications, disconnected spreadsheets and endless manual processes.
                </p>
                <p className="hero-editorial-fade hero-paragraph-sub">
                  XENedion brings your essential business functions together on one integrated platform, enabling your teams to work seamlessly, your processes to operate efficiently and your management to make informed decisions.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="hero-action-cluster">
                <button
                  type="button"
                  className="btn-cinematic-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
                <button
                  type="button"
                  className="btn-cinematic-secondary"
                  onClick={() => onNavigate('solutions')}
                >
                  <span>Explore Solutions</span>
                </button>
              </div>

              {/* Live Operational Conduit Tracker */}
              <div className="hero-editorial-fade hero-conduit-tracker">
                <div className="conduit-label-wrap">
                  <Network size={16} className="conduit-icon" />
                  <span className="conduit-title">Unified Operating Flow:</span>
                </div>
                <div className="conduit-nodes">
                  <span className="conduit-chip">Sales</span>
                  <span className="conduit-arrow">→</span>
                  <span className="conduit-chip">Procurement</span>
                  <span className="conduit-arrow">→</span>
                  <span className="conduit-chip">Inventory</span>
                  <span className="conduit-arrow">→</span>
                  <span className="conduit-chip">Fulfillment</span>
                </div>
              </div>
            </div>

            {/* Right/Compositional Column: Layered Multi-Planar Visual Canvas */}
            <div className="hero-canvas-art-plane" aria-label="Visual representation of integrated enterprise management">
              {/* Layer 1: Connected Geometric SVG Ribbon Loop */}
              <div className="art-plane-svg-hub" aria-hidden="true">
                <svg viewBox="0 0 540 540" fill="none" className="art-ribbon-svg" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="270" cy="270" r="230" stroke="rgba(9, 31, 64, 0.08)" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="270" cy="270" r="160" stroke="rgba(18, 100, 245, 0.15)" strokeWidth="2" />
                  <path
                    d="M140 370 C90 290, 160 160, 270 160 C380 160, 450 290, 400 370 C350 450, 190 450, 140 370 Z"
                    stroke="url(#hero-ribbon-g1)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    className="art-path-loop"
                  />
                  <path
                    d="M400 170 C450 250, 380 380, 270 380 C160 380, 90 250, 140 170 C190 90, 350 90, 400 170 Z"
                    stroke="url(#hero-ribbon-g2)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    className="art-path-counter-loop"
                  />
                  {/* Connected animated pulses */}
                  <circle cx="270" cy="160" r="5" fill="#00DDFC" className="art-pulse-dot" />
                  <circle cx="270" cy="380" r="5" fill="#FF642C" className="art-pulse-dot" />
                  <defs>
                    <linearGradient id="hero-ribbon-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00DDFC" />
                      <stop offset="50%" stopColor="#1264F5" />
                      <stop offset="100%" stopColor="#7024E8" />
                    </linearGradient>
                    <linearGradient id="hero-ribbon-g2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF642C" />
                      <stop offset="50%" stopColor="#7024E8" />
                      <stop offset="100%" stopColor="#1264F5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Layer 2: Primary Layered Business Visual */}
              <div className="art-photo-card card-primary-plane">
                <div className="photo-frame">
                  <img
                    src="/assets/images/connected-operations.jpg"
                    alt="Connected Enterprise Operations"
                    className="art-img"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                  <div className="photo-card-glass-tag">
                    <span className="glass-tag-pip" />
                    <span className="glass-tag-text">Unified Operation Environment</span>
                  </div>
                </div>
              </div>

              {/* Layer 3: Secondary Overlapping Telemetry Card */}
              <div className="art-photo-card card-secondary-plane">
                <div className="photo-frame photo-frame-compact">
                  <img
                    src="/assets/images/crm-sales-analytics.jpg"
                    alt="CRM and Sales Analytics"
                    className="art-img"
                    width="400"
                    height="280"
                    loading="lazy"
                  />
                  <div className="telemetry-pill">
                    <span className="telemetry-indicator" />
                    <span>Real-Time Departmental Sync</span>
                  </div>
                </div>
              </div>

              {/* Layer 4: Floating Micro-Indicator */}
              <div className="art-floating-metric-badge">
                <Sparkles size={14} className="metric-icon" />
                <div className="metric-text-group">
                  <span className="metric-label">Cross-Functional Core</span>
                  <span className="metric-val">Single Source of Truth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Prompt */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="cue-line" />
          <span className="cue-text">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* ====================================================================
          SCENE 2: THE BUSINESS CHALLENGE (STICKY STORYTELLING CIRCUIT)
          ==================================================================== */}
      <section ref={challengeSectionRef} className="home-section challenge-circuit-section">
        <div className="container">
          <div className="challenge-sticky-layout">
            {/* Sticky Narrative Column on Left */}
            <div className="challenge-sticky-left">
              <div className="sticky-content-card">
                <span className="section-tag">The Business Challenge</span>
                <h2 className="section-title">
                  Your Business Has Evolved. Have Your Systems Kept Up?
                </h2>
                <div className="ribbon-gradient-bar" />
                <p className="challenge-lead-prose">
                  As businesses expand, its operational complexity increases. Different departments adopt different applications, information gets scattered and business processes become increasingly difficult to coordinate.
                </p>

                {/* Resolution Callout Panel */}
                <div className="challenge-resolution-cinematic">
                  <div className="resolution-glass-panel">
                    <div className="resolution-sparkle-pill">
                      <Sparkles size={13} />
                      <span>The Core Bottleneck</span>
                    </div>
                    <p className="resolution-quote-headline">
                      The real challenge isn't the number of applications you use. It's the lack of connection between them.
                    </p>
                    <p className="resolution-brand-accent">
                      XEN brings your business together, seamlessly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Consequence Cards Column on Right */}
            <div className="challenge-scrolling-right">
              <h3 className="consequences-stage-title">The consequences are familiar:</h3>
              <div className="consequences-cards-grid">
                {challengeConsequences.map((item, idx) => (
                  <div key={idx} className="consequence-circuit-card">
                    <div className="circuit-card-topbar">
                      <span className="circuit-index-pill">0{idx + 1}</span>
                      <AlertCircle size={18} className="circuit-alert-icon" />
                    </div>
                    <p className="circuit-item-text">{item}</p>
                    <div className="circuit-glow-track" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SCENE 3: INTRODUCING XENEDION (CONNECTED ECOSYSTEM)
          ==================================================================== */}
      <section className="home-section intro-ecosystem-section">
        <div className="container">
          <div className="intro-ecosystem-grid">
            {/* Left Narrative Column */}
            <div className="intro-ecosystem-narrative">
              <span className="section-tag">Introducing XENedion</span>
              <h2 className="section-title">
                One Business. One Integrated Platform.
              </h2>
              <div className="ribbon-gradient-bar" />

              <div className="intro-narrative-prose">
                <p>
                  XENedion is an integrated Enterprise Resource Planning platform that connects the different functions of your business within a common business operating environment.
                </p>
                <p>
                  From managing customer relationships and sales orders to procurement, inventory, warehousing, finance and human resources, XEN helps bring your business processes together.
                </p>
                <div className="intro-callout-quote-box">
                  <p className="intro-callout-strong">
                    Instead of managing individual departments in isolation, you can manage your business as one connected organization.
                  </p>
                </div>
              </div>

              <div className="intro-cta-row">
                <button
                  type="button"
                  className="btn-cinematic-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>Discover XENedion</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
              </div>
            </div>

            {/* Right: With XEN you can (Monolith Card) */}
            <div className="intro-ecosystem-monolith">
              <div className="monolith-glass-card">
                <div className="monolith-header">
                  <div className="monolith-status-dot" />
                  <h3 className="monolith-heading">With XEN, you can:</h3>
                </div>

                <ul className="monolith-capabilities-list">
                  {xenBenefits.map((benefit, i) => (
                    <li key={i} className="monolith-item">
                      <div className="monolith-check-well">
                        <CheckCircle size={18} />
                      </div>
                      <span className="monolith-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SCENE 4: ONE PLATFORM. MULTIPLE BUSINESS FUNCTIONS
          (WEBFLOW-INSPIRED HORIZONTAL PINNED STORYTELLING SCENE)
          ==================================================================== */}
      <section ref={horizontalSectionRef} className="home-section section-alt functions-horizontal-pinned-section">
        <div className="horizontal-section-header-wrap container">
          <div className="section-header-left">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar" />
            <p className="functions-section-lead">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          {/* Interactive Progress Indicator Bar */}
          <div className="horizontal-progress-track-wrapper" aria-hidden="true">
            <div className="horizontal-progress-track">
              <div ref={progressBarRef} className="horizontal-progress-fill" />
            </div>
            <span className="horizontal-scroll-hint">SCROLL HORIZONTALLY</span>
          </div>
        </div>

        {/* Horizontal Card Track */}
        <div className="functions-horizontal-track-container">
          <div ref={horizontalTrackRef} className="functions-horizontal-track">
            {previewFunctions.map((func) => (
              <div key={func.num} className="function-horizontal-card">
                <div className="function-card-topline">
                  <span className="function-num-tag">{func.num}</span>
                  <div
                    className="function-accent-orb"
                    style={{ backgroundColor: func.accent }}
                  />
                </div>
                <h3 className="function-card-title">{func.title}</h3>
                <p className="function-card-desc">{func.desc}</p>
                <div className="function-card-action">
                  <button
                    type="button"
                    className="function-action-link"
                    onClick={() => onNavigate('solutions')}
                  >
                    <span>View capability</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}

            {/* 10th Card: End-of-track Explore Action */}
            <div className="function-horizontal-card function-end-cta-card">
              <div className="end-cta-inner">
                <span className="section-tag">Complete Suite</span>
                <h3 className="end-cta-title">Explore All Integrated Solutions</h3>
                <p className="end-cta-desc">
                  Discover how all 9 operational modules harmonize across a unified architectural core.
                </p>
                <button
                  type="button"
                  className="btn-cinematic-primary"
                  onClick={() => onNavigate('solutions')}
                >
                  <span>Explore All Solutions</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SCENE 5: WHY XENEDION? (KINETIC PRINCIPLES)
          ==================================================================== */}
      <section className="home-section why-kinetic-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">More Than Software.</h2>
            <p className="section-subtitle">
              A Better Way to Manage Your Business. It’s a businesses way of life.
            </p>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
          </div>

          <div className="why-kinetic-grid">
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
                      <Icon size={24} />
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
        </div>
      </section>

      {/* ====================================================================
          SCENE 6: DESIGNED FOR YOUR INDUSTRY
          ==================================================================== */}
      <section className="home-section section-alt industries-kinetic-section">
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

          <div className="industries-kinetic-deck">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-kinetic-card">
                  <div className="industry-icon-vault">
                    <Icon size={26} />
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
              className="btn-cinematic-primary"
              onClick={() => onNavigate('industries')}
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL EXECUTIVE STAGE: READY TO BRING YOUR BUSINESS TOGETHER?
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
                  className="btn-cinematic-primary btn-portal-large"
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
