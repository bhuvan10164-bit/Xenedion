import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShoppingBag,
  Truck,
  Factory,
  Scissors,
  Car,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './Industries.css';

gsap.registerPlugin(ScrollTrigger);

export default function Industries({ onNavigate, activeIndustryId, onIndustryChange }) {
  const [selectedIndustry, setSelectedIndustry] = useState(activeIndustryId || 'retail');
  const industriesRef = useRef(null);
  const pillsRef = useRef(null);

  useEffect(() => {
    if (activeIndustryId) {
      setSelectedIndustry(activeIndustryId);
      setTimeout(() => {
        pillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, [activeIndustryId]);

  const handleIndustrySelect = (indId) => {
    setSelectedIndustry(indId);
    if (onIndustryChange) {
      onIndustryChange(indId);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industries-header-block',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.industry-spotlight-box',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.industry-matrix-card',
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.industries-matrix-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power2.out',
        }
      );
    }, industriesRef);

    return () => ctx.revert();
  }, []);

  const industryProfiles = [
    {
      id: 'retail',
      name: 'Retail',
      icon: ShoppingBag,
      tagline: 'Omnichannel POS, unified stock visibility, and instant customer checkout.',
      image: '/assets/images/crm-sales-analytics.jpg',
      overview: 'Retailers face demanding consumers, fast-moving SKUs, and omnichannel complexities. XENedion unites in-store point of sale, e-commerce, and back-office replenishment so customer demand is fulfilled without inventory dead-stock.',
      challengesSolved: [
        'Real-time inventory lookup across physical stores and web warehouses.',
        'Unified customer loyalty points and omnichannel return management.',
        'Automated demand replenishment based on daily sales velocities.',
        'Integrated promotion engines with dynamic bundle pricing.'
      ]
    },
    {
      id: 'distribution',
      name: 'Distribution',
      icon: Truck,
      tagline: 'High-velocity order fulfillment, cross-dock logistics, and margin control.',
      image: '/assets/images/inventory-fulfillment.jpg',
      overview: 'Wholesale distributors thrive on turn rates, supplier coordination, and dispatch speed. XENedion streamlines purchase order staging, automated warehouse put-away, and delivery route manifest generation.',
      challengesSolved: [
        'Multi-warehouse staging and automated bin-location pick routes.',
        'Back-to-back ordering and cross-docking for fast-turning inventory.',
        'Carrier dispatch scheduling with digital proof-of-delivery tracking.',
        'Credit limit enforcement and automated billing cycle runs.'
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      tagline: 'Precision bill of materials, shop floor tracking, and production scheduling.',
      image: '/assets/images/modern-manufacturing.jpg',
      overview: 'Discrete and process manufacturers must balance raw material procurement with work-in-progress schedules. XENedion aligns BOMs, machine work centers, and labor allocation to prevent downtime.',
      challengesSolved: [
        'Multi-level Bill of Materials (BOM) with scrap and yield factors.',
        'Master Production Scheduling (MPS) linked directly to sales orders.',
        'Real-time shop floor job card tracking and operator time logging.',
        'Rigorous quality control inspections at receipt, WIP, and finished goods.'
      ]
    },
    {
      id: 'garments',
      name: 'Garments',
      icon: Scissors,
      tagline: 'Style lifecycle control, size/color matrices, and global export packaging.',
      image: '/assets/images/procurement-coordination.jpg',
      overview: 'Apparel and garment producers manage seasonal style revisions, complex fabric procurement, and size-color variations. XENedion delivers specialized grid ordering, cutting room tracking, and export documentation.',
      challengesSolved: [
        'Dynamic matrix order entry across size, color, fit, and style variants.',
        'Fabric yield calculation, trim procurement, and cutting order control.',
        'Subcontractor dyeing and stitching job-work management.',
        'Export packing lists with carton barcode mapping and customs documentation.'
      ]
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: Car,
      tagline: 'Serialized components, supplier JIT delivery, and warranty service tracking.',
      image: '/assets/images/connected-operations.jpg',
      overview: 'Automotive OEMs, component suppliers, and dealership networks require strict traceability and zero-defect quality standards. XENedion coordinates just-in-time delivery, part serialization, and service history.',
      challengesSolved: [
        'Serial and VIN number lifecycle tracking from assembly to aftermarket.',
        'Just-In-Time (JIT) supplier call-offs synchronized with assembly lines.',
        'Engineering change notice (ECN) management and part revisions.',
        'Service center job cards, warranty claims, and spare parts inventory.'
      ]
    }
  ];

  const currentProfile = industryProfiles.find((ind) => ind.id === selectedIndustry) || industryProfiles[0];

  return (
    <div className="industries-page-view" ref={industriesRef}>
      {/* 1. Header Hero */}
      <section className="industries-hero-section">
        <div className="container">
          <div className="section-header-centered industries-header-block">
            <span className="section-tag">Designed for Your Industry</span>
            <h1 className="section-title">
              Business Processes May Differ.<br />The Need for Integration Doesn't.
            </h1>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="industries-hero-lead">
              XENedion is designed to support businesses operating across different industries and business environments.
            </p>
          </div>

          {/* Industry Selection Bar */}
          <div className="industry-selection-pills" ref={pillsRef}>
            {industryProfiles.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  className={`industry-pill-btn ${isSelected ? 'industry-pill-active' : ''}`}
                  onClick={() => handleIndustrySelect(ind.id)}
                >
                  <Icon size={20} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Industry */}
          <div className="industry-spotlight-box">
            <div className="industry-spotlight-text">
              <div className="industry-spotlight-tag">
                <span>Industry Focus</span>
              </div>
              <h2 className="industry-spotlight-name">{currentProfile.name}</h2>
              <p className="industry-spotlight-tagline">{currentProfile.tagline}</p>
              <p className="industry-spotlight-overview">{currentProfile.overview}</p>

              <div className="industry-challenges-card">
                <h4 className="challenges-title">Industry Solutions Delivered by XEN:</h4>
                <ul>
                  {currentProfile.challengesSolved.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="check-bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="industry-spotlight-cta">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a {currentProfile.name} ERP Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="industry-spotlight-image-wrap">
              <div className="industry-image-frame">
                <img
                  src={currentProfile.image}
                  alt={currentProfile.name}
                  className="industry-feature-img"
                  width="1000"
                  height="667"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Grid */}
      <section className="section-alt all-industries-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Industry Spectrum</span>
            <h2 className="section-title">Specialized Workflows, Unified Foundation</h2>
            <p className="section-subtitle">
              Configured around your operating model while preserving core architectural coherence.
            </p>
          </div>

          <div className="industries-card-deck">
            {industryProfiles.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-deck-card">
                  <div className="deck-card-icon-box">
                    <Icon size={28} />
                  </div>
                  <h3 className="deck-card-name">{ind.name}</h3>
                  <p className="deck-card-tagline">{ind.tagline}</p>
                  <p className="deck-card-desc">{ind.overview}</p>
                  
                  <button
                    type="button"
                    className="deck-card-btn"
                    onClick={() => {
                      handleIndustrySelect(ind.id);
                      pillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    <span>Inspect solution profile</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

