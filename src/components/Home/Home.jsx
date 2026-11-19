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
  Users,
  FileText,
  Package,
  Boxes,
  Warehouse,
  Coins,
  Compass,
  GitMerge
} from 'lucide-react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onNavigate }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const centerpieceRef = useRef(null);

  // 1. The Business Challenge Consequence Bullets (PDF 1 Page 1)
  const challengeConsequences = [
    'Disconnected communication between sales, inventory, and finance teams',
    'Lack of real-time visibility into inventory levels, orders, and cash flow',
    'Manual data entry leading to errors, duplicate effort, and operational delays',
    'Inefficient procurement and supply chain coordination',
    'Fragmented reporting that makes strategic decision-making difficult',
    'Difficulty scaling operations without adding significant administrative overhead'
  ];

  // 2. Introducing XENedion Capabilities (PDF 1 Page 1)
  const xenCapabilities = [
    'Connect day-to-day operations across every department',
    'Automate routine business processes to reduce manual effort',
    'Gain real-time visibility across inventory, sales, and financial performance',
    'Maintain full traceability across procurement, production, and order fulfillment',
    'Make informed decisions with centralized operational reporting',
    'Scale your business operations with confidence'
  ];

  // 3. One Platform. Multiple Business Functions (PDF 1 Page 2)
  const businessFunctions = [
    {
      num: '01',
      title: 'CRM & Sales Management',
      desc: 'Build stronger customer relationships, track sales pipelines, and convert opportunities into revenue.',
      icon: Users
    },
    {
      num: '02',
      title: 'Order Management',
      desc: 'Streamline order processing from quotation and confirmation through fulfillment and delivery.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Procurement & Vendor Management',
      desc: 'Manage vendor relationships, automate purchase requisitions, track purchase orders, and monitor supplier performance.',
      icon: Truck
    },
    {
      num: '04',
      title: 'Inventory Management',
      desc: 'Maintain complete control over stock levels, monitor movements across locations, and minimize stockouts and excess inventory.',
      icon: Package
    },
    {
      num: '05',
      title: 'Warehouse Management',
      desc: 'Optimize warehouse space, streamline pick-and-pack workflows, and improve inventory accuracy.',
      icon: Warehouse
    },
    {
      num: '06',
      title: 'Finance & Accounts',
      desc: 'Integrate core accounting functions with operational activities for accurate bookkeeping, billing, payments, and financial reporting.',
      icon: Coins
    },
    {
      num: '07',
      title: 'Human Resource Management',
      desc: 'Centralize employee records, manage attendance and leave, process payroll, and support organizational administration.',
      icon: Users
    },
    {
      num: '08',
      title: 'Logistics Management',
      desc: 'Coordinate shipments, monitor dispatches, and ensure timely delivery across supply chain networks.',
      icon: Truck
    },
    {
      num: '09',
      title: 'Business Intelligence & Reporting',
      desc: 'Gain real-time insights with customizable dashboards and reports that turn operational data into strategic intelligence.',
      icon: BarChart3
    }
  ];

  // 4. Why XENedion (PDF 1 Page 2)
  const whyPoints = [
    {
      num: '01',
      title: 'End-to-End Integration',
      desc: 'Connect every department into a single source of truth—eliminating silos and duplicate data entry.',
      icon: Layers,
      color: 'var(--color-electric-blue)'
    },
    {
      num: '02',
      title: 'Real-Time Operational Visibility',
      desc: 'Monitor sales, inventory, production, and cash flow in real time from an intuitive interface.',
      icon: BarChart3,
      color: 'var(--color-cyan)'
    },
    {
      num: '03',
      title: 'Designed for Usability',
      desc: 'A clean, modern user experience that teams actually enjoy using—driving faster adoption and fewer errors.',
      icon: Sparkles,
      color: 'var(--color-purple)'
    },
    {
      num: '04',
      title: 'Configurable & Scalable Architecture',
      desc: 'Adapt the system to your specific business processes without rigid constraints, and scale effortlessly as your enterprise expands.',
      icon: Cpu,
      color: 'var(--color-orange)'
    },
    {
      num: '05',
      title: 'Robust Security & Data Governance',
      desc: 'Enterprise-grade access controls, audit trails, and data protection to safeguard your business-critical information.',
      icon: ShieldCheck,
      color: 'var(--color-electric-blue)'
    },
    {
      num: '06',
      title: 'Implementation Focused on Adoption',
      desc: 'We prioritize smooth transitions, hands-on user training, and ongoing operational support to ensure immediate and lasting value.',
      icon: TrendingUp,
      color: 'var(--color-cyan)'
    }
  ];

  // 5. Designed for Your Industry (PDF 1 Page 3)
  const industriesList = [
    {
      id: 'retail',
      name: 'Retail',
      icon: ShoppingBag,
      detail: 'Omnichannel sales management, POS integration, dynamic inventory replenishment, and customer loyalty tracking.'
    },
    {
      id: 'distribution',
      name: 'Distribution',
      icon: Truck,
      detail: 'Multi-warehouse management, bulk order processing, route logistics, and automated vendor reordering.'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      detail: 'Production planning, BOM management, shop floor scheduling, material tracking, and quality assurance.'
    },
    {
      id: 'garments',
      name: 'Garments',
      icon: Scissors,
      detail: 'Apparel-specific matrix management (style, size, color), fabric sourcing, cutting-to-pack workflows, and export documentation.'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: Car,
      detail: 'Spare parts inventory, serial/batch tracking, service center management, warranty tracking, and supplier integration.'
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Load Entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-kicker-anim',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          '.hero-headline-anim',
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          '.hero-prose-anim',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-action-anim',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.6'
        )
        .fromTo(
          centerpieceRef.current,
          { y: 50, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
          '-=0.6'
        );

      // Scroll reveals for cards
      gsap.utils.toArray('.reveal-card-anim').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 35, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out'
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-reference-page" ref={containerRef}>
      {/* ====================================================================
          SECTION 1: HERO
          (PDF 1 Page 1)
          ==================================================================== */}
      <div className="hero-reference-wrapper" ref={heroRef}>
        <section className="hero-editorial-section">
          <div className="container">
            <div className="hero-header-block">
              <div className="hero-kicker-anim hero-kicker-capsule">
                <span className="kicker-pulse-dot" />
                <span className="kicker-text">Integrated Enterprise Resource Planning</span>
              </div>
              <h1 className="hero-headline-anim hero-primary-title">
                Enterprise Technology Designed Around the Way Businesses Work
              </h1>
              <div className="hero-prose-anim hero-lead-paragraphs">
                <p className="hero-lead-text">
                  XENedion is a modern enterprise resource planning (ERP) platform designed to unify core business processes into a single, cohesive operating system.
                </p>
                <p className="hero-sublead-text">
                  From sales and procurement to inventory, manufacturing, finance, and human resources, XENedion eliminates operational silos, provides real-time visibility, and empowers leadership teams to make informed, data-driven decisions.
                </p>
                <p className="hero-sublead-text">
                  Built with a focus on simplicity, scalability, and practical business workflows, XENedion enables organizations to streamline operations, reduce administrative complexity, and drive sustainable growth.
                </p>
              </div>
              <div className="hero-action-anim hero-actions-row">
                <button
                  type="button"
                  className="btn-hero-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  className="btn-hero-secondary"
                  onClick={() => onNavigate('solutions')}
                >
                  <span>Explore Solutions</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Centerpiece Banner Image */}
        <div className="hero-centerpiece-container container" ref={centerpieceRef}>
          <div className="hero-centerpiece-card">
            <div className="centerpiece-image-frame">
              <img
                src="/assets/images/connected-operations.jpg"
                alt="XENedion Connected Enterprise Operations"
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
          SECTION 2: THE BUSINESS CHALLENGE
          (PDF 1 Page 1)
          ==================================================================== */}
      <section className="business-challenge-section">
        <div className="container">
          <div className="challenge-editorial-layout">
            <div className="challenge-narrative-header">
              <span className="section-tag">The Business Challenge</span>
              <h2 className="section-title">
                The Reality of Growing Businesses: Disconnected Systems, Fragmented Operations
              </h2>
              <div className="ribbon-gradient-bar" />
              <p className="challenge-lead-prose">
                As organizations grow, their business operations often become increasingly complex. Many companies rely on multiple standalone tools, spreadsheets, and manual processes to manage different departments.
              </p>
              <p className="challenge-subhead-prose">
                When business processes are managed through isolated systems, organizations face significant operational challenges:
              </p>
            </div>

            <div className="challenge-bullets-grid">
              {challengeConsequences.map((bullet, idx) => (
                <div key={idx} className="challenge-bullet-card reveal-card-anim">
                  <div className="bullet-icon-col">
                    <AlertCircle size={20} className="challenge-alert-icon" />
                  </div>
                  <div className="bullet-text-col">
                    <p className="bullet-statement-text">{bullet}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="challenge-resolution-box reveal-card-anim">
              <p className="resolution-p1">
                When business systems do not communicate with each other, organizations lose time, productivity, and control.
              </p>
              <p className="resolution-p2">
                XENedion was built to resolve this challenge by connecting every critical business function into one intuitive and powerful platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: INTRODUCING XENEDION
          (PDF 1 Page 1)
          ==================================================================== */}
      <section className="introducing-xen-section">
        <div className="container">
          <div className="introducing-split-grid">
            <div className="introducing-text-col">
              <span className="section-tag">Unified Platform</span>
              <h2 className="section-title">
                Introducing XENedion: A Unified Operating Platform for Modern Enterprises
              </h2>
              <div className="ribbon-gradient-bar" />
              <p className="intro-body-text">
                XENedion is an integrated business management platform that connects your people, processes, and data.
              </p>
              <p className="intro-body-text">
                By bringing core business functions into a unified digital environment, XENedion allows organizations to operate with greater efficiency, clarity, and control.
              </p>
              <p className="intro-body-text">
                Whether you are managing multi-location inventory, complex manufacturing processes, international supply chains, or financial operations, XENedion provides the tools and operational intelligence required to run your business effectively.
              </p>
              <div className="intro-cta-box">
                <button
                  type="button"
                  className="btn-pill-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>Discover XENedion</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="introducing-capabilities-col">
              <div className="capabilities-vault-card reveal-card-anim">
                <h3 className="vault-headline">With XEN, you can:</h3>
                <ul className="vault-bullets-list">
                  {xenCapabilities.map((item, idx) => (
                    <li key={idx} className="vault-bullet-item">
                      <CheckCircle size={18} className="vault-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: ONE PLATFORM. MULTIPLE BUSINESS FUNCTIONS.
          (PDF 1 Page 2)
          ==================================================================== */}
      <section className="functions-overview-section">
        <div className="container">
          <div className="section-header-centered functions-header-block">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="functions-lead-text">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          {/* 3x3 Grid with generous top gap separating topic from tools/cards */}
          <div className="functions-cards-grid">
            {businessFunctions.map((func) => {
              const Icon = func.icon;
              return (
                <div key={func.num} className="function-item-card reveal-card-anim">
                  <div className="func-card-header">
                    <span className="func-num-badge">{func.num}</span>
                    <div className="func-icon-frame">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="func-card-title">{func.title}</h3>
                  <p className="func-card-desc">{func.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="functions-cta-row">
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
          SECTION 5: WHY XENEDION?
          (PDF 1 Page 2)
          ==================================================================== */}
      <section className="why-xenedion-section">
        <div className="container">
          <div className="section-header-centered why-header-block">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">
              Built for Operational Control. Designed for Real-World Business.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
          </div>

          <div className="why-pillars-grid">
            {whyPoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.num} className="why-pillar-card reveal-card-anim">
                  <div className="why-pillar-top">
                    <span className="pillar-num">{pt.num}</span>
                    <div className="pillar-icon-bubble" style={{ color: pt.color }}>
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="pillar-title">{pt.title}</h3>
                  <p className="pillar-desc">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: DESIGNED FOR YOUR INDUSTRY
          (PDF 1 Page 3)
          ==================================================================== */}
      <section className="industry-overview-section">
        <div className="container">
          <div className="section-header-centered industry-header-block">
            <span className="section-tag">Designed for Your Industry</span>
            <h2 className="section-title">
              Business Processes May Differ.<br />The Need for Integration Doesn't.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="industry-lead-text">
              XENedion is designed to support businesses operating across different industries and business environments.
            </p>
          </div>

          {/* Industry Cards Grid with generous top gap */}
          <div className="industry-cards-grid">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-feature-card reveal-card-anim">
                  <div className="industry-icon-frame">
                    <Icon size={24} />
                  </div>
                  <h3 className="industry-card-name">{ind.name}</h3>
                  <p className="industry-card-detail">{ind.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="industry-cta-row">
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
          SECTION 7: READY TO BRING YOUR BUSINESS TOGETHER?
          (PDF 1 Page 3)
          ==================================================================== */}
      <section className="ready-cta-section">
        <div className="container">
          <div className="ready-cta-card reveal-card-anim">
            <h2 className="ready-cta-title">Ready to Bring Your Business Together?</h2>
            <p className="ready-cta-lead">
              Connect your operations, eliminate silos, and take control of your business with XENedion.
            </p>
            <div className="ready-cta-action">
              <button
                type="button"
                className="btn-pill-primary btn-demo-large"
                onClick={() => onNavigate('contact')}
              >
                <span>Request a Personalized Product Demonstration</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
