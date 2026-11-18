import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BookOpen,
  FileText,
  Lightbulb,
  HelpCircle,
  ArrowRight,
  Download
} from 'lucide-react';
import './Resources.css';

gsap.registerPlugin(ScrollTrigger);

export default function Resources({ onNavigate }) {
  const resourcesRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.resources-header-block',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.resource-article-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.resources-articles-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        '.faq-editorial-item',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.resources-faq-list',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    }, resourcesRef);

    return () => ctx.revert();
  }, []);
  const resourceArticles = [
    {
      category: 'Executive Briefing',
      title: 'The Hidden Cost of Fragmented Systems',
      subtitle: 'Why disconnected spreadsheets and isolated departmental apps drain operational momentum.',
      desc: 'An in-depth analysis of how repetitive data entry, delayed visibility, and inventory discrepancies compound as businesses grow, and why unified architecture is the antidote.',
      icon: FileText,
      readTime: '6 min read'
    },
    {
      category: 'Methodology Blueprint',
      title: 'Understand. Connect. Control. Improve.',
      subtitle: 'Aligning enterprise software with how businesses actually work.',
      desc: 'A practical framework detailing the four key stages of establishing operational control: discovering true workflows, unifying data paths, enforcing governance, and driving continuous improvement.',
      icon: BookOpen,
      readTime: '8 min read'
    },
    {
      category: 'Operational Playbook',
      title: 'The Interconnected Value Loop: Sales to Fulfillment',
      subtitle: 'How transactions reverberate across procurement, stock availability, and cash flow.',
      desc: 'Explore why managing departments in silos creates blind spots, and how real-time cross-functional synchronization protects customer commitments and financial health.',
      icon: Lightbulb,
      readTime: '5 min read'
    }
  ];

  const faqs = [
    {
      q: 'What distinguishes XENedion from traditional departmental software?',
      a: 'Traditional software creates isolated data islands where sales, inventory, and finance must be synchronized manually. XENedion connects these functions within a unified operating environment, eliminating redundant entries and providing management with consolidated, real-time visibility.'
    },
    {
      q: 'How does XENedion adapt to industry-specific business processes?',
      a: 'We recognize that every business has unique operating processes. Our four-stage methodology focuses on understanding your organization’s operational requirements and aligning platform workflows with the way your business actually operates.'
    },
    {
      q: 'Can XENedion support our business as we expand into new lines or facilities?',
      a: 'Yes. XENedion is built on a scalable technology foundation designed to support organizational growth, multiple warehouses, evolving supply routes, and changing commercial demands without requiring disruptive system replacements.'
    },
    {
      q: 'How can our leadership team evaluate XENedion?',
      a: 'You can connect directly with our solution specialists by requesting a personalized product demonstration tailored to your specific industry, current systems, and improvement goals.'
    }
  ];

  return (
    <div className="resources-page-view" ref={resourcesRef}>
      {/* 1. Hero Section */}
      <section className="resources-hero-section">
        <div className="container">
          <div className="section-header-centered resources-header-block">
            <span className="section-tag">Knowledge & Insights</span>
            <h1 className="section-title">
              Enterprise Knowledge for Connected Business Operations
            </h1>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="resources-hero-lead">
              Practical guidance, frameworks, and insights to help business leaders navigate system integration, operational control, and sustainable scaling.
            </p>
          </div>

          {/* Featured Guides Deck */}
          <div className="resources-articles-grid">
            {resourceArticles.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="resource-article-card">
                  <div className="resource-card-top">
                    <span className="resource-category-tag">{res.category}</span>
                    <span className="resource-read-time">{res.readTime}</span>
                  </div>

                  <div className="resource-icon-box">
                    <Icon size={24} />
                  </div>

                  <h3 className="resource-card-title">{res.title}</h3>
                  <p className="resource-card-sub">{res.subtitle}</p>
                  <p className="resource-card-desc">{res.desc}</p>

                  <div className="resource-card-footer">
                    <button
                      type="button"
                      className="resource-action-link"
                      onClick={() => onNavigate('contact')}
                    >
                      <Download size={15} />
                      <span>Request full briefing</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. FAQ Section */}
      <section className="section-alt resources-faq-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Key considerations when evaluating integrated enterprise platforms.
            </p>
          </div>

          <div className="faq-list-wrapper">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item-card">
                <div className="faq-item-question">
                  <HelpCircle size={20} className="faq-icon" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="faq-item-answer">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="faq-bottom-banner">
            <p className="faq-banner-text">
              Have a specific operational question regarding your systems?
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('contact')}
            >
              <span>Connect with an ERP Specialist</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

