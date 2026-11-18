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
  const ribbonSculptureRef = useRef(null);
  const challengeSectionRef = useRef(null);

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

  // Lifecycle-safe GSAP Context setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-reveal-word',
          { y: 80, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.1, stagger: 0.12 }
        )
        .fromTo(
          '.hero-sculpture-wrap',
          { scale: 0.82, opacity: 0, rotate: -10 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: 'expo.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-editorial-fade',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
          '-=0.9'
        )
        .fromTo(
          '.hero-action-cluster',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        );

      // 2. Responsive ScrollTrigger MatchMedia
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        // Desktop Scroll-driven Hero Parallax & Sculpture Morph
        gsap.to('.hero-sculpture-wrap', {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
          y: 180,
          scale: 1.15,
          rotate: 15,
          opacity: 0.85,
          ease: 'none',
        });

        gsap.to('.hero-editorial-column', {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom 20%',
            scrub: 0.8,
          },
          y: -100,
          opacity: 0.15,
          ease: 'none',
        });

        // 3. Scene 2 — The Business Challenge Staggered Cards Reveal
        gsap.fromTo(
          '.consequence-card-anim',
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: challengeSectionRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: false,
            },
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: 'power2.out',
          }
        );

        // 4. Scene 3 — Introducing XENedion Monolith entrance
        gsap.fromTo(
          '.monolith-anim-box',
          { x: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.intro-editorial-section',
              start: 'top 70%',
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
          }
        );

        // 5. Scene 4 — Functions Matrix Stagger
        gsap.fromTo(
          '.function-matrix-card',
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.functions-editorial-section',
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power2.out',
          }
        );

        // 6. Scene 5 — Why XENedion Principles Reveal
        gsap.fromTo(
          '.why-editorial-card',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.why-editorial-section',
              start: 'top 70%',
            },
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      });

      mm.add('(max-width: 991px)', () => {
        // Mobile-optimized gentle scroll reveals
        gsap.utils.toArray('.consequence-card-anim, .function-matrix-card, .why-editorial-card').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
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
    <div ref={containerRef} className="home-page-view">
      {/* ====================================================================
          SCENE 1: CINEMATIC ENTERPRISE CANVAS (HERO)
          ==================================================================== */}
      <section ref={heroRef} className="home-hero-cinematic">
        {/* Kinetic 3D-Look Ribbon Sculpture Centerpiece */}
        <div ref={ribbonSculptureRef} className="hero-sculpture-wrap" aria-hidden="true">
          <div className="sculpture-ambient-glow" />
          <svg
            className="hero-ribbon-sculpture"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Conduits - Rich, Dark, and High-Contrast */}
            <circle
              cx="400"
              cy="400"
              r="330"
              stroke="#091F40"
              strokeOpacity="0.38"
              strokeWidth="2.5"
              strokeDasharray="6 10"
            />
            <circle
              cx="400"
              cy="400"
              r="250"
              stroke="#1264F5"
              strokeOpacity="0.55"
              strokeWidth="3"
            />
            <circle
              cx="400"
              cy="400"
              r="170"
              stroke="#FF642C"
              strokeOpacity="0.6"
              strokeWidth="2.5"
              strokeDasharray="5 9"
            />

            {/* Interlaced Ribbon Loops modeled after XENedion emblem - Deep & Vibrant */}
            <path
              d="M220 540 C140 420, 240 220, 400 220 C560 220, 660 420, 580 540 C510 650, 290 650, 220 540 Z"
              stroke="url(#sculpture-grad-1)"
              strokeWidth="32"
              strokeLinecap="round"
              className="sculpture-path-pulse"
            />
            <path
              d="M580 260 C660 380, 560 580, 400 580 C240 580, 140 380, 220 260 C290 150, 510 150, 580 260 Z"
              stroke="url(#sculpture-grad-2)"
              strokeWidth="28"
              strokeLinecap="round"
              className="sculpture-path-flow"
            />
            <path
              d="M260 260 Q400 400 540 540"
              stroke="url(#sculpture-grad-accent)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M540 260 Q400 400 260 540"
              stroke="url(#sculpture-grad-accent-2)"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Central Glowing Energy Hub */}
            <circle cx="400" cy="400" r="42" fill="url(#core-glow-grad)" />
            <circle cx="400" cy="400" r="22" fill="#091F40" />
            <circle cx="400" cy="400" r="12" fill="#1264F5" className="core-beacon" />

            <defs>
              <linearGradient id="sculpture-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0094B3" />
                <stop offset="40%" stopColor="#1264F5" />
                <stop offset="100%" stopColor="#5B18C9" />
              </linearGradient>
              <linearGradient id="sculpture-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E64A19" />
                <stop offset="45%" stopColor="#7024E8" />
                <stop offset="100%" stopColor="#091F40" />
              </linearGradient>
              <linearGradient id="sculpture-grad-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0094B3" />
                <stop offset="100%" stopColor="#0A52D4" />
              </linearGradient>
              <linearGradient id="sculpture-grad-accent-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E64A19" />
                <stop offset="100%" stopColor="#5B18C9" />
              </linearGradient>
              <radialGradient id="core-glow-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1264F5" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7024E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#091F40" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="container hero-cinematic-container">
          <div className="hero-cinematic-inner">
            {/* Top Micro-Badge */}
            <div className="hero-editorial-fade hero-badge-capsule">
              <span className="capsule-pip" />
              <span className="capsule-text">Enterprise Resource Planning Platform</span>
            </div>

            {/* Monumental Headline Composition */}
            <div className="hero-monumental-headline-wrap">
              <h1 className="hero-monumental-headline">
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
            </div>

            {/* Editorial Lead & Approved Paragraphs */}
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
        </div>

        {/* Scroll Progress Prompt */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="cue-line" />
          <span className="cue-text">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* ====================================================================
          SCENE 2: THE BUSINESS CHALLENGE (OPERATIONAL CIRCUIT)
          ==================================================================== */}
      <section ref={challengeSectionRef} className="home-section challenge-circuit-section">
        <div className="container">
          <div className="challenge-circuit-header">
            <span className="section-tag">The Business Challenge</span>
            <h2 className="section-title">
              Your Business Has Evolved. Have Your Systems Kept Up?
            </h2>
            <div className="ribbon-gradient-bar" />
            <p className="challenge-lead-prose">
              As businesses expand, its operational complexity increases. Different departments adopt different applications, information gets scattered and business processes become increasingly difficult to coordinate.
            </p>
          </div>

          <div className="consequences-circuit-stage">
            <h3 className="consequences-stage-title">The consequences are familiar:</h3>
            <div className="consequences-cards-grid">
              {challengeConsequences.map((item, idx) => (
                <div key={idx} className="consequence-circuit-card consequence-card-anim">
                  <div className="circuit-card-topbar">
                    <span className="circuit-index-pill">0{idx + 1}</span>
                    <AlertCircle size={20} className="circuit-alert-icon" />
                  </div>
                  <p className="circuit-item-text">{item}</p>
                  <div className="circuit-glow-track" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Resolution Box */}
          <div className="challenge-resolution-cinematic">
            <div className="resolution-glass-panel">
              <div className="resolution-sparkle-pill">
                <Sparkles size={14} />
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
            <div className="intro-ecosystem-monolith monolith-anim-box">
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
          ==================================================================== */}
      <section className="home-section section-alt functions-kinetic-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="functions-section-lead">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          <div className="functions-kinetic-grid">
            {previewFunctions.map((func) => (
              <div key={func.num} className="function-matrix-card">
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
          </div>

          <div className="functions-explore-cta">
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
          SCENE 6: DESIGNED FOR YOUR INDUSTRY & FINAL DEMO
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

      {/* FINAL EXECUTIVE STAGE: READY TO BRING YOUR BUSINESS TOGETHER? */}
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
