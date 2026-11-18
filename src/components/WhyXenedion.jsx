import React, { useState } from 'react';
import {
  Sparkles,
  GitMerge,
  Workflow,
  BarChart3,
  Sliders,
  ShoppingCart,
  Truck,
  Boxes,
  PackageCheck,
  ArrowRight,
  Info
} from 'lucide-react';

export default function WhyXenedion() {
  const [activeFunction, setActiveFunction] = useState('sales');

  const principles = [
    {
      number: '01',
      title: 'Simplify, rather than complicate, business operations.',
      description: 'Streamlined interfaces and coordinated systems that reduce operational friction instead of creating administrative burden.',
      icon: Sparkles,
      accentColor: 'var(--color-electric-blue)',
      accentBg: 'var(--color-blue-tint)'
    },
    {
      number: '02',
      title: 'Connect information rather than create silos.',
      description: 'Unified cross-functional data flows that ensure every department operates on verified, shared operational realities.',
      icon: GitMerge,
      accentColor: 'var(--color-cyan)',
      accentBg: 'var(--color-cyan-tint)'
    },
    {
      number: '03',
      title: 'Improve processes rather than simply digitise existing inefficiencies.',
      description: 'Intelligent process alignment that transforms legacy bottlenecks rather than automating flawed manual workflows.',
      icon: Workflow,
      accentColor: 'var(--color-orange)',
      accentBg: 'var(--color-orange-tint)'
    },
    {
      number: '04',
      title: 'Support management decisions with meaningful information.',
      description: 'Real-time operational clarity and visibility that empowers leadership to make informed, timely decisions with confidence.',
      icon: BarChart3,
      accentColor: 'var(--color-purple)',
      accentBg: 'var(--color-purple-tint)'
    },
    {
      number: '05',
      title: 'Adapt to changing business requirements.',
      description: 'Flexible architecture built to evolve seamlessly alongside organizational growth, new markets, and shifting commercial demands.',
      icon: Sliders,
      accentColor: 'var(--color-primary-navy)',
      accentBg: 'rgba(9, 31, 64, 0.08)'
    }
  ];

  const connectedFunctions = [
    {
      id: 'sales',
      label: 'Sales',
      influence: 'Sales influence inventory.',
      icon: ShoppingCart,
      detail: 'Customer orders and market demand drive replenishment cycles and stock reservations.'
    },
    {
      id: 'procurement',
      label: 'Procurement',
      influence: 'Procurement affects availability.',
      icon: Truck,
      detail: 'Supplier lead times, purchase orders, and receiving timelines determine operational readiness.'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      influence: 'Inventory impacts fulfillment.',
      icon: Boxes,
      detail: 'Accurate stock levels, warehouse staging, and lot tracking ensure order commitment accuracy.'
    },
    {
      id: 'fulfillment',
      label: 'Fulfillment',
      influence: 'Every transaction has operational and financial implications.',
      icon: PackageCheck,
      detail: 'Dispatch, shipping execution, invoicing, and revenue recognition close the complete business loop.'
    }
  ];

  return (
    <section id="why-xenedion" className="section why-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-header">
          <div className="section-tag">
            <Info size={14} />
            <span>Why XENedion?</span>
          </div>
          <h2 className="section-title">
            Because Every Part of Your Business Matters.
          </h2>
          <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
        </div>

        {/* Narrative Copy */}
        <div className="why-narrative-container">
          <p className="why-narrative-lead">
            A business doesn't operate as a collection of independent departments. Sales influence inventory. Procurement affects availability. Inventory impacts fulfillment. Every transaction has operational and financial implications. When these functions operate independently, businesses lose valuable visibility and coordination.
          </p>
          <div className="why-banner-pill">
            <span className="why-pill-dot" />
            <p className="why-pill-text">
              XENedion connects these functions to create a more integrated business environment.
            </p>
          </div>
        </div>

        {/* Connected Business Functions Interactive Showcase */}
        <div className="connected-flow-showcase">
          <div className="connected-flow-grid">
            {/* Visual Process Flow Cards */}
            <div className="connected-flow-content">
              <div className="connected-flow-intro">
                <h3 className="connected-flow-heading">Interconnected Business Architecture</h3>
                <p className="connected-flow-sub">
                  How core enterprise functions interact continuously across a single unified platform:
                </p>
              </div>

              <div className="connected-nodes-list" role="tablist" aria-label="Business Functions">
                {connectedFunctions.map((func, index) => {
                  const Icon = func.icon;
                  const isActive = activeFunction === func.id;
                  return (
                    <div
                      key={func.id}
                      className={`connected-node-card ${isActive ? 'node-card-active' : ''}`}
                      onClick={() => setActiveFunction(func.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveFunction(func.id);
                        }
                      }}
                      tabIndex={0}
                      role="tab"
                      aria-selected={isActive}
                    >
                      <div className="node-card-left">
                        <div className="node-icon-box">
                          <Icon size={22} />
                        </div>
                        <div className="node-text-wrap">
                          <div className="node-label-row">
                            <span className="node-step-num">0{index + 1}</span>
                            <h4 className="node-label">{func.label}</h4>
                          </div>
                          <p className="node-influence">{func.influence}</p>
                          <p className="node-detail">{func.detail}</p>
                        </div>
                      </div>
                      <div className="node-card-arrow">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Editorial Image of Fulfillment & Operations */}
            <div className="connected-flow-media">
              <div className="flow-media-frame">
                <img
                  src="/assets/images/inventory-fulfillment.jpg"
                  alt="Enterprise operations director and logistics manager coordinating real-time fulfillment and inventory"
                  className="flow-media-img"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div className="flow-media-overlay">
                  <div className="flow-media-badge">
                    <span className="media-badge-dot" />
                    <span>Real-Time Operational Control</span>
                  </div>
                  <p className="flow-media-text">
                    "Sales influence inventory. Procurement affects availability. Inventory impacts fulfillment."
                  </p>
                </div>
              </div>

              {/* Connecting Ribbon Graphic */}
              <div className="flow-ribbon-line" aria-hidden="true">
                <svg viewBox="0 0 500 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 40 C150 10, 350 70, 490 30"
                    stroke="url(#flow-ribbon-grad)"
                    strokeWidth="3"
                    strokeDasharray="4 6"
                  />
                  <defs>
                    <linearGradient id="flow-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00DDFC" />
                      <stop offset="50%" stopColor="#1264F5" />
                      <stop offset="100%" stopColor="#FF642C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Principles */}
        <div className="principles-section">
          <div className="principles-header">
            <h3 className="principles-lead-title">
              We believe that enterprise technology should:
            </h3>
            <p className="principles-lead-sub">
              Five core principles that guide how XENedion unites people, processes, and technology.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.number} className="principle-card">
                  <div className="principle-top-row">
                    <span className="principle-number">{p.number}</span>
                    <div
                      className="principle-icon-wrapper"
                      style={{
                        backgroundColor: p.accentBg,
                        color: p.accentColor
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                  <h4 className="principle-title">{p.title}</h4>
                  <p className="principle-desc">{p.description}</p>
                  <div className="principle-bottom-bar" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
