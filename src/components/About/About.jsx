import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  CheckCircle,
  Compass,
  GitMerge,
  ShieldCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About({ onNavigate }) {
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        '.about-header-block',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.about-split-layout',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: 'power3.out' }
      );

      // Beliefs Cards Stagger
      gsap.fromTo(
        '.about-belief-card',
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-beliefs-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
        }
      );

      // Approach Timeline Cards Stagger
      gsap.fromTo(
        '.approach-stage-card',
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-approach-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out',
        }
      );
    }, aboutContainerRef);

    return () => ctx.revert();
  }, []);

  // PDF 2: We believe that enterprise technology should:
  const beliefsList = [
    'Adapt to practical business workflows, not force unnatural processes',
    'Provide absolute clarity across every operational stage',
    'Enable teams to collaborate effortlessly without communication barriers',
    'Give executives real-time access to accurate operational data',
    'Scale reliably as organizations expand into new markets and operations'
  ];

  // PDF 2: Our Approach: Understand. Connect. Control. Improve.
  const approachStages = [
    {
      num: '01',
      title: 'Understand the Business',
      desc: 'We begin by understanding your operational workflows, industry challenges, and strategic goals.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Connect the Processes',
      desc: 'We unify your core departments—ensuring data flows seamlessly across procurement, inventory, production, sales, and finance.',
      icon: GitMerge
    },
    {
      num: '03',
      title: 'Establish Operational Control',
      desc: 'We implement structured workflows, approval mechanisms, and real-time tracking to ensure operational consistency and accountability.',
      icon: ShieldCheck
    },
    {
      num: '04',
      title: 'Enable Continuous Improvement',
      desc: 'With centralized data and actionable analytics, leadership teams can continuously identify opportunities to optimize operations and drive profitability.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="about-page-view" ref={aboutContainerRef}>
      {/* ====================================================================
          1. ABOUT XENEDION MAIN
          (PDF 2)
          ==================================================================== */}
      <section className="about-hero-editorial">
        <div className="container">
          <div className="about-header-block">
            <span className="section-tag">About XENedion</span>
            <h1 className="about-hero-title">
              Enterprise Technology Designed Around the Way Businesses Work
            </h1>
            <div className="ribbon-gradient-bar" />
          </div>

          <div className="about-split-layout">
            <div className="about-editorial-text">
              <p className="about-lead-paragraph">
                At XENedion, we believe that modern businesses should not be constrained by disconnected systems, rigid enterprise software, or fragmented data.
              </p>
              <p className="about-prose-text">
                XENedion was developed with a clear mission: to provide growing and established enterprises with a unified, intuitive, and reliable platform that simplifies business operations and brings clarity to everyday decision-making.
              </p>
              <p className="about-prose-text">
                Too often, organizations are forced to choose between complex, overpriced legacy ERP systems that take years to implement, or disconnected point solutions that create operational silos.
              </p>
              <p className="about-prose-text">
                XENedion bridges this gap by delivering a comprehensive enterprise management platform that combines robust functionality with real-world usability.
              </p>
              <p className="about-prose-text about-highlight-conclusion">
                Our platform brings together sales, procurement, inventory, manufacturing, finance, logistics, and human resources into a single connected ecosystem—empowering teams to collaborate seamlessly and enabling leadership to lead with confidence.
              </p>
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
                  <div className="about-image-overlay" />
                </div>
                <div className="about-caption-card">
                  <div className="caption-accent-pip" />
                  <p className="about-caption-quote">
                    "Connecting people, processes, and operational data into one intelligent ecosystem."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. WHY XENEDION? BECAUSE EVERY PART OF YOUR BUSINESS MATTERS
          (PDF 2)
          ==================================================================== */}
      <section className="about-why-matters-section">
        <div className="container">
          <div className="section-header-centered why-matters-header">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">
              Because Every Part of Your Business Matters.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="about-why-narrative">
              Every business is an interconnected network of people, decisions, and processes. A delay in procurement affects production; a mistake in inventory impacts sales; disconnected financial records distort business intelligence.
            </p>
            <p className="about-why-narrative-sub">
              When these functions operate in isolation, organizations experience inefficiencies that slow growth and erode margins.
            </p>
          </div>

          <div className="about-beliefs-wrapper">
            <h3 className="beliefs-lead-header">
              We believe that enterprise technology should:
            </h3>

            <div className="about-beliefs-grid">
              {beliefsList.map((belief, idx) => (
                <div key={idx} className="about-belief-card">
                  <div className="belief-check-frame">
                    <CheckCircle size={20} className="belief-check-icon" />
                  </div>
                  <p className="belief-text">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. OUR APPROACH: UNDERSTAND. CONNECT. CONTROL. IMPROVE.
          (PDF 2)
          ==================================================================== */}
      <section className="about-approach-section">
        <div className="container">
          <div className="section-header-centered approach-header-block">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">
              Understand. Connect. Control. Improve.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="about-approach-lead">
              Implementing an enterprise system is not just about technology—it is about improving how an organization operates. Our approach is grounded in four fundamental principles:
            </p>
          </div>

          <div className="about-approach-grid">
            {approachStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.num} className="approach-stage-card">
                  <div className="stage-card-top">
                    <span className="stage-num-badge">{stage.num}</span>
                    <div className="stage-icon-bubble">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="stage-card-title">{stage.title}</h3>
                  <p className="stage-card-desc">{stage.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="about-cta-banner">
            <h3 className="cta-banner-title">Ready to bring clarity and control to your operations?</h3>
            <button
              type="button"
              className="btn-pill-primary"
              onClick={() => onNavigate('contact')}
            >
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
